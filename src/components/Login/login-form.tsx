"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { LoginSchema, LoginDto } from "@/schemas/login-schema";
import { useSearchParams } from 'next/navigation';
import { useAuthStore } from "@/stores/auth-store";
import { useUserStore } from "@/stores/user-store";

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
    console.log(data);
    try {
      const user = await login(data.email, data.password);
      await getUserById(user.sub); // depois poderá usar globalmente o usuário logado
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {/*
          USAR O FORMS DO SHADCNUI, O PADRÃO DELE FACILITA A CRIAÇÃO DE FORMULÁRIOS
          */}
        </div>
      </form>
    </Form>
  );
}
