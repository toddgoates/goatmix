type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
  labelClass?: string;
};

export default function Label({
  children,
  htmlFor,
  labelClass = "",
}: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`text-lg mb-1 block ${labelClass}`}>
      {children}
    </label>
  );
}
