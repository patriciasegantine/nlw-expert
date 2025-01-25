import { useRef, useState } from "react";
import { Book, Search, X } from "lucide-react";
import { useClickOutside } from "@/hook/useClickOutside.tsx";
import { ModeToggle } from "@/components/ModeToggle.tsx";

interface HeaderProps {
  onSearch?: (search: string) => void;
}

export function Header({onSearch}: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  
  useClickOutside(searchRef, () => {
    if (searchValue === "") {
      setIsSearchOpen(false);
    }
  });
  
  const handleClearInput = () => {
    setSearchValue("");
    onSearch?.("");
  };
  
  return (
    <header className="bg-muted md:border-b ">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-2">
          <Book className="h-6 w-6 text-foreground"/>
          <h1 className="text-xl font-bold text-foreground">SmartNotes</h1>
        </div>
        
        
        <div className="flex items-center gap-4" ref={searchRef}>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-muted-foreground"
          >
            <Search className="h-5 w-5"/>
          </button>
          
          {isSearchOpen && (
            <div className="relative w-40 transition-all duration-300 focus-within:w-64">
              <input
                type="text"
                value={searchValue}
                placeholder="Search notes..."
                className="h-9 w-full border border-muted-foreground/50 rounded-md text-sm bg-transparent pl-3 pr-8 text-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-muted-foreground"
                autoFocus
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  onSearch?.(e.target.value);
                }}
              />
              
              {searchValue && (
                <button
                  onClick={handleClearInput}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
                >
                  <X className="h-4 w-4"/>
                </button>
              )}
            </div>
          )}
          
          <ModeToggle/>
        </div>
      </div>
    </header>
  );
}
