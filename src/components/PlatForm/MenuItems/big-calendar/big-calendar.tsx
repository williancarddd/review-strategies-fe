import React, { useState } from 'react';
import EventList from './event-list';
import { addDays } from 'date-fns';
import EventModal from './event-modal';
import CalendarFeature from './calendar-feature';

const events = [
  {
    title: 'Ditadura Militar (História)',
    start: new Date(),
    end: addDays(new Date(), 1),
    allDay: false,
  },
  {
    title: 'Parasitologia (Biologia)',
    start: new Date(),
    end: addDays(new Date(), 1),
    allDay: false,
  },
  {
    title: 'Pensamento Sociológico (Filosofia)',
    start: new Date(),
    end: addDays(new Date(), 1),
    allDay: false,
  },
  // Adicione mais eventos conforme necessário
];

export default function BigCalendar() {
  const [date, setDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
  };

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setModalOpen(true);
  };

  return (
    <div className="lg:flex lg:space-x-6 space-y-6 lg:space-y-0 px-4 lg:px-8">
      {/* Calendário Principal */}
      <CalendarFeature
        events={events}
        date={date}
        onDateClick={handleSelectDate}
        onNavigate={handleNavigate}
      />

      {/* Listagem de eventos ao lado */}
      <EventList events={events} />

      {/* Modal de eventos */}
      <EventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedDate={selectedDate}
        events={events}
        onCreateEvent={(newEvent) => {
          events.push(newEvent);
          setModalOpen(false);
        }}
        onUpdateEvent={(updatedEvent) => {
          const index = events.findIndex(
            (event) => event.title === updatedEvent.title
          );
          events[index] = updatedEvent;
          setModalOpen(false);
        }}
      />
    </div>
  );
}
