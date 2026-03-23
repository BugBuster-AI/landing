import { landingContent } from '../content';
import { SectionHeader } from '../components/SectionHeader';

type UseCases = typeof landingContent.useCases;

export function UseCasesSection({ useCases }: { useCases: UseCases }) {
  return (
    <section className="lp-section lp-useCases">
      <div className="lp-container">
        <SectionHeader title={useCases.title} />
        <div className="lp-useGrid">
          {useCases.cards.map((c) => (
            <div key={c.title} className="lp-useCard">
              <div className="lp-useTitle">{c.title}</div>
              <div className="lp-useBody">{c.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

