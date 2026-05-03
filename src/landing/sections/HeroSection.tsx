import { landingContent } from '../content';
import { IconLink } from '../components/IconLink';

type Hero = typeof landingContent.hero;

export function HeroSection({ hero }: { hero: Hero }) {
  return (
    <section className="lp-section lp-hero">
      <div className="lp-container lp-heroInner">
        <div className="lp-heroCopy">
          <div className="lp-kicker">{hero.kicker}</div>
          <h1 className="lp-h1">{hero.headline}</h1>
          <p className="lp-lead">
            {hero.subheadline}
            <br />
            <span className="lp-leadStack">{hero.subheadlineStack}</span>
          </p>

          <div className="lp-heroLinks">
            <IconLink
              href={hero.links.github.href}
              label={hero.links.github.label}
              iconId="github-icon"
            />
            <IconLink
              href={hero.links.telegram.href}
              label={hero.links.telegram.label}
              iconId="telegram-icon"
            />
            <IconLink
              href={hero.links.docs.href}
              label={hero.links.docs.label}
              iconId="docs-icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
