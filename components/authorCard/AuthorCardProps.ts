interface AuthorData {
  name: string;
  username: string;
  bio: string;
  followers: number;
  avatarSrc: string;
}

export interface AuthorCardProps {
  authorData: AuthorData;
}
