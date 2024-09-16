"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

// Definindo o schema com Zod
export const UserSchema = z.object({
  id: z.string().cuid().describe('The id of the user'),
  username: z.string({
    required_error: 'Username is required',
  }).min(3).describe('The username of the user'),
  name: z.string({
    required_error: 'Name is required',
  }).min(3).describe('The name of the user'),
  objective: z.string({
    required_error: 'Objective is required',
  }).min(3).describe('The objective of the user'),
  password: z.string({
    required_error: 'Password is required',
  }).min(6).describe('The password of the user'),
  email: z.string({
    required_error: 'Email is required',
  }).email().describe('The email of the user'),
  language: z.string().min(2).describe('The preferred language of the user'),
  phoneNumber: z.string().min(10).describe('The phone number of the user'),
  createdAt: z.date().describe('The date when the user was created'),
  updatedAt: z.date().describe('The date when the user was updated'),
});

// Definindo os tipos do formulário com base no schema
type UserFormValues = z.infer<typeof UserSchema>;

const userData = {
  id: '1',
  username: 'johndoe',
  name: 'John Doe',
  objective: 'Aprender programação',
  password: '123456',
  email: 'johndoe@example.com',
  phoneNumber: '1234567890',
  language: 'pt-br',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export function ProfileForm() {
  const form = useForm<UserFormValues>({
    resolver: zodResolver(UserSchema),
    defaultValues: userData,
  });

  const onSubmit = (data: UserFormValues) => {
    console.log(data);
  };

  return (
    <div className="grid place-items-center h-full">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Editar Perfil</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Campo Nome de Usuário */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nome de Usuário</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite o nome de usuário" />
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
                    <Input {...field} placeholder="Digite seu email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Senha */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="Digite sua senha" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Telefone */}
            <FormField
              control={form.control}
              name="phoneNumber"
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
                    <Select {...field}>
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

            {/* Botão de Enviar */}
            <div className="sm:col-span-3 flex justify-center">
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
                Salvar Alterações
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
