export function PrimaryCta({
  href,
  label,
  microcopy,
}: {
  href: string;
  label: string;
  microcopy: string;
}) {
  return (
    <div className="lp-ctaWrap">
      <a className="lp-ctaPrimary" href={href} target="_blank" rel="noreferrer">
        <span className="lp-ctaPrimaryLabel">{label}</span>
      </a>
      <div className="lp-ctaMicro">{microcopy}</div>
    </div>
  );
}

