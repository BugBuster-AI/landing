type IconLinkProps = {
  href: string;
  label: string;
  iconId: 'github-icon' | 'telegram-icon' | 'docs-icon';
};

/** Inline: внешний спрайт `<use href="…#id">` нестабилен при `base: './'` и части браузеров. */
function DocsIcon() {
  return (
    <svg
      className="lp-iconLink-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
    >
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </svg>
  );
}

export function IconLink({ href, label, iconId }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="lp-iconLink"
      aria-label={label}
    >
      {iconId === 'docs-icon' ? (
        <DocsIcon />
      ) : (
        <svg className="lp-iconLink-svg" aria-hidden focusable="false">
          <use href={`${import.meta.env.BASE_URL}icons.svg#${iconId}`} />
        </svg>
      )}
      <span>{label}</span>
    </a>
  );
}
