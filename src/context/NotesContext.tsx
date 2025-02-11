import React, { createContext, useContext, useMemo, useState } from 'react';
import { isAfter, subDays } from 'date-fns';
import { FilterType, INote } from "@/@types/notes.ts";

interface NotesContextType {
  notes: INote[];
  setNotes: (notes: INote[]) => void;
  search: string;
  setSearch: (search: string) => void;
  filterType: FilterType;
  setFilterType: (type: FilterType) => void;
  filteredNotes: INote[];
  recentNotesCount: number;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
}

function getNotes(): INote[] {
  const saved = localStorage.getItem('notes');
  return saved ? JSON.parse(saved) : [];
}

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [notes, setNotes] = useState<INote[]>(() => getNotes());
  const [search, setSearch] = useState<string>('');
  const [filterType, setFilterType] = useState<FilterType>('all');
  
  const filteredNotes = useMemo(() => {
    let filtered = [...notes];
    
    if (search) {
      filtered = filtered.filter(note =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    switch (filterType) {
      case 'favorites':
        filtered = filtered.filter(note => note.isFavorite);
        break;
      case 'recent':
        filtered = filtered.filter(note => {
          const noteDate = new Date(note.updatedAt);
          const weekAgo = subDays(new Date(), 7);
          return isAfter(noteDate, weekAgo);
        });
        break;
    }
    
    return filtered;
  }, [notes, search, filterType]);
  
  const recentNotesCount = useMemo(() => {
    return notes.filter(note => {
      const noteDate = new Date(note.updatedAt);
      const weekAgo = subDays(new Date(), 7);
      return isAfter(noteDate, weekAgo);
    }).length;
  }, [notes]);
  
  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        search,
        setSearch,
        filterType,
        setFilterType,
        filteredNotes,
        recentNotesCount
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
