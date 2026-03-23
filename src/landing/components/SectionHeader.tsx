export function SectionHeader({
  kicker,
  title,
  align,
}: {
  kicker?: string;
  title: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`lp-sectionHeader ${align === 'left' ? 'lp-alignLeft' : ''}`}>
      {kicker ? <div className="lp-kicker">{kicker}</div> : null}
      <h2 className="lp-h2">{title}</h2>
    </div>
  );
}

