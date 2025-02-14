import { useState, useEffect, useRef } from 'react';
import clsx from "clsx";

import styles from "./ProjectCardStyles.module.css";

/**
 * Interface for the ProjectCard component props.
 *
 * @property image - URL string for the project's image.
 * @property tags - Array of strings representing technology or project tags.
 * @property name - The project's name.
 * @property status - Current status of the project. Can be "Completed", "In Progress", "Abandoned", or "Ideation".
 * @property description - A brief description of the project.
 */
export interface ProjectCardProps {
  image: string
  tags: string[]
  name: string
  status: "Completed" | "In Progress" | "Abandoned" | "Ideation"
  description: string
};

/**
 * ProjectCard Component
 *
 * Displays an individual project card that includes an image, a status badge,
 * a title, a list of tags (which can be collapsed or expanded), and a description.
 *
 * If the tags container's content overflows (i.e., the tags list is longer than the visible area),
 * a "Show More" button is displayed to allow users to expand or collapse the list.
 *
 * @param {ProjectCardProps} props - The properties required to render the project card.
 * @returns A JSX.Element representing the project card.
 */
export function ProjectCard({ image, tags, name, status, description }: ProjectCardProps) {
  // State to track whether the tags list is expanded or collapsed.
  const [isExpanded, setIsExpanded] = useState(false);

  // State to determine if the "Show More" button should be shown (i.e., if the tags container overflows).
  const [showMoreButton, setShowMoreButton] = useState(false);

  // Ref to access the tags container DOM element.
  const tagsRef = useRef<HTMLDivElement>(null);

  /**
   * Effect to check if the tags container has more content than its visible area.
   *
   * Once the component is mounted and the tags container is rendered, the effect compares
   * the scrollHeight (total content height) with the clientHeight (visible height).
   * If the content overflows, the "Show More" button is enabled.
   */
  useEffect(() => {
    if (tagsRef.current) {
      const { scrollHeight, clientHeight } = tagsRef.current;
      setShowMoreButton(scrollHeight > clientHeight)
    }
  }, [tagsRef]);

  /**
   * Dynamically build the CSS class name for the status badge based on the project's status.
   * Uses the 'clsx' library to conditionally apply style classes.
   */
  const statusClassName = clsx(styles.cardStatus, {
    [styles["cardStatus--completed"]]: status === "Completed",
    [styles["cardStatus--inProgress"]]: status === "In Progress",
    [styles["cardStatus--abandoned"]]: status === "Abandoned",
    [styles["cardStatus--ideation"]]: status === "Ideation",
  });

  return (
    <div className={styles.card}>

      {/* Image section: Displays the project image and an overlay with the project status */}
      <div className={styles.cardImageWrapper}>
        <img
          className={styles.cardImage}
          src={image || "/placeholder.svg"}
          alt={name}
        />
        <div className={statusClassName}>{status}</div>
      </div>

      {/* Content section: Includes title, tags, toggle button, and description */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{name}</h3>

        {/* Tags container: Shows project tags; collapses based on state */}
        <div
          ref={tagsRef}
          className={clsx(styles.cardTags, !isExpanded && styles.cardTagsCollapsed)}
        >
          {tags.map((tag, index) => (
            <span key={index} className={styles.cardTag}>
              {tag}
            </span>
          ))}
        </div>

        {/* Conditionally render the "Show More" / "Show Less" button if tags overflow */}
        {showMoreButton && (
          <button
            className={styles.showMoreButton}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}

        {/* Project description */}
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}

