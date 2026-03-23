export const githubRepoUrl = 'https://github.com/BugBuster-AI/bugbuster';
export const githubDiscussionsUrl = 'https://github.com/orgs/BugBuster-AI/discussions';
export const telegramUrl = 'https://t.me/bugbuster_news';

export type LandingLink = { label: string; href: string };

export const landingContent = {
  productName: 'BugBuster',

  headerLogoAlt: 'BugBuster logo',

  hero: {
    kicker: 'Автоматизация UI на vision-language',
    headline: 'Автоматизация UI тестирования на естественном языке',
    subheadline: 'BugBuster видит интерфейс как пользователь. Описывайте шаги простым языком — без кода, селекторов и доступа к DOM.',
    subheadlineStack: 'VLM + Grounding + Playwright.',
    links: {
      github: { label: 'GitHub', href: githubRepoUrl },
      telegram: { label: 'Telegram', href: telegramUrl },
    },
  },

  about: {
    title: 'Что это',
    points: [
      'Тест-кейсы на естественном языке — без Gherkin, Cucumber и абстракций',
      'Не нужны селекторы и доступ к DOM — платформа видит интерфейс как пользователь',
      'Стабильная работа с динамическим UI благодаря визуальному grounding',
    ],
    discussionsNote: 'Вопросы и обсуждение — в GitHub Discussions.',
    discussionsUrl: githubDiscussionsUrl,
  },

};
