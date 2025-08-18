import { WorkExperienceCard } from "@/features/work-experience/component"

export default function WorkExperiencePage() {
  return (
    <main className="container-page">
      <section className="container-section">
        <h1 className="h1-semibold">Work Experience</h1>

        <div className="div-central">
          <WorkExperienceCard />
        </div>
      </section>
    </main>
  );
}