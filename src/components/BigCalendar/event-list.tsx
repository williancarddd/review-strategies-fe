import React from 'react';
import { StudyDay } from '@/schemas/study-schema';
import moment from 'moment';

interface EventListProps {
  events: StudyDay[]; 
  onSelectEvent?: (event: StudyDay) => void;
}

export function EventList({ events, onSelectEvent }: EventListProps) {
  return (
    <div className="lg:w-1/4 w-full lg:pl-4 pl-0 mt-6 lg:mt-0 overflow-auto h-96">
      <h2 className="text-xl font-semibold mb-4">Eventos do Mês</h2>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li
            key={index}
            className="bg-green-100 p-4 rounded-md shadow-md cursor-pointer"
            onClick={() => onSelectEvent && onSelectEvent(event)} // Selecionar o evento quando clicado
          >
            <p
              className="text-lg font-bold truncate max-w-full"
              title={event.title}
            >
              {event.title}
            </p>
            <p className="text-sm text-gray-600">
              {moment(event.studyStart).format('DD MMMM YYYY')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
