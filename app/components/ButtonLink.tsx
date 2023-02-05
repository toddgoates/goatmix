import { Link } from "@remix-run/react";

type ButtonLinkProps = {
  containerClass?: string;
  to: string;
  children: React.ReactNode;
  buttonClass?: string;
  external?: boolean;
  outlined?: boolean;
};

export default function ButtonLink({
  containerClass = "",
  to,
  buttonClass = "",
  external = false,
  outlined = false,
  children,
}: ButtonLinkProps) {
  return (
    <div className={containerClass}>
      {external ? (
        <a
          href={to}
          className={`px-3 py-2 text-lg font-semibold border-2 border-orange-500 rounded-lg ${
            outlined
              ? "text-orange-500 hover:text-orange-600 hover:border-orange-600"
              : "text-white bg-orange-500 hover:bg-orange-600"
          } ${buttonClass}`}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      ) : (
        <Link
          to={to}
          className={`px-3 py-2 text-lg font-semibold border-2 border-orange-500 rounded-lg ${
            outlined
              ? "text-orange-500 hover:text-orange-600 hover:border-orange-600"
              : "text-white bg-orange-500 hover:bg-orange-600"
          } ${buttonClass}`}
          prefetch="intent"
        >
          {children}
        </Link>
      )}
    </div>
  );
}
