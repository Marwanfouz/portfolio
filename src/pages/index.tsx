import type { NextPage } from 'next';
import Head from 'next/head';
// import BlogSection from '../components/pages/landing/blog';
import IntroSection from '../components/pages/landing/intro';
import ProjectSection from '../components/pages/landing/project';
import ContactSection from '../components/pages/landing/contact';

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Austin Gericke</title>
        <meta
          name="description"
          content="I'm Austin, a data engineer turned web developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroSection />
      <ProjectSection />
      {/* <BlogSection /> */}
      <ContactSection />
    </>
  );
};

export default LandingPage;
