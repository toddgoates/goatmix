type TextareaProps = {
  name: string;
  textareaClass?: string;
  rows?: number;
  required?: boolean;
};

export default function Textarea({
  name,
  textareaClass = "",
  rows = 10,
  required = false,
}: TextareaProps) {
  return (
    <textarea
      name={name}
      id={name}
      className={`w-full p-2 bg-gray-200 border border-gray-400 rounded ${textareaClass}`}
      rows={rows}
      required={required}
    ></textarea>
  );
}
