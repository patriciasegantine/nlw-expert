import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { truncateText } from "@/utils/truncateText.tsx";
import { getTagColor } from "@/utils/getTagColor.tsx";

interface NoteCardProps {
  title: string;
  content: string;
  tags: string[];
}

export const NoteCard: React.FC<NoteCardProps> = ({
                                                    title,
                                                    content,
                                                    tags,
                                                  }) => {
  
  return (
    <Card className="relative flex flex-col justify-between h-full dark:bg-neutral-900">
      
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
  );
};
