type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <p className="p-1 text-xs text-purple-800 bg-white border border-purple-800 rounded-lg">
      {children}
    </p>
  );
}
