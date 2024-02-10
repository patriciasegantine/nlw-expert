import React from 'react';

interface INewNoteCard {
  text: string
  title: string
}

export const NewNoteCard: React.FC<INewNoteCard> = ({text, title}) => {
  return (
    <button
      className="bg-slate-700 rounded-md p-5 space-y-3  outline-none hover:ring-2 hover:ring-slate-600 text-left focus-visible:ring-2 focus-visible:ring-lime-400">
          <span className="text-slate-200 text-sm font-medium">
             {title}
          </span>
      <p className="text-slate-400 text-sm">
        {text}
      </p>
    </button>
  );
};
