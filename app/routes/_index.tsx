// app/routes/_index.tsx
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main style={{ margin: 0, fontFamily: "Montserrat, sans-serif" }}>
      {/* Navbar */}
      <div
        style={{
          backgroundColor: "white",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href="https://www.cesde.edu.co">
          <img
            src="https://www.cesde.edu.co/wp-content/uploads/2023/02/logo-Cesde-2023.svg"
            alt="Cesde"
            title="Cesde"
            width="264"
            height="53"
          />
        </a>
        <nav>
          {[
            ["#inscripcion", "Inscripciones"],
            ["#quees", "¿Qué es conecta-CESDE?"],
            ["#resuelve", "¿Qué resuelve?"],
            ["#beneficios", "¿Beneficios?"],
            ["#participantes", "Participantes"],
            ["#funcionamiento", "Funcionamiento"],
            ["#testimonios", "Testimonios"],
            ["#contactanos", "Contáctanos"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              style={{
                color: "gray",
                marginRight: "10px",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Hero */}
      <div id="hero" className="h-screen">
          <img
            src="public/images/banner.jpg"
            alt="banner"
            title="banner"
            className="w-full h-[100%] object-cover"
          />
      </div>

      {/* Logo */}
      <div className="bg-white p-5 flex justify-center"
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
      <section className=""
        id="inscripcion"
        style={{
          backgroundColor: "#E3287A",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h3>Suscripción para Empresas</h3>
        <button onClick={() => (window.location.href = "/FormProyect.html")}>
          Realizar inscripción
        </button>
      </section>

      {/* Suscripción descripción */}
      <section
        id="quees"
        style={{
          backgroundColor: "#f4f4f4",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <table width="100%">
          <tbody>
            <tr>
              <td width="50%">
                <img src="public/images/Emprende.png" alt="emprende" width="100%" />
              </td>
              <td
                width="50%"
                style={{
                  backgroundColor: "gray",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <h1 style={{ fontSize: 30, margin: 0 }}>CONECTA CESDE</h1>
                <p
                  style={{
                    fontSize: 16,
                    marginTop: 20,
                    maxWidth: 300,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Es un puente entre las necesidades tecnológicas de las PYMEs y
                  estudiantes de último semestre que necesitan experiencia en
                  proyectos reales.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Problemas */}
      <section
        id="resuelve"
        style={{ padding: "40px 20px", backgroundColor: "#f4f4f4" }}
      >
        <h2 style={{ textAlign: "center", color: "#303838" }}>
          Problemas que resuelve
        </h2>
        <ul style={{ maxWidth: 700, margin: "30px auto", fontSize: 16 }}>
          <li>Necesidades de herramientas digitales para PYMEs.</li>
          <li>Dificultad de los estudiantes para adquirir experiencia real.</li>
        </ul>
      </section>

      {/* Beneficios */}
      <section
        id="beneficios"
        style={{ padding: "40px 20px", backgroundColor: "#ffffff" }}
      >
        <h2 style={{ textAlign: "center", color: "#303838" }}>Beneficios</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {[
            ["Para PYMEs", "Solución tecnológica accesible."],
            ["Para estudiantes", "Experiencia en el mundo real."],
            ["Para CESDE", "Impacto social y educativo."],
          ].map(([title, desc], i) => (
            <div
              key={i}
              style={{
                width: 250,
                padding: 20,
                backgroundColor: "#f1f1f1",
                borderRadius: 8,
              }}
            >
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Participantes */}
      <section
        id="participantes"
        style={{ padding: "40px 20px", backgroundColor: "#E8EAF6" }}
      >
        <h2 style={{ textAlign: "center", color: "#303838" }}>
          ¿Quiénes participarán?
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginTop: "30px",
            fontSize: 16,
          }}
        >
          {["PYME", "Estudiante", "Docente", "Aliados"].map((p) => (
            <div key={p}>{p}</div>
          ))}
        </div>
      </section>

      {/* Funcionamiento */}
      <section id="funcionamiento" style={{ padding: "40px 20px" }}>
        <h2 style={{ textAlign: "center", color: "#303838" }}>
          ¿Cómo funciona?
        </h2>
        <ol style={{ maxWidth: 700, margin: "30px auto", fontSize: 16 }}>
          <li>Las PYMEs registran sus proyectos.</li>
          <li>El equipo CESDE analiza y segmenta los proyectos.</li>
          <li>CESDE asigna a los estudiantes.</li>
          <li>Docentes realizan seguimiento y acompañamiento.</li>
          <li>Entrega de proyectos a las PYMEs.</li>
        </ol>
      </section>

      {/* Testimonios */}
      <section
        id="testimonios"
        style={{
          backgroundColor: "#f2f2f2",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#303838" }}>Testimonios</h2>
        <p style={{ fontStyle: "italic" }}>
          Gracias a Conecta CESDE, mi PYME logró tener su primera aplicación
          web sin invertir grandes recursos.
        </p>
      </section>

      {/* Contacto */}
      <section
        id="contactanos"
        style={{
          backgroundColor: "#303838",
          color: "white",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h2>Contáctanos</h2>
        <p>Email: conecta@cesde.edu.co</p>
        <p>Teléfono: (604) 444 1234</p>
        <p>Redes sociales: [Facebook] [Instagram] [LinkedIn]</p>
      </section>
    </main>
  );
}
