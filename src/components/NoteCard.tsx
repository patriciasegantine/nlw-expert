import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { truncateText } from "@/utils/truncateText.tsx";
import { Edit } from "lucide-react";
import { getTagColor } from "@/utils/getTagColor.tsx";
import { NoteModal } from "@/components/NoteModal.tsx";
import { INote } from "@/@types/notes.ts";

interface NoteCardProps {
  note: INote
}

export const NoteCard: React.FC<NoteCardProps> = ({note}) => {
  
  const {id, title, content, isFavorite, tags} = note
  
  const [isModalOpen, setModalOpen] = useState(false);
  
  return (
    <>
      <Card className="relative flex flex-col justify-between h-full dark:bg-neutral-900">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => alert(`favorite note ${id}`)}
          title={isFavorite ? "Remove from favourites" : "Add at favourites"}
          className="absolute top-2 right-2 hover:text-primary"
        >
          {isFavorite ? (
            <AiFillHeart className="text-red-500" size={20}/>
          ) : (
            <AiOutlineHeart size={20}/>
          )}
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setModalOpen(true)}
          title="Edit note"
          className="absolute bottom-2 right-2 hover:text-primary"
        >
          <Edit size={20}/>
        </Button>
        
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        
        <CardContent>
          {truncateText(content, 170)}
        </CardContent>
        
        <CardFooter className="flex mt-4 gap-2">
          {tags.map((tag) => (
            <Badge key={tag} className={`px-2 py-1 rounded-md ${getTagColor(tag)}`}>
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
      
      <NoteModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        note={note}
        onSubmit={(updatedNote) => console.log("Updating note...", updatedNote)}
      />
    </>
  
  );
};
