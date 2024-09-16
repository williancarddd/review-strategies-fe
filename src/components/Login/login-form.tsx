"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import Link from "next/link";

export function LoginForm() {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    // Adicione a lógica de autenticação aqui
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username ou Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Username" />
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
                  <Input type="password" {...field} placeholder="Password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-center justify-between">
          <Link href="#" className="text-sm font-medium text-indigo-500 hover:text-indigo-400">
            Esqueceu sua senha?
          </Link>
        </div>

        <Button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-400">
          Login
        </Button>

        <div className="flex justify-center">
          <p className="text-sm text-gray-400">Não tem uma conta?</p>
          <Link href="#" className="ml-2 text-indigo-500 hover:text-indigo-400">Sign up</Link>
        </div>
      </form>
    </Form>
  );
}
