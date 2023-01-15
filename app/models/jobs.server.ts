export type Job = {
  id: number;
  company: string;
  title: string;
  years: string;
  logo: string;
  website: string;
};

export async function getJobs(): Promise<Array<Job>> {
  return [
    {
      id: 1,
      company: "Strumn",
      title: "Chief Technology Officer",
      years: "January 2021 - Now",
      logo: "strumn-logo.svg",
      website: "https://strumn.com",
    },
    {
      id: 2,
      company: "Q90 Corporation",
      title: "VP of Development",
      years: "December 2019 - Now",
      logo: "q90-logo.svg",
      website: "https://www.q90.com",
    },
    {
      id: 3,
      company: "Q90 Corporation",
      title: "Software Engineer",
      years: "May 2014 - December 2019",
      logo: "q90-logo.svg",
      website: "https://www.q90.com",
    },
    {
      id: 4,
      company: "A Child's Hope Foundation",
      title: "Web Developer Volunteer",
      years: "2013",
      logo: "achf-logo.png",
      website: "https://achildshopefoundation.org",
    },
  ];
}
