import { useNotes } from "@/context/NotesContext.tsx";

interface StatsProps {
}

export function Stats({}: StatsProps) {
  
  const {notes} = useNotes();
  
  return (
    <div>
      <h2 className="mb-2 px-2 text-lg font-semibold">Stats</h2>
      <div className="rounded-lg p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm">Total Notes</p>
            <p className="text-2xl font-bold">{notes.length}</p>
          </div>
          
          <div>
            <p className="text-sm">Favorites</p>
            <p className="text-2xl font-bold">
              {notes.filter(note => note.isFavorite).length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
