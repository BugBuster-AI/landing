import { landingContent } from '../content';
import { SectionHeader } from '../components/SectionHeader';

type SocialProof = typeof landingContent.socialProof;

export function SocialProofSection({ socialProof }: { socialProof: SocialProof }) {
  return (
    <section className="lp-section lp-socialProof">
      <div className="lp-container">
        <SectionHeader title={socialProof.title} />

        <div className="lp-socialGrid">
          <div className="lp-logos">
            {socialProof.logos.map((l) => (
              <div key={l.name} className="lp-logoPill">
                {l.name}
              </div>
            ))}
          </div>

          <div className="lp-testimonials">
            {socialProof.testimonials.map((t) => (
              <div key={t.author} className="lp-testimonialCard">
                <div className="lp-quote">"{t.quote}"</div>
                <div className="lp-testimonialMeta">
                  <span className="lp-author">{t.author}</span>
                  <span className="lp-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

