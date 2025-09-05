import { Metadata } from "next";
import { ProjectCard, ProjectsReference } from "@/features/projects/components";
import { BackendProjects, FullStackProjects } from "@/features/projects/constants";

export const metadata: Metadata = {
  title: 'Projects'
}

export default function ProjectsPage() {
  return (
    <main className="container-page space-to-footer">
      <section className="container-section">
        <h1 className="h1-bold">Projects</h1>

        {/* Backend title */}
        <div className="div-central">
          {/* References */}
          <div className="flex flex-col w-full gap-2 sm:gap-4">
            <h4 className="h4-medium">Estado</h4>

            <div className="flex flex-col justify-start items-start gap-4">
              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2 sm:gap-6">
                <ProjectsReference withText status="personal" />
                <ProjectsReference withText status="personal-in-process" />
              </div>
              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2 sm:gap-6">
                <ProjectsReference withText status="production" />
                <ProjectsReference withText status="prod-in-process" />
              </div>
            </div>
          </div>

          {/* Backend projects */}
          <div className="div-central">
            <div className="flex justify-start items-center w-full">
              <h2 className="h2-semibold">Backend</h2>
            </div>

            <div className="responsive-grid">
              {BackendProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>

          {/* Full Stack title */}
          <div className="flex justify-start items-center w-full">
            <h2 className="h2-semibold">Full Stack</h2>
          </div>

          {/* Full Stack projects */}
          <div className="div-central">
            <div className="responsive-grid">
              {FullStackProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}