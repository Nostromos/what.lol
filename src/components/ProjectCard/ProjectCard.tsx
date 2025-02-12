import clsx from "clsx"
import styles from "./ProjectCardStyles.module.css"
import Placeholder from "@site/static/img/placeholder.svg"

interface ProjectCardProps {
  image: string
  tags: string[]
  name: string
  status: "Completed" | "In Progress" | "Abandoned" | "Ideation"
  description: string
}

export function ProjectCard({ image, tags, name, status, description }: ProjectCardProps) {
  const statusClassName = clsx(styles.cardStatus, {
    [styles["cardStatus--completed"]]: status === "Completed",
    [styles["cardStatus--inProgress"]]: status === "In Progress",
    [styles["cardStatus--abandoned"]]: status === "Abandoned",
    [styles["cardStatus--ideation"]]: status === "Ideation",
  })

  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img className={styles.cardImage} src={image ? image : "./placeholder.png"} alt={name} />
        <div className={statusClassName}>{status}</div>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <div className={styles.cardTags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.cardTag}>
              {tag}
            </span>
          ))}
        </div>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  )
}

