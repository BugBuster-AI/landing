export const githubRepoUrl = 'https://github.com/BugBuster-AI/bugbuster';
export const telegramUrl = 'https://t.me/bugbuster_news';

export type LandingLink = { label: string; href: string };

export const landingContent = {
  productName: 'BugBuster',

  headerLogoAlt: 'BugBuster logo',

  hero: {
    kicker: 'Vision-language UI automation',
    headline: 'Write end-to-end UI tests without code or selectors.',
    subheadline:
      'BugBuster sees your interface like a user. Describe steps in plain language, then run stable Playwright-based automation powered by vision grounding.',
    primaryCta: {
      label: 'Open the GitHub repo',
      href: githubRepoUrl,
      microcopy: 'Open-source. No paywall.',
    },
    telegramLink: {
      label: 'Updates on Telegram',
      href: telegramUrl,
    },
  },

  socialProof: {
    title: 'Built for teams that need automation that actually survives UI changes',
    logos: [
      { name: 'QA Ops' },
      { name: 'Frontend Labs' },
      { name: 'Ship Faster Co.' },
      { name: 'Product Engineering' },
      { name: 'E2E Guild' },
    ],
    testimonials: [
      {
        quote:
          'We stopped fighting selectors. Test cases read like instructions, and runs are easier to maintain.',
        author: 'QA Engineer',
        role: 'Product team',
      },
      {
        quote:
          'Ambiguous steps get flagged before we waste compute. That reduced our retry cycles a lot.',
        author: 'Automation Lead',
        role: 'QA Automation',
      },
    ],
  },

  problemSolution: {
    problemTitle: 'Manual QA and brittle E2E tests slow you down',
    painPoints: [
      'Automation setup takes too long for every new flow',
      'Selectors break when the UI changes',
      'You need stable locators, DOM access, and automation skills',
      'Dynamic screens make "old" test logic unreliable',
    ],
    solutionTitle: 'BugBuster understands the UI visually',
    solutionPoints: [
      'No code required: write test steps in natural language',
      'No selectors: describe what to do, not where it is',
      'Stable interaction with dynamic UI using vision grounding',
      'Validation helps catch ambiguous instructions before execution',
    ],
  },

  demo: {
    title: 'See the workflow',
    steps: [
      {
        title: 'Describe the action',
        body: 'Use verbs and clear intent (click, type, scroll, wait). Add context only when needed.',
      },
      {
        title: 'Save & validate',
        body: 'BugBuster analyzes step clarity and context. Unambiguous commands are accepted.',
      },
      {
        title: 'Run & review results',
        body: 'Get per-step Passed/Failed, plus trace details when a step breaks.',
      },
    ],
  },

  features: {
    title: 'Key benefits',
    items: [
      { title: 'Plain-language test cases', body: 'Write steps without learning a testing DSL.' },
      { title: 'No selectors, no DOM', body: 'Interact by describing what you see, not HTML structure.' },
      { title: 'More reliable dynamic UI', body: 'Grounding keeps interactions stable on changing screens.' },
      { title: 'Validation before execution', body: 'Ambiguous or abstract instructions are flagged early.' },
      { title: 'Run history and trace', body: 'Review runs with clear status and deep debugging when needed.' },
    ],
  },

  howItWorks: {
    title: 'How it works',
    steps: [
      { title: 'Create a project', body: 'Start with a suite and a first test case.' },
      { title: 'Write steps in natural language', body: 'Describe actions with clear, single intents.' },
      { title: 'Execute and iterate', body: 'Run tests, inspect results, and refine steps when needed.' },
    ],
  },

  useCases: {
    title: "Who's it for",
    cards: [
      { title: 'QA specialists', body: 'Reduce time spent on automation engineering and maintenance.' },
      {
        title: 'Teams without automation resources',
        body: "Bring stable E2E checks when you don't have a dedicated automation team.",
      },
      { title: 'Non-technical operators', body: 'Automate flows without programming knowledge.' },
    ],
  },

  finalCta: {
    title: 'Ready to automate your UI tests?',
    body: 'Start with the open-source repo, explore the demo project, and join the community updates.',
    primaryCta: {
      label: 'Open the GitHub repo',
      href: githubRepoUrl,
      microcopy: 'Open-source. No paywall.',
    },
    telegramLink: {
      label: 'Telegram updates',
      href: telegramUrl,
    },
  },
};

