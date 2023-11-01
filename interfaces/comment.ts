export interface Comment {
  id: number;
  username: string;
  date: string;
  content: string;
  likes: number;
  replies?: Comment[];
}
