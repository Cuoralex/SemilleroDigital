import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const mockProjects = [
    {
      nombre: "Sistema de Reclutamiento",
      descripcion: "Aplicación para gestionar procesos de selección de personal.",
      fechaInicio: "2023-01-15",
      responsable: "María González",
      miembros: [
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/32.jpg",
      ],
    },
    {
      nombre: "Portal del Empleado",
      descripcion: "Plataforma para que empleados gestionen sus beneficios.",
      fechaInicio: "2022-09-10",
      responsable: "Carlos Pérez",
      miembros: [
        "https://randomuser.me/api/portraits/men/65.jpg",
        "https://randomuser.me/api/portraits/women/21.jpg",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
