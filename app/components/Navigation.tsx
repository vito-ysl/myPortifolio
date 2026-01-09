interface NavigationProps {
  onLogoClick: () => void;
}

export default function Navigation({ onLogoClick }: NavigationProps) {
  return (
    <nav className="sticky top-0 bg-[#2d353b] border-b border-[#38464c] backdrop-blur-sm z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <button 
          onClick={onLogoClick}
          className="text-xl font-bold text-[#a7c957] hover:scale-105 transition-transform duration-500 active:scale-98"
        >
          VE
        </button>
        <div className="flex gap-8">
          <a href="#experiencia" className="text-sm hover:text-[#a7c957] hover:scale-105 transition-all duration-500 hover:-translate-y-0.5 relative group">
            Experiência
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a7c957] group-hover:w-full transition-all duration-500"></span>
          </a>
          <a href="#projetos" className="text-sm hover:text-[#a7c957] hover:scale-105 transition-all duration-500 hover:-translate-y-0.5 relative group">
            Projetos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a7c957] group-hover:w-full transition-all duration-500"></span>
          </a>
          <a href="#contato" className="text-sm hover:text-[#a7c957] hover:scale-105 transition-all duration-500 hover:-translate-y-0.5 relative group">
            Contato
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a7c957] group-hover:w-full transition-all duration-500"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
