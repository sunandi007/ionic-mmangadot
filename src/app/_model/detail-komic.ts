export interface DetailComic {
  title: string;
  subTitle: string;
  description: string;
  subject: string;
  image: string;
  type: string;
  category: Array<string>;
  author: string;
  totalReader: number;
  howToRead: string;
}

export interface MangaList {
  title: string;
  image: string;
  rating: number;
  slug: string;
}

export interface ChapterList {
  chapter: string;
  slides: Array<string>;
  createdAt: Date;
  _id: string;
}
