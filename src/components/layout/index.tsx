import React, { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "./navBar";
import Footer from "./footer";
import OG from "../../../public/ag-og.png";

const styles = require("./layout.module.scss");

type LayoutProps = {
  children: React.ReactElement;
  pageMeta?: {};
};

const Layout: React.FC<LayoutProps> = ({ children, pageMeta }) => {
  const [mounted, setMounted] = useState(false);

  const meta = {
    title: "Marwan Fouz",
    description:
      "Marwan is a pretty cool dude and you should definitely check out his portfolio.",
    type: "website",
    image: `https://MarwanFouz.com${OG.src}`,
    imageAlt: "Hey its a picture of me... Marwan Fouz",
    url: `https://MarwanFouz.com`,
    ...pageMeta,
  };

  const pageHead = (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Marwan Fouz" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={meta.imageAlt} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <meta name="twitter:image" content={meta.image} />
      <meta name="twitter:image:alt" content={meta.imageAlt} />
      <meta name="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:site" content="@Marooo_72" />
      <meta property="twitter:creator" content="@Marooo_72" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return pageHead;
  }

  return (
    <div>
      {pageHead}
      <NavBar />
      <main className={styles.mainContentContainer}>
        {React.cloneElement(children)}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
