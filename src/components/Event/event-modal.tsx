import React, { useEffect } from 'react';
import { EventList } from './event-list';
import { EventForm } from './event-form';
import { useFetchStudyDay, useFindStudyDay } from '@/hooks/study-hook';
import { useStudyDayStore } from '@/stores/study-store';
import { StudyDay } from '@/schemas/study-schema';
import moment from 'moment';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { Badge } from '../ui/badge';

type ExistingStudyDay = Omit<StudyDay, 'id'> & { id: string };

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: {
    userId: string;
    date: Date;
  } | null;
  refetch: () => void;
}

export default function EventModal({
  isOpen,
  onClose,
  selectedDate,
  refetch,
}: EventModalProps) {
  const { studyDaysDay, studyDay } = useStudyDayStore();

 
  const fetchDataDay =  useFetchStudyDay(selectedDate!.userId!, selectedDate!.date!);
  

  const findUniqueStudyDay = useFindStudyDay();

  useEffect(() => {
    if (fetchDataDay) {
      fetchDataDay.refetch();
    }
  }, [selectedDate]);

  const onSelectStudyDate = (studyDate: StudyDay) => {
    if (studyDate.id) {
      findUniqueStudyDay.mutateAsync(studyDate.id);
    } else {
      console.error('studyDate.id está indefinido');
    }
  };

  const onCloseModal = () => {
    onClose();
    refetch();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onCloseModal}>
      <AlertDialogContent className="max-w-3xl bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center justify-between">
            {selectedDate
              ? `Estudos do Dia ${moment(selectedDate.date).format(
                  'DD/MM/YYYY'
                )}`
              : 'Estudos do Dia'}
            <Badge
              style={{
                backgroundColor: studyDay?.color || '#000',
                color: 'white',
                width: '100px',
              }}
            ></Badge>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
          {selectedDate && (
            <EventForm
              selectedEvent={studyDay as ExistingStudyDay}
              onClose={onCloseModal}
              selectedDate={selectedDate}
            />
          )}
          <EventList events={studyDaysDay} onSelectEvent={onSelectStudyDate} />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
