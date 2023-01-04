import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Todd Goates | Utah-Based, Full-Stack Developer",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

function Document({
  children,
  title = "Todd Goates | Utah-Based, Full-Stack Developer",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <head>
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body className="h-full">
        <div className="flex flex-col justify-between h-full">
          <Navbar />
          <main className="md:container md:mx-auto grow">{children}</main>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <Document title={`${caught.status} ${caught.statusText}`}>
        <div className="flex flex-col gap-8 p-5">
          <h1 className="text-4xl font-bold">Oh No!</h1>
          <p className="text-lg">
            It looks like you tried to go to a page that doesn't exist!
          </p>
          <Link
            to="/"
            className="text-lg text-purple-500 hover:text-purple-700"
          >
            Go Home
          </Link>
          <img
            src="images/computer-cat.jpg"
            alt="A gray and white ragdoll cat sitting on a chair in front of a laptop"
            className="w-full"
          />
        </div>
      </Document>
    );
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <div className="flex flex-col gap-8 p-5">
        <h1 className="text-4xl font-bold">Oh No!</h1>
        <p className="text-lg">
          Something went wrong with this site. Don't worry, we're on it!
        </p>
        <Link to="/" className="text-lg text-purple-500 hover:text-purple-700">
          Go Home
        </Link>
      </div>
    </Document>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
