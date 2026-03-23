import { landingContent } from '../content';
import { SectionHeader } from '../components/SectionHeader';

type Features = typeof landingContent.features;

export function FeaturesSection({ features }: { features: Features }) {
  return (
    <section className="lp-section lp-features">
      <div className="lp-container">
        <SectionHeader title={features.title} />
        <div className="lp-featureGrid">
          {features.items.slice(0, 5).map((f) => (
            <div key={f.title} className="lp-featureCard">
              <div className="lp-featureIcon" aria-hidden="true" />
              <div className="lp-featureTitle">{f.title}</div>
              <div className="lp-featureBody">{f.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

