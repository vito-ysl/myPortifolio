import Image from "next/image";
import { Url } from "url";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  link: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Unipet",
      desc: "Plataforma de adoção de pets com sistema de busca avançado",
      tags: ["React", "Node.js", "mysql"],
      link: "https://github.com/equipe-silver-fox/unipet",
    },
    {
      title: "Linux Pedia Api",
      desc: "API RESTful para consulta de comandos Linux",
      tags: ["NodeJs", "Java-script", "Bootstrap"],
      link: "https://linux-pedia-api.vercel.app/",
    },
  ];

  return (
    <section id="projetos" className="py-20 px-4 border-t border-[#38464c]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-[#a7c957] animate-fade-in-up">
          Projetos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link ?? "#"}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              onClick={(e) => !project.link && e.preventDefault()}
            >
              <div className="p-4 hover:bg-[#38464c] transition-all duration-300 border-4 ">
                <div className="flex items-start justify-between mb-4" >
                  <h3 className="text-lg font-semibold text-[#a7c957] group-hover:text-[#83c092]">
                    {project.title}
                  </h3>
                  <svg
                    className="w-5 h-5 text-[#a7c957] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <p className="text-sm text-[#d3c6aa] mb-4">{project.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-[#2d353b] text-[#7fbbb3] rounded border border-[#38464c] hover:border-[#a7c957] hover:text-[#a7c957] transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
