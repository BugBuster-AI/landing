import { landingContent } from '../content';
import { SectionHeader } from '../components/SectionHeader';

type HowItWorks = typeof landingContent.howItWorks;

export function HowItWorksSection({ howItWorks }: { howItWorks: HowItWorks }) {
  return (
    <section className="lp-section lp-howItWorks">
      <div className="lp-container">
        <SectionHeader title={howItWorks.title} />
        <div className="lp-howGrid">
          {howItWorks.steps.map((s, idx) => (
            <div key={s.title} className="lp-howCard">
              <div className="lp-howNum">{idx + 1}</div>
              <div className="lp-howTitle">{s.title}</div>
              <div className="lp-howBody">{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

