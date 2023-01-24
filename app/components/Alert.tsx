type AlertProps = {
  type: "success" | "info" | "warning" | "error";
  children: React.ReactNode;
};

export default function Alert({ type, children }: AlertProps) {
  const colorMap = {
    success: "purple",
    info: "indigo",
    warning: "orange",
    error: "red",
  };

  const bgColor = `bg-${colorMap[type]}-200`;
  const color = `text-${colorMap[type]}-800`;
  const borderColor = `border-${colorMap[type]}-800`;

  return (
    <div
      role="alert"
      className={`p-5 border-l-4 ${bgColor} ${color} ${borderColor}`}
    >
      {children}
    </div>
  );
}
