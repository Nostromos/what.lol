import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Michael Monaghan',
  tagline: 'Grit your teeth and do the work',
  favicon: 'img/favicon.ico',

  url: 'http://what.lol',
  baseUrl: '/',

  organizationName: 'nostromos',
  projectName: 'what.lol',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: ['@saucelabs/theme-github-codeblock'],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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
    announcementBar: {
      id: 'looking-for-work',
      content: '🎉 I\'m looking for a new role! More information <a rel ="noopener noreferrer" href="/blog/2024/02/24/what-im-looking-for">here</a>... 🎁',
      backgroundColor: '#D9EAFD',
      textColor: '#091E42',
    },
    image: 'img/social-card.jpeg',
    navbar: {
      title: 'MM',
      logo: {
        alt: 'Black cat with curly tail looking suspicious',
        src: 'img/logo.svg',
        srcDark: 'img/logoDark.svg',
        href: '/',
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
      style: 'light',
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
