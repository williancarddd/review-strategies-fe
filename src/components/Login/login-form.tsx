"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useAuth } from "@/hooks/auth-hook";
import { LoginSchema, LoginDto } from "@/schemas/login-schema";
import { useSearchParams } from 'next/navigation';

export function LoginForm() {
  const searchParams = useSearchParams();
  const isCheckout = searchParams.get("checkout") === "true"; 

  const { mutateAsync, isPending } = useAuth();
  const form = useForm<LoginDto>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginDto) => {
    await mutateAsync({
      ...data,
      checkoutSession: isCheckout, // se página de login vir de uma tentativa de checkout.
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Digite seu email" />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} placeholder="Digite sua senha" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={isPending}>
          {isPending ? "Carregando..." : "Entrar"}
        </Button>
      </form>
    </Form>
  );
}
