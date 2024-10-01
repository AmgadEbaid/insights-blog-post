interface User {
  id: string;
  diplayname: string;
  email: string;
  image: string;
  IsAdmin: boolean;
}

interface post {
  id: string;
  titile: string;
  description: string;
  created: string;
  updated: string;
  favoriteCount: number;
  user: User;
}

interface singlePost {
  id: string;
  titile: string;
  description: string;
  content: string;
  created: string;
  updated: string;
  favoriteCount: number;
  user: User;
}

interface CreatePost_Type {
  titile?: string;
  slug: string;
  content?: string;
  description?: string;
}

interface comment {
  id: string;
  body: string;
  userId: string;
  articleId: string;
  created: string;
  updated: string;
  deleted: null;
  user: {
    id: string;
    diplayname: string;
    email: string;
    IsAdmin: boolean;
  };
}
interface OauthUser {
  diplayname: string;

  email?: string;

  image?: string;

  provider: string;
}
