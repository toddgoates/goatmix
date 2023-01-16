import { Link } from "@remix-run/react";

type ButtonLinkProps = {
  containerClass?: string;
  to: string;
  text: string;
  buttonClass?: string;
  external?: boolean;
  outlined?: boolean;
};

export default function ButtonLink({
  containerClass = "",
  to,
  text,
  buttonClass = "",
  external = false,
  outlined = false,
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
          {text}
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
          {text}
        </Link>
      )}
    </div>
  );
}
