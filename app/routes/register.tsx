import { useState } from "react";
import PymeRegisterForm from "../features/auth/components/PymeRegisterForm";
import StudentRegisterForm from "../features/auth/components/StudentRegisterForm";

export default function Register() {
  const [tipoFormulario, setTipoFormulario] = useState("estudiante");

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Formulario de Inscripción</h1>

      <div className="mb-8">
        <label htmlFor="tipo" className="block font-medium mb-2">Seleccione el tipo de inscripción:</label>
        <select
          id="tipo"
          value={tipoFormulario}
          onChange={(e) => setTipoFormulario(e.target.value)}
          className="border rounded p-2 w-full max-w-sm"
        >
          <option value="estudiante">Estudiante</option>
          <option value="pyme">PyME</option>
        </select>
      </div>

      {tipoFormulario === "estudiante" ? (
        <StudentRegisterForm />
      ) : (
        <PymeRegisterForm/>
      )}
    </div>
  );
}
