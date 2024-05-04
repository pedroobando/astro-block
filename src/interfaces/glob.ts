export interface AllPosts {
  frontmatter: XFrontmatter;
  file: string;
  url: string;
}

export interface XFrontmatter {
  layout: string;
  title: string;
  author: string;
  pubDate: Date;
  description: string;
  image: Image;
  tags: string[];
}

export interface Image {
  url: string;
  alt: string;
}
