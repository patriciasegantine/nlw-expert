import React from 'react';
import { formatDistanceToNow } from "date-fns";
import { Card } from "@/components/card.tsx";

interface NoteCardProps {
  createDate: Date
  content: string
  id: string
  onNoteDelete: (id: string) => void
}

export const NoteCard: React.FC<NoteCardProps> = ({content, createDate, id, onNoteDelete}) => {
  
  return (
    <Card
      newCard={false}
      titleCard={formatDistanceToNow(createDate, {addSuffix: true})}
      contentCard={content}
      bodyCard={
        <>
          <div className="flex flex-col flex-1 gap-3 p-5">
            <span className="text-sm font-medium text-neutral-300">
             {formatDistanceToNow(createDate)}
            </span>
            
            <p className="text-sm leading-6 text-neutral-400">
              {content}
            </p>
          </div>
          
          <button
            type="button"
            className="w-full text-sm bg-neutral-800 text-neutral-300 font-medium py-4 outline-none group"
            onClick={() => onNoteDelete(id)}
          >
            Deseja <span className="text-red-400 group-hover:underline">apagar essa nota</span> ?
          </button>
        </>
      }
    />
  
  );
};
