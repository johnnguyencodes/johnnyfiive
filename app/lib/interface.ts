export interface Blogpost {
  title: string;
  slug: {
    current: string;
  };
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  overview: string;
  seoImageUrl: string;
}
