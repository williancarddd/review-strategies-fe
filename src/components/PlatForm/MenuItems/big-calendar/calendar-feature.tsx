import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { EventTheme } from '@/interfaces/event';

const localizer = momentLocalizer(moment);

interface CalendarFeatureProps {
  events: EventTheme[];
  date: Date;
  onNavigate: (newDate: Date) => void;
  onDateClick: (date: Date) => void;
}

export default function CalendarFeature({
  events,
  date,
  onNavigate,
  onDateClick,
}: CalendarFeatureProps) {
  return (
    <div className="w-4/5">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['month']}
        date={date}
        onNavigate={onNavigate}
        selectable
        onSelectSlot={(slotInfo) => onDateClick(slotInfo.start)}
        style={{ height: 650 }}
        popup
        className="p-4 border border-gray-300 rounded-lg"
      />
    </div>
  );
}
