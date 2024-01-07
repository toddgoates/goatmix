type InputProps = {
  type?: "text" | "email" | "number" | "tel";
  name: string;
  inputClass?: string;
  required?: boolean;
  props?: any;
};

export default function Input({
  type = "text",
  name,
  inputClass = "",
  required = false,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      className={`w-full p-2 bg-gray-200 border border-gray-400 rounded ${inputClass}`}
      required={required}
      {...props}
    />
  );
}
