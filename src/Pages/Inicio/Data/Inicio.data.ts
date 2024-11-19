import { ExperienciaI, ProyectoI } from "../Interfaces/Inicio.interfaces";

export const Experiencia: ExperienciaI[] = [
  {
    Empresa: "CompuSoluciones",
    Puesto: "Desarrollador Web",
    Periodo: "Mayo 2023 - Presente",
    Img: "./assets/imgs/compusoluciones.png",
    Responsabilidades: [
      "Desarrollo de aplicaciones web",
      "Soporte a sistemas de la empresa",
      "Desarrollo de mejoras a sistemas ya implementados",
    ]
  },
  {
    Empresa: "Patrón Spirits de S.A de C.V",
    Puesto: "Soporte IT",
    Periodo: "Agosto 2022 - Febrero 2023",
    Img: "./assets/imgs/patronLogo.png",
    Responsabilidades: [
      "Administración de creedenciales del personal de la empresa",
      "Mantenimiento a equipos de cómputo",
      "Desarrollo de herramientas web para el departamento de IT",
      "Configuración de equipos de cómputo",
      "Asistencia técnica al personal de la empresa"
    ]
  },
  {
    Empresa: "Instituto Tecnológico de Ocotlán",
    Puesto: "Desarrollo y admnistrativo",
    Periodo: "Septiembre 2021 - Febrero 2022",
    Img: "./assets/imgs/itoLogo.jpeg",
    Responsabilidades: [
      "Control administrativo sobre los arcivos correspondientes a la academia de Sistemas",
      "Desarrollo de página web de la academia de Sistemas"
    ]
  },
]

export const Habilidades = ["React", "JavaScript", "TypeScript", "HTML", "CSS", "C#", "Node", "Express", "SQL Server", "PostgreSQL"]


export const Proyectos: ProyectoI[] = [
  {
    Titulo: "Tasks",
    Descripcion: "Aplicacion de gestión de tareas",
    Img: "./assets/imgs/tasks.png",
    Tecnologias: ["React", "TypeScript", "Node", "Express", "PostgresSQL"],
    Link: "https://tasks-brayan.netlify.app/"
  },
  {
    Titulo: "Saas Landing page",
    Descripcion: "Landing page de un saas ficticio",
    Img: "./assets/imgs/OneTask.png",
    Tecnologias: ["React", "TypeScript", "Next", "Tailwind", "Frame Motion"],
    Link: "https://brayanagf.github.io/SaasLanding/"
  }
]