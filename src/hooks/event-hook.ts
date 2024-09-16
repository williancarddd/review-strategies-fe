import { useCallback, useEffect } from 'react';
import { useEventStore } from '@/stores/event-store';
import { EventTheme } from '@/interfaces/event';

export const useEvent = () => {
  const {
    events,
    selectedEvent,
    loading,
    error,
    fetchEvents,
    createEvent,
    updateEvent,
    deleteEvent,
    selectEvent,
  } = useEventStore();

  // Centralizando a lógica de fetch de eventos
  const loadEvents = useCallback(() => {
    fetchEvents();
  }, [fetchEvents]);

  // Criando um evento
  const addEvent = (newEvent: EventTheme) => {
    createEvent(newEvent);
  };

  // Atualizando um evento
  const editEvent = (id: string, updatedEvent: EventTheme) => {
    updateEvent(id, updatedEvent);
  };

  // Deletando um evento
  const removeEvent = (id: string) => {
    deleteEvent(id);
  };

  // Selecionando um evento para edição
  const chooseEvent = (event: EventTheme | null) => {
    selectEvent(event);
  };

  // Hook para carregar eventos quando necessário
  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  return {
    events,
    selectedEvent,
    loading,
    error,
    addEvent,
    editEvent,
    removeEvent,
    chooseEvent,
  };
};
