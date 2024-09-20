
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateStudyDaySchema, CreateStudyDayDto, UpdateStudyDayDto, StudyDay } from "@/schemas/study-schema";

import { useCreateStudyDay, useUpdateStudyDay } from "@/hooks/study-hook";

interface EventFormProps {
  selectedEvent: StudyDay | null;
  selectedDate: {
    userId: string;
    date: Date;
  };
  onClose: () => void;
}

export function useEventForm({ selectedEvent, selectedDate, onClose }: EventFormProps) {
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
  }, [selectedEvent, selectedDate.userId, selectedDate.date]);

  const handleFormSubmit = form.handleSubmit(async (data) => {
    if (selectedEvent) {
      await updateStudyDay.mutateAsync({
        id: selectedEvent.id!,
        data: data as UpdateStudyDayDto,
      });
    } else {
      await createStudyDay.mutateAsync({
        ...data,
        userId: selectedDate.userId,
      } as CreateStudyDayDto);
    }
    clearForm();
    onClose();
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

  return { form, handleFormSubmit, clearForm };
}
