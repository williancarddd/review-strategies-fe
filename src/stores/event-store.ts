import {create} from 'zustand';
import { z } from 'zod';
import { EventTheme } from '@/interfaces/event';
import { createEvent, deleteEvent, getEvents, updateEvent } from '@/services/event-services';

const eventSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, { message: "Title is required." }),
  description: z.string().optional(),
  start: z.date({ required_error: "Start date is required." }),
  end: z.date().optional(),
  mode: z.string().min(1, { message: "Mode is required." }),
  completed: z.boolean().optional(),
  allDay: z.boolean({ required_error: "All day flag is required." }),
});

// Tipagem do EventState
type EventState = {
  events: EventTheme[];
  selectedEvent: EventTheme | null;
  loading: boolean;
  error: string | null;
  fetchEvents: () => Promise<void>;
  createEvent: (event: EventTheme) => Promise<void>;
  updateEvent: (id: string, event: EventTheme) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;
  selectEvent: (event: EventTheme | null) => void;
};

// Criando a store usando Zustand
const useEventStore = create<EventState>((set) => ({
  events: [],
  selectedEvent: null,
  loading: false,
  error: null,

  fetchEvents: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getEvents("aaaa");
      set({ events: response, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch events', loading: false });
    }
  },

  createEvent: async (event: EventTheme) => {
    set({ loading: true, error: null });
    try {
      const newEvent = await createEvent(event);
      set((state) => ({ events: [...state.events, newEvent], loading: false }));
    } catch (error) {
      set({ error: 'Failed to create event', loading: false });
    }
  },

  updateEvent: async (id: string, event: EventTheme) => {
    set({ loading: true, error: null });
    try {
      await updateEvent(id, event);
      set((state) => ({
        events: state.events.map((e) => (e.id === id ? event : e)),
        loading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to update event', loading: false });
    }
  },

  deleteEvent: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await deleteEvent(id);
      set((state) => ({
        events: state.events.filter((e) => e.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to delete event', loading: false });
    }
  },

  selectEvent: (event: EventTheme | null) => {
    set({ selectedEvent: event });
  },
}));

export { useEventStore, eventSchema };
