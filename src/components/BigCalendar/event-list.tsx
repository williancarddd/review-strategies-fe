import React from 'react';
import { StudyDay } from '@/schemas/study-schema';
import moment from 'moment';
import { ScrollArea } from '../ui/scroll-area';

interface EventListProps {
  events: StudyDay[];
  onSelectEvent?: (event: StudyDay) => void;
}

export function EventList({ events, onSelectEvent }: EventListProps) {
  return (
    <ScrollArea className="h-96 rounded-md border p-4">

      <h2 className="text-xl font-semibold mb-4">Eventos do Mês</h2>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li
            key={index}
            className="bg-green-100 p-4 rounded-md shadow-md cursor-pointer"
            onClick={() => onSelectEvent && onSelectEvent(event)} 
          >
            <p className="text-lg font-bold truncate max-w-full" title={event.title}>
              {event.title}
            </p>
            <p className="text-sm text-gray-600">
              {moment(event.studyStart).format('DD MMMM YYYY')}
            </p>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
