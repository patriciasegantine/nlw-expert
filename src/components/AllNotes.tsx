import { Button } from "@/components/ui/button";
import { Clock, NotebookText, Star } from "lucide-react";
import { useNotes } from "@/context/NotesContext.tsx";

interface AllNotesProps {
}

export function AllNotes({}: AllNotesProps) {
  
  const {notes} = useNotes();
  
  return (
    <div>
      <h2 className="mb-2 px-2 text-lg font-semibold">All Notes</h2>
      <div className="space-y-1">
        <Button variant="ghost" className="flex w-full items-center gap-2">
          <NotebookText size={16}/>
          All Notes
          <span className="ml-auto">{notes.length}</span>
        </Button>
        
        <Button
          variant="ghost"
          className="flex w-full items-center gap-2"
        >
          <Star size={16}/>
          Favorites
          <span className="ml-auto">
            {notes.filter(note => note.isFavorite).length}
          </span>
        </Button>
        
        <Button
          variant="ghost"
          className="flex w-full items-center gap-2"
        >
          <Clock size={16}/>
          Recent
          <span className="ml-auto">0</span>
        </Button>
      </div>
    </div>
  );
}
