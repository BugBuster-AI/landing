import { landingContent } from '../content';
import { SectionHeader } from '../components/SectionHeader';

type ProblemSolution = typeof landingContent.problemSolution;

export function ProblemSolutionSection({ problemSolution }: { problemSolution: ProblemSolution }) {
  return (
    <section className="lp-section lp-problemSolution">
      <div className="lp-container">
        <div className="lp-twoCol">
          <div className="lp-col">
            <SectionHeader align="left" title={problemSolution.problemTitle} />
            <ul className="lp-checkList">
              {problemSolution.painPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="lp-col lp-solutionCol">
            <SectionHeader align="left" title={problemSolution.solutionTitle} />
            <div className="lp-solutionPoints">
              {problemSolution.solutionPoints.map((p) => (
                <div key={p} className="lp-solutionPoint">
                  <span className="lp-solutionIcon" aria-hidden="true">
                    ✓
                  </span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

