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
    <section className="mt-8 p-5 flex flex-col text-center gap-12">
      <h2 className="text-6xl">Hey, I'm Todd!</h2>
      <h3 className="text-3xl justify-center flex items-center gap-2">
        <span>I'm a</span>
        <span className="font-bold text-white bg-purple-500 p-1">
          <Typist
            typingDelay={175}
            finishDelay={500}
            cursor={<span className="bg-white ml-1 h-1">|</span>}
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
    </section>
  );
}
