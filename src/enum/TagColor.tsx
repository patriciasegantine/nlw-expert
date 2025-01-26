export enum TagsEnum {
  IMPORTANT = "bg-orange-600 text-white",
  PERSONAL = "bg-teal-500 text-white",
  WORK = "bg-indigo-500 text-white",
  URGENT = "bg-red-600 text-white",
  IDEA = "bg-purple-500 text-white",
}

export const TAG_OPTIONS_ENUM = Object.entries(TagsEnum).map(([key, value]) => ({
  key,
  tag: key.toLowerCase(),
  color: value,
}));
