"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useUserStore } from "@/stores/user-store";
import { ProfileUpdateDto, UpdateUserSchema } from "@/schemas/user-schema";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function ProfileForm() {
  const { user } = useUserStore();


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
  const onSubmit = async (data: ProfileUpdateDto) => {
    const { confirmPassword, ...userData } = data; // Remover confirmação de senha antes de enviar

  };

  return (
    <div className="grid place-items-center h-full">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Editar Perfil</h2>
        {
          /* Formulário */
        }
      </div>
    </div>
  );
}
