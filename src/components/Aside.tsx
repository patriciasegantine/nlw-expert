import { AllNotes } from "./AllNotes";
import { Tags } from "@/components/Tags.tsx";
import { Stats } from "@/components/Stats.tsx";
import { useState } from "react";
import { NoteModal } from "@/components/NoteModal.tsx";

interface AsideProps {

}

export function Aside({}: AsideProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  
  return (
    <aside
      className="hidden md:flex md:flex-col md:justify-between md:w-64 md:border-r md:bg-muted p-4 dark:bg-neutral-900">
      <div className="flex flex-col flex-1 space-y-16 overflow-y-auto pt-4">
        <AllNotes/>
        <Tags/>
        <Stats/>
      </div>
      
      <div className="mt-4">
        <button
          className="w-full rounded-lg bg-primary py-2 text-primary-foreground font-bold"
          onClick={() => setModalOpen(true)}
        >
          Add Note
        </button>
      </div>
      
      <NoteModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={(newNote) => console.log("Creating note...", newNote)}
      />
    
    </aside>
  );
}
