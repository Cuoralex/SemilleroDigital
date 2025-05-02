import { useState } from "react";
import { Link } from "@remix-run/react";
import { Menu, X } from "lucide-react"; // Puedes usar íconos personalizados

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["#inscripcion", "Inscripciones"],
    ["#quees", "¿Qué es conecta-CESDE?"],
    ["#resuelve", "¿Qué resuelve?"],
    ["#beneficios", "¿Beneficios?"],
    ["#participantes", "Participantes"],
    ["#funcionamiento", "Funcionamiento"],
    ["#testimonios", "Testimonios"],
    ["#contactanos", "Contáctanos"],
  ];

  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="https://www.cesde.edu.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.cesde.edu.co/wp-content/uploads/2023/02/logo-Cesde-2023.svg"
            alt="Cesde"
            width="180"
            height="40"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 text-sm font-medium">
          {navItems.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {label}
            </a>
          ))}

          <Link
            to="/register"
            className="px-4 py-2 rounded-md bg-pink-400 text-white hover:bg-pink-700 transition"
          >
            Registro
          </Link>
          <Link
            to="/loginform"
            className="px-4 py-2 rounded-md border border-pink-600 text-pink-600 hover:bg-pink-50 transition"
          >
            Login
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-700 text-sm font-medium">
          {navItems.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="flex flex-col space-y-2 px-4">
            <Link
              to="/register"
              className="px-4 py-2 rounded-md bg-pink-400 text-white hover:bg-pink-700 transition"
            >
              Registro
            </Link>
            <Link
              to="/loginform"
              className="px-4 py-2 rounded-md border border-pink-600 text-pink-600 hover:bg-pink-50 transition"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
