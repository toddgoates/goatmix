import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getProjects } from "~/models/projects.server";
import Section from "~/components/Section";
import ProjectCard from "~/components/ProjectCard";

import type { MetaFunction } from "@remix-run/node";
import type { Project } from "~/models/projects.server";

export const meta: MetaFunction = () => ({
  title: "Todd Goates | Projects",
  description:
    "Some of the different web projects that Todd Goates has worked on",
});

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
          <div className="grid gap-12">
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
