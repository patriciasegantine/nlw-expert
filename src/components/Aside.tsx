import { AllNotes } from "./AllNotes";

interface AsideProps {

}

export function Aside({}: AsideProps) {
  return (
    <aside
      className="hidden md:flex md:flex-col md:justify-between md:w-64 md:border-r md:bg-muted p-4 dark:bg-neutral-900">
      <div className="flex flex-col flex-1 space-y-16 overflow-y-auto pt-4">
        <AllNotes/>
      </div>
      
      <div className="mt-4">
        <button className="w-full rounded-lg bg-primary py-2 text-primary-foreground font-bold">
          Add Note
        </button>
      </div>
    </aside>
  );
}
