import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-5 text-gray-700 bg-gray-200 border-t border-gray-300">
      <Container>
        <div className="text-center">
          &copy; 2012-{new Date().getFullYear()} | Todd Goates
        </div>
      </Container>
    </footer>
  );
}
