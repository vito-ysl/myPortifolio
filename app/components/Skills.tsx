interface SkillCategory {
  title: string;
  items: string[];
  delay: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      items: ['React & Next.js', 'Tailwind CSS', 'TypeScript', 'Responsive Design'],
      delay: '0.1s',
    },
    {
      title: 'Backend',
      items: ['Node.js & Express', 'MongoDB & PostgreSQL', 'REST APIs', 'Authentication'],
      delay: '0.2s',
    },
    {
      title: 'Ferramentas',
      items: ['Git & GitHub', 'Docker', 'VS Code', 'Figma'],
      delay: '0.3s',
    },
  ];

  return (
    <section className="py-20 px-4 border-t border-[#38464c]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-[#a7c957] animate-fade-in-up">Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: category.delay }}>
              <h3 className="text-lg font-semibold text-[#a7c957] mb-4">{category.title}</h3>
              <ul className="space-y-2 text-[#d3c6aa]">
                {category.items.map((item) => (
                  <li key={item} className="hover:text-[#a7c957] transition-colors duration-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
