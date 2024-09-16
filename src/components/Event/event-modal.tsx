"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { EventTheme } from '@/interfaces/event';
import { EventList } from './event-list';
import { EventForm } from './event-form';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date | null;
  events: EventTheme[];
  onCreateEvent: (newEvent: EventTheme) => void;
  onUpdateEvent: (updatedEvent: EventTheme) => void;
}

export default function EventModal({
  isOpen,
  onClose,
  selectedDate,
  events,
  onCreateEvent,
  onUpdateEvent,
}: EventModalProps) {
  const [selectedEvent, setSelectedEvent] = useState<EventTheme | null>(null);
  const [formSubmit, setFormSubmit] = useState<() => void>(() => {});

  // Reset event when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSelectedEvent(null);
    }
  }, [isOpen]);

  const handleFormSubmit = (data: any) => {
    if (selectedEvent) {
      onUpdateEvent({ ...selectedEvent, ...data });
    } else {
      onCreateEvent({ ...data, start: new Date(data.startDate), allDay: true });
    }
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 sm:p-6 ${isOpen ? 'block' : 'hidden'}`}
      onClick={onClose}
    >
      <div
        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-2xl md:max-w-3xl lg:max-w-4xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
          {selectedDate ? `Eventos do Dia ${selectedDate.toDateString()}` : 'Novo Evento'}
        </h2>

        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
          {/* Formulário para criar/editar evento */}
          <div className="lg:w-2/3 w-full">
            <EventForm
              onSubmit={handleFormSubmit}
              defaultValues={selectedEvent || null}
              selectedEvent={selectedEvent}
            />
          </div>

          {/* Listagem de eventos */}
          <div className="lg:w-1/3 w-full max-h-64 overflow-auto">
            <EventList
              events={events}
              onSelectEvent={(event) => {
                setSelectedEvent(event);
                setFormSubmit(() => () => handleFormSubmit(event));
              }}
            />
          </div>
        </div>

        <div className="mt-4 flex justify-end space-x-4">
          <Button onClick={onClose}>Cancelar</Button>
          {selectedEvent ? (
            <Button onClick={formSubmit}>Atualizar</Button>
          ) : (
            <Button onClick={formSubmit}>Criar</Button>
          )}
        </div>
      </div>
    </div>
  );
}
