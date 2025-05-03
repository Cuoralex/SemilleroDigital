// app/routes/projectform.tsx

import ProjectForm from "../features/projects/components/ProjectForm";
import Header from "~/components/layout/header";

export default function ProjectFormRoute() {
  return (
    <div>
      <Header/>
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Iniciar sesión</h1>
      <ProjectForm />
    </div>
    </div>
  );
}
