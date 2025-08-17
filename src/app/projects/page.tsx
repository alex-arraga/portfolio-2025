import { ProjectCard, ProjectStatus } from "@/features/projects/components";

export default function ProjectsPage() {
  return (
    <main className="container-page space-to-footer">
      <section className="container-section">
        <h1 className="h1-bold">Projects</h1>

        {/* Backend projects */}
        <div className="flex justify-start items-center w-full my-4">
          <h2 className="h2-semibold">Backend</h2>
        </div>

        {/* References */}
        <div className="flex flex-col w-full gap-4">
          <h4 className="h4-medium">Status</h4>

          <div className="flex justify-start items-center gap-6">
            <ProjectStatus withText status="production" />
            <ProjectStatus withText status="personal-project" />
          </div>
        </div>

        <div className="div-central">
          <div className="grid grid-cols-3 gap-8">
            <ProjectCard type="personal-project" />
            <ProjectCard type="personal-project" />
            <ProjectCard type="personal-project" />
          </div>
        </div>

        {/* Full Stack projects */}
        <div className="flex justify-start items-center w-full mt-20 mb-4">
          <h2 className="h2-semibold">Full Stack</h2>
        </div>

        <div className="div-central">
          <div className="grid grid-cols-3 gap-8">
            <ProjectCard type="personal-project" />
            <ProjectCard type="personal-project" />
            <ProjectCard type="personal-project" />
          </div>
        </div>

      </section>
    </main>
  );
}