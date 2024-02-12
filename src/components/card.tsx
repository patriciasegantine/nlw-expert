import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from "lucide-react";

interface NoteCardProps {
  titleCard: string
  contentCard: string
  bodyCard: React.ReactElement
  handleResetEditor?: () => void
}

export const Card: React.FC<NoteCardProps> = ({titleCard, contentCard, bodyCard, handleResetEditor}) => {
  return (
    <Dialog.Root>
      
      <Dialog.Trigger
        className="flex flex-col bg-slate-800 rounded-md p-5 gap-3 outline-none overflow-hidden relative hover:ring-2
        hover:ring-slate-600 text-left focus-visible:ring-2 focus-visible:ring-lime-400"
        onClick={handleResetEditor}
      >
        <span className="text-slate-300 text-sm font-medium">
          {titleCard}
        </span>
        
        <p className="text-slate-400 text-sm">
          {contentCard}
        </p>
        
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"/>
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 fixed inset-0 data-[state=open]:animate-overlayShow"/>
        
        <Dialog.Content
          className="bg-slate-700 z-10 fixed inset-0 md:inset-auto md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] md:max-w-[640px] w-full md:h-[60vh] md:rounded-md flex flex-col focus:outline-none data-[state=open]:animate-overlayShow overflow-hidden">
          
          <Dialog.Close asChild>
            <button
              className="bg-slate-800 p-1.5 text-slate-400 text-sm  hover:bg-slate-600 hover:text-red-400 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <X className="size-5"/>
            </button>
          </Dialog.Close>
          
          {bodyCard}
        
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
