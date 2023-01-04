import { Link } from "@remix-run/react";
import Typist from "react-typist-component";

export default function Index() {
  const words = [
    "Web Developer",
    "Web Master",
    "Code Writer",
    "Database Guru",
    "Full-Stack Developer",
    "Software Engineer",
    "10X Developer",
    "Cloud Enthusiast",
    "Cat Whisperer",
    "Husband and Father",
    "Silly Goose",
    "Programmer",
    "Web Developer",
  ];

  return (
    <section
      className="flex h-full p-5"
      style={{
        background: "f3f4f6",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23c6bed3' fill-opacity='0.25'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="flex flex-col gap-12 m-auto text-center">
        <h2 className="text-6xl">Hey, I'm Todd!</h2>
        <h3 className="flex items-center justify-center gap-2 text-3xl">
          <span>I'm a</span>
          <span className="p-1 font-bold text-white bg-purple-500">
            <Typist
              typingDelay={175}
              finishDelay={500}
              cursor={<span className="h-1 ml-1 bg-white">|</span>}
            >
              {words.map((word, index) => (
                <div key={word}>
                  <span>{word}</span>
                  <Typist.Delay ms={500} />
                  {index + 1 === words.length ? (
                    <span></span>
                  ) : (
                    <Typist.Backspace count={word.length} />
                  )}
                </div>
              ))}
            </Typist>
          </span>
        </h3>
        <p className="text-lg">I love to build cool stuff with code</p>
        <div>
          <Link
            to="/about"
            className="px-3 py-2 text-lg font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600"
            prefetch="intent"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
