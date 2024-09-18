"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";
import {
  StudyDay,
  CreateStudyDayDto,
  UpdateStudyDaySchema,
  UpdateStudyDayDto,
} from "@/schemas/study-schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import {
  useCreateStudyDay,
  useUpdateStudyDay,
} from "@/hooks/study-hook";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { translateStatus } from "@/utils/translate-status";

// Define a type for an existing StudyDay with a required id
type ExistingStudyDay = Omit<StudyDay, 'id'> & { id: string };

interface EventFormProps {
  selectedEvent: ExistingStudyDay | null;
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
  const createStudyDay = useCreateStudyDay();
  const updateStudyDay = useUpdateStudyDay();

  const form = useForm({
    resolver: zodResolver(UpdateStudyDaySchema),
    defaultValues: {
      userId: selectedDate.userId,
      title: "",
      studyStart: new Date(selectedDate.date),
      mode: "24x7x30",
      description: "",
      color: "#000000",
      status: "PENDING",
    },
  });

  useEffect(() => {
    if (selectedEvent) {
      form.reset({
        ...selectedEvent,
        studyStart: new Date(selectedEvent.studyStart),
      });
    } else {
      form.reset({
        userId: selectedDate.userId,
        title: "",
        studyStart: new Date(selectedDate.date),
        mode: "24x7x30",
        description: "",
        color: "#000000",
        status: "PENDING",
      });
    }
  }, [selectedEvent, selectedDate.userId, selectedDate.date, form]);

  const handleFormSubmit = form.handleSubmit(async (data) => {
    if (selectedEvent) {
      await updateStudyDay.mutateAsync({
        id: selectedEvent.id,
        data: data as UpdateStudyDayDto,
      });
    } else {
      await createStudyDay.mutateAsync({
        ...data,
        userId: selectedDate.userId,
      } as CreateStudyDayDto);
    }
    clearForm();
    onClose(); // Close modal on success
  });

  const clearForm = () => {
    form.reset({
      userId: selectedDate.userId,
      title: "",
      studyStart: new Date(selectedDate.date),
      mode: "24x7x30",
      description: "",
      color: "#000000",
      status: "PENDING",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
        {/* Title Field */}
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

        {/* Date and Mode Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Date Field */}
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

          {/* Mode Field */}
          <FormField
            control={form.control}
            name="mode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-gray-700">Modo de Revisão</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md">
                      <SelectValue>
                        {field.value || "Selecionar modo de revisão"}
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
        {/* Color Picker */}
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-gray-700">Escolha uma cor</FormLabel>
              <FormControl>
                <div className="flex space-x-2">
                  {COLORS.map((color) => (
                    <button // autofill when have selected selectedEvent
                      key={color}
                      type="button"
                      onClick={() => field.onChange(color)}
                      className={`w-8 h-8 rounded-full border-2 border-white focus:outline-none ${
                        field.value === color
                          ? "border-blue-500"
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

        {/* Status */}
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-gray-700">Status</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md">
                    <SelectValue>
                      {translateStatus(field.value!) || "Selecionar status"}
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
        {/* Description Field */}
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

        {/* Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <Button
            variant="ghost"
            onClick={clearForm}
          >
            Limpar
          </Button>
          <Button
            variant="ghost"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
          >
            {selectedEvent ? "Atualizar" : "Criar"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
