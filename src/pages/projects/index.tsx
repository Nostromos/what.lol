import { useState, useMemo, type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import { ProjectCard, type ProjectCardProps } from "@site/src/components/ProjectCard/ProjectCard"

import styles from "./styles.module.css"

/**
 * Sample data representing project cards.
 *
 * Each card includes:
 * - image: Visual representation of the project.
 * - tags: Keywords that describe the technologies or concepts used.
 * - name: The project name.
 * - status: Current project status (e.g., "Completed").
 * - description: A brief summary of what the project does.
 * 
 * @type ProjectCardProps
 */
const cards: ProjectCardProps[] = [
  // {
  //   image: require("@site/static/img/").default,
  //   tags: ["", "", ""],
  //   name: "",
  //   status: "" as const,
  //   description: "",
  //   link: "",
  //   docsUrl: "",
  // },
  {
    image: require("@site/static/img/tifco.vercel.app_.png").default, // useBaseUrl() is a runtime hook and for some reason wouldn't work here. My theory is that its something to do with webpack and require() sidesteps that weirdness. 
    // TODO: Figure out why useBaseUrl() breaks where require() works. Possibly to do with webpack.
    tags: ["React", "Typescript", "Next.js", "Tailwind", "zod", "Vercel", "Node"],
    name: "TifCo",
    status: "Completed" as const, // `as const` so ts doesn't take it as string
    description: "A NextJS dashboarding app with dashboards, forms, auth, and other fun stuff too.",
    link: "https://tifco.vercel.app/",
    docsUrl: "dashboard-tifco",
  },
  {
    image: require("@site/static/img/ggob.vercel.app_applications(Desktop (Small)) (2).png").default,
    tags: ["Typescript", "Next.js", "React Hook Form", "Tailwind", "zod", "Vercel", "Prisma", "Postgres"],
    name: "ggob",
    status: "Completed" as const,
    description: "Job Application tracker using Next, Tailwind, Prisma, and forms.",
    link: "https://ggob.vercel.app/",
    docsUrl: "ggob",
  },
  {
    image: require("@site/static/img/whatecom.jpg").default,
    tags: ["React", "Javascript", "Express", "Postgres", "Vite", "Jest", "OpenAPI"],
    name: "what.ecom",
    status: "Abandoned" as const,
    description: "React ecom site with express API, normalized postgres datastore, and documentation.",
    link: "",
    docsUrl: "whatecom",
  },
  {
    image: require("@site/static/img/notionclone.png").default,
    tags: ["React", "Typescript", "WYSIWYG", "Text Editor", "Blocknote", "Tiptap"],
    name: "Clonotion",
    status: "Completed" as const,
    description: "A Notion-style WYSIWYG text editor with slash commands, media embedding, formatting, tables, and persistance.",
    link: "https://ggob.vercel.app/notes",
    docsUrl: "notion-clone",
  },
  {
    image: require("@site/static/img/qli.png").default,
    tags: ["Golang", "os [Go]", "testing [Go]", "time [Go]"],
    name: "QLI - Quiz Line Interface",
    status: "Completed" as const,
    description: "A CLI quiz game written in Go",
    link: "https://github.com/Nostromos/qli",
    docsUrl: "qli",
  },
  {
    image: require("@site/static/img/placeholder.png").default,
    tags: ["Golang", "html/template", "encoding/json", "os [Go]"],
    name: "Choose Your Own Adventure",
    status: "In Progress" as const,
    description: "A Choose Your Own Adventure CLI game written in Go",
    link: "https://github.com/Nostromos/cyoa",
    docsUrl: "cyoa",
  },
  {
    image: require("@site/static/img/placeholder.png").default,
    tags: ["Golang", "html/template", "encoding/json", "os [Go]"],
    name: "Go/shorten",
    status: "Completed" as const,
    description: "A URL Shortener written in Go",
    link: "https://github.com/Nostromos/url-shortener",
    docsUrl: "urlshortener",
  },
];

/**
 * ProjectsPage Component
 *
 * This page displays a list of projects (cards) and allows users to filter them by selecting tags.
 * It uses React hooks to manage state and memoization for performance optimization.
 *
 * @returns A React node representing the projects page.
 */
export default function ProjectsPage(): ReactNode {
  // State to track which tags are currently selected for filtering.
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  /**
   * Compute a list of unique tags from all project cards.
   *
   * useMemo ensures that this is only re-run when the cards data changes,
   * which is efficient since the list of cards is static.
   */
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    cards.forEach((card) =>
      card.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet);
  }, []);

  /**
   * Filter project cards based on the selected tags.
   *
   * If no tags are selected, return all cards. Otherwise, return cards that contain at least
   * one tag that matches any of the selected tags.
   *
   * The filtering is re-computed only when the selectedTags array changes.
   */
  const filteredCards = useMemo(() => {
    if (selectedTags.length === 0) return cards
    return cards.filter((card) => card.tags.some((tag) => selectedTags.includes(tag)))
  }, [selectedTags]);

  /**
   * Toggle a tag's selection state.
   *
   * If the tag is already selected, it removes it from the state.
   * Otherwise, it adds the tag to the state.
   *
   * @param tag - The tag to toggle.
   */
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
          <h1 className={styles.title}>Projects & Documentation</h1>
          <p>A list of projects and work that I've done with associated documentation.</p>

          {/* Filter container: Displays buttons for each unique tag */}
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

          {/* Card grid: Displays filtered project cards */}
          <div className={styles.cardGrid}>
            {filteredCards.map((card, index) => (
              <Link to={`/docs/${card.docsUrl}`}>
                <ProjectCard key={index} {...card} />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}