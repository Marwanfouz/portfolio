import React from "react";
import { PostMeta } from "@/types/post";
import { MDXProvider } from "@mdx-js/react";
import mdxComponents from "@/components/library/mdxComponents";
import Layout from "@/components/layout";
import TitleCard from "../titleCard";

const styles = require("./post.module.scss");

type PostProps = {
  children: React.ReactElement;
  meta: PostMeta;
};

const Post: React.FC<PostProps> = ({ children, meta }) => {
  const pageMeta = {
    title: `Marwan Fouz | ${meta.title}`,
    description: meta.abstract,
    url: `https://Marwan Fouz.com/${meta.slug}`,
  };

  return (
    <MDXProvider components={mdxComponents}>
      <Layout pageMeta={pageMeta}>
        <article className={styles.pageContainer}>
          <TitleCard meta={meta} />
          <div className={styles.postContainer}>
            <div className={styles.postContainerInner}>{children}</div>
          </div>
        </article>
      </Layout>
    </MDXProvider>
  );
};

export default Post;
