import Container from "./Container";

type SectionProps = {
  background?: string;
  color?: string;
  children: React.ReactElement;
};

export default function Section({
  background = "",
  color = "",
  children,
}: SectionProps) {
  return (
    <section className={`py-12 ${background} ${color}`}>
      <Container extraSpace>{children}</Container>
    </section>
  );
}
