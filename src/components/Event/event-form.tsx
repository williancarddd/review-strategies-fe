"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect } from 'react';
import { EventTheme } from "@/interfaces/event";
import { eventSchema } from "@/stores/event-store";

interface EventFormProps {
  onSubmit: (data: any) => void;
  defaultValues?: EventTheme | null;
  selectedEvent: EventTheme | null;
}

export function EventForm({ onSubmit, defaultValues, selectedEvent }: EventFormProps) {
  const form = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: defaultValues || {
      title: '',
      start: new Date(),
      mode: '',
      description: '',
    },
  });

  // Atualiza o formulário com os valores do evento selecionado
  useEffect(() => {
    if (selectedEvent) {
      form.reset({
        title: selectedEvent.title,
        start: selectedEvent.start,
        mode: selectedEvent.mode || '',
        description: selectedEvent.description || '',
      });
    }
  }, [selectedEvent, form]);

  return (
    <Form {...form}>
      <form className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Título do Evento" className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="start"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Data Inicial</FormLabel>
                <FormControl>
                  <Input {...field} type="datetime-local" className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Modo</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Modo do Evento" className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <ReactQuill
                  {...field}
                  theme="snow"
                  modules={{
                    toolbar: [
                      [{ header: '1' }, { header: '2' }, { font: [] }],
                      [{ list: 'ordered' }, { list: 'bullet' }],
                      ['bold', 'italic', 'underline'],
                      ['link'],
                    ],
                  }}
                  className="h-40 w-full sm:h-48 mb-4"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
