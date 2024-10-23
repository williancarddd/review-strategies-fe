"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginDto } from "@/schemas/login-schema";
import { useAuthStore } from "@/stores/auth-store";
import { useUserStore } from "@/stores/user-store";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { PasswordInput } from "../ui/password-input";

export function LoginForm() {
  const { login } = useAuthStore();
  const { getUserById } = useUserStore();

  const form = useForm<LoginDto>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginDto) => {
    try {
      const user = await login(data.email, data.password);
      await getUserById(user.sub); // depois poderá usar globalmente o usuário logado
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-6">
        <div className="space-y-4 flex flex-col self-center w-72">
          {/* Campo de E-mail */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-gray-700">E-mail</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="nome@email.com"
                    className="text-base  h-12 rounded-md border border-gray-300 px-4"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Senha</FormLabel>
                <FormControl>
                  <PasswordInput
                    {...field}
              
                    placeholder="********"
                    className="text-base w-full h-12 rounded-md border border-gray-300 px-4"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Botão de envio */}
        <Button
          type="submit"
          className="flex self-center w-56 h-10 rounded-full bg-customPrimary-deluge hover:bg-bossanova text-white"
        >
          Entrar
        </Button>
      </form>
    </Form>
  );
}
