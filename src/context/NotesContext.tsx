import React, { createContext, useContext, useState } from "react";

export interface Note {
  id: string;
  title: string;
  content: string;
  isFavorite: boolean;
  tags: string[];
}

interface NotesContextType {
  notes: Note[];
  setNotes: React.Dispatch<Note[]>
  tags: string[]
  filteredNotes: Note[]
  search: string
  setSearch: React.Dispatch<string>
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  
  const [search, setSearch] = useState<string>('')
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes')
    if (notesOnStorage) return JSON.parse(notesOnStorage)
    return []
  })
  
  const filteredNotes = search !== ''
    ? notes.filter(note => note.content.toLowerCase().includes(search.toLowerCase()))
    : notes
  
  const tags: string[] = [];
  
  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        search,
        setSearch,
        filteredNotes,
        tags
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};
