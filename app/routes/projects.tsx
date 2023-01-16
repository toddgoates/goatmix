import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getProjects } from "~/models/projects.server";
import Section from "~/components/Section";

import type { Project } from "~/models/projects.server";
import ProjectCard from "~/components/ProjectCard";

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
              <ProjectCard
                key={project.name}
                project={project}
                reverse={index % 2 === 0}
              />
            ))}
          </div>
        </>
      </Section>
    </>
  );
}
