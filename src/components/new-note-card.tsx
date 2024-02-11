import React from 'react';
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface INewNoteCard {
  text: string
  title: string
}

export const NewNoteCard: React.FC<INewNoteCard> = ({text, title}) => {
  
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="flex flex-col bg-slate-700 rounded-md p-5 gap-3 outline-none hover:ring-2 hover:ring-slate-600 text-left focus-visible:ring-2 focus-visible:ring-lime-400">
          <span className="text-slate-200 text-sm font-medium">
             {title}
          </span>
        <p className="text-slate-400 text-sm">
          {text}
        </p>
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
            Adicionar nota
            </span>
            
            <p className="text-sm leading-6 text-slate-400">
              Start by <span className="text-lime-400 hover:underline font-medium">recording an audio note</span> or, if
              you prefer <span className="text-lime-400 hover:underline font-medium">use text only</span>.
            </p>
          </div>
          
          <button
            type="button"
            className="w-full text-sm bg-lime-400 text-lime-950 font-medium py-4 outline-none hover:bg-lime-500">
            Salvar nota
          </button>
        
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
