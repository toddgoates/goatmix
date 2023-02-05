import ButtonLink from "./ButtonLink";
import Badge from "./Badge";
import type { Project } from "~/models/projects.server";

type ProjectCardProps = {
  project: Project;
  reverse: boolean;
};

export default function ProjectCard({
  project,
  reverse = false,
}: ProjectCardProps) {
  return (
    <div key={project.name}>
      <div className="flex flex-col gap-8 md:flex-row">
        <a href={project.link} target="_blank" rel="noreferrer">
          <img
            src={`images/${project.image}`}
            alt={`Screenshot of ${project.name}`}
            className={`w-full h-full md:w-1/2 lg:w-1/3 xl:w-1/4 ${
              reverse ? "md:order-last" : "md:order-first"
            }`}
          />
        </a>
        <div className="grow">
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-lg">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge text={t} key={t} />
              ))}
            </div>
            <p className="flex gap-4">
              <ButtonLink to={project.link} text="Visit Site" external />
              {project?.repoLink ? (
                <ButtonLink
                  to={project.repoLink}
                  text="View Code"
                  outlined
                  external
                />
              ) : null}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
