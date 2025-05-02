// app/components/StudentTest.tsx
import { useState } from "react";

type Pregunta = {
  id: string;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: string;
};

const preguntas: Pregunta[] = [
  {
    id: "q1",
    pregunta: "¿Cuál de las siguientes etiquetas se utiliza para definir un encabezado de nivel 1?",
    opciones: ["<header>", "<title>", "<h1>", "<head>"],
    respuestaCorrecta: "<h1>",
  },
  {
    id: "q2",
    pregunta: "¿Qué atributo permite abrir un enlace en una nueva pestaña?",
    opciones: ['href="_blank"', 'target="_blank"', 'window="_blank"', 'newtab="true"'],
    respuestaCorrecta: 'target="_blank"',
  },
  // Agrega aquí todas las demás preguntas del documento...
];

export default function StudentTest() {
  const [respuestas, setRespuestas] = useState<Record<string, string>>({});

  const handleChange = (id: string, value: string) => {
    setRespuestas((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section className="max-w-4xl mx-auto p-6 space-y-8 bg-white py-12">
      <h1 className="text-2xl font-bold text-center mb-4 ">Cuestionario: HTML y CSS</h1>
      {preguntas.map((preg) => (
        <div key={preg.id} className="border border-gray-200 p-4 rounded-md shadow-sm">
          <p className="font-medium text-gray-800 mb-4">{preg.pregunta}</p>
          <div className="space-y-2">
            {preg.opciones.map((opcion, index) => (
              <label key={index} className="flex items-center space-x-2 text-gray-700">
                <input
                  type="radio"
                  name={preg.id}
                  value={opcion}
                  checked={respuestas[preg.id] === opcion}
                  onChange={() => handleChange(preg.id, opcion)}
                  className="accent-blue-600"
                />
                <span>{opcion}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
