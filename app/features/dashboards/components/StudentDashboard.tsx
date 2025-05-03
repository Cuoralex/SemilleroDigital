// app/routes/AdminDashboard.tsx
import { Link } from "@remix-run/react";
import { useState } from "react";
import Header from "~/components/layout/header";
import ProjectList from "~/features/projects/components/ProjectList";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("Personal");

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header/>

      <nav className="bg-gray-800 w-full">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between h-16">
            <div className="flex items-center w-full md:w-auto">
              <div className="w-full md:block">
                <div className="flex flex-wrap space-x-4">
                  {["Home", "My info", "Employees", "Pricing", "Blogs"].map(
                    (item, i) => (
                      <Link
                        key={i}
                        to="#"
                        className={`${
                          item === "Home"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        } rounded-md px-3 py-2 text-sm font-medium`}
                      >
                        {item}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2 md:mt-0 md:block w-full md:w-auto">
              <div className="flex items-center">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="flex items-center border border-gray-500 rounded bg-gray-600 overflow-hidden">
                    <div className="grid place-items-center w-12 bg-gray-600 text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      className="w-full bg-gray-600 outline-none text-sm text-gray-300 px-2 py-1"
                      type="text"
                      id="search"
                      placeholder="Search something.."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-pink-300 flex flex-wrap items-center justify-between px-4 py-6 gap-4">
        <div className="w-full sm:w-auto">
          <img
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-full shadow-lg mx-auto object-cover"
            src="https://media.istockphoto.com/id/1389348844/es/foto/foto-de-estudio-de-una-hermosa-joven-sonriendo-mientras-est%C3%A1-de-pie-sobre-un-fondo-gris.jpg?s=612x612&w=0&k=20&c=kUufmNoTnDcRbyeHhU1wRiip-fNjTWP9owjHf75frFQ="
            alt="Profile"
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <h1 className="text-2xl sm:text-3xl font-sans tracking-tight text-gray-900">
            Andrea Valencia
          </h1>
          <p className="mt-1 text-sm sm:text-base text-gray-700">
            Sr. Student
          </p>
        </div>
        <div className="w-full sm:w-auto flex justify-center sm:justify-end gap-2">
          <button className="bg-pink-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md">
            Request a Change
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-md">
            Settings
          </button>
        </div>
      </section>

      <main className="w-full px-4 py-4">
        <div className="flex flex-wrap gap-4">
          <aside className="w-full md:w-1/4">
            <ul className="text-sm font-semibold text-gray-500 hover:text-gray-700 divide-y rounded bg-white p-4">
              <li className="py-3">
                <span>801-724-6600 Ext.1272</span>
                <br />
                <span>415-555-8965</span>
              </li>
              <li className="py-3">
                <h1>Hire date</h1>
                <span>Jan 19 2017</span>
                <br />
                <span>10m - 15d</span>
              </li>
              <li className="py-3">
                <span>Full-time</span>
                <br />
                <span>Human Resources</span>
                <br />
                <span>North America</span>
                <br />
                <span>Lindon , Utah</span>
              </li>
            </ul>
          </aside>

          <section className="w-full md:w-3/4">
            <ul className="flex flex-wrap bg-white rounded-t border-b">
              {[
                "Personal",
                "Job",
                "Leave",
                "Emergency",
                "Document",
                "Notes",
                "Benefits",
                "Training",
                "Performance",
                "Assets",
              ].map((tab, i) => (
                <li key={i}>
                  <button
                    className={`py-2 px-4 border-l border-t border-r text-sm font-semibold ${
                      tab === activeTab
                        ? "bg-white text-blue-700 shadow-md"
                        : "text-blue-500 hover:text-blue-800"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>

            <div className="bg-white p-4 rounded-b shadow-sm">
              <div className="flex items-center gap-2 font-semibold text-gray-900">
                <svg
                  className="h-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="px-2">Personal</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-blue-500 text-white px-2 py-1 rounded shadow-md">
                  Upload
                </span>
                <span>Files</span>
              </div>

              <div className="mt-4">
                <ProjectList />
              </div>
            </div>

            <div className="mt-6 overflow-auto rounded border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    "Resume and Applications",
                    "Signed Documents",
                    "Tasklist Attachments",
                    "Workflow Attachments",
                  ].map((section, i) => (
                    <tr key={i}>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <h2 className="font-medium text-gray-800">
                          {section}
                        </h2>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
