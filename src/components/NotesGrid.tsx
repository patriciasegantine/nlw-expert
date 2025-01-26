import React from "react";
import { useNotes } from "@/context/NotesContext";
import { NoteCard } from "@/components/NoteCard.tsx";

export const NotesGrid: React.FC = () => {
  const {notes} = useNotes();
  
  return (
    <div className="flex flex-col p-6 space-y-6">
      <div
        className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {notes.map(({id, title, content, tags}) => (
          <NoteCard key={id} title={title} content={content} tags={tags}/>
        ))}
      </div>
    </div>
  );
};
