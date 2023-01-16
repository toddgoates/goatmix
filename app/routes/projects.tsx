import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getProjects } from "~/models/projects.server";
import Section from "~/components/Section";
import ButtonLink from "~/components/ButtonLink";

import type { Project } from "~/models/projects.server";

export const loader = async () => {
  return json({
    projects: await getProjects(),
  });
};

export default function Projects() {
  const { projects } = useLoaderData();

  return (
    <>
      <Section>
        <>
          <h2 className="mb-12 text-4xl text-center">My work</h2>
          <div className="grid gap-24">
            {projects.map((project: Project, index: number) => (
              <div key={project.name}>
                <div className="flex flex-col md:flex-row gap-8">
                  <img
                    src={`images/${project.image}`}
                    alt={`Screenshot of ${project.name}`}
                    className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
                  />
                  <div className="grow">
                    <div className="flex flex-col gap-8">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <p className="text-lg">{project.description}</p>
                      <p className="flex gap-4">
                        <ButtonLink
                          to={project.link}
                          text="Visit Site"
                          external
                        />
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
            ))}
          </div>
        </>
      </Section>
    </>
  );
}
