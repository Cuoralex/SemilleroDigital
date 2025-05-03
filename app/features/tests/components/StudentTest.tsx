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
  {
    id: "q3",
    pregunta: "¿Cuál de las siguientes etiquetas define un contenedor genérico?",
    opciones: ['<container>', '<div>', '<section>', '<main>'],
    respuestaCorrecta: '<div>',
  },
  {
    id: "q4",
    pregunta: "¿Cuál es la función del atributo alt en una imagen?",
    opciones: ['Cambiar el tamaño', 'Hacerla responsiva', 'Mostrar texto alternativo', 'Cambiar su posición'],
    respuestaCorrecta: 'Mostrar texto alternativo',
  },
  {
    id: "q5",
    pregunta: "¿Cuál es el propósito de la etiqueta <meta charset=`UTF-8`>?",
    opciones: ['Definir el autor', 'Establecer codificación de caracteres', 'Insertar estilos', 'Cargar scripts externos'],
    respuestaCorrecta: 'Establecer codificación de caracteres',
  },
  {
    id: "q6",
    pregunta: "¿Qué propiedad CSS se usa para establecer el tipo de letra?",
    opciones: ['font-style', 'font-family', 'text-style', 'font-type'],
    respuestaCorrecta: 'font-family',
  },
  {
    id: "q7",
    pregunta: "¿Qué significa la sigla HTML?",
    opciones: ['High Text Markup Language', 'Hyperlink Text Markup Language', 'Hyper Text Markup Language', 'Hyperlinking and Text Mark Language'],
    respuestaCorrecta: 'Hyper Text Markup Language',
  },
  {
    id: "q8",
    pregunta: "¿Cuál de los siguientes es un selector válido en CSS?",
    opciones: ['select:', '*selector', '#miID', 'link>style'],
    respuestaCorrecta: '#miID',
  },
  {
    id: "q9",
    pregunta: "¿Qué propiedad CSS se usa para poner en negrita el texto?",
    opciones: ['font-weight', 'font-thickness', 'text-style', 'bold-text'],
    respuestaCorrecta: 'font-weight',
  },
  {
    id: "q10",
    pregunta: "¿Qué etiqueta HTML semántica representa el contenido principal de una página?",
    opciones: ['<main>', '<body>', '<content>', '<article>'],
    respuestaCorrecta: '<main>',
  },

  {
    id: "q11",
    pregunta: "¿Qué etiqueta usarías para crear un formulario en HTML?",
    opciones: ["<input>", "<form>", "<label>", "<div>"],
    respuestaCorrecta: "<form>",
  },
  {
    id: "q12",
    pregunta: '¿Cómo aplicarías un color de fondo rojo a un párrafo con la clase "alerta"?',
    opciones: [
      "alerta { background-color: red; }",
      ".alerta { background: red; }",
      "p.alerta = { color: red; }",
      "p > alerta { background-color: red; }"
    ],
    respuestaCorrecta: ".alerta { background: red; }",
  },
  {
    id: "q13",
    pregunta: "¿Qué etiqueta se usa para insertar una imagen?",
    opciones: ["<media>", "<pic>", "<img>", "<image>"],
    respuestaCorrecta: "<img>",
  },
  {
    id: "q14",
    pregunta: "Si quieres que un div ocupe todo el ancho disponible, ¿qué propiedad CSS usarías?",
    opciones: [
      "display: inline;",
      "width: 100%;",
      "position: fixed;",
      "float: full;"
    ],
    respuestaCorrecta: "width: 100%;",
  },
  {
    id: "q15",
    pregunta: "¿Qué línea de código centra un texto en CSS?",
    opciones: [
      "align: center;",
      "text-align: center;",
      "center: true;",
      "margin: auto;"
    ],
    respuestaCorrecta: "text-align: center;",
  },
  {
    id: "q16",
    pregunta: "¿Cómo se establece un borde de 2 píxeles sólido y negro en CSS?",
    opciones: [
      "border: 2 solid black;",
      "border: solid 2px black;",
      "border: 2px solid black;",
      "bordersize: 2px, color: black, type: solid;"
    ],
    respuestaCorrecta: "border: 2px solid black;",
  },
  {
    id: "q17",
    pregunta: "¿Qué etiqueta se usa para insertar una fila en una tabla?",
    opciones: ["<tf>", "<row>", "<td>", "<tr>"],
    respuestaCorrecta: "<tr>",
  },
  {
    id: "q18",
    pregunta: "¿Qué significa esta regla CSS? .menu li { list-style: none; }",
    opciones: [
      "Elimina el guion de los ítems de lista dentro de .menu",
      "Añade viñetas personalizadas",
      "Ordena los elementos en línea",
      "Cambia el tipo de letra en listas"
    ],
    respuestaCorrecta: "Elimina el guion de los ítems de lista dentro de .menu",
  },
  {
    id: "q19",
    pregunta: "¿Qué hace la etiqueta <br>?",
    opciones: [
      "Inserta una barra horizontal",
      "Crea una nueva línea",
      "Cambia el color del fondo",
      "Agrega espacio entre columnas"
    ],
    respuestaCorrecta: "Crea una nueva línea",
  },
  {
    id: "q20",
    pregunta: "¿Cómo harías que una hoja de estilos se aplique solo a pantallas menores a 600px?",
    opciones: [
      "@media screen and (min-width: 600px)",
      "@media screen and (max-width: 600px)",
      "@media-device max-width=600px",
      "@media max-device: 600px"
    ],
    respuestaCorrecta: "@media screen and (max-width: 600px)",
  },

  
  {
    id: "q21",
    pregunta: "La etiqueta <strong> se usa para poner texto en negrita.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: "Verdadero",
  },
  {
    id: "q22",
    pregunta: "La propiedad padding controla el espacio fuera del borde del elemento.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: "Falso",
  },
  {
    id: "q23",
    pregunta: "<span> se utiliza para aplicar estilos a fragmentos de texto en línea.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: "Verdadero",
  },
  {
    id: "q24",
    pregunta: "Una clase puede aplicarse a múltiples elementos HTML.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: "Verdadero",
  },
  {
    id: "q25",
    pregunta: "<link> se usa para insertar imágenes en HTML.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: "Falso",
  },
  {
    id: "q26",
    pregunta: "El modelo de caja en CSS incluye margin, border, padding y content.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: "Verdadero",
  },
  {
    id: "q27",
    pregunta: "El valor block en display hace que el elemento se comporte como un párrafo.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: "Verdadero",
  },
  {
    id: "q28",
    pregunta: 'El atributo type="password" en un input oculta los caracteres ingresados.',
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: "Verdadero",
  },
  {
    id: "q29",
    pregunta: "En CSS, z-index funciona solo con elementos posicionados (relative, absolute, etc.).",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: "Verdadero",
  },
  {
    id: "q30",
    pregunta: "La etiqueta <em> es equivalente a <i> pero con significado semántico.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: "Verdadero",
  },
  
];

export default function StudentTest() {
  const [respuestas, setRespuestas] = useState<Record<string, string>>({});

  const handleChange = (id: string, value: string) => {
    setRespuestas((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section className="p-8 max-w-4xl mx-auto text-gray-800 filter grayscale">
      <h1 className="text-2xl font-bold text-center mb-4 ">Cuestionario</h1>
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
