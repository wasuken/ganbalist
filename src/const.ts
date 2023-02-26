type Callback<T> = (result: T) => void;
export interface CreateGanbaListProps {
  post: Callback<GanbaItem[]>;
}
export interface GanbaListProps {
  list: GanbaItem[]
}

export type GanbaItem = {
  name: string;
};
