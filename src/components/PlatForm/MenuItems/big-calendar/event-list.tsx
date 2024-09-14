import React from 'react';
import moment from 'moment';
import { EventTheme } from '@/interfaces/event';

interface EventListProps {
  events: EventTheme[];
}

export default function EventList({ events }: EventListProps) {
  return (
    <div className="lg:w-1/4 w-full lg:pl-4 pl-0 mt-6 lg:mt-0 overflow-auto h-96">
      <h2 className="text-xl font-semibold mb-4">Eventos do Mês</h2>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={index} className="bg-green-100 p-4 rounded-md shadow-md">
            <p className="text-lg font-bold">{event.title}</p>
            <p>{moment(event.start).format('DD MMMM YYYY')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
