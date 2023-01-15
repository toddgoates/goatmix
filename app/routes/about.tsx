import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useRef } from "react";
import {
  AiOutlinePlayCircle as PlayIcon,
  AiOutlineLink as LinkIcon,
} from "react-icons/ai";
import ButtonLink from "~/components/ButtonLink";
import { getJobs } from "~/models/jobs.server";
import { getSkills } from "~/models/skills.server";
import { getSchooling } from "~/models/schooling.server";

import type { Job } from "~/models/jobs.server";
import type { Skill } from "~/models/skills.server";
import type { Schooling } from "~/models/schooling.server";
import Container from "~/components/Container";

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
    <div className="h-full">
      <section className="py-12">
        <Container extraSpace>
          <>
            <h2 className="mb-6 text-4xl sm:hidden">All about me</h2>
            <div className="flex flex-col md:flex-row md:gap-8">
              <div className="mx-auto text-center">
                <img
                  src="images/portrait.jpg"
                  alt="A professional headshot of Todd Goates: a dark-haired, caucasian male in his early thirties"
                  className="p-2 mb-6 mr-10 bg-gray-100 border border-gray-400 max-w-18 h-auto sm:max-w-72"
                />
              </div>
              <div>
                <h2 className="mb-6 text-4xl hidden sm:block">All about me</h2>
                <p className="mb-6 text-lg">
                  Hey, I'm Todd Goates
                  <button
                    className="inline-flex items-center gap-1 ml-4 text-purple-500 align-bottom hover:text-purple-700"
                    onClick={playGoatSound}
                  >
                    <PlayIcon />
                    How to pronounce my last name
                  </button>
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
                  Interested in working together? Check out some of the work
                  I've done.
                </p>
                <div className="clear-both"></div>
                <ButtonLink to="/projects" text="View Projects" />
              </div>
            </div>
          </>
        </Container>
      </section>

      <section className="py-12 text-white bg-slate-600">
        <Container extraSpace>
          <>
            <h3 className="mb-8 text-4xl text-center">I like working with</h3>
            <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
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
        </Container>
      </section>

      <section className="py-12 bg-gray-300">
        <Container extraSpace>
          <>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="mb-8 text-3xl text-center">
                  Places I've worked
                </h3>
                <ul className="mb-8">
                  {jobs.map((job: Job) => (
                    <li
                      key={job.id}
                      className="grid items-center grid-cols-4 p-5 mb-4 shadow-lg bg-gray-50"
                    >
                      <div className="col-span-1">
                        <img
                          src={`images/${job.logo}`}
                          alt={`Logo for ${job.company}`}
                          className="w-20"
                        />
                      </div>
                      <div className="col-span-3">
                        <h4 className="flex items-center gap-1 text-xl font-semibold">
                          {job.company}
                          <a
                            href={job.website}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <LinkIcon />
                          </a>
                        </h4>
                        <div className="flex items-center justify-between">
                          <p>{job.title}</p>
                          <p className="text-gray-700">{job.years}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-8 text-3xl text-center">Education</h3>
                <ul className="mb-8">
                  {schooling.map((school: Schooling) => (
                    <li
                      key={school.id}
                      className="grid items-center grid-cols-4 p-5 mb-4 shadow-lg bg-gray-50"
                    >
                      <div className="col-span-1">
                        <img
                          src={`images/${school.logo}`}
                          alt={`Logo for ${school.name}`}
                          className="w-20"
                        />
                      </div>
                      <div className="col-span-3">
                        <h4 className="flex items-center gap-1 text-xl font-semibold">
                          {school.name}
                          <a
                            href={school.website}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <LinkIcon />
                          </a>
                        </h4>
                        <div className="flex items-center justify-between">
                          <p>{school.degree}</p>
                          <p className="text-gray-700">{school.years}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        </Container>
      </section>
    </div>
  );
}
