'use client';
import PomodoroApp from "@/components/pomodoro/pomodoro";
import BlurOverlay from "@/components/ui/blur-overlay";

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <h1>Meus Estudos - Pomodoro</h1>
      <BlurOverlay message={"Você não tema acesso a esse recurso!!"}>
        <PomodoroApp />
      </BlurOverlay>
    </div>
  )
}