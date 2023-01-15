export type Skill = {
  text: string;
};

export async function getSkills(): Promise<Array<Skill>> {
  return [
    {
      text: "HTML",
    },
    {
      text: "CSS",
    },
    {
      text: "Tailwind CSS",
    },
    {
      text: "JavaScript",
    },
    {
      text: "NodeJS",
    },
    {
      text: "React",
    },
    {
      text: "Svelte",
    },
    {
      text: "Vue",
    },
    {
      text: "PHP",
    },
    {
      text: "Laravel",
    },
    {
      text: "MySQL",
    },
    {
      text: "AWS",
    },
    {
      text: "Docker",
    },
    {
      text: "VS Code",
    },
    {
      text: "GitHub",
    },
    {
      text: "You",
    },
  ];
}
