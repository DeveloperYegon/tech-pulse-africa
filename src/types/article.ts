export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  imageUrl: string;
  featured: boolean;
  readTime: number;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
}