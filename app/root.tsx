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
  description:
    "The portfolio website of Todd Goates, a Full-Stack Web Developer from Utah",
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
        <meta name="theme-color" content="#a855f7" />
        <title>{title}</title>
        <Links />
        <meta property="og:url" content="https://toddgoates.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Todd Goates | Utah-Based, Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="The portfolio website of Todd Goates, a Full-Stack Web Developer from Utah"
        />
        <meta property="og:image" content="images/meta-tag.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="toddgoates.com" />
        <meta property="twitter:url" content="https://toddgoates.com" />
        <meta
          name="twitter:title"
          content="Todd Goates | Utah-Based, Full-Stack Developer"
        />
        <meta
          name="twitter:description"
          content="The portfolio website of Todd Goates, a Full-Stack Web Developer from Utah"
        />
        <meta name="twitter:image" content="images/meta-tag.png" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon-180x180.png"
        />
      </head>
      <body className="h-full">
        <div className="flex flex-col justify-between h-full">
          <Navbar />
          <main className="grow">{children}</main>
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
