/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    sessions: Session;
    media: Media;
    blogs: Blog;
    pages: Page;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  imageUrl?: string | null;
  role?: ('admin' | 'user') | null;
  emailVerified?: string | null;
  accounts?:
    | {
        provider?: string | null;
        providerAccountId?: string | null;
        id?: string | null;
      }[]
    | null;
  verificationTokens?:
    | {
        identifier?: string | null;
        token?: string | null;
        expires?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sessions".
 */
export interface Session {
  id: string;
  user: string | User;
  sessionToken: string;
  expires?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blogs".
 */
export interface Blog {
  id: string;
  name: string;
  slug: string;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  description_html?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  name: string;
  slug: string;
  layout?: (TestimonialsTypes | CardsTypes | ContainerScrollTypes | HeroParallaxTypes)[] | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TestimonialsTypes".
 */
export interface TestimonialsTypes {
  testimonials?:
    | {
        quote?: string | null;
        name?: string | null;
        title?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Testimonials';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CardsTypes".
 */
export interface CardsTypes {
  cards?:
    | {
        title?: string | null;
        description?: string | null;
        link?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Cards';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContainerScrollTypes".
 */
export interface ContainerScrollTypes {
  hero_data: string;
  title: string;
  subtitle: string;
  image: string | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'ContainerScroll';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroParallaxTypes".
 */
export interface HeroParallaxTypes {
  hero_title?: string | null;
  hero_description?: string | null;
  hero?:
    | {
        title?: string | null;
        link?: string | null;
        thumbnail?: string | Media | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'HeroParallax';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}