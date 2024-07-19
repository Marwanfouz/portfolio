import React from "react";
import Image from "next/image";
import Link from "next/link";
import WaveTitle from "@/components/library/waveTitle";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Parallax from "@/components/library/parallax";
import { ProjectDetails } from "../Projects";
import RevealOnScroll from "@/components/library/revealOnScroll";

import styles from "./projectCard.module.scss";

type ProjectCardProps = {
  projectDetails: ProjectDetails;
  rightOriented?: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectDetails,
  rightOriented = true,
}) => {
  return (
    <div className={styles.projectContainer}>
      <Link
        aria-label={projectDetails.title}
        href={projectDetails.blogLink}
        className={
          rightOriented
            ? styles.projectContainerInner
            : styles.projectContainerInnerLeft
        }
      >
        <div className={styles.projectImageContainer}>
          <Image
            src={projectDetails.image}
            alt="place holder image"
            placeholder="blur"
            fill
            priority={true}
          />
          <div className={styles.imageOverlay} />
        </div>
        <Parallax
          customClass={
            rightOriented
              ? styles.projectDetailsContainer
              : styles.projectDetailsContainerLeft
          }
          offset={20}
        >
          <>
            <WaveTitle
              title={projectDetails.title}
              customClassName={styles.introName}
              initialDelay={2}
              wordDelay={0.1}
            />
            <>
              <ul className={styles.skillsContainer}>
                {projectDetails.skills.map((skill, index) => (
                  <RevealOnScroll
                    key={index}
                    delay={0.5 + 0.1 * index}
                    duration={0.4}
                  >
                    <li>{skill}</li>
                  </RevealOnScroll>
                ))}
              </ul>
              <RevealOnScroll delay={1}>
                <p>{projectDetails.description}</p>
              </RevealOnScroll>

              <div className={styles.linksContainer}>
                {projectDetails.githubLink && (
                  <a href={projectDetails.githubLink} aria-label="github link">
                    <FaGithub />
                  </a>
                )}
                {projectDetails.externalLink && (
                  <a
                    href={projectDetails.externalLink}
                    aria-label="project details link"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </>
          </>
        </Parallax>
      </Link>
    </div>
  );
};

export default ProjectCard;
