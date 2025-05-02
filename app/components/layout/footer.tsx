import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer id="contactanos" className="bg-gray-800 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Columna izquierda: formulario */}
        <div className="w-full md:w-[45%] bg-white p-4 rounded border border-gray-200 text-gray-800">
          <form action="https://formbold.com/s/FORM_ID" method="POST" className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-base font-medium mb-1 text-gray-800">
                Nombre completo
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Tu nombre"
                className="w-full rounded border border-gray-300 py-1.5 px-3 text-sm
focus:border-pink-500 focus:shadow-md outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-base font-medium mb-1 text-gray-800">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="ejemplo@dominio.com"
                className="w-full rounded border border-gray-300 py-1.5 px-3 text-sm
focus:border-pink-500 focus:shadow-md outline-none"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-base font-medium mb-1 text-gray-800">
                Asunto
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Asunto del mensaje"
                className="w-full rounded border border-gray-300 py-1.5 px-3 text-sm
focus:border-pink-500 focus:shadow-md outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-base font-medium mb-1 text-gray-800">
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Escribe tu mensaje..."
                className="w-full rounded border border-gray-300 py-1.5 px-3 text-sm
resize-none focus:border-pink-500 focus:shadow-md outline-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-pink-600 text-white font-semibold py-2 px-6 rounded hover:bg-pink-700 transition"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>

        {/* Columna derecha: información de contacto */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
          <p className="mb-2">Email: <a href="mailto:conecta@cesde.edu.co" className="underline hover:text-pink-300">conecta@cesde.edu.co</a></p>
          <p className="mb-2">Teléfono: (604) 444 1234</p>
          <p className="mb-4">Redes sociales:</p>

          <div className="flex justify-center md:justify-start gap-6">
            <a href="https://facebook.com/cesdeoficial" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition">
              Facebook
            </a>
            <a href="https://instagram.com/cesdeoficial" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition">
              Instagram
            </a>
            <a href="https://linkedin.com/school/cesdeoficial" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
