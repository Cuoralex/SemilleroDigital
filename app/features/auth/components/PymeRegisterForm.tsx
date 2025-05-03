import { Form } from "@remix-run/react";

export default function PymeRegisterForm() {
  return (
    <section className="p-8 max-w-4xl mx-auto text-gray-800 filter grayscale">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-8 text-center border-b pb-4">
            Formulario de inscripción para pequeñas y medianas empresas (pymes)
          </h1>
          <p className="text-base leading-relaxed mx-auto lg:w-3/4">
            Complete los siguientes campos para registrar su empresa.
          </p>
        </div>

        <Form method="post" encType="multipart/form-data" className="space-y-10">
          {/* 1. Información General de la Empresa */}
          <fieldset className="mb-8">
            <legend className="text-xl font-semibold mb-4">1. Información General de la Empresa</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="razon_social" placeholder="Razón Social" required className="input" />
              <input type="text" name="nombre_comercial" placeholder="Nombre Comercial" className="input" />
              <input type="text" name="tipo_sociedad" placeholder="Tipo de Sociedad (SAS, LTDA, SA...)" className="input" />
              <input type="text" name="nit" placeholder="Número de Identificación Tributaria (NIT)" required className="input" />
              <input type="date" name="fecha_constitucion" placeholder="Fecha de Constitución" className="input" />
              <input type="text" name="actividades" placeholder="Actividades Económicas" required className="input" />
              <input type="number" name="empleados" placeholder="Número de Empleados" className="input" />
            </div>
          </fieldset>

          {/* 2. Información de Contacto */}
          <fieldset className="mb-8">
            <legend className="text-xl font-semibold mb-4">2. Información de Contacto</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="direccion" placeholder="Dirección Principal" required className="input" />
              <input type="text" name="ciudad" placeholder="Ciudad y Departamento" className="input" />
              <input type="text" name="telefono" placeholder="Teléfono Fijo y/o Móvil" className="input" />
              <input type="email" name="correo" placeholder="Correo Electrónico Corporativo" className="input" />
              <input type="url" name="web" placeholder="Página Web" className="input" />
            </div>
          </fieldset>

          {/* 3. Información del Representante Legal */}
          <fieldset className="mb-8">
            <legend className="text-xl font-semibold mb-4">3. Información del Representante Legal</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="nombre_representante" placeholder="Nombre Completo" required className="input" />
              <input type="text" name="documento" placeholder="Tipo y Número de Documento" required className="input" />
              <input type="text" name="telefono_representante" placeholder="Teléfono de Contacto" className="input" />
              <input type="email" name="correo_representante" placeholder="Correo Electrónico" className="input" />
            </div>
          </fieldset>

          {/* 4. Información Financiera y Tributaria */}
          <fieldset className="mb-8">
            <legend className="text-xl font-semibold mb-4">4. Información Financiera y Tributaria</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="responsabilidades" placeholder="Responsabilidades Tributarias" className="input" />
              <input type="text" name="cuenta_bancaria" placeholder="Número de Cuenta Bancaria" className="input" />
              <input type="text" name="entidad_cuenta" placeholder="Entidad y Tipo de Cuenta" className="input" />
            </div>
          </fieldset>

          {/* 5. Documentos Adjuntos */}
          <fieldset className="mb-8">
            <legend className="text-xl font-semibold mb-4">5. Documentos Adjuntos Requeridos</legend>
            <div className="grid grid-cols-1 gap-4">
              <label>Copia del RUT: <input type="file" name="rut" required className="mt-1" /></label>
              <label>Certificado de Existencia: <input type="file" name="certificado_existencia" required className="mt-1" /></label>
              <label>Cédula del Representante Legal: <input type="file" name="cedula" required className="mt-1" /></label>
            </div>
          </fieldset>

          {/* 6. Autorizaciones */}
          <fieldset className="mb-8">
            <legend className="text-xl font-semibold mb-4">6. Autorizaciones y Declaraciones</legend>
            <div className="space-y-2">
              <label className="flex items-start">
                <input type="checkbox" name="autorizacion_datos" required className="mr-2 mt-1" />
                Autorizo el tratamiento de mis datos personales.
              </label>
              <label className="flex items-start">
                <input type="checkbox" name="declaracion_veracidad" required className="mr-2 mt-1" />
                Declaro que la información proporcionada es veraz y completa.
              </label>
            </div>
          </fieldset>

          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Enviar Inscripción
          </button>
        </Form>
      </div>
    </section>
  );
}