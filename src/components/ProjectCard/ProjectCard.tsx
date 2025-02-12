import clsx from "clsx"
import styles from "./CardStyles.module.css"
import Placeholder from "@site/static/img/placeholder.svg"

interface ProjectCardProps {
  image: string
  tags: string[]
  name: string
  status: "completed" | "in progress" | "abandoned"
  description: string
}

export function ProjectCard({ image, tags, name, status, description }: ProjectCardProps) {
  const statusClassName = clsx(styles.cardStatus, {
    [styles["cardStatus--completed"]]: status === "completed",
    [styles["cardStatus--inProgress"]]: status === "in progress",
    [styles["cardStatus--abandoned"]]: status === "abandoned",
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

