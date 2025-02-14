import { useState, useMemo, type ReactNode } from 'react';
import Layout from '@theme/Layout';

import { ProjectCard } from "@site/src/components/ProjectCard/ProjectCard"

import styles from "./styles.module.css"

const cards = [{
    image: require("@site/static/img/tifco.vercel.app_.png").default,
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "zod", "Vercel", "Node"],
    name: "TifCo",
    status: "Completed" as const,
    description: "A NextJS dashboarding app with dashboards, forms, auth, and other fun stuff too.",
  },
  {
    image: require("@site/static/img/ggob.vercel.app_applications(Desktop (Small)) (2).png").default,
    tags: ["Typescript", "Next.js", "React Hook Form", "Tailwind", "zod", "Vercel", "Prisma", "Postgres"],
    name: "ggob",
    status: "Completed" as const,
    description: "Job Application tracker using Next, Tailwind, Prisma, and forms.",
  },
]

export default function ProjectsPage(): ReactNode {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    cards.forEach((card) => card.tags.forEach((tag) => tagSet.add(tag)))
    return Array.from(tagSet)
  }, []);

  const filteredCards = useMemo(() => {
    if (selectedTags.length === 0) return cards
    return cards.filter((card) => card.tags.some((tag) => selectedTags.includes(tag)))
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (
      prev.includes(tag) ?
      prev.filter((t) => t !== tag) :
      [...prev, tag]
    ));
  }

  return (
    <Layout
      title={'Projects'}
      description="Page containing filtered list of projects and work"
    >
      <main>
        <div className={styles.container}>
          <h1 className={styles.title}>Projects & Work Products</h1>
          <div className={styles.filterContainer}>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`${styles.filterButton} ${selectedTags.includes(tag) ?
                  styles.filterButtonActive :
                  ""}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className={styles.cardGrid}>
            {filteredCards.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}