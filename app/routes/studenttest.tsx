// app/routes/test.tsx

import StudentTest from "../features/tests/components/StudentTest";
import Header from "~/components/layout/header";

export default function TestRoute() {
  return (
    <div>
      <Header/>
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Student Test</h1>
      <StudentTest />
    </div>
    </div>
  );
}
