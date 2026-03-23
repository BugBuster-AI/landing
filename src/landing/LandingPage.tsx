import { githubRepoUrl, landingContent, telegramUrl } from './content';
import './landing.css';

import { renderOrderedSections } from './sectionRegistry';
import { IconLink } from './components/IconLink';

const HeaderLogo = () => (
  <>
    <img className="lp-logoIcon" src="/favicon.png" alt="" loading="eager" />
    <span className="lp-logoText">BugBuster AI</span>
  </>
);

export default function LandingPage() {
  return (
    <div className="lp-page">
      <header className="lp-header">
        <div className="lp-container lp-headerInner">
          <a href={githubRepoUrl} className="lp-logoLink" target="_blank" rel="noreferrer">
            <HeaderLogo />
          </a>
          <nav className="lp-headerLinks">
            <IconLink href={githubRepoUrl} label="GitHub" iconId="github-icon" />
            <IconLink href={telegramUrl} label="Telegram" iconId="telegram-icon" />
          </nav>
        </div>
      </header>

      <main className="lp-main">
        {renderOrderedSections(landingContent)}
      </main>

      <footer className="lp-footer">
        <div className="lp-container lp-footerInner">
          <div className="lp-footerText">
            © {new Date().getFullYear()} {landingContent.productName}. Open-source.
          </div>
          <div className="lp-footerLinks">
            <IconLink href={githubRepoUrl} label="GitHub" iconId="github-icon" />
            <IconLink href={telegramUrl} label="Telegram" iconId="telegram-icon" />
          </div>
        </div>
      </footer>
    </div>
  );
}
