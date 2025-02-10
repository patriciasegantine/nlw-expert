import { useRef, useState } from "react";
import { Book, Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ModeToggle";
import { useClickOutside } from "@/hook/useClickOutside";
import { useNotes } from "@/context/NotesContext.tsx";

interface HeaderProps {
  handleShowAside: () => void;
}

export function Header({handleShowAside}: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
    <header className="bg-muted border-b">
      <div className=" mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={handleShowAside}
          >
            <Menu className="h-6 w-6"/>
          </Button>
          <Book className="h-6 w-6 text-foreground"/>
          <h1 className="text-xl font-bold text-foreground">SmartNotes</h1>
        </div>
        
        
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
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
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
          <ModeToggle/>
        </div>
      </div>
    </header>
  );
}
