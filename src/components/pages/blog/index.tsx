import { PostMeta } from '@/types/post';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/library/revealOnScroll';
import { format, parseISO } from 'date-fns';

import styles from './blog.module.scss';

type BlogsViewProps = {
  posts: PostMeta[];
};

const BlogsView: React.FC<BlogsViewProps> = ({ posts }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.postsContainer}>
        {posts
          .sort((a, b) =>
            new Date(a.publishedDate) > new Date(b.publishedDate) ? -1 : 1,
          )
          .map((post) => {
            const { slug, title, abstract, tags, headerImage, publishedDate } =
              {
                ...post,
              };
            const formattedDate = format(parseISO(publishedDate), 'MMM, yyyy');

            return (
              <Link
                key={slug}
                className={styles.post}
                href={slug}
                aria-label={slug}
              >
                <div className={styles.infoContainer}>
                  <h2>{title}</h2>
                  <div className={styles.tagsContainer}>
                    {tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                  <p>{abstract}</p>
                  <p className={styles.dateText}>{formattedDate}</p>
                </div>
                <RevealOnScroll customClass={styles.imageContainer}>
                  <Image
                    src={headerImage}
                    alt={`title image for the project: ${title}`}
                    placeholder="blur"
                    fill
                    priority={true}
                  />
                </RevealOnScroll>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default BlogsView;
