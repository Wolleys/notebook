export interface TextArea {
  isReply: boolean;
  replyingToUser?: string;
  onPost: (text: string) => void;
}
