import {json} from '@shopify/remix-oxygen';
export interface Blogposts {
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
  body: Body[];
}
