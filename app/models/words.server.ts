type Words = {
  id: string;
  description: string;
};

export async function getWords(): Promise<Array<Words>> {
  return [
    {
      id: "webdev",
      description: "Web Developer",
    },
    {
      id: "webmaster",
      description: "Web Master",
    },
    {
      id: "codewriter",
      description: "Code Writer",
    },
    {
      id: "dbguru",
      description: "Database Guru",
    },
    {
      id: "fullstackdev",
      description: "Full-Stack Developer",
    },
    {
      id: "softwareeng",
      description: "Software Engineer",
    },
    {
      id: "10x",
      description: "10X Developer",
    },
    {
      id: "cloudguy",
      description: "Cloud Enthusiast",
    },
    {
      id: "catwhisper",
      description: "Cat Whisperer",
    },
    {
      id: "familyman",
      description: "Husband and Father",
    },
    {
      id: "goose",
      description: "Silly Goose",
    },
    {
      id: "programmer",
      description: "Programmer",
    },
    {
      id: "webdev2",
      description: "Web Developer",
    },
  ];
}
