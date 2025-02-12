import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import { ProjectCard } from "@site/src/components/ProjectCard/ProjectCard"

import styles from "./styles.module.css"

export default function Projects(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={'Projects'}
      description="Projects page"
    >
      <main>
        <div className={styles.container}>
          <h1 className={styles.title}>Work & Projects</h1>
          <div className={styles.cardGrid}>
            <Link
              to="/docs/intro"
            >
              <ProjectCard
                image={useBaseUrl("/img/tifco.vercel.app_.png")}
                tags={["React", "TypeScript", "Next.js", "Tailwind", "zod", "Vercel", "Node"]}
                name="TifCo"
                status="Completed"
                description="A NextJS dashboarding app with dashboards, forms, auth, and other fun stuff too."
              />
            </Link>
            <ProjectCard
              image={useBaseUrl("/img/placeholder.png")}
              tags={["Node.js", "Express"]}
              name="Backend Service"
              status="In Progress"
              description="Scalable backend service built with Node.js and Express."
            />
            <ProjectCard
              image={useBaseUrl("/img/placeholder.png")}
              tags={["Vue", "Vuex"]}
              name="Dashboard UI"
              status="Ideation"
              description="Admin dashboard interface developed using Vue.js and Vuex."
            />
            <Link
              to="/docs/intro"
            >
              <ProjectCard
                image={useBaseUrl("/img/placeholder.png")}
                tags={["React", "TypeScript"]}
                name="Project Alpha"
                status="Abandoned"
                description="A cutting-edge React application with TypeScript integration."
              />
            </Link>
            <Link
              to="/docs/intro"
            >
              <ProjectCard
                image={useBaseUrl("/img/tifco.vercel.app_.png")}
                tags={["React", "TypeScript", "Next.js", "Tailwind", "zod", "Vercel", "Node"]}
                name="TifCo"
                status="Completed"
                description="A NextJS dashboarding app with dashboards, forms, auth, and other fun stuff too."
              />
            </Link>
            <ProjectCard
              image={useBaseUrl("/img/placeholder.png")}
              tags={["Node.js", "Express"]}
              name="Backend Service"
              status="In Progress"
              description="Scalable backend service built with Node.js and Express."
            />
            <ProjectCard
              image={useBaseUrl("/img/placeholder.png")}
              tags={["Vue", "Vuex"]}
              name="Dashboard UI"
              status="Ideation"
              description="Admin dashboard interface developed using Vue.js and Vuex."
            />
            <Link
              to="/docs/intro"
            >
              <ProjectCard
                image={useBaseUrl("/img/placeholder.png")}
                tags={["React", "TypeScript"]}
                name="Project Alpha"
                status="Abandoned"
                description="A cutting-edge React application with TypeScript integration."
              />
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  )
}