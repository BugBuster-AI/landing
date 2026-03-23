import { landingContent } from '../content';
import { SectionHeader } from '../components/SectionHeader';

type Demo = typeof landingContent.demo;

export function DemoSection({ demo }: { demo: Demo }) {
  return (
    <section className="lp-section lp-demo">
      <div className="lp-container">
        <SectionHeader kicker={demo.title} title="From plain-language steps to reliable runs" />

        <div className="lp-demoGrid">
          {demo.steps.map((s, idx) => (
            <div key={s.title} className="lp-demoCard">
              <div className="lp-demoNum">{idx + 1}</div>
              <div className="lp-demoCardTitle">{s.title}</div>
              <div className="lp-demoCardBody">{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

