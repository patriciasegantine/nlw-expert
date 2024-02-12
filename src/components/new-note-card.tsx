import React, { ChangeEvent, FormEvent, useState } from 'react';
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { toast } from "sonner";

interface INewNoteCard {
  onCreateTextNote: (content: string) => void
}

let speechRecognition: SpeechRecognition | null = null

export const NewNoteCard: React.FC<INewNoteCard> = ({onCreateTextNote}) => {
  
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState<boolean>(true)
  const [content, setContent] = useState<string>('')
  const [isRecording, setIsRecording] = useState<boolean>(false)
  
  const handleStartEditor = () => {
    setIsRecording(false)
    setShouldShowOnboarding(false)
  };
  
  const handleContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    
    if (e.target.value === '') {
      setShouldShowOnboarding(true)
    }
  };
  
  const handleSaveNote = (e: FormEvent) => {
    e.preventDefault()
    
    onCreateTextNote(content)
    setContent('')
    setShouldShowOnboarding(true)
    toast.success('Note added with success')
  }
  
  const handleStartRecording = () => {
    setIsRecording(true)
    setShouldShowOnboarding(false)
    
    const isSpeechRecognitionAPIAvailable = 'speechRecognition' in window
      || 'webkitSpeechRecognition' in window
    
    if (!isSpeechRecognitionAPIAvailable) {
      alert('Unfortunately, your browser does not support the recording API.')
      return
    }
    
    const speechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition
    
    speechRecognition = new speechRecognitionAPI()
    
    speechRecognition.lang = 'en-GB'
    speechRecognition.continuous = true
    speechRecognition.maxAlternatives = 1
    speechRecognition.interimResults = true
    
    speechRecognition.onresult = (e) => {
      const transcription = Array.from(e.results)
        .reduce((text, result) => {
          return text.concat(result[0].transcript)
        }, '')
      
      setContent(transcription)
    }
    
    speechRecognition.onerror = (e) => console.error(e)
    speechRecognition.start()
    
  }
  
  const handleStopRecording = () => {
    setIsRecording(false)
    speechRecognition?.stop()
    
  }
  
  const handleResetEditor = () => {
    setShouldShowOnboarding(true)
    setContent('')
  }
  
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="flex flex-col bg-slate-700 rounded-md p-5 gap-3 outline-none hover:ring-2 hover:ring-slate-600 text-left focus-visible:ring-2 focus-visible:ring-lime-400"
        onClick={handleResetEditor}
      >
          <span className="text-slate-200 text-sm font-medium">
            Add note
          </span>
        <p className="text-slate-400 text-sm">
          Record an audio note that will be automatically converted to text.
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
          
          <form className="flex flex-1 flex-col">
            <div className="flex flex-col flex-1 gap-3 p-5">
            <span className="text-sm font-medium text-slate-300">
            Add note
            </span>
              {
                shouldShowOnboarding
                  ? <p className="text-sm leading-6 text-slate-400">
                    Start by
                    <button
                      type="button"
                      className="text-lime-400 hover:underline font-medium px-0.5"
                      onClick={handleStartRecording}
                    >
                      
                      recording an audio note
                    </button>
                    or, if you prefer
                    <button
                      type="button"
                      className="text-lime-400 hover:underline font-medium px-0.5"
                      onClick={handleStartEditor}> use text only
                    </button>.
                  </p>
                  : <textarea
                    autoFocus
                    className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                    onChange={handleContentChanged}
                    value={content}
                  />
              }
            
            </div>
            
            {
              isRecording
                ? <button
                  type="button"
                  className="w-full text-sm bg-slate-900 text-slate-300 font-medium py-4 outline-none hover:text-slate-100 flex items-center justify-center gap-1 "
                  onClick={handleStopRecording}
                >
                  <div className="bg-red-500 size-3 rounded-full animate-pulse"/>
                  Recording... [click to stop]
                </button>
                : <button
                  type="button"
                  onClick={handleSaveNote}
                  className="w-full text-sm bg-lime-400 text-lime-950 font-medium py-4 outline-none hover:bg-lime-500 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-700"
                  disabled={content === ''}
                >
                  Save note
                </button>
            }
          
          </form>
        
        
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
