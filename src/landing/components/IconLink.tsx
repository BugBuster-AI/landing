type IconLinkProps = {
  href: string;
  label: string;
  iconId: 'github-icon' | 'telegram-icon';
};

export function IconLink({ href, label, iconId }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="lp-iconLink"
      aria-label={label}
    >
      <svg className="lp-iconLink-svg" aria-hidden focusable="false">
        <use href={`/icons.svg#${iconId}`} />
      </svg>
      <span>{label}</span>
    </a>
  );
}
