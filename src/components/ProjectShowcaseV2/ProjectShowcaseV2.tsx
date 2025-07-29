import { useState } from 'react';
import clsx from 'clsx';
import styles from './ProjectShowcaseV2.module.css';

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

type TabType = 'overview' | 'features' | 'technologies' | 'learnings';

export function ProjectShowcaseV2({
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
  const [activeTab, setActiveTab] = useState<TabType>('overview');

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

  const getStatusProgress = () => {
    switch (status) {
      case 'Ideation': return 25;
      case 'In Progress': return 60;
      case 'Completed': return 100;
      case 'Abandoned': return 0;
      default: return 0;
    }
  };

  const statusClassName = clsx(styles.statusBadge, {
    [styles['statusBadge--completed']]: status === 'Completed',
    [styles['statusBadge--inProgress']]: status === 'In Progress',
    [styles['statusBadge--abandoned']]: status === 'Abandoned',
    [styles['statusBadge--ideation']]: status === 'Ideation',
  });

  return (
    <div className={styles.showcase}>
      <div className={styles.container}>
        {/* Left Side - Screenshot Carousel */}
        <div className={styles.carouselSection}>
          <div className={styles.carouselWrapper}>
            <div className={styles.screenshotContainer}>
              <img
                src={screenshots[currentScreenshot]}
                alt={`${title} screenshot ${currentScreenshot + 1}`}
                className={styles.screenshot}
              />
              
              {/* Carousel Controls */}
              <button
                className={clsx(styles.carouselControl, styles.carouselControlPrev)}
                onClick={handlePrevious}
                aria-label="Previous screenshot"
              >
                <svg viewBox="0 0 24 24" width="28" height="28">
                  <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              
              <button
                className={clsx(styles.carouselControl, styles.carouselControlNext)}
                onClick={handleNext}
                aria-label="Next screenshot"
              >
                <svg viewBox="0 0 24 24" width="28" height="28">
                  <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </button>
            </div>

            {/* Carousel Indicators */}
            {screenshots.length > 1 && (
              <div className={styles.carouselIndicators}>
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    className={clsx(
                      styles.indicator,
                      currentScreenshot === index && styles.indicatorActive
                    )}
                    onClick={() => setCurrentScreenshot(index)}
                    aria-label={`Go to screenshot ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Project Info */}
        <div className={styles.infoSection}>
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.statusWrapper}>
              <span className={statusClassName}>{status}</span>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill} 
                  style={{ width: `${getStatusProgress()}%` }}
                />
              </div>
            </div>
            <p className={styles.description}>{description}</p>
          </div>

          {/* Tab Navigation */}
          <div className={styles.tabsContainer}>
            <nav className={styles.tabNav}>
              <button
                className={clsx(styles.tabButton, activeTab === 'overview' && styles.tabButtonActive)}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button
                className={clsx(styles.tabButton, activeTab === 'features' && styles.tabButtonActive)}
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
              <button
                className={clsx(styles.tabButton, activeTab === 'technologies' && styles.tabButtonActive)}
                onClick={() => setActiveTab('technologies')}
              >
                Technologies
              </button>
              <button
                className={clsx(styles.tabButton, activeTab === 'learnings' && styles.tabButtonActive)}
                onClick={() => setActiveTab('learnings')}
              >
                Learnings
              </button>
            </nav>

            {/* Tab Content */}
            <div className={styles.tabContent}>
              {activeTab === 'overview' && (
                <div className={styles.tabPanel}>
                  <div className={styles.overviewContent}>
                    {longDescription ? (
                      <p>{longDescription}</p>
                    ) : (
                      <p>{description}</p>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className={styles.actionButtons}>
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionButton}
                      >
                        <svg className={styles.buttonIcon} viewBox="0 0 24 24" width="20" height="20">
                          <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {websiteUrl && (
                      <a
                        href={websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={clsx(styles.actionButton, styles.actionButtonSecondary)}
                      >
                        <svg className={styles.buttonIcon} viewBox="0 0 24 24" width="20" height="20">
                          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className={styles.tabPanel}>
                  <ul className={styles.featureList}>
                    {features.map((feature, index) => (
                      <li key={index} className={styles.featureItem}>
                        <span className={styles.featureIcon}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'technologies' && (
                <div className={styles.tabPanel}>
                  <div className={styles.techGrid}>
                    {technologies.map((tech, index) => (
                      <div key={index} className={styles.techCard}>
                        {tech.icon && (
                          <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            className={styles.techIcon}
                          />
                        )}
                        <span className={styles.techName}>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'learnings' && (
                <div className={styles.tabPanel}>
                  <ul className={styles.learningList}>
                    {learnings.map((learning, index) => (
                      <li key={index} className={styles.learningItem}>
                        <span className={styles.learningIcon}>💡</span>
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectShowcaseV2;