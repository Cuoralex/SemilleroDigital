// app/routes/loginform.tsx

import LoginForm from "../features/auth/components/LoginForm";

export default function LoginRoute() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Iniciar sesión</h1>
      <LoginForm />
    </div>
  );
}
