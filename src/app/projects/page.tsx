import { ProjectCard, ProjectsReference } from "@/features/projects/components";
import { BackendProjects, FullStackProjects } from "@/features/projects/constants";

export default function ProjectsPage() {
  return (
    <main className="container-page space-to-footer">
      <section className="container-section">
        <h1 className="h1-bold">Projects</h1>

        {/* Backend title */}
        <div className="flex justify-start items-center w-full my-4">
          <h2 className="h2-semibold">Backend</h2>
        </div>

        {/* References */}
        <div className="flex flex-col w-full gap-4">
          <h4 className="h4-medium">Status</h4>

          <div className="flex justify-start items-center gap-6">
            <ProjectsReference withText status="production" />
            <ProjectsReference withText status="personal" />
          </div>
        </div>

        {/* Backend projects */}
        <div className="div-central">
          <div className="grid grid-cols-3 gap-8">
            {BackendProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        {/* Full Stack title */}
        <div className="flex justify-start items-center w-full mt-20 mb-4">
          <h2 className="h2-semibold">Full Stack</h2>
        </div>

        {/* Full Stack projects */}
        <div className="div-central">
          <div className="grid grid-cols-3 gap-8">
            {FullStackProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}