interface SkillCategory {
  title: string;
  items: string[];
  delay: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Linguagens',
      items: ['JavaScript', 'TypeScript', 'PHP'],
      delay: '0.1s',
    },
    {
      title: 'Bibliotecas',
      items: ['React', 'Express'],
      delay: '0.2s',
    },
    {
      title: 'Frameworks',
      items: ['Next.js', 'CodeIgniter'],
      delay: '0.3s',
    },
    {
      title: 'Bancos de Dados',
      items: ['MongoDB', 'PostgreSQL', 'MySQL'],
      delay: '0.4s',
    },
  ];

  return (
    <section className="py-20 px-4 border-t border-[#38464c]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-[#a7c957] animate-fade-in-up">
          Habilidades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: category.delay }}
            >
              <h3 className="text-lg font-semibold text-[#a7c957] mb-4">
                {category.title}
              </h3>

              <ul className="space-y-2 text-[#d3c6aa]">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="hover:text-[#a7c957] transition-colors duration-200"
                  >
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
