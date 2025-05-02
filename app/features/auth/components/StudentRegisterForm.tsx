import { Form } from "@remix-run/react";

export default function StudentRegisterForm() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Formulario de Inscripción para Estudiantes
      </h1>

      <Form method="post" className="space-y-8">
        {/* Datos personales */}
        <section>
          <h2 className="text-xl font-semibold bg-gray-100 p-2">1. Información Personal</h2>
          <label htmlFor="nombre">Nombre Completo *</label>
          <input type="text" name="nombre" id="nombre" required className="input" />

          <label htmlFor="documento">Tipo y Número de Documento *</label>
          <input type="text" name="documento" id="documento" required className="input" />

          <label htmlFor="correo">Correo Electrónico Institucional *</label>
          <input type="email" name="correo" id="correo" required className="input" />

          <label htmlFor="telefono">Teléfono *</label>
          <input type="tel" name="telefono" id="telefono" required className="input" />
        </section>

        {/* Información académica */}
        <section>
          <h2 className="text-xl font-semibold bg-gray-100 p-2">2. Información Académica</h2>
          <label htmlFor="programa">Programa de Formación *</label>
          <input type="text" name="programa" id="programa" required className="input" />

          <label htmlFor="semestre">Semestre Actual *</label>
          <select name="semestre" id="semestre" required className="input">
            <option value="">Seleccione</option>
            {[...Array(6)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>

          <label htmlFor="skills">Habilidades Técnicas (separadas por coma)</label>
          <textarea name="skills" id="skills" rows={3} className="textarea" />
        </section>

        {/* Motivación */}
        <section>
          <h2 className="text-xl font-semibold bg-gray-100 p-2">3. Motivación y Expectativas</h2>
          <label htmlFor="motivacion">¿Por qué quieres participar en el Semillero Digital? *</label>
          <textarea name="motivacion" id="motivacion" rows={4} required className="textarea" />

          <label htmlFor="disponibilidad">Disponibilidad de tiempo semanal (horas estimadas) *</label>
          <input type="number" name="disponibilidad" id="disponibilidad" required className="input" />
        </section>

        {/* Autorizaciones */}
        <section>
          <h2 className="text-xl font-semibold bg-gray-100 p-2">4. Autorizaciones</h2>
          <label className="flex items-start gap-2">
            <input type="checkbox" name="autorizacion" required />
            <span>
              Autorizo el tratamiento de mis datos personales según la política de privacidad institucional.
            </span>
          </label>
        </section>

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Enviar Inscripción
        </button>
      </Form>
    </div>
  );
}

// Estilos sugeridos (usa Tailwind CSS en tu proyecto para estos inputs):
// .input { width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; margin-top: 0.5rem; }
// .textarea { width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; margin-top: 0.5rem; }
