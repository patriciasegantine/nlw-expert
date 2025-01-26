import { Button } from "@/components/ui/button";
import { Hash } from "lucide-react";
import { useNotes } from "@/context/NotesContext.tsx";

interface TagsProps {
}

export function Tags({}: TagsProps) {
  const {notes} = useNotes();
  
  const tagCounts = notes.reduce((acc: Record<string, number>, note) => {
    note.tags.forEach((tag) => {
      const normalizedTag = tag.toLowerCase();
      acc[normalizedTag] = (acc[normalizedTag] || 0) + 1;
    });
    return acc;
  }, {});
  
  const tags = Object.entries(tagCounts)
  
  return (
    <div>
      <h2 className="mb-2 px-2 text-lg font-semibold">Tags</h2>
      <div className="space-y-1 text-left">
        {tags.map(([tag, count]) => (
          <Button
            key={tag}
            variant="ghost"
            className="flex w-full items-start justify-between gap-2"
          >
            <div className="flex items-center gap-2">
              <Hash size={16}/>
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </div>
            <span>{count}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
