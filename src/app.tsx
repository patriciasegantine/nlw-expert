import React from "react";
import { NoteCard } from "@/components/note-card.tsx";
import { NewNoteCard } from "@/components/new-note-card.tsx";
import logo from '../src/assets/logo-nlw-expert.svg'

export const App: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW expert"/>
      
      <form className="w-full mt-6">
        <input
          type="text"
          placeholder={'Busque em suas notas...'}
          className="w-full bg-transparent text-2xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>
      
      <div className="h-[1px] bg-slate-700"/>
      
      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard
          title={'Adicionar nota'}
          text={'Grave uma nota em áudio que será convertida para texto automaticamente.'}/>
        
        <NoteCard
          title={'há 2 dias'}
          text={'No app do NLW vamos criar um layout incrível, assim podemos entregar a melhor experiência para a comunidade'}
        />
        
        <NoteCard
          title={'há 2 dias'}
          text={'No app do NLW vamos criar um layout incrível, assim podemos entregar a melhor experiência para a comunidade. Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio. Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio. Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio'}
        />
        
        <NoteCard
          title={'há 2 dias'}
          text={'No app do NLW vamos criar um layout incrível, assim podemos entregar a melhor experiência para a comunidade. Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio. Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio. Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio'}
        />
      </div>
    
    
    </div>
  )
}
