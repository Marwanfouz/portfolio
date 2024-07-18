import React from 'react';
import Image from 'next/image';
import Parallax from '@/components/library/parallax';
import WaveTitle from '@/components/library/waveTitle';
import RevealOnScroll from '@/components/library/revealOnScroll';
import { PostMeta } from '@/types/post';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const styles = require('./titleCard.module.scss');

type TitleCardProps = {
  meta: PostMeta;
};

const TitleCard: React.FC<TitleCardProps> = ({ meta }) => {
  return (
    <div className={styles.headerSection}>
      <div className={styles.headerCardContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={meta.headerImage}
            alt={`Blog title image for the article: ${meta.title}`}
            placeholder="blur"
            fill
            priority={true}
          />
        </div>
        <Parallax customClass={styles.descriptionContainer} offset={100}>
          <>
            <WaveTitle
              customClassName={styles.title}
              title={meta.title}
              initialDelay={2}
              wordDelay={0.1}
            />
            <ul>
              {meta.tags.map((tag, index) => (
                <RevealOnScroll
                  key={index}
                  delay={0.5 + 0.1 * index}
                  duration={0.4}
                >
                  <li>{tag}</li>
                </RevealOnScroll>
              ))}
            </ul>
            <RevealOnScroll delay={1}>
              <p>{meta.abstract}</p>
            </RevealOnScroll>
            <div className={styles.linkContainer}>
              {meta.githubLink && (
                <a href={meta.githubLink} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              )}
              {meta.externalLink && (
                <a href={meta.externalLink} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </>
        </Parallax>
      </div>
    </div>
  );
};

export default TitleCard;
