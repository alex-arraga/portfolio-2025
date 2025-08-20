import { WorkExperienceCard } from "@/features/work-experience/components"
import { WorkExperiences } from '@/features/work-experience/constants';

export default function WorkExperiencePage() {
  return (
    <main className="container-page space-to-footer">
      <section className="container-section">
        <h1 className="h1-semibold">Work Experience</h1>

        <div className="div-central">
          <div className="responsive-grid">
            {WorkExperiences.map((data, index) => (
              <WorkExperienceCard key={data.name + index} {...data} />
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}