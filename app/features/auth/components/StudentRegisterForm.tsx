import { Form } from "@remix-run/react";

export default function StudentRegisterForm() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 filter grayscale">
      <div className="text-center mb-12">
      <h1 className="text-3xl font-bold mb-8 text-center border-b pb-4">
        Formulario de Inscripción para Estudiantes
      </h1>
      <p className="text-base leading-relaxed mx-auto lg:w-3/4">
            Complete los siguientes campos para registrarse como estudiante.
          </p>
      </div>

      <Form method="post" className="space-y-10">
        {/* 1. Información Personal */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">1. Información Personal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nombre" className="block font-medium">Nombre Completo *</label>
              <input type="text" name="nombre" id="nombre" required className="input" />
            </div>
            <div>
              <label htmlFor="documento" className="block font-medium">Tipo y Número de Documento *</label>
              <input type="text" name="documento" id="documento" required className="input" />
            </div>
            <div>
              <label htmlFor="correo" className="block font-medium">Correo Electrónico Institucional *</label>
              <input type="email" name="correo" id="correo" required className="input" />
            </div>
            <div>
              <label htmlFor="telefono" className="block font-medium">Teléfono *</label>
              <input type="tel" name="telefono" id="telefono" required className="input" />
            </div>
          </div>
        </section>

        {/* 2. Información Académica */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">2. Información Académica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="programa" className="block font-medium">Programa de Formación *</label>
              <input type="text" name="programa" id="programa" required className="input" />
            </div>
            <div>
              <label htmlFor="semestre" className="block font-medium">Semestre Actual *</label>
              <select name="semestre" id="semestre" required className="input">
                <option value="">Seleccione</option>
                {[...Array(6)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="skills" className="block font-medium">Habilidades Técnicas (separadas por coma)</label>
              <textarea name="skills" id="skills" rows={3} className="textarea" />
            </div>
          </div>
        </section>

        {/* 3. Motivación */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">3. Motivación y Expectativas</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="motivacion" className="block font-medium">¿Por qué quieres participar en el Semillero Digital? *</label>
              <textarea name="motivacion" id="motivacion" rows={4} required className="textarea" />
            </div>
            <div>
              <label htmlFor="disponibilidad" className="block font-medium">Disponibilidad de tiempo semanal (horas estimadas) *</label>
              <input type="number" name="disponibilidad" id="disponibilidad" required className="input" />
            </div>
          </div>
        </section>

        {/* 4. Autorizaciones */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">4. Autorizaciones</h2>
          <label className="flex items-start gap-2">
            <input type="checkbox" name="autorizacion" required className="mt-1" />
            <span>
              Autorizo el tratamiento de mis datos personales según la política de privacidad institucional.
            </span>
          </label>
        </section>

        <div className="text-center">
          <button type="submit" className="bg-gray-700 text-white py-2 px-6 rounded hover:bg-gray-800 transition">
            Enviar Inscripción
          </button>
        </div>
      </Form>
    </div>
  );
}
