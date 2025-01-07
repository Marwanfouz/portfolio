import React from 'react';
import IntroSection from './IntroSection';
import styles from './home.module.scss';
import ProjectSection from './ProjectSection';
import RevealOnScroll from '@/components/library/revealOnScroll';
import { FaWhatsapp } from 'react-icons/fa';

const HomeView = () => {
  return (
    <div className={styles.pageContainer}>
      <IntroSection />
      <ProjectSection />
      <RevealOnScroll customClass={styles.contactContainer}>
        <>
          <a href="mailto:Marwanfouz76@gmail.com" aria-label="mail to contact">
            hi
          </a>
          <a
            href="https://wa.me/201201910413"
            target="_blank"
            aria-label="linkedin"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
          <p id="contact">
            My inbox is always open - so if you want to work together on
            something don&apos;t be afraid to say hi.
          </p>
        </>
      </RevealOnScroll>
    </div>
  );
};

export default HomeView;
