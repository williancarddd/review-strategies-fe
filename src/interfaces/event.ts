export interface EventTheme {
  id?: string;
  description?: string;
  start: Date;
  end: Date;
  mode: string;
  title?: string;
  completed?: boolean;
  allDay: boolean;
}