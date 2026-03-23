import { landingContent } from '../content';

type About = typeof landingContent.about;

export function AboutSection({ about }: { about: About }) {
  return (
    <section className="lp-section lp-about">
      <div className="lp-container lp-aboutInner">
        <h2 className="lp-aboutTitle">{about.title}</h2>
        <ul className="lp-aboutList">
          {about.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="lp-aboutDiscussions">
          <a href={about.discussionsUrl} target="_blank" rel="noreferrer">
            {about.discussionsNote}
          </a>
        </p>
      </div>
    </section>
  );
}
