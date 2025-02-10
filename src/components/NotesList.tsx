import React from "react";
import { NoteCard } from "@/components/NoteCard.tsx";
import { useNotes } from "@/context/NotesContext.tsx";

export const NotesList: React.FC = () => {
  const {filteredNotes} = useNotes()
  
  return (
    <div className="flex flex-col p-6 space-y-6">
      <div
        className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredNotes.map((note) => (
          <NoteCard note={note} key={note.id}/>
        ))}
      </div>
    </div>
  );
};
