interface AuthorData {
  name: string;
  username: string;
  bio: string;
  followers: number;
  avatarSrc: string;
}

export default AuthorData;

export interface AuthorCardProps {
  authorData: AuthorData;
}
