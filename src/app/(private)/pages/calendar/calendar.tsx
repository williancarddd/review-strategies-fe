'use client';

import BigCalendar from "@/components/BigCalendar/big-calendar";
import BlurOverlay from "@/components/ui/blur-overlay";


// app/pages/calendar/page.tsx
export default function CalendarPage() {
  return (
    <div>
      <BlurOverlay message={"Você não tem acesso a esse recurso!!"}>
        <BigCalendar />
      </BlurOverlay>
    </div>
  );
}
