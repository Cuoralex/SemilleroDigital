// app/routes/AdminDashboard.tsx

import AdminDashboard from "../features/dashboards/components/AdminDashboard";

export default function AdminDashboardRoute() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <AdminDashboard />
    </div>
  );
}
