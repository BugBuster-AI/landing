import { githubRepoUrl, landingContent, telegramUrl } from './content';
import './landing.css';

import { renderOrderedSections } from './sectionRegistry';

const GradientLogo = () => (
  <img
    className="lp-logo"
    src="/assets/bugbuster/header-logo.svg"
    alt={landingContent.headerLogoAlt}
    loading="eager"
  />
);

export default function LandingPage() {
  return (
    <div className="lp-page">
      <header className="lp-header">
        <div className="lp-container lp-headerInner">
          <a href={githubRepoUrl} className="lp-logoLink" target="_blank" rel="noreferrer">
            <GradientLogo />
          </a>
          <a className="lp-headerTelegram" href={telegramUrl} target="_blank" rel="noreferrer">
            Telegram
          </a>
        </div>
      </header>

      <main className="lp-main">
        {renderOrderedSections(landingContent)}
      </main>

      <footer className="lp-footer">
        <div className="lp-container lp-footerInner">
          <div className="lp-footerText">
            © {new Date().getFullYear()} {landingContent.productName}. Open-source UI test automation.
          </div>
          <div className="lp-footerLinks">
            <a href={githubRepoUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={telegramUrl} target="_blank" rel="noreferrer">
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

