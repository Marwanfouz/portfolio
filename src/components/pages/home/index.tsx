import React from "react";
import IntroSection from "./IntroSection";
import styles from "./home.module.scss";
import ProjectSection from "./ProjectSection";
import RevealOnScroll from "@/components/library/revealOnScroll";

const HomeView = () => {
  return (
    <div className={styles.pageContainer}>
      <IntroSection />
      <ProjectSection />
      <RevealOnScroll customClass={styles.contactContainer}>
        <>
          <a href="mailto:Marwanfouz76@gmail.com">hi</a>
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
