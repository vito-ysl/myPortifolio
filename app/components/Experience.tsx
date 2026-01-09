export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Empresa XYZ',
      period: '2024 - Presente',
      description: 'Desenvolvimento de aplicações web usando React e Node.js. Implementação de APIs REST e integração com banco de dados.',
      tags: ['React', 'Node.js', 'TypeScript'],
      borderColor: '[#a7c957]',
      dotColor: '[#a7c957]',
      delay: '0.1s',
    },
    {
      title: 'Frontend Developer',
      company: 'Startup ABC',
      period: '2023 - 2024',
      description: 'Criação de interfaces responsivas e otimizadas. Trabalho em equipe com design e backend.',
      tags: ['React', 'Tailwind', 'Next.js'],
      borderColor: '[#7fbbb3]',
      dotColor: '[#7fbbb3]',
      delay: '0.2s',
    },
  ];

  return (
    <section id="experiencia" className="py-20 px-4 border-t border-[#38464c]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-[#a7c957] animate-fade-in-up">Experiência Profissional</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative pl-8 border-l-2 border-${exp.borderColor} animate-fade-in-up`} style={{ animationDelay: exp.delay }}>
              <div className={`absolute w-3 h-3 bg-${exp.dotColor} rounded-full -left-2 top-2 animate-pulse-soft`}></div>
              <h3 className={`text-xl font-semibold text-${exp.borderColor}`}>{exp.title}</h3>
              <p className="text-sm text-[#7fbbb3] mt-1 font-medium">{exp.company} • {exp.period}</p>
              <p className="text-[#d3c6aa] mt-4 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {exp.tags.map((tag) => (
                  <span key={tag} className={`text-xs px-3 py-1 bg-[#38464c] text-${exp.borderColor} rounded-full hover:bg-${exp.borderColor} hover:text-[#2d353b] transition-all duration-200`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
