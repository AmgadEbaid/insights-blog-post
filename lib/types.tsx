interface User {
  id: string;
  diplayname: string;
  email: string;
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
  titile: string;
  slug: string;
  content: string;
  description: string;
}
