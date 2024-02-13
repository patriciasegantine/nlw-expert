import React, { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from "sonner";
import { Card } from "@/components/card.tsx";

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
    <  Card
      newCard={true}
      titleCard={'Add note'}
      contentCard={'Turn your voice into text with a breeze! Record an audio note for easy, automatic conversion or simply type your thoughts. It\'s that simple!'}
      handleResetEditor={handleResetEditor}
      bodyCard={
        <>
          <form className="flex flex-1 flex-col">
            <div className="flex flex-col flex-1 gap-3 p-5">
                <span className="text-sm font-medium text-neutral-300">
                Add note
                </span>
              {
                shouldShowOnboarding
                  ? <p className="text-sm leading-6 text-neutral-400">
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
                    maxLength={100}
                    autoFocus
                    className="text-sm leading-6 text-neutral-400 bg-transparent resize-none flex-1 outline-none"
                    onChange={handleContentChanged}
                    value={content}
                  />
              }
            
            </div>
            
            {
              isRecording
                ? <button
                  type="button"
                  className="w-full text-sm bg-neutral-900 text-300 font-medium py-4 outline-none hover:text-100 flex items-center justify-center gap-1 "
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
        </>
      }
    />
  
  );
};
