import { useMemo } from 'react';
import { differenceInDays } from 'date-fns';
import { INote } from "@/@types/notes.ts";

export function useRecentNotes(notes: INote[]) {
  const recentNotes = useMemo(() => {
    const today = new Date();
    
    return notes.filter(note => {
      const noteDate = new Date(note.createdAt);
      const daysDifference = differenceInDays(today, noteDate);
      return daysDifference <= 3;
    });
  }, [notes]);
  
  return {
    recentNotes,
    recentNotesCount: recentNotes.length
  };
}
