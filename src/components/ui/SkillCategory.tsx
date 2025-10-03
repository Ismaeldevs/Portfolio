import type { Skill } from '../../types/skills';

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-200 mb-6">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <h4 className="text-lg font-medium text-gray-200 mb-2">{skill.name}</h4>
            <p className="text-gray-400 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}