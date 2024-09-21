'use client';

import BigCalendar from "@/components/BigCalendar/big-calendar";
import BlurOverlay from "@/components/ui/blur-overlay";


// app/pages/calendar/page.tsx
export default function CalendarPage() {
  return (
    <div>
      <h1>Meus Estudos - Calendário</h1>
      <BlurOverlay message={"Você não tema acesso a esse recurso!!"}>
        <BigCalendar />
      </BlurOverlay>
    </div>
  );
}
