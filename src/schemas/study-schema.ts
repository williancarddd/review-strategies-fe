import { z } from 'zod';


export const StudyDaySchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  firstStudyDayId: z.string().optional(), 
  title: z.string().min(3, 'Title must be at least 3 characters long'),
  mode: z.enum(['24x7x30', '24x3x7', '24x3x15']),
  description: z.string().optional(),
  color: z.string().optional(),
  studyStart: z.date(),
  studyEnd: z.date().optional(),
  status: z.enum(['PENDING', 'COMPLETED', 'SKIPPED']),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const CreateStudyDaySchema = StudyDaySchema.omit({
  id: true,
  firstStudyDayId: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateStudyDaySchema = z.object({
  studyStart: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) {
      return new Date(arg);
    }
    return arg;
  }, z.date()),
  studyEnd: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) {
      return new Date(arg);
    }
    return arg;
  }, z.date()).optional(),
}).merge(
  CreateStudyDaySchema.pick({
    title: true,
    mode: true,
    description: true,
    color: true,
    status: true,
  })
).partial();

export type StudyDay = z.infer<typeof StudyDaySchema>;
export type CreateStudyDayDto = z.infer<typeof CreateStudyDaySchema>;
export type UpdateStudyDayDto = z.infer<typeof UpdateStudyDaySchema>;
