import React, { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

interface Note {
  id: string;
  title: string;
  content: string;
  isFavorite: boolean;
  tags: string[];
}

interface NotesContextType {
  notes: Note[];
  tags: string[]
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const notes = [
    {
      id: uuidv4(),
      title: "First Note",
      content: "This is the content for the first note.",
      isFavorite: false,
      tags: ["important"],
    },
    {
      id: uuidv4(),
      title: "Second Note",
      content: "Second note content is here, nice and short!",
      isFavorite: true,
      tags: [],
    },
    {
      id: uuidv4(),
      title: "Third Note",
      content: "The third note has a longer content to check layout adaptation.",
      isFavorite: false,
      tags: ["todo"],
    },]
  
  const tags: string[] = ["important", "todo", "personal"]
  
  return (
    <NotesContext.Provider
      value={{
        notes,
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
