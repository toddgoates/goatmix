type JumbotronProps = {
  children: React.ReactNode;
  background?: string;
  backgroundImage?: string;
};

export default function Jumbotron({
  children,
  background = "#f3f4f6",
  backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23c6bed3' fill-opacity='0.25'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
}: JumbotronProps) {
  return (
    <section
      className="flex h-full p-5"
      style={{
        background,
        backgroundImage,
      }}
    >
      <div className="flex flex-col gap-12 m-auto text-center">{children}</div>
    </section>
  );
}
