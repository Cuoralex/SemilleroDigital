// app/routes/AdminDashboard.tsx

import StudentDashboard from "../features/dashboards/components/StudentDashboard";

export default function StudentDashboardRoute() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Student Dashboard</h1>
      <StudentDashboard />
    </div>
  );
}
