// app/routes/_index.tsx
import { Link } from "@remix-run/react";
import Header from "~/components/layout/header";
import Footer from "~/components/layout/footer";
import { Briefcase, GraduationCap, Users, Handshake } from "lucide-react";

export default function Index() {
  const beneficios = [
    {
      titulo: "Seguro médico",
      icono: "/icons/salud.svg", // Asegúrate de tener este icono en /public/icons
    },
    {
      titulo: "Dietas",
      icono: "/icons/dietas.svg",
    },
    {
      titulo: "Cheque transporte",
      icono: "/icons/transporte.svg",
    },
    {
      titulo: "Formación",
      icono: "/icons/formacion.svg",
    },
  ];

  const participantes = [
    {
      nombre: "PYME",
      icono: <Briefcase className="w-10 h-10 text-blue-600 mb-2" />,
    },
    {
      nombre: "Estudiante",
      icono: <GraduationCap className="w-10 h-10 text-blue-600 mb-2" />,
    },
    {
      nombre: "Docente",
      icono: <Users className="w-10 h-10 text-blue-600 mb-2" />,
    },
    {
      nombre: "Aliados",
      icono: <Handshake className="w-10 h-10 text-blue-600 mb-2" />,
    },
  ];

  return (
    <main style={{ margin: 0, fontFamily: "Montserrat, sans-serif" }}>
      <Header />

      {/* Hero */}
      <div id="hero" className="h-screen w-full">
        <img
          src="https://www.unipiloto.edu.co/wp-content/uploads/2017/10/NoticiasDEE_01a1.jpg"
          alt="banner"
          title="banner"
          className="w-full h-[100%] object-cover"
        />
      </div>

      {/* Logo */}
      <div
        className="bg-white p-5 flex justify-center"
        style={{
          backgroundColor: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <a href="https://www.cesde.edu.co">
          <img
            src="https://www.cesde.edu.co/wp-content/uploads/2024/11/Logo-Suscripcion-Empresarial.jpg"
            alt="Cesde"
            title="Cesde"
            width="264"
          />
        </a>
      </div>

      {/* Inscripción */}
      <section
        className=""
        id="inscripcion"
        style={{
          backgroundColor: "#E3287A",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h3>Suscripción para Empresas</h3>
        <button
          className="middle none center mr-3 rounded-lg border border-white py-3 px-6 font-sans text-xs font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-dark="true"
          onClick={() => (window.location.href = "/register")}
        >
          Realizar inscripcion
        </button>
      </section>

      {/* Suscripción descripción */}
      <section id="quees" className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="/Emprende.png"
              alt="Conecta CESDE"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left bg-gray-800 text-white p-8 rounded-xl shadow-xl">
            <h2 className="text-4xl font-bold mb-4">CONECTA CESDE</h2>
            <p className="text-lg leading-relaxed">
              Un puente entre las necesidades tecnológicas de las PYMEs y el
              talento joven de estudiantes de último semestre con ganas de
              aprender haciendo.
            </p>
          </div>
        </div>
      </section>

      {/* Problemas */}
      <section id="resuelve" className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Columna Izquierda */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Problemas que resolvemos
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Conecta CESDE es una solución educativa y empresarial que ayuda a:
            </p>

            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-yellow-500 text-xl font-bold mr-4">
                  1
                </span>
                <p className="text-gray-700">
                  Las PYMEs que necesitan soluciones digitales accesibles y
                  efectivas.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 text-xl font-bold mr-4">
                  2
                </span>
                <p className="text-gray-700">
                  Estudiantes de últimos semestres que buscan experiencia real
                  en proyectos tecnológicos.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 text-xl font-bold mr-4">
                  3
                </span>
                <p className="text-gray-700">
                  Instituciones que buscan conectar su formación con necesidades
                  del mercado.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 text-xl font-bold mr-4">
                  4
                </span>
                <p className="text-gray-700">
                  El ecosistema regional que necesita impulsar la innovación a
                  bajo costo.
                </p>
              </li>
            </ul>

            <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md shadow hover:bg-yellow-500 transition">
              Leer más
            </button>
          </div>

          {/* Columna Derecha - Imagen */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-yellow-300 rounded-lg rotate-6 -z-10"></div>
            <img
              src="https://impulsapopular.com/wp-content/uploads/2018/02/4047-Tips-para-dar-un-gran-servicio-al-cliente.jpg?" // Usa aquí tu imagen real
              alt="Emprendimiento"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Beneficios sociales de empresa
          </h2>
          <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-12">
            Ejemplos más demandados
          </p>

          <div className="grid bg-pink grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { titulo: "Seguro médico", icono: "/icons/seguro-medico.svg" },
              { titulo: "Dietas", icono: "/icons/dietas.svg" },
              { titulo: "Cheque transporte", icono: "/icons/transporte.svg" },
              { titulo: "Formación", icono: "/icons/formacion.svg" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-pink rounded-xl shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-lg"
              >
                <img
                  src={item.icono}
                  alt={item.titulo}
                  className="w-12 h-12 mb-4 text-yellow-400"
                />
                <h3 className="text-base font-semibold text-gray-800">
                  {item.titulo}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participantes */}
      <section id="participantes" className="bg-indigo-50 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10">
          ¿Quiénes participarán?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {participantes.map(({ nombre, icono }) => (
            <div
              key={nombre}
              className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-6 hover:shadow-lg transition"
            >
              {icono}
              <span className="text-lg font-medium text-gray-700">
                {nombre}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Funcionamiento */}
      <section id="funcionamiento" className="py-10 px-5">
        <h2 className="text-center text-gray-800 text-2xl font-bold mb-6">
          ¿Cómo funciona?
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-5xl mx-auto">
          {/* Paso 1 */}
          <div className="w-full lg:w-1/3 text-center px-4">
            <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
              <div className="w-1/3 h-20 flex items-center justify-center">
                <span className="text-xl font-bold">1</span>
              </div>
              <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-2 rounded-r-lg">
                <h3 className="font-bold text-sm">Registro</h3>
                <p className="text-xs text-gray-600">
                  Las PYMEs registran sus proyectos.
                </p>
              </div>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="w-full lg:w-1/3 text-center px-4">
            <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
              <div className="w-1/3 h-20 flex items-center justify-center">
                <span className="text-xl font-bold">2</span>
              </div>
              <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-2 rounded-r-lg">
                <h3 className="font-bold text-sm">Análisis y segmentación</h3>
                <p className="text-xs text-gray-600">
                  El equipo CESDE analiza y segmenta los proyectos.
                </p>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="w-full lg:w-1/3 text-center px-4">
            <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
              <div className="w-1/3 h-20 flex items-center justify-center">
                <span className="text-xl font-bold">3</span>
              </div>
              <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-2 rounded-r-lg">
                <h3 className="font-bold text-sm">Asignación</h3>
                <p className="text-xs text-gray-600">
                  CESDE asigna a los estudiantes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Segunda fila */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-6 max-w-4xl mx-auto">
          {/* Paso 4 */}
          <div className="w-full lg:w-1/2 text-center px-4">
            <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
              <div className="w-1/3 h-20 flex items-center justify-center">
                <span className="text-xl font-bold">4</span>
              </div>
              <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-2 rounded-r-lg">
                <h3 className="font-bold text-sm">Seguimiento</h3>
                <p className="text-xs text-gray-600">
                  Docentes realizan seguimiento y acompañamiento.
                </p>
              </div>
            </div>
          </div>

          {/* Paso 5 */}
          <div className="w-full lg:w-1/2 text-center px-4">
            <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
              <div className="w-1/3 h-20 flex items-center justify-center">
                <span className="text-xl font-bold">5</span>
              </div>
              <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-2 rounded-r-lg">
                <h3 className="font-bold text-sm">Entrega</h3>
                <p className="text-xs text-gray-600">
                  Entrega de proyectos a las PYMEs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
          <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">
            Testimonios
          </span>
          <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="lg:w-6/12 lg:mx-auto">
            Historias reales de cómo Conecta CESDE ha impactado positivamente a PYMEs colombianas.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Testimonio 1 */}
          <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
            <img
              src="https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp"
              alt="Fernando Cifuentes"
              loading="lazy"
              className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
            />
            <div className="sm:w-7/12 pl-0 p-5">
              <div className="space-y-2">
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-cyan-900">María Gómez</h4>
                  <p className="text-gray-600 italic">
                    “Gracias a Conecta CESDE, mi PYME logró tener su primera aplicación web sin invertir grandes recursos.”
                  </p>
                </div>
                <span className="block text-sm text-cyan-600">Fundadora de EcoTienda</span>
              </div>
            </div>
          </div>

          {/* Testimonio 2 */}
          <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
            <img
              src="https://img.freepik.com/foto-gratis/joven-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740"
              alt="Usuario 2"
              loading="lazy"
              className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
            />
            <div className="sm:w-7/12 pl-0 p-5">
              <div className="space-y-2">
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-cyan-900">Carlos Pérez</h4>
                  <p className="text-gray-600 italic">
                    “El acompañamiento de estudiantes nos permitió crear una solución digital funcional y profesional.”
                  </p>
                </div>
                <span className="block text-sm text-cyan-600">CEO de AgroMovil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </main>
  );
}
