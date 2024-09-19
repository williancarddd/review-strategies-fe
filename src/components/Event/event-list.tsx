import React from 'react';
import { Badge } from '../ui/badge';
import { StudyDay } from '@/schemas/study-schema';  // Atualizado para StudyDay
import { translateStatus } from '@/utils/translate-status';

interface EventListProps {
  events: StudyDay[];  
  onSelectEvent: (event: StudyDay) => void; 
}

export function EventList({ events, onSelectEvent }: EventListProps) {
  return (
    <div className="space-y-4">
      {events.length > 0 ? (
        events.map((event) => (
          <div
            key={event.id}  // Usando o ID único do evento
            className="flex-row items-center justify-between 
            p-1 border border-gray-300 
            rounded-lg hover:bg-blue-100
            space-x-2
            cursor-pointer transition-all duration-300 ease-in-out"
            onClick={() => onSelectEvent(event)}
          >
            <Badge variant="outline">{event.title}</Badge>
            <Badge>
              {new Date(event.studyStart).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              {"->"}
              {new Date(event.studyEnd!).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Badge>
            <Badge>
              {translateStatus(event.status)} 
            </Badge>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
