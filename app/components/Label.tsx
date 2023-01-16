type LabelProps = {
  text: string;
  htmlFor: string;
  labelClass?: string;
};

export default function Label({ text, htmlFor, labelClass = "" }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`text-lg mb-1 block ${labelClass}`}>
      {text}
    </label>
  );
}
