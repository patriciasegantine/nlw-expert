import { AllNotes } from "./AllNotes";
import { Tags } from "@/components/Tags";
import { Stats } from "@/components/Stats";
import { useState } from "react";
import { NoteModal } from "@/components/NoteModal";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AsideProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Aside({isOpen, onClose}: AsideProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  
  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`
        fixed md:relative
        inset-y-0 left-0
        w-[250px]
        border-r
        bg-muted
        p-4
        transition-transform
        duration-300
        ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
        z-20
      `}>
        {/* Close button for mobile */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 md:hidden"
          onClick={onClose}
        >
          <X className="h-4 w-4"/>
        </Button>
        
        <div className="flex flex-col flex-1 space-y-16 overflow-y-auto pt-12 md:pt-4">
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
    </>
  );
}
