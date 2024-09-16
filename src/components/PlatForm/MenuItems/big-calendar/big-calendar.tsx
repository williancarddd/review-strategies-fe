import React, { useState } from 'react';
import EventList from './event-list';
import EventModal from '../../../Event/event-modal';
import CalendarFeature from './calendar-feature';
import { useEvent } from '@/hooks/event-hook';

export default function BigCalendar() {
  const [date, setDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { events, editEvent, addEvent } = useEvent();

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
          addEvent(newEvent);
        }}
        onUpdateEvent={(updatedEvent) => {
          editEvent("a", updatedEvent);
        }}
      />
    </div>
  );
}
