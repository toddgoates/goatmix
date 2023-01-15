type ContainerProps = {
  children: JSX.Element;
  extraSpace?: boolean;
};

export default function Container({
  children,
  extraSpace = false,
}: ContainerProps) {
  return (
    <div className={`md:container md:mx-auto ${extraSpace ? "px-5" : ""}`}>
      {children}
    </div>
  );
}
