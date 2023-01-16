type AlertProps = {
  type: "success" | "info" | "warning" | "error";
  children: React.ReactNode;
};

export default function Alert({ type, children }: AlertProps) {
  let bgColor, color, borderColor;

  if (type === "success") {
    bgColor = "bg-purple-200";
    color = "text-purple-800";
    borderColor = "border-purple-800";
  }

  // TODO: Implement other styles as needed

  return (
    <div
      role="alert"
      className={`p-5 border-l-4 ${bgColor} ${color} ${borderColor}`}
    >
      {children}
    </div>
  );
}
