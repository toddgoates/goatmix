import { Link } from "@remix-run/react";

type ButtonLinkProps = {
  containerClass?: string;
  to: string;
  text: string;
  buttonClass?: string;
};

export default function ButtonLink({
  containerClass = "",
  to,
  text,
  buttonClass = "",
}: ButtonLinkProps) {
  return (
    <div className={containerClass}>
      <Link
        to={to}
        className={`px-3 py-2 text-lg font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 ${buttonClass}`}
        prefetch="intent"
      >
        {text}
      </Link>
    </div>
  );
}
