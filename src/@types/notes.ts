export type FilterType = 'all' | 'favorites' | 'recent';

export interface INote {
  id: string;
  title: string;
  content: string;
  isFavorite: boolean;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
