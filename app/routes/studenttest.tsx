// app/routes/test.tsx

import StudentTest from "../features/tests/components/StudentTest";

export default function TestRoute() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Student Test</h1>
      <StudentTest />
    </div>
  );
}
