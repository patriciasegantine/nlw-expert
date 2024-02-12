import React from 'react';
import { formatDistanceToNow } from "date-fns";
import { Card } from "@/components/card.tsx";

interface NoteCardProps {
  createDate: Date
  content: string
}

export const NoteCard: React.FC<NoteCardProps> = ({content, createDate}) => {
  return (
    <Card
      titleCard={formatDistanceToNow(createDate, {addSuffix: true})}
      contentCard={content}
      bodyCard={
        <>
          <div className="flex flex-col flex-1 gap-3 p-5">
            <span className="text-sm font-medium text-slate-300">
             {formatDistanceToNow(createDate)}
            </span>
            
            <p className="text-sm leading-6 text-slate-400">
              {content}
            </p>
          </div>
          
          <button
            type="button"
            className="w-full text-sm bg-slate-800 text-slate-300 font-medium py-4 outline-none group">
            Deseja <span className="text-red-400 group-hover:underline">apagar essa nota</span> ?
          </button>
        </>
      }
    />
  
  );
};
