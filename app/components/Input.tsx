type InputProps = {
  type?: "text" | "email" | "number";
  name: string;
  inputClass?: string;
  required?: boolean;
};

export default function Input({
  type = "text",
  name,
  inputClass = "",
  required = false,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      className={`w-full p-2 bg-gray-200 border border-gray-400 rounded ${inputClass}`}
      required={required}
    />
  );
}
