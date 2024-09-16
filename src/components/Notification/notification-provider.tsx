'use client';
import { createContext, useContext, useState, useEffect } from "react";
import { NotificationSystem } from "./notification"; // Componente de Notificação já criado

type NotificationContextType = {
  notify: (variant: "default" | "destructive", title: string, description: string, duration?: number) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notification, setNotification] = useState<{
    variant: "default" | "destructive";
    title: string;
    description: string;
  } | null>(null);

  const notify = (
    variant: "default" | "destructive", 
    title: string, 
    description: string, 
    duration: number = 5000 // 5 segundos como padrão
  ) => {
    setNotification({ variant, title, description });
    
    // Limpa a notificação após a duração especificada
    setTimeout(() => {
      setNotification(null);
    }, duration);
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white m-4 rounded-lg shadow-lg z-50">
          <NotificationSystem
            variant={notification.variant}
            title={notification.title}
            description={notification.description}
          />
        </div>
      )}
    </NotificationContext.Provider>
  );
};
