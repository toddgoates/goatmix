type Schooling = {
  id: number;
  name: string;
  degree: string;
  years: string;
  logo: string;
  website: string;
};

export async function getSchooling(): Promise<Array<Schooling>> {
  return [
    {
      id: 1,
      name: "Utah Valley University",
      degree: "Digital Media - Internet Technologies",
      years: "2007 - 2013",
      logo: "uvu-logo.svg",
      website: "https://www.uvu.edu",
    },
  ];
}
