import { MDXComponents } from "mdx/types";

const styles = require("./mdxComponents.module.scss");

const mdxComponents: MDXComponents = {
  h1: (props: any) => <h1 className={styles.h1} {...props} />,
  h2: (props: any) => <h2 className={styles.h2} {...props} />,
  p: (props: any) => <p className={styles.p} {...props} />,
  a: (props: any) => <a aria-label="work-experince" className={styles.a} {...props} />,
};

export default mdxComponents;
