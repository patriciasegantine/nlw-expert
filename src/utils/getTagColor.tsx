import { TAG_OPTIONS } from "@/enum/TagColor.tsx";

export const getTagColor = (tag: string): string => {
  const tagOption = TAG_OPTIONS.find((option) => option.tag === tag.toLowerCase());
  return tagOption ? tagOption.color : "bg-gray-300 text-black";
};
