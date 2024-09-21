import React, { useEffect, useState } from 'react';
import CalendarFeature from './calendar-feature';
import EventModal from '../Event/event-modal';
import { EventList } from './event-list';
import { useAuthStore } from '@/stores/auth-store';
import { useFetchStudyMonth } from '@/hooks/study-hook';
import { useStudyDayStore } from '@/stores/study-store';

export default function BigCalendar() {
  const [date, setDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<{
    userId: string;
    date: Date;
  }>({ userId: '', date: new Date() });
  const { user } = useAuthStore();
  const { studyDaysMonth } = useStudyDayStore();
  const fetechDataMonth = useFetchStudyMonth();

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
  };

  const handleSelectDate = (date: Date) => {
    if (user?.sub) {
      setSelectedDate({ userId: user.sub, date });
      setModalOpen(true);
    } else {
      console.warn('Usuário não definido');
    }
  };

  useEffect(() => {
    if (user?.sub) {
      fetechDataMonth.mutate({ userId: user.sub, date });
    } else {
      console.warn('Usuário não definido');
    }
  }, [date, user]);


  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 px-4 overflow-hidden">
      {/* Calendário Principal */}

      <CalendarFeature
        events={studyDaysMonth}
        date={date}
        onDateClick={handleSelectDate}
        onNavigate={handleNavigate}
      />


      {/* Listagem de eventos ao lado */}

      <EventList events={studyDaysMonth} />


      {/* Modal de eventos */}
      <EventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedDate={selectedDate}
        refetch={() => {
          if (user?.sub) {
            fetechDataMonth.mutate({ userId: user.sub, date });
          } else {
            console.warn('Usuário não definido');
          }
        }}
      />
    </div>
  );
}
