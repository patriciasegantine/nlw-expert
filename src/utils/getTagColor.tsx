import { TAG_OPTIONS_ENUM } from "@/enum/TagColor.tsx";

export const getTagColor = (tag: string): string => {
  const tagOption = TAG_OPTIONS_ENUM.find((option) => option.tag === tag.toLowerCase());
  return tagOption ? tagOption.color : "bg-gray-300 text-black";
};
