import { EventTheme } from '@/interfaces/event';
import { addDays } from 'date-fns';

let events: EventTheme[] = [];

export const getEvents = async (id:string): Promise<EventTheme[]> => {

  const events: EventTheme[] = [
    {
      title: 'Ditadura Militar (História)',
      start: addDays(new Date(), 1),
      end: addDays(new Date(), 1),
      allDay: false,
      mode: '24x7x30',
    },
    {
      title: 'Parasitologia (Biologia)',
      start: new Date(),
      end: addDays(new Date(), 1),
      allDay: false,
      mode: '24x7x30',
    },
    {
      title: 'Pensamento Sociológico (Filosofia)',
      start: new Date(),
      end: addDays(new Date(), 1),
      allDay: false,
      mode: '24x7x30',
    },
    // Adicione mais eventos conforme necessário
  ];
  return events;
};

// Simulando a criação de um novo evento
export const createEvent = async (event: EventTheme): Promise<EventTheme> => {
  event.id = `${events.length + 1}`;
  events.push(event);
  return event;
};

// Simulando a atualização de um evento existente
export const updateEvent = async (id: string, updatedEvent: EventTheme): Promise<EventTheme | null> => {
  const index = events.findIndex((event) => event.id === id);
  if (index !== -1) {
    events[index] = { ...updatedEvent, id };
    return events[index];
  }
  return null;
};

// Simulando a remoção de um evento
export const deleteEvent = async (id: string) => {
  events = events.filter((event) => event.id !== id);
};
