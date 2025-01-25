import { Header } from "@/components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";
import { Aside } from "@/components/Aside.tsx";
import { NotesGrid } from "@/components/NotesGrid.tsx";
import { NotesProvider } from "@/context/NotesContext.tsx";

interface LayoutProps {
}

export const Layout = ({}: LayoutProps) => {
  
  return (
    <NotesProvider>
      <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-background text-foreground">
        <Header/>
        
        <div className="grid md:grid-cols-[250px_1fr]">
          <Aside/>
          <NotesGrid/>
        </div>
        
        <Footer/>
      </div>
    </NotesProvider>
  );
};
