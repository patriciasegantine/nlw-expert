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
      content: "This is the content for the first note. It has been expanded to include more details and additional information to ensure it reaches exactly 200 characters in total length, including this.",
      isFavorite: false,
      tags: ["important", "work"],
    },
    {
      id: uuidv4(),
      title: "Second Note",
      content: "Second note content is here, nice and short!",
      isFavorite: true,
      tags: ["personal"],
    },
    {
      id: uuidv4(),
      title: "Third Note",
      content: "The third note has a longer content to check layout adaptation.",
      isFavorite: false,
      tags: ["todo", "urgent"],
    },
    {
      id: uuidv4(),
      title: "Fourth Note",
      content: "A quick idea captured here for future reference.",
      isFavorite: true,
      tags: ["idea", "creative"],
    },
    {
      id: uuidv4(),
      title: "Fifth Note",
      content: "Note without a tag, just plain and simple.",
      isFavorite: false,
      tags: [],
    },
    {
      id: uuidv4(),
      title: "Work Task",
      content: "Details about an important task to complete for work.",
      isFavorite: false,
      tags: ["work", "priority"],
    },
    {
      id: uuidv4(),
      title: "Personal Goals",
      content: "Personal objectives and goals for self-improvement.",
      isFavorite: true,
      tags: ["personal", "important"],
    },
  ]
  
  const tags: string[] = [
    "important",
    "todo",
    "personal",
    "work",
    "urgent",
    "idea",
    "creative",
    "priority",
  ];
  
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
