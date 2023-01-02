export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 py-4">
      <div className="container mx-auto">
        <div className="text-center">
          &copy; {new Date().getFullYear()} - Todd Goates
        </div>
      </div>
    </footer>
  );
}
