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

export const loader = async () => {
  return json({ jobs: await getJobs(), skills: await getSkills() });
};

export default function About() {
  const audioRef = useRef();

  const { jobs, skills } = useLoaderData();

  function playGoatSound() {
    audioRef.current.play();
  }

  return (
    <section className="flex h-full p-5 my-8">
      <div className="grid grid-cols-3 gap-12">
        <div>
          <h2 className="mb-6 text-3xl text-center">All about me</h2>
          <img
            src="images/portrait.jpg"
            alt="A professional headshot of Todd Goates: a dark-haired, caucasian male in his early thirties"
            className="p-2 mx-auto mb-6 bg-gray-100 border border-gray-400 w-52"
          />
          <p className="mb-6 text-lg">
            Hey, I'm Todd Goates (
            <button
              className="inline-flex items-center gap-1 text-purple-500 align-bottom hover:text-purple-700"
              onClick={playGoatSound}
            >
              <PlayIcon />
              Click here
            </button>{" "}
            to hear how my last name is pronounced). Thanks for stopping by! I'm
            a Full-Stack Developer, artist, wanna-be writer, outdoor enthusiast,
            lover of synths, and most importantly, a husband and father. I am
            passionate about programming and keeping up with the latest
            technology.
          </p>
          <p className="mb-6 text-lg">
            Interested in working together? Check out some of the work I've
            done.
          </p>
          <ButtonLink
            containerClass="text-center"
            to="/projects"
            text="View Projects"
          />
        </div>

        <div>
          <h3 className="mb-6 text-3xl text-center">I like using</h3>
          <ul>
            {skills.map((skill) => (
              <li className="ml-8 list-disc" key={skill.text}>
                {skill.text}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-3xl text-center">Work Experience</h3>
          <ul className="mb-8">
            {jobs.map((job) => (
              <li key={job.id} className="grid items-start grid-cols-4 mb-12">
                <div className="col-span-1">
                  <img
                    src={`images/${job.logo}`}
                    alt={`Logo for ${job.company}`}
                    className="w-20"
                  />
                </div>
                <div className="col-span-3">
                  <h4 className="flex items-center gap-1 text-xl">
                    {job.company}
                    <a href={job.website} target="_blank" rel="noreferrer">
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
          <h3 className="mb-6 text-3xl text-center">Education</h3>
        </div>
      </div>
      <audio ref={audioRef} src="audio/goat.mp3">
        Sorry, looks like your browser doesn't support audio
      </audio>
    </section>
  );
}
