"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useUpdateUser } from "@/hooks/user-hook";
import { useUserStore } from "@/stores/user-store";
import { ProfileUpdateDto, UpdateUserSchema } from "@/schemas/user-schema";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function ProfileForm() {
  const { user } = useUserStore();
  const { mutateAsync, isPending } = useUpdateUser();

  const form = useForm<ProfileUpdateDto>({
    resolver: zodResolver(UpdateUserSchema),
    defaultValues: {
      username: user?.username || '',
      name: user?.name || '',
      objective: user?.objective || '',
      password: '',
      confirmPassword: '',
      email: user?.email || '',
      phone: user?.phone || '',
      language: user?.language || 'pt-br',
    },
  });
  // show erros
  console.log(form.formState.errors);
  const onSubmit = async (data: ProfileUpdateDto) => {
    const { confirmPassword, ...userData } = data; // Remover confirmação de senha antes de enviar
    console.log(userData);
    await mutateAsync({ id: user?.id || '', data: userData });
  };

  return (
    <div className="grid place-items-center h-full">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Editar Perfil</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Campo Nome de Usuário  */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nome de Usuário</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite o nome de usuário" disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Nome */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite seu nome completo" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Objetivo */}
            <FormField
              control={form.control}
              name="objective"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Objetivo</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Seu objetivo pessoal" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite seu email"  disabled/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Telefone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Número de Telefone</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite seu número de telefone" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Idioma */}
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Idioma</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Selecione o idioma" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pt-br">Português</SelectItem>
                        <SelectItem value="eng">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Accordion para Mudar Senha */}
            <div className="sm:col-span-3">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Alterar Senha</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4">
                      {/* Campo Senha */}
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Nova Senha</FormLabel>
                            <FormControl>
                              <Input {...field} type="password" placeholder="Digite sua nova senha" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Campo Confirmação de Senha */}
                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Confirme a Nova Senha</FormLabel>
                            <FormControl>
                              <Input {...field} type="password" placeholder="Confirme sua nova senha" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Botão de Enviar */}
            <div className="sm:col-span-3 flex justify-center">
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white" disabled={isPending}>
                {isPending ? "Salvando..." : "Salvar Alterações"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
