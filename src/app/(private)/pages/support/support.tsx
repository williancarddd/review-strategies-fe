"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import apiClient from "@/lib/axios";
import { useState } from "react";
import { useAuthStore } from "@/stores/auth-store";

const ticketSchema = z.object({
  type: z.string().min(1, { message: "Selecione o tipo de ticket." }),
  description: z.string().min(1, { message: "A descrição é obrigatória." }),
});

type Ticket = z.infer<typeof ticketSchema>;

export function SupportTicketForm() {
  const { user } = useAuthStore();
  const [message, setMessage] = useState(""); // Estado para exibir a mensagem de confirmação

  const form = useForm({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      type: "",
      description: "",
    },
  });

  const onSubmit = async (data: Ticket) => {
    try {
      await apiClient.post("/support/tickets", {
        type: data.type,
        description: data.description,
        email: user?.email,
      });
      setMessage("Ticket enviado com sucesso!"); // Exibe a mensagem de sucesso
      form.reset(); // Limpa os campos do formulário
    } catch (error) {
      setMessage("Ocorreu um erro ao enviar o ticket. Tente novamente.");
    } finally {
      setTimeout(() => setMessage(""), 3000); // Remove a mensagem após 3 segundos
    }
  };

  return (
    <div className="space-y-6 max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
      <Image src="/interrogation.jpeg" alt="Logo" width={100} height={100} className="mx-auto" />

      {/* Exibe a mensagem de sucesso ou erro */}
      {message && <p className="text-center text-green-600">{message}</p>}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Select - Tipo de Ticket */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Ticket</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o tipo de ticket" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="duvida">Dúvida</SelectItem>
                      <SelectItem value="sugestao">Sugestão</SelectItem>
                      <SelectItem value="reclamacao">Reclamação</SelectItem>
                      <SelectItem value="problema">Problema</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Descrição */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição</FormLabel>
                <FormControl>
                  <div className="grid w-full gap-1.5">
                    <Textarea placeholder="Escreva sua mensagem." id="message-2" className="h-48 resize-none" {...field} />
                    <p className="text-sm text-muted-foreground">
                      Descreva detalhadamente o problema ou dúvida que você está enfrentando.
                    </p>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Botão Enviar */}
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Enviar Ticket
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default SupportTicketForm;
