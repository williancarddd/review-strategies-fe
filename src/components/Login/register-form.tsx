"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserSchema, CreateUserDto } from "@/schemas/user-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useCreateUser } from "@/hooks/user-hook";
import { useRouter } from "next/navigation";
import { z } from "zod";

// Atualizando o schema para incluir confirmação de senha
const RegisterSchema = CreateUserSchema.extend({
  confirmPassword: z.string({
    required_error: "Confirmação de senha é obrigatória",
  }).min(6, { message: "A senha deve ter pelo menos 6 caracteres" })
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "As senhas devem corresponder",
});

export function RegisterForm() {
  const router = useRouter();
  const { data, isSuccess, mutateAsync, isPending, error, isError  } = useCreateUser(); 
  
  const form = useForm<CreateUserDto & { confirmPassword: string }>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      objective: "",
      password: "",
      confirmPassword: "",
      language: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = async (data: CreateUserDto & { confirmPassword: string }) => {
    const { confirmPassword, ...rest } = data;
    await mutateAsync(rest);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Responsividade para o grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">

          {/* Nome Completo */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Digite seu nome completo" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Objetivo */}
          <FormField
            control={form.control}
            name="objective"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Objetivo de estudos</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Digite seu objetivo" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Idioma */}
          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Idioma</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione seu idioma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pt-br">Português</SelectItem>
                      <SelectItem value="eng">Inglês</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Telefone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Digite seu telefone" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} placeholder="Digite seu email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Senha */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input type="password" {...field} placeholder="Digite sua senha" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirmação de Senha */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirme sua senha</FormLabel>
                <FormControl>
                  <Input type="password" {...field} placeholder="Confirme sua senha" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Botão de Registro */}
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Carregando..." : "Registrar"}
        </Button>

      </form>
    </Form>
  );
}
