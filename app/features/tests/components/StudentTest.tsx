// app/feature/tests/components/StudentTest.tsx

export default function StudentTest() {
    return (
      <section className="text-gray-700">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Preguntas Frecuentes sobre HTML y CSS
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Estas son las preguntas más comunes sobre HTML y CSS que te ayudarán a repasar los conceptos clave.
            </p>
          </div>
  
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                  ¿Cuál de las siguientes etiquetas se utiliza para definir un encabezado de nivel 1?
                </summary>
                <span className="px-4 py-2 block">
                  La etiqueta correcta es <code className="font-bold">&lt;h1&gt;</code>.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                  ¿Qué atributo permite abrir un enlace en una nueva pestaña?
                </summary>
                <span className="px-4 py-2 block">
                  El atributo correcto es <code className="font-bold">target=_blank</code>.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                  ¿Cuál de las siguientes etiquetas define un contenedor genérico?
                </summary>
                <span className="px-4 py-2 block">
                  La etiqueta correcta es <code className="font-bold">&lt;div&gt;</code>.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                  ¿Cuál es la función del atributo alt en una imagen?
                </summary>
                <span className="px-4 py-2 block">
                  Se usa para mostrar texto alternativo si la imagen no se carga.
                </span>
              </details>
            </div>
  
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                  ¿Qué propiedad CSS se usa para establecer el tipo de letra?
                </summary>
                <span className="px-4 py-2 block">
                  Se utiliza <code className="font-bold">font-family</code>.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                  ¿Qué propiedad CSS se usa para poner en negrita el texto?
                </summary>
                <span className="px-4 py-2 block">
                  Se utiliza <code className="font-bold">font-weight</code>.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                  ¿Qué etiqueta HTML representa el contenido principal de una página?
                </summary>
                <span className="px-4 py-2 block">
                  Se utiliza la etiqueta <code className="font-bold">&lt;main&gt;</code>.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                  ¿Qué propiedad CSS se usa para centrar texto horizontalmente?
                </summary>
                <span className="px-4 py-2 block">
                  Se usa <code className="font-bold">text-align: center;</code>.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    );
  }
  