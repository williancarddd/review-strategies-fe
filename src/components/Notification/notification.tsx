import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle } from "lucide-react";

interface NotificationProps {
  variant: "default" | "destructive";
  title: string;
  description: string;
}

export function NotificationSystem({ variant, title, description }: NotificationProps) {
  return (
    <Alert variant={"default"}>
      {variant === "destructive" ? <AlertCircle className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
