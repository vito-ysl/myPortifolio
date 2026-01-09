interface ContactItem {
  title: string;
  url: string;
  text: string;
  delay: string;
}

export default function Contact() {
  const contactItems: ContactItem[] = [
    {
      title: 'Email',
      url: 'mailto:seu@email.com',
      text: 'seu@email.com',
      delay: '0.1s',
    },
    {
      title: 'LinkedIn',
      url: '#',
      text: 'linkedin.com/in/seu-perfil',
      delay: '0.2s',
    },
    {
      title: 'GitHub',
      url: '#',
      text: 'github.com/seu-usuario',
      delay: '0.3s',
    },
  ];

  return (
    <section id="contato" className="py-20 px-4 border-t border-[#38464c]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-[#a7c957] animate-fade-in-up">Vamos Conversar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactItems.map((item, index) => (
            <a key={index} href={item.url} className="p-6 border border-[#38464c] rounded-lg hover:border-[#a7c957] hover:bg-[#38464c] transition-all duration-300 hover:shadow-lg hover:scale-105 animate-fade-in-up" style={{ animationDelay: item.delay }}>
              <h3 className="font-semibold text-[#a7c957] mb-2">{item.title}</h3>
              <p className="text-[#d3c6aa]">{item.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
