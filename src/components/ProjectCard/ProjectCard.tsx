import clsx from "clsx"
import styles from "./ProjectCardStyles.module.css"
import { useState, useEffect, useRef } from 'react'

interface ProjectCardProps {
  image: string
  tags: string[]
  name: string
  status: "Completed" | "In Progress" | "Abandoned" | "Ideation"
  description: string
}

export function ProjectCard({ image, tags, name, status, description }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tagsRef.current) {
      const { scrollHeight, clientHeight } = tagsRef.current;
      setShowMoreButton(scrollHeight > clientHeight)
    }
  }, [tagsRef]);

  const statusClassName = clsx(styles.cardStatus, {
    [styles["cardStatus--completed"]]: status === "Completed",
    [styles["cardStatus--inProgress"]]: status === "In Progress",
    [styles["cardStatus--abandoned"]]: status === "Abandoned",
    [styles["cardStatus--ideation"]]: status === "Ideation",
  })

  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img className={styles.cardImage} src={image || "/placeholder.svg"} alt={name} />
        <div className={statusClassName}>{status}</div>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <div ref={tagsRef} className={clsx(styles.cardTags, !isExpanded && styles.cardTagsCollapsed)}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.cardTag}>
              {tag}
            </span>
          ))}
        </div>
        {showMoreButton && (
          <button className={styles.showMoreButton} onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  )
}

