export default function Footer() {
  return (
    <footer className="py-4 text-gray-700 bg-gray-200 border-t border-gray-300">
      <div className="container mx-auto">
        <div className="text-center">
          &copy; 2012-{new Date().getFullYear()} | Todd Goates
        </div>
      </div>
    </footer>
  );
}
