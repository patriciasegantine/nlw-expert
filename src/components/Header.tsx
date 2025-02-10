import { useState } from "react";
import { Book, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { SearchBar } from "@/components/SearchBar";

interface HeaderProps {
  handleShowAside: () => void;
}

export function Header({handleShowAside}: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  return (
    <header className="bg-muted border-b">
      <div className="mx-auto flex h-16 items-center justify-between px-4">
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
        
        <div className="flex items-center gap-4">
          <SearchBar
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
          />
          <ModeToggle/>
        </div>
      </div>
    </header>
  );
}
