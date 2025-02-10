import { useRef } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNotes } from "@/context/NotesContext";
import { useClickOutside } from "@/hooks/useClickOutside";

interface SearchBarProps {
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
}

export function SearchBar({isSearchOpen, setIsSearchOpen}: SearchBarProps) {
  const {search, setSearch} = useNotes();
  const searchRef = useRef<HTMLDivElement>(null);
  
  useClickOutside(searchRef, () => {
    if (search === "") {
      setIsSearchOpen(false);
    }
  });
  
  const handleClearInput = () => {
    setSearch("");
  };
  
  return (
    <div className="flex items-center gap-4" ref={searchRef}>
      {!isSearchOpen && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSearchOpen(true)}
        >
          <Search className="h-5 w-5"/>
        </Button>
      )}
      
      {isSearchOpen && (
        <div className="relative w-40 transition-all duration-300 focus-within:w-64">
          <Input
            type="text"
            value={search}
            placeholder="Search notes..."
            autoFocus
            className="pr-10"
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={handleClearInput}
            >
              <X className="h-4 w-4"/>
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
