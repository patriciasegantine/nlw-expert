import React from 'react';

interface INoteCard {
  text: string
  title: string
}

export const NoteCard: React.FC<INoteCard> = ({text, title}) => {
  return (
    <button
      className="bg-slate-800 rounded-md p-5 space-y-3 outline-none overflow-hidden relative hover:ring-2 hover:ring-slate-600 text-left focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-slate-300 text-sm font-medium">
        {title}
      </span>
      
      <p className="text-slate-400 text-sm">
        {text}
      </p>
      
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"/>
    </button>
  );
};
