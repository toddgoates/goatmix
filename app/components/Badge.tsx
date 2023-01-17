type BadgeProps = {
  text: string;
};

export default function Badge({ text }: BadgeProps) {
  return (
    <p className="p-1 text-xs text-purple-800 bg-white border border-purple-800 rounded-lg">
      {text}
    </p>
  );
}
