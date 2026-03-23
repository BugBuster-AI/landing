import { landingContent } from '../content';
import { PrimaryCta } from '../components/PrimaryCta';

type Hero = typeof landingContent.hero;
type Demo = typeof landingContent.demo;
type TelegramLink = Hero['telegramLink'];

export function HeroSection({ hero, demo }: { hero: Hero; demo: Demo }) {
  return (
    <section className="lp-section lp-hero">
      <div className="lp-container lp-heroInner">
        <div className="lp-heroCopy">
          <div className="lp-kicker">{hero.kicker}</div>
          <h1 className="lp-h1">{hero.headline}</h1>
          <p className="lp-lead">{hero.subheadline}</p>

          <div className="lp-heroCtas">
            <PrimaryCta
              href={hero.primaryCta.href}
              label={hero.primaryCta.label}
              microcopy={hero.primaryCta.microcopy}
            />

            <div className="lp-heroSideLink">
              <span className="lp-dot" />
              <a href={(hero.telegramLink as TelegramLink).href} target="_blank" rel="noreferrer">
                {hero.telegramLink.label}
              </a>
            </div>
          </div>
        </div>

        <div className="lp-heroVisual" aria-label="Product visual mockup">
          <div className="lp-mockFrame">
            <div className="lp-mockTop">
              <div className="lp-mockBadge">Demo</div>
              <div className="lp-mockStatus">
                <span className="lp-statusDot lp-statusOk" />
                Ready to run
              </div>
            </div>

            <div className="lp-mockBody">
              <div className="lp-mockCol">
                <div className="lp-mockSectionTitle">Test steps</div>
                <div className="lp-stepList">
                  {demo.steps.map((s, idx) => (
                    <div key={s.title} className="lp-stepRow">
                      <div className="lp-stepNum">{idx + 1}</div>
                      <div className="lp-stepText">
                        <div className="lp-stepTitle">{s.title}</div>
                        <div className="lp-stepBody">{s.body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lp-mockCol lp-mockColRight">
                <div className="lp-mockSectionTitle">Run result</div>
                <div className="lp-resultCard">
                  <div className="lp-resultRow">
                    <span className="lp-resultPill lp-pillOk">Passed</span>
                    <span className="lp-resultLabel">Step 1</span>
                  </div>
                  <div className="lp-resultRow">
                    <span className="lp-resultPill lp-pillErr">Failed</span>
                    <span className="lp-resultLabel">Step 2</span>
                  </div>
                  <div className="lp-traceHint">Trace opens when a step breaks.</div>
                </div>

                <div className="lp-mockMiniCards">
                  <div className="lp-miniCard">
                    <div className="lp-miniTitle">Validation</div>
                    <div className="lp-miniBody">Ambiguous steps get flagged early.</div>
                  </div>
                  <div className="lp-miniCard">
                    <div className="lp-miniTitle">Dynamic UI</div>
                    <div className="lp-miniBody">Grounding keeps interactions stable.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lp-mockGlow" />
          </div>
        </div>
      </div>
    </section>
  );
}

