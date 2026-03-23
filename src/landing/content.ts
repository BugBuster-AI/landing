export const githubRepoUrl = 'https://github.com/BugBuster-AI/bugbuster';
export const telegramUrl = 'https://t.me/bugbuster_news';

export type LandingLink = { label: string; href: string };

export const landingContent = {
  productName: 'BugBuster',

  headerLogoAlt: 'BugBuster logo',

  hero: {
    kicker: 'Vision-language UI automation',
    headline: 'UI tests in natural language',
    subheadline: 'BugBuster sees the interface like a user. Describe steps in plain language — no code, selectors, or DOM access.',
    subheadlineStack: 'VLM + Grounding + Playwright.',
    links: {
      github: { label: 'GitHub', href: githubRepoUrl },
      telegram: { label: 'Telegram', href: telegramUrl },
    },
  },

  about: {
    title: 'What it is',
    points: [
      'Test cases in natural language — no Gherkin, Cucumber, or abstractions',
      'No selectors or DOM access — the platform sees the interface like a user',
      'Stable interaction with dynamic UI thanks to visual grounding',
    ],
  },

};
