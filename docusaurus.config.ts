import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Michael Monaghan',
  tagline: 'Grit your teeth and do the work',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://what.lol',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nostromos', // Usually your GitHub org/user name.
  projectName: 'personal-site-2025', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: '6ACQVW8CXH',
      apiKey: 'c4e088eb1b9f7e99ab9828ef7280822d',
      indexName: 'what',
      contextualSearch: true,
      searchPagePath: 'search',
      insights: true,
    },
    // Replace with your project's social card
    announcementBar: {
      id: 'looking-for-work',
      content: '🎉 I\'m looking for a new role! More information <a rel ="noopener noreferrer" href="/blog/2024/02/24/what-im-looking-for">here</a>... 🎁',
      backgroundColor: '#D9EAFD',
      textColor: '#091E42',
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'MM',
      logo: {
        alt: 'Black cat with curly tail looking suspicious',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/about', label: 'About', position: 'left' },
        { to: '/blog', label: 'Writing', position: 'left' },
        { to: "/projects", label: 'Projects & Docs', position: 'left' },
        { to: '/contact', label: 'Contact', position: 'left' },
        {
          href: 'https://github.com/Nostromos',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Michael Monaghan.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
