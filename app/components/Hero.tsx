import Image from 'next/image';

export default function Hero() {
  return (
    <header className="py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 animate-slide-in-left">
            <h1 className="text-6xl font-bold mb-4 text-[#a7c957] hover:scale-105 transition-transform duration-300">Vitor Evangelista</h1>
            <p className="text-2xl text-[#7fbbb3] mb-6 hover:translate-x-2 transition-transform duration-300">Full Stack Developer</p>
            <p className="text-lg text-[#d3c6aa] mb-8 leading-relaxed">
              Desenvolvedor apaixonado por criar soluções web modernas e escaláveis. Com foco em React, Node.js e arquitetura de software.
            </p>
            <div className="flex gap-4">
              <a href="#contato" className="px-6 py-3 bg-[#a7c957] text-black font-semibold rounded hover:bg-[#83c092] transition-all duration-500 hover:shadow-lg hover:scale-102 hover:-translate-y-0.5 active:scale-98">
                Entre em Contato
              </a>
              <a href="#projetos" className="px-6 py-3 border border-[#a7c957] text-[#a7c957] font-semibold rounded hover:bg-[#38464c] transition-all duration-500 hover:shadow-lg hover:scale-102 hover:-translate-y-0.5 active:scale-98">
                Ver Trabalhos
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-slide-in-right">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float hover:scale-110 transition-transform duration-300">
              <Image
                src="/images/profile.jpg"
                alt="foto do programador"
                fill
                className="rounded-lg object-cover border-2 border-[#a7c957]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
