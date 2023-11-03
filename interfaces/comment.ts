interface Comment {
  id: number;
  username: string;
  date: string;
  content: string;
  likes: number;
  replies?: Comment[];
}

export default Comment;

export interface CommentProps {
  comment: Comment;
}
