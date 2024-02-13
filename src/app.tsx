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
  
  const filteredNotes = search !== ''
    ? notes.filter(note => note.content.toLowerCase().includes(search.toLowerCase()))
    : notes
  
  const onCreateTextNote = (content: string) => {
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
  
  const onNoteDelete = (id: string) => {
    
    const newArray = notes.filter(note => note.id !== id)
    
    setNotes(newArray)
    localStorage.setItem('notes', JSON.stringify(newArray))
  }
  
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
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
      
      <div className="grid grid-cols auto-rows-[250px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NewNoteCard
          onCreateTextNote={onCreateTextNote}
        />
        
        {
          filteredNotes?.map(note => {
            return (
              <NoteCard
                key={note.id}
                id={note.id}
                createDate={new Date(note.date)}
                content={note.content}
                onNoteDelete={onNoteDelete}
              />
            )
          })
        }
      </div>
    
    
    </div>
  )
}
