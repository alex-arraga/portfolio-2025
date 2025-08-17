import { ProjectCard } from "@/features/projects/components";

export default function ProjectsPage() {
  return (
    <main className="container-page">
      <section className="container-section">
        <h1 className="h1-bold">Projects</h1>

        <div className="div-central my-10">
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