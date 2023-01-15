import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Typist from "react-typist-component";
import Jumbotron from "~/components/Jumbotron";
import ButtonLink from "~/components/ButtonLink";
import { getWords } from "~/models/words.server";

export const loader = async () => {
  return json({ words: await getWords() });
};

export default function Index() {
  const { words } = useLoaderData<typeof loader>();

  return (
    <Jumbotron>
      <h2 className="text-6xl">Hey, I'm Todd!</h2>
      <h3 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl">
        <span>I'm a</span>
        <span className="p-1 font-bold text-white bg-purple-500">
          <Typist
            typingDelay={175}
            finishDelay={500}
            cursor={<span className="h-1 ml-1 bg-white">|</span>}
          >
            {words.map((word, index) => (
              <div key={word.id}>
                <span>{word.description}</span>
                <Typist.Delay ms={500} />
                {index + 1 === words.length ? (
                  <span></span>
                ) : (
                  <Typist.Backspace count={word.description.length} />
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
