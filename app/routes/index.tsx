import Typist from "react-typist-component";
import Jumbotron from "~/components/Jumbotron";
import ButtonLink from "~/components/ButtonLink";

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
    <Jumbotron>
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
      <ButtonLink to="/about" text="Learn More" />
    </Jumbotron>
  );
}
