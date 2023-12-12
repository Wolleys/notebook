export interface TextAreaProps {
  isReply: boolean;
  replyingToUser?: string;
  onPost: (text: string) => void;
}
