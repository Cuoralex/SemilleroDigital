// app/routes/pymedashboard.tsx

import PymeDashboard from "../features/dashboards/components/PymeDashboard";

export default function PymeDashboardRoute() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Pyme Dashboard</h1>
      <PymeDashboard />
    </div>
  );
}
