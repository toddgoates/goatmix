type IconLinkProps = {
  as?: "a" | "button";
  children: React.ReactNode;
  [x: string]: any;
};

const VALID_TAGS = ["a", "button"];

export default function IconLink({
  as: Tag = "a",
  children,
  ...props
}: IconLinkProps) {
  if (!VALID_TAGS.includes(Tag)) {
    throw new Error(`Unrecognized tag: ${Tag}. Expected: ${VALID_TAGS}`);
  }

  return (
    <Tag
      className="inline-flex items-center gap-1 ml-4 text-purple-500 align-bottom hover:text-purple-700"
      {...props}
    >
      {children}
    </Tag>
  );
}
