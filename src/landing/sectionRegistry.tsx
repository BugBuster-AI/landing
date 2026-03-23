import { landingContent } from './content';

import { DemoSection } from './sections/DemoSection';
import { FinalCtaSection } from './sections/FinalCtaSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { HeroSection } from './sections/HeroSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { ProblemSolutionSection } from './sections/ProblemSolutionSection';
import { SocialProofSection } from './sections/SocialProofSection';
import { UseCasesSection } from './sections/UseCasesSection';

export function renderOrderedSections(content: typeof landingContent) {
  return [
    <HeroSection key="hero" hero={content.hero} demo={content.demo} />,
    <SocialProofSection key="socialProof" socialProof={content.socialProof} />,
    <ProblemSolutionSection key="problemSolution" problemSolution={content.problemSolution} />,
    <DemoSection key="demo" demo={content.demo} />,
    <FeaturesSection key="features" features={content.features} />,
    <HowItWorksSection key="howItWorks" howItWorks={content.howItWorks} />,
    <UseCasesSection key="useCases" useCases={content.useCases} />,
    <FinalCtaSection key="finalCta" finalCta={content.finalCta} />,
  ];
}

