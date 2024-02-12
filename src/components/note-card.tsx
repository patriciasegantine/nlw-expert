import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { formatDistanceToNow } from "date-fns";
import { X } from "lucide-react";

interface NoteCardProps {
  createDate: Date
  content: string
}

export const NoteCard: React.FC<NoteCardProps> = ({content, createDate}) => {
  return (
    <Dialog.Root>
      
      <Dialog.Trigger
        className="flex flex-col bg-slate-800 rounded-md p-5 gap-3 outline-none overflow-hidden relative hover:ring-2
        hover:ring-slate-600 text-left focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-slate-300 text-sm font-medium">
          {formatDistanceToNow(createDate, {addSuffix: true})}
        </span>
        
        <p className="text-slate-400 text-sm">
          {content}
        </p>
        
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"/>
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 fixed inset-0 data-[state=open]:animate-overlayShow"/>
        
        <Dialog.Content
          className="bg-slate-700 z-10 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[640px] max-h-[85vh] w-full h-[60vh] rounded-md flex flex-col focus:outline-none data-[state=open]:animate-overlayShow overflow-hidden">
          
          <Dialog.Close asChild>
            <button
              className="bg-slate-800 p-1.5 text-slate-400 text-sm  hover:bg-slate-600 hover:text-red-400 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <X className="size-5"/>
            </button>
          </Dialog.Close>
          
          <div className="flex flex-col flex-1 gap-3 p-5">
            <span className="text-sm font-medium text-slate-300">
             {formatDistanceToNow(createDate)}
            </span>
            
            <p className="text-sm leading-6 text-slate-400">
              {content}
            </p>
          </div>
          
          
          {/*<Dialog.Close>*/}
          <button
            type="button"
            className="w-full text-sm bg-slate-800 text-slate-300 font-medium py-4 outline-none group">
            Deseja <span className="text-red-400 group-hover:underline">apagar essa nota</span> ?
          </button>
          {/*</Dialog.Close>*/}
        
        
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
