// src/features/projects/components/ProjectCard.tsx
type ProjectData = {
  nombre: string;
  descripcion: string;
  fechaInicio: string;
  responsable: string;
  imagenProyecto?: string;
  miembros?: string[];
};

export default function ProjectCard({
  nombre,
  descripcion,
  fechaInicio,
  responsable,
  imagenProyecto = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  miembros = [],
}: ProjectData) {
  return (
    <div className="max-w-sm rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
      <div className="w-full">
        <img
          src={imagenProyecto}
          alt={`Imagen de ${nombre}`}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-blue-gray-900">{nombre}</h3>
        <p className="mt-2 text-base text-gray-700">{descripcion}</p>
      </div>

      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
        <div className="flex -space-x-3">
          {miembros.slice(0, 2).map((url, i) => (
            <img
              key={i}
              alt={`Miembro ${i + 1}`}
              src={url}
              className="inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center"
            />
          ))}
        </div>
        <div className="text-sm text-gray-600">
          <p>{responsable}</p>
          <p className="text-xs">{new Date(fechaInicio).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
