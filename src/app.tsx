import React, { ChangeEvent, useState } from "react";
import { NoteCard } from "@/components/note-card.tsx";
import { NewNoteCard } from "@/components/new-note-card.tsx";
import logo from '../src/assets/logo-nlw-expert.svg'

export interface INote {
  id: string,
  date: string,
  content: string,
}

export const App: React.FC = () => {
  
  const [notes, setNotes] = useState<INote[]>(() => {
    const notesOnStorage = localStorage.getItem('notes')
    if (notesOnStorage) return JSON.parse(notesOnStorage)
    return []
  })
  
  const [search, setSearch] = useState<string>('')
  
  const onCreateNote = (content: string) => {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      content
    }
    
    const notesArray = [newNote, ...notes]
    
    setNotes(notesArray)
    
    localStorage.setItem('notes', JSON.stringify(notesArray))
  }
  
  const handleOnSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearch(query)
  }
  
  const filteredNotes = search !== ''
    ? notes.filter(note => note.content.toLowerCase().includes(search.toLowerCase()))
    : notes
  
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW expert"/>
      
      <form className="w-full mt-6">
        <input
          type="text"
          placeholder={'Search in your notes...'}
          className="w-full bg-transparent text-2xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
          onChange={handleOnSearch}
        />
      </form>
      
      <div className="h-[1px] bg-slate-700"/>
      
      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard
          onCreateNote={onCreateNote}
        />
        
        {
          filteredNotes?.map(note => {
            return (
              <NoteCard
                key={note.id}
                createDate={new Date(note.date)}
                content={note.content}
              />
            )
          })
        }
      </div>
    
    
    </div>
  )
}
