import { useState } from "react";
import { NotesProvider } from "@/context/NotesContext";
import { Header } from "@/components/Header";
import { Aside } from "@/components/Aside";
import { NotesGrid } from "@/components/NotesGrid";
import { Footer } from "@/components/Footer";

export const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  return (
    <NotesProvider>
      <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-background text-foreground">
        <Header handleShowAside={() => setIsDrawerOpen(true)}/>
        
        <div className="grid md:grid-cols-[250px_1fr]">
          <Aside isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}/>
          <NotesGrid/>
        </div>
        
        <Footer/>
      </div>
    </NotesProvider>
  );
};
