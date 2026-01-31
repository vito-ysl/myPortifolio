export default function Experience() {
  const experiences = [
    {
      title: 'Desenvolvedor de Software',
      company: 'Prefeitura Municipal de Presidente Bernardes (MG)',
      period: 'Jan/2025 – Atual (~1 ano)',
      description: `Situação: Necessidade de manutenção, evolução e estabilidade do portal institucional do município, garantindo compatibilidade com diferentes dispositivos, rastreabilidade de acessos e conformidade com padrões modernos da web.\n\nAção: Atuei no desenvolvimento e manutenção de aplicações web utilizando JavaScript, jQuery e Bootstrap, realizando ajustes em páginas responsivas, criação e manutenção de componentes reutilizáveis, integração e configuração de ferramentas de monitoramento como Google Analytics e Google Tag Manager, além de suporte à estrutura de CMS e ao ambiente de servidor web institucional.\n\nResultado: Portal institucional estável e monitorado, com melhoria na rastreabilidade do comportamento dos usuários, redução de problemas de layout e maior consistência de navegação em diferentes dispositivos e resoluções.`,
      tags: ['JavaScript', 'jQuery', 'Bootstrap', 'HTML', 'CSS', 'Google Analytics', 'Google Tag Manager', 'CMS', 'Web Hosting', 'Responsive Design'],
      borderColor: '[#a7c957]',
      dotColor: '[#a7c957]',
      delay: '0.1s',
    }
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
