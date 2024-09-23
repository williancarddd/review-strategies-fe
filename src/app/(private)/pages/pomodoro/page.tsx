'use client';
import PomodoroApp from "@/components/pomodoro/pomodoro";
import BlurOverlay from "@/components/ui/blur-overlay";

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <BlurOverlay message={"Você não tem acesso a esse recurso!!"}>
        <PomodoroApp />
      </BlurOverlay>
    </div>
  )
}