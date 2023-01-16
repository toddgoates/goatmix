type IconLinkProps = {
  link?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  button?: boolean;
};

export default function IconLink({
  link,
  onClick,
  children,
  button = false,
}: IconLinkProps) {
  if (button) {
    return (
      <button
        className="inline-flex items-center gap-1 ml-4 text-purple-500 align-bottom hover:text-purple-700"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="text-lg inline-flex items-center gap-1 ml-4 text-purple-500 align-bottom hover:text-purple-700"
    >
      {children}
    </a>
  );
}
