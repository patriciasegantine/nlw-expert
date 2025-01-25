import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeProviderContext.tsx";

export function ModeToggle() {
  const {theme, toggleTheme} = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-muted-foreground"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5"/>
      ) : (
        <Moon className="h-5 w-5"/>
      )}
    </button>
  );
}
