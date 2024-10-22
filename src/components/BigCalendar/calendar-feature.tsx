import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { StudyDay } from '@/schemas/study-schema';

const localizer = momentLocalizer(moment);

interface CalendarFeatureProps {
  events: StudyDay[];
  date: Date;
  onNavigate: (newDate: Date) => void;
  onDateClick: (date: Date) => void;
}

export default function CalendarFeature({ events, date, onNavigate, onDateClick }: CalendarFeatureProps) {
  const mappedEvents = events.map((event) => ({
    title: event.title,
    start: new Date(event.studyStart),
    end: new Date(event.studyEnd!),
    allDay: false,
    studyDayId: event.id,
    status: event.status,
    color: event.color,
  }));

  return (
    <div className="w-full">
      <Calendar
        localizer={localizer}
        events={mappedEvents}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        views={['month']}
        date={date}
        onNavigate={onNavigate}
        selectable
        onSelectSlot={(slotInfo) => onDateClick(slotInfo.start)}
        style={{ height: 650 }}
        popup
        showAllEvents
        eventPropGetter={(event) => {
            return {
              style: {
                backgroundColor: event.color ?? '#3182ce',
              },
            };
        
        }
      }
        className="border border-gray-300 rounded-lg"
      />
    </div>
  );
}
