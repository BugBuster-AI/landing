import { landingContent } from './content';

import { AboutSection } from './sections/AboutSection';
import { HeroSection } from './sections/HeroSection';

export function renderOrderedSections(content: typeof landingContent) {
  return [
    <HeroSection key="hero" hero={content.hero} />,
    <AboutSection key="about" about={content.about} />,
  ];
}
