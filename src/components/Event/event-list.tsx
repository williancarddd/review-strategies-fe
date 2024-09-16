import React from 'react';
import { Badge } from '../ui/badge';

interface EventListProps {
  events: any[];
  onSelectEvent: (event: any) => void;
}

export function EventList({ events, onSelectEvent }: EventListProps) {
  return (
    <div className="space-y-4">
      {events.length > 0 ? (
        events.map((event, index) => (
          <div
            key={index}
            className="flex items-center justify-between 
            p-2 border border-gray-300 
            rounded-lg hover:bg-blue-100
            gap-2 
            cursor-pointer transition-all duration-300 ease-in-out"
            onClick={() => onSelectEvent(event)}
          >
            <Badge variant="outline">{event.title}</Badge>
            <Badge>{event.start.split('T')[1].slice(0, 5)}</Badge>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">Nenhum evento para este dia.</p>
      )}
    </div>
  );
}
