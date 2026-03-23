import { landingContent } from '../content';
import { PrimaryCta } from '../components/PrimaryCta';

type FinalCta = typeof landingContent.finalCta;

export function FinalCtaSection({ finalCta }: { finalCta: FinalCta }) {
  return (
    <section className="lp-section lp-finalCta">
      <div className="lp-container lp-finalInner">
        <div className="lp-finalCopy">
          <div className="lp-finalKicker">BugBuster</div>
          <div className="lp-finalTitle">{finalCta.title}</div>
          <div className="lp-finalBody">{finalCta.body}</div>
        </div>

        <div className="lp-finalCtas">
          <PrimaryCta
            href={finalCta.primaryCta.href}
            label={finalCta.primaryCta.label}
            microcopy={finalCta.primaryCta.microcopy}
          />
          <a className="lp-finalTelegram" href={finalCta.telegramLink.href} target="_blank" rel="noreferrer">
            {finalCta.telegramLink.label}
          </a>
        </div>
      </div>
    </section>
  );
}

