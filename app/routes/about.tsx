import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useRef } from "react";
import {
  AiOutlinePlayCircle as PlayIcon,
  AiOutlineDownload as DownloadIcon,
} from "react-icons/ai";
import ButtonLink from "~/components/ButtonLink";
import { getJobs } from "~/models/jobs.server";
import { getSkills } from "~/models/skills.server";
import { getSchooling } from "~/models/schooling.server";
import Section from "~/components/Section";
import InfoCard from "~/components/InfoCard";
import IconLink from "~/components/IconLink";

import type { MetaFunction } from "@remix-run/node";
import type { Job } from "~/models/jobs.server";
import type { Skill } from "~/models/skills.server";
import type { Schooling } from "~/models/schooling.server";

export const meta: MetaFunction = () => ({
  title: "Todd Goates | About",
  description: "All about Todd Goates: Skills, Work Experience, and Education",
});

export const loader = async () => {
  return json({
    jobs: await getJobs(),
    skills: await getSkills(),
    schooling: await getSchooling(),
  });
};

export default function About() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const { jobs, skills, schooling } = useLoaderData();

  function playGoatSound() {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }

  return (
    <>
      <Section>
        <>
          <h2 className="mb-6 text-4xl sm:hidden">All about me</h2>
          <div className="flex flex-col md:flex-row md:gap-8">
            <div className="mx-auto text-center">
              <img
                src="images/portrait.jpg"
                alt="A professional headshot of Todd Goates: a dark-haired, caucasian male in his early thirties"
                className="h-auto p-2 mb-6 mr-10 bg-gray-100 border border-gray-400 max-w-18 sm:max-w-72"
              />
            </div>
            <div>
              <h2 className="hidden mb-6 text-4xl sm:block">All about me</h2>
              <p className="mb-6 text-lg">
                Hey, I'm Todd Goates
                <IconLink as="button" onClick={playGoatSound}>
                  <PlayIcon />
                  How to pronounce my last name
                </IconLink>
                <audio ref={audioRef} src="audio/goat.mp3">
                  Sorry, looks like your browser doesn't support audio
                </audio>
              </p>
              <p className="mb-6 text-lg">
                Thanks for stopping by! I'm a Full-Stack Developer, artist,
                wanna-be writer, outdoor enthusiast, lover of synths, and most
                importantly, a husband and father. I am passionate about
                programming and keeping up with the latest technology.
              </p>
              <p className="mb-12 text-lg">
                Interested in working together? Check out some of the work I've
                done.
              </p>
              <div className="clear-both"></div>
              <ButtonLink to="/projects">View Projects</ButtonLink>
            </div>
          </div>
        </>
      </Section>

      <Section background="bg-slate-600" color="text-white">
        <>
          <h3 className="mb-8 text-4xl text-center">I like working with</h3>
          <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {skills.map((skill: Skill) => (
              <li
                className="p-3 text-lg font-semibold text-center shadow-lg bg-slate-200 text-slate-800"
                key={skill.text}
              >
                {skill.text}
              </li>
            ))}
          </ul>
        </>
      </Section>

      <Section background="bg-gray-300">
        <>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-8 text-3xl text-center">Places I've worked</h3>
              <ul className="mb-8">
                {jobs.map((job: Job) => (
                  <InfoCard
                    key={job.id}
                    title={job.company}
                    subtitle={job.title}
                    image={job.logo}
                    dates={job.years}
                    link={job.website}
                  />
                ))}
              </ul>
              <p className="flex flex-col items-center mb-8 sm:flex-row">
                Want to learn more about my work?
                <IconLink
                  href="/files/TMG-2023.pdf"
                  download="Todd-Goates-Resume"
                >
                  <DownloadIcon />
                  Download my resume
                </IconLink>
              </p>
            </div>
            <div>
              <h3 className="mb-8 text-3xl text-center">Education</h3>
              <ul className="mb-8">
                {schooling.map((school: Schooling) => (
                  <InfoCard
                    key={school.id}
                    title={school.name}
                    subtitle={school.degree}
                    image={school.logo}
                    dates={school.years}
                    link={school.website}
                  />
                ))}
              </ul>
            </div>
          </div>
        </>
      </Section>
    </>
  );
}
