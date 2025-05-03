import { Form } from "@remix-run/react";
import { Link } from "@remix-run/react";
import Header from "~/components/layout/header";

export default function LoginForm() {
  return (
    <div>
      <Header/>
    <div className="h-screen flex font-sans">
      {/* Imagen lateral */}
      <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center relative">
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
        <div className="w-full mx-auto px-20 flex-col items-center space-y-6 z-10">
          <h1 className="text-white font-bold text-4xl">Semillero digital</h1>
          <p className="text-white mt-1">Aprender haciendo, crecer colaborando</p>
          <div className="flex justify-center lg:justify-start mt-6">
            <Link to="#" className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-pink-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Formulario */}
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <Form method="post" className="bg-white rounded-md shadow-2xl p-5">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">¡Hola de nuevo!</h1>
            <p className="text-sm font-normal text-gray-600 mb-8">Bienvenido, aquí empieza la magia</p>

            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="pl-2 w-full outline-none border-none"
                placeholder="Email Address"
              />
            </div>

            <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="pl-2 w-full outline-none border-none"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="block w-full bg-pink-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Login
            </button>

            <div className="flex justify-between mt-4">
              <span className="text-sm hover:text-blue-500 cursor-pointer">
                Forgot Password?
              </span>
              <Link to="#" className="text-sm hover:text-blue-500 cursor-pointer">
              No tienes cuenta
              </Link>
            </div>
          </Form>
        </div>
      </div>

      {/* Estilo del fondo */}
      <style>{`
        .login_img_section {
          background: linear-gradient(rgba(2,2,2,.7),rgba(0,0,0,.7)),
            url('/Mentefactura.png')
            center center / cover no-repeat;
        }
      `}</style>
    </div>
    </div>
  );
}
