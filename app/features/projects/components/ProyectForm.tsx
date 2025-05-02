import { Form, useActionData } from "@remix-run/react";


export default function ProyectoForm() {
    type ActionData = {
        error?: string;
      };
      
      const actionData = useActionData<ActionData>();
      

    {actionData?.error && (
      <p className="text-red-500">{actionData.error}</p>
    )}
    

  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">Formulario de Inscripción de Proyectos</h1>

      <Form method="post" encType="multipart/form-data" className="space-y-10">

        {/* 1. Información General del Proyecto */}
        <section>
          <h2 className="bg-gray-100 p-2 text-xl font-semibold">1. Información General del Proyecto</h2>
          <label htmlFor="ProjectForm">Nombre del Proyecto *</label>
          <input type="text" name="nombre_proyecto" required className="input" />

          <label htmlFor="ProjectForm">Descripción Breve *</label>
          <textarea name="descripcion_breve" rows={3} required className="textarea" />

          <label htmlFor="ProjectForm">Fecha de Inicio *</label>
          <input type="date" name="fecha_inicio" required className="input" />

          <label htmlFor="ProjectForm">Fecha de Finalización *</label>
          <input type="date" name="fecha_fin" required className="input" />
        </section>

        {/* 2. Datos del Responsable */}
        <section>
          <h2 className="bg-gray-100 p-2 text-xl font-semibold">2. Datos del Responsable del Proyecto</h2>
          <label htmlFor="ProjectForm">Nombre Completo *</label>
          <input type="text" name="responsable_nombre" required className="input" />

          <label htmlFor="ProjectForm">Cargo o Posición *</label>
          <input type="text" name="responsable_cargo" required className="input" />

          <label htmlFor="ProjectForm">Teléfono *</label>
          <input type="tel" name="responsable_telefono" required className="input" />

          <label htmlFor="ProjectForm">Email *</label>
          <input type="email" name="responsable_email" required className="input" />
        </section>

        {/* 3. Datos de la Organización */}
        <section>
          <h2 className="bg-gray-100 p-2 text-xl font-semibold">3. Datos de la Organización o Entidad Proponente</h2>
          <label htmlFor="ProjectForm">Nombre de la Organización *</label>
          <input type="text" name="organizacion_nombre" required className="input" />

          <label htmlFor="ProjectForm">Dirección *</label>
          <input type="text" name="organizacion_direccion" required className="input" />

          <label htmlFor="ProjectForm">NIT o Identificación Fiscal *</label>
          <input type="text" name="organizacion_nit" required className="input" />

          <label htmlFor="ProjectForm">Teléfono *</label>
          <input type="tel" name="organizacion_telefono" required className="input" />

          <label htmlFor="ProjectForm">Correo Electrónico *</label>
          <input type="email" name="organizacion_email" required className="input" />

          <label htmlFor="ProjectForm">Página Web</label>
          <input type="url" name="organizacion_web" className="input" />
        </section>

        {/* 4-11 Secciones restantes */}
        {/* ... Puedes continuar agregando las secciones 4 a 11 siguiendo este mismo patrón ... */}

        {/* Declaración */}
        <section>
          <h2 className="bg-gray-100 p-2 text-xl font-semibold">11. Declaraciones y Firmas</h2>
          <label htmlFor="" className="flex items-start gap-2">
            <input type="checkbox" name="compromiso" required />
            <span>
              Declaro que la información proporcionada es verdadera y autorizo su uso para fines de evaluación del proyecto.
            </span>
          </label>
        </section>

        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">Enviar Proyecto</button>
      </Form>
    </div>
  );
}


