import { Button } from "@/components/ui/button";
import { Clock, NotebookText, Star } from "lucide-react";
import { useNotes } from "@/context/NotesContext";

export function AllNotes() {
  const {notes, filterType, setFilterType, recentNotesCount} = useNotes();
  
  return (
    <div>
      <h2 className="mb-2 px-2 text-lg font-semibold">All Notes</h2>
      <div className="space-y-1">
        <Button
          variant={filterType === 'all' ? 'secondary' : 'ghost'}
          className="flex w-full items-center gap-2"
          onClick={() => setFilterType('all')}
        >
          <NotebookText size={16}/>
          All Notes
          <span className="ml-auto">{notes.length}</span>
        </Button>
        
        <Button
          variant={filterType === 'favorites' ? 'secondary' : 'ghost'}
          className="flex w-full items-center gap-2"
          onClick={() => setFilterType('favorites')}
        >
          <Star size={16}/>
          Favorites
          <span className="ml-auto">
            {notes.filter(note => note.isFavorite).length}
          </span>
        </Button>
        
        <Button
          variant={filterType === 'recent' ? 'secondary' : 'ghost'}
          className="flex w-full items-center gap-2"
          onClick={() => setFilterType('recent')}
        >
          <Clock size={16}/>
          Recent
          <span className="ml-auto">{recentNotesCount}</span>
        </Button>
      </div>
    </div>
  );
}
