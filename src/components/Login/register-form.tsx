"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserSchema, CreateUserDto } from "@/schemas/user-schema";
import { Form} from "@/components/ui/form";
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
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Responsividade para o grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">

          {/*
          USAR O FORMS DO SHADCNUI, O PADRÃO DELE FACILITA A CRIAÇÃO DE FORMULÁRIOS
          */}
        </div>
      </form>
    </Form>
  );
}
