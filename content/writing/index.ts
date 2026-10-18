export type WritingPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO date. Add it only when the post is real. */
  date: string;
};

/**
 * Writing stays out of the navigation until this list has posts.
 *
 * To publish later:
 * 1. Add content/writing/{slug}.mdx
 * 2. Add the post metadata here
 * 3. Add app/writing/page.tsx and app/writing/[slug]/page.tsx,
 *    following app/work/[slug]/page.tsx
 *
 * getNavItems() reads this array and will show Writing on its own.
 */
export const writingPosts: WritingPost[] = [];
