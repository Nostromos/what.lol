import { useState } from 'react';
import clsx from 'clsx';
import TagPill from '@site/src/components/TagPill/TagPill';
import styles from './ProjectShowcase.module.css';

export interface ProjectShowcaseProps {
  title: string;
  description: string;
  longDescription?: string;
  screenshots: string[];
  technologies: Array<{
    name: string;
    icon?: string;
  }>;
  features: string[];
  learnings: string[];
  githubUrl?: string;
  websiteUrl?: string;
  status: 'Completed' | 'In Progress' | 'Abandoned' | 'Ideation';
}

export function ProjectShowcase({
  title,
  description,
  longDescription,
  screenshots,
  technologies,
  features,
  learnings,
  githubUrl,
  websiteUrl,
  status,
}: ProjectShowcaseProps) {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const handlePrevious = () => {
    setCurrentScreenshot((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentScreenshot((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const statusClassName = clsx(styles.status, {
    [styles['status--completed']]: status === 'Completed',
    [styles['status--inProgress']]: status === 'In Progress',
    [styles['status--abandoned']]: status === 'Abandoned',
    [styles['status--ideation']]: status === 'Ideation',
  });

  return (
    <div className={styles.showcase}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={statusClassName}>{status}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.links}>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <svg className={styles.linkIcon} viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            )}
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(styles.linkButton, styles.linkButtonSecondary)}
              >
                <svg className={styles.linkIcon} viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                Visit Website
              </a>
            )}
          </div>
        </div>

        {/* Screenshot Carousel */}
        <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            <button
              className={styles.carouselButton}
              onClick={handlePrevious}
              aria-label="Previous screenshot"
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            <div className={styles.screenshotWrapper}>
              <img
                src={screenshots[currentScreenshot]}
                alt={`${title} screenshot ${currentScreenshot + 1}`}
                className={styles.screenshot}
              />
            </div>

            <button
              className={styles.carouselButton}
              onClick={handleNext}
              aria-label="Next screenshot"
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>

          {/* Carousel Dots */}
          {screenshots.length > 1 && (
            <div className={styles.carouselDots}>
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  className={clsx(
                    styles.dot,
                    currentScreenshot === index && styles.dotActive
                  )}
                  onClick={() => setCurrentScreenshot(index)}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Details Section */}
      <div className={styles.details}>
        {longDescription && (
          <section className={styles.section}>
            <h2>About the Project</h2>
            <p>{longDescription}</p>
          </section>
        )}

        <section className={styles.section}>
          <h2>Technologies Used</h2>
          <div className={styles.technologies}>
            {technologies.map((tech, index) => (
              <TagPill
                key={index}
                text={tech.name}
                icon={tech.icon || '/img/default-tech-icon.svg'}
              />
            ))}
          </div>
        </section>

        <div className={styles.columns}>
          <section className={styles.section}>
            <h2>Key Features</h2>
            <ul className={styles.featureList}>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>What I Learned</h2>
            <ul className={styles.learningList}>
              {learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectShowcase;