import { useState } from 'react';
import clsx from 'clsx';
import TagPill from '@site/src/components/TagPill/TagPill';
import styles from './ProjectShowcaseV3.module.css';

export interface ProjectShowcaseV3Props {
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

export function ProjectShowcaseV3({
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
}: ProjectShowcaseV3Props) {
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

  // Split features and learnings for masonry layout
  const featuresColumn1 = features.filter((_, index) => index % 2 === 0);
  const featuresColumn2 = features.filter((_, index) => index % 2 === 1);
  
  return (
    <article className={styles.magazine}>
      {/* Hero Section with Magazine Cover Style */}
      <header className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <img
            src={screenshots[currentScreenshot]}
            alt={`${title} hero`}
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
          
          {/* Image Navigation */}
          {screenshots.length > 1 && (
            <div className={styles.imageNav}>
              <button
                className={styles.navButton}
                onClick={handlePrevious}
                aria-label="Previous screenshot"
              >
                <svg viewBox="0 0 24 24" width="32" height="32">
                  <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              <button
                className={styles.navButton}
                onClick={handleNext}
                aria-label="Next screenshot"
              >
                <svg viewBox="0 0 24 24" width="32" height="32">
                  <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </button>
            </div>
          )}
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <span className={statusClassName}>{status}</span>
            <span className={styles.category}>Project Showcase</span>
          </div>
          
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{description}</p>
          
          <div className={styles.heroLinks}>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroLink}
              >
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Source
              </a>
            )}
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(styles.heroLink, styles.heroLinkPrimary)}
              >
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                Visit Live Site
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Editorial Content */}
      <div className={styles.content}>
        {/* About Section with Drop Cap */}
        {longDescription && (
          <section className={styles.aboutSection}>
            <h2 className={styles.sectionTitle}>The Story</h2>
            <p className={styles.dropCapParagraph}>
              {longDescription}
            </p>
          </section>
        )}

        {/* Tech Stack Visualization */}
        <section className={styles.techSection}>
          <h2 className={styles.sectionTitle}>
            Tech Stack
            <span className={styles.sectionAccent}>The Tools Behind the Magic</span>
          </h2>
          
          <div className={styles.techRadar}>
            <div className={styles.techGrid}>
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className={styles.techItem}
                  style={{
                    '--delay': `${index * 0.1}s`
                  } as React.CSSProperties}
                >
                  <div className={styles.techIcon}>
                    {tech.icon && (
                      <img src={tech.icon} alt={tech.name} />
                    )}
                  </div>
                  <span className={styles.techName}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features in Masonry Layout */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>
            Key Features
            <span className={styles.sectionAccent}>What Makes It Special</span>
          </h2>
          
          <div className={styles.masonryGrid}>
            <div className={styles.masonryColumn}>
              {featuresColumn1.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <span className={styles.featureNumber}>{(index * 2) + 1}</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <div className={styles.masonryColumn}>
              {featuresColumn2.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <span className={styles.featureNumber}>{(index * 2) + 2}</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learnings as Pull Quotes */}
        <section className={styles.learningsSection}>
          <h2 className={styles.sectionTitle}>
            Key Takeaways
            <span className={styles.sectionAccent}>Lessons from the Journey</span>
          </h2>
          
          <div className={styles.learningsGrid}>
            {learnings.map((learning, index) => (
              <blockquote key={index} className={styles.pullQuote}>
                <p>{learning}</p>
                <cite className={styles.quoteNumber}>Lesson {index + 1}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        {screenshots.length > 1 && (
          <section className={styles.gallerySection}>
            <h2 className={styles.sectionTitle}>Visual Journey</h2>
            <div className={styles.galleryGrid}>
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  className={clsx(
                    styles.galleryThumb,
                    currentScreenshot === index && styles.galleryThumbActive
                  )}
                  onClick={() => setCurrentScreenshot(index)}
                >
                  <img src={screenshot} alt={`Screenshot ${index + 1}`} />
                  <span className={styles.thumbLabel}>View {index + 1}</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Call to Action Footer */}
        <footer className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Explore the Project</h3>
          <div className={styles.ctaLinks}>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Browse Code
              </a>
            )}
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(styles.ctaButton, styles.ctaButtonPrimary)}
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                </svg>
                Experience Live
              </a>
            )}
          </div>
        </footer>
      </div>
    </article>
  );
}

export default ProjectShowcaseV3;