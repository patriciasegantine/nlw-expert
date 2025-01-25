import { Button } from "@/components/ui/button";
import { Hash } from "lucide-react";
import { useNotes } from "@/context/NotesContext.tsx";

interface TagsProps {
}

export function Tags({}: TagsProps) {
  
  const {tags} = useNotes();
  
  return (
    <div>
      <h2 className="mb-2 px-2 text-lg font-semibold">Tags</h2>
      <div className="space-y-1">
        {tags.map((tag) => (
          <Button
            key={tag}
            variant="ghost"
            className="flex w-full items-center gap-2"
          >
            <Hash size={16}/>
            {tag}
            <span className="ml-auto">{tags.length}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
