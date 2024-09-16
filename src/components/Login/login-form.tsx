// components/Login/login-form.tsx
"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

export function LoginForm() {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    // Lógica de autenticação
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
        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
          Login
        </Button>
      </form>
    </Form>
  );
}
