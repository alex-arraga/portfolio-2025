import { StackSkillCard } from '@/features/skills/components';
import { ArchitectureSkills, MainSkills, OtherSkills, ToolSkills } from '@/features/skills/constants';

export default function TechStackPage() {
  return (
    <main className="container-page">
      <section className="container-section">

        <h1 className="h1-bold">Tech Stack</h1>

        {/* Main */}
        <div className='div-central my-10'>
          <h2 className="h2-semibold mt-10">Main</h2>

          <div className='grid grid-cols-3 gap-10 justify-items-center'>
            {MainSkills.map((skill) => (
              <StackSkillCard key={skill.id + skill.name} {...skill} />
            ))}
          </div>
        </div>

        {/* Architectures */}
        <div className='div-central my-10'>
          <h2 className="h2-semibold mt-10">Architectures</h2>

          <div className='grid grid-cols-2 gap-10 justify-items-center'>
            {ArchitectureSkills.map((skill) => (
              <StackSkillCard key={skill.id + skill.name} {...skill} />
            ))}
          </div>
        </div>

        {/* Others */}
        <div className='div-central my-10'>
          <h2 className="h2-semibold mt-10">Others</h2>

          <div className='grid grid-cols-4 gap-10'>
            {OtherSkills.map((skill) => (
              <StackSkillCard key={skill.id + skill.name} {...skill} />
            ))}
          </div>
        </div>


        {/* Tools */}
        <div className='div-central mt-10 space-to-footer'>
          <h2 className="h2-semibold mt-10">Tools</h2>

          <div className='grid grid-cols-4 gap-10 justify-items-center w-full'>
            {ToolSkills.map((skill) => (
              <StackSkillCard key={skill.id + skill.name} {...skill} />
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}