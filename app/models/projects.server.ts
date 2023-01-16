export type Project = {
  name: string;
  description: string;
  link: string;
  repoLink?: string;
  image: string;
  tech: string[];
};

export async function getProjects(): Promise<Array<Project>> {
  return [
    {
      name: "North Texas Process Server",
      description:
        "This is a website I built for my father-in-law's business in Denton, Texas. The site was built with SvelteKit, Typescript, Tailwind CSS, and a serverless function for sending an email from the contact form via MailGun. I later added a payments page using Stripe. It is hosted on Vercel for fast builds and automated deployments.",
      link: "https://www.northtexasprocessserver.com",
      image: "notxps.PNG",
      tech: [
        "SvelteKit",
        "Tailwind CSS",
        "Typescript",
        "MailGun",
        "Vercel",
        "Stripe",
      ],
    },
    {
      name: "A Child's Hope Foundation",
      description:
        "I helped redesign an outdated, static site into a responsive Drupal theme and created a system where users could create accounts and register for upcoming events. I later built a donation payment processing page using Stripe. Several years later, I assisted in migrating the site to a fresh WordPress theme.",
      link: "https://achildshopefoundation.org",
      image: "achf-site.png",
      tech: ["Drupal", "Stripe", "LESS", "PHP", "jQuery"],
    },
    {
      name: "Pocket Planetarium",
      description:
        "A fun project built with React to see how much you would weigh on different planets in the solar system. The application uses several small components: WeightForm, PlanetList, and Planet. The user's weight is kept in context and passed to sibling components. I'm using styled components for scoping CSS.",
      link: "https://planetarium.toddgoates.com",
      repoLink: "https://github.com/toddgoates/react-planetarium",
      image: "planetarium.png",
      tech: ["React", "Styled Components"],
    },
    {
      name: "Rock Paper Scissors",
      description:
        "A fun little project built with Vue.js to play Rock Paper Scissors against your browser. The game is broken down to different Vue components. A history of your wins, loses, and ties are recorded with timestamps. Your wins are graphed with Chart.js. Players have the option to save progress and keep gameplay data in local storage.",
      link: "https://rps.toddgoates.com",
      repoLink: "https://github.com/toddgoates/rockpaperscissors",
      image: "rps.png",
      tech: ["VueJS", "Moment JS", "Chart JS", "Local Storage", "Bootstrap"],
    },
    {
      name: "Captain's Log",
      description:
        "Create your own Captain's Log in your browser with the HTML5 Speech Recognition API. Enable your browser's microphone and start speaking. The browser will then listen to you and transcribe your words in real time. I used CSS Grid to build the layout and some custom CSS to mimic the appearance of the Captain's Log on Star Trek.",
      link: "https://captainslog.toddgoates.com",
      repoLink: "https://github.com/toddgoates/captains-log",
      image: "captainslog.png",
      tech: ["JavaScript", "CSS Grid", "SpeechRecognition API"],
    },
  ];
}
