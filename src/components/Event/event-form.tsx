"use client";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import DateTimePicker from "react-datetime-picker";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { translateStatus } from "@/utils/translate-status";
import "react-quill/dist/quill.snow.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { StudyDay } from "@/schemas/study-schema";
import { useEventForm } from "@/hooks/use-event-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface EventFormProps {
  selectedEvent: StudyDay | null;
  selectedDate: {
    userId: string;
    date: Date;
  };
  onClose: () => void;
}

const COLORS = [
  "#FF0000",
  "#FFA500",
  "#FFFF00",
  "#008000",
  "#0000FF",
  "#800080",
];

export function EventForm({
  selectedEvent,
  onClose,
  selectedDate,
}: EventFormProps) {
  const { form, handleFormSubmit, clearForm } = useEventForm({
    onClose,
    selectedDate,
    selectedEvent,
  });
  return (
    <Form {...form}>
      <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-6">
        {/* Campo de Título */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-gray-700">Título</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Digite o título do evento"
                  className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campos de Data e Modo */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Campo de Data */}
          <FormField
            control={form.control}
            name="studyStart"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-gray-700">Data Inicial</FormLabel>
                <FormControl>
                  <DateTimePicker
                    onChange={field.onChange}
                    value={field.value}
                    className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md"
                    disableClock={true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo de Modo */}
          <FormField
            control={form.control}
            name="mode"
            render={({ field }) => (
              <FormItem className="w-full  ">
                <FormLabel className="text-gray-700">Modo de Revisão</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md">
                      <SelectValue placeholder="Selecionar modo de revisão">
                        {field.value}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24x7x30">24x7x30</SelectItem>
                      <SelectItem value="24x3x7">24x3x7</SelectItem>
                      <SelectItem value="24x3x15">24x3x15</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Seletor de Cor */}
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-gray-700">Escolha uma cor</FormLabel>
              <FormControl>
                <div className="flex space-x-2">
                  {COLORS.map((color) => (
                    <button
                      key={color}
                      type="button"
                      defaultValue={color}
                      onClick={() => field.onChange(color)}
                      className={`w-8 h-8 rounded-full border-4 focus:outline-none ${field.value === color
                          ? "border-black border-opacity-50"
                          : "border-transparent"
                        }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campo de Status */}
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-gray-700">Status</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md">
                    <SelectValue placeholder="Selecionar status">
                      {translateStatus(field.value) || "Selecionar status"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PENDING">Pendente</SelectItem>
                    <SelectItem value="COMPLETED">Concluído</SelectItem>
                    <SelectItem value="SKIPPED">Pulado</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campo de Descrição */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-gray-700">Descrição</FormLabel>
              <FormControl>
                <ReactQuill
                  value={field.value || ""}
                  onChange={field.onChange}
                  theme="snow"
                  modules={{
                    toolbar: [
                      [{ header: "1" }, { header: "2" }, { font: [] }],
                      [{ list: "ordered" }, { list: "bullet" }],
                      ["bold", "italic", "underline"],
                      ["link"],
                    ],
                  }}
                  className="h-40 w-full sm:h-48 mb-8"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Botões */}
        <div className="mt-6 flex justify-end space-x-4">
          <Button variant="ghost" onClick={clearForm}>
            Limpar
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit">{selectedEvent ? "Atualizar" : "Criar"}</Button>
        </div>
      </form>
    </Form>
  );
}
