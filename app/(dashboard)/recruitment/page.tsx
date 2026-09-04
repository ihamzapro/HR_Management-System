interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  applicants: number;
  status: "Active" | "Closed";
}

interface Candidate {
  id: string;
  name: string;
  position: string;
  stage: "Applied" | "Interview" | "Offered" | "Hired";
  appliedDate: string;
}

export default function RecruitmentPage() {
  const jobs: JobOpening[] = [
    {
      id: "JOB-001",
      title: "Senior Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      applicants: 12,
      status: "Active",
    },
    {
      id: "JOB-002",
      title: "HR Coordinator",
      department: "Human Resources",
      type: "Contract",
      applicants: 8,
      status: "Active",
    },
    {
      id: "JOB-003",
      title: "Financial Analyst",
      department: "Finance",
      type: "Full-time",
      applicants: 5,
      status: "Active",
    },
  ];

  const candidates: Candidate[] = [
    {
      id: "CAN-101",
      name: "Mark Spencer",
      position: "Senior Frontend Developer",
      stage: "Interview",
      appliedDate: "2026-09-01",
    },
    {
      id: "CAN-102",
      name: "Jessica Taylor",
      position: "HR Coordinator",
      stage: "Applied",
      appliedDate: "2026-09-02",
    },
    {
      id: "CAN-103",
      name: "Liam Vance",
      position: "Financial Analyst",
      stage: "Offered",
      appliedDate: "2026-08-28",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-hrms-navy">
            Recruitment & Job Openings
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80 mt-1">
            Manage job vacancies, track candidate pipelines, and coordinate
            hiring workflows.
          </p>
        </div>
        <button className="bg-hrms-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
          + Post Job Opening
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-xs border border-hrms-mediumGray p-6 space-y-4">
        <h3 className="font-bold text-hrms-navy">Active Job Openings</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-hrms-blueGray/40 p-4 rounded-xl border border-hrms-mediumGray flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold text-hrms-teal bg-hrms-teal/10 px-2 py-0.5 rounded-md">
                    {job.department}
                  </span>
                  <span className="text-xs text-hrms-darkText opacity-70">
                    {job.type}
                  </span>
                </div>
                <h4 className="font-bold text-hrms-navy mt-2">{job.title}</h4>
              </div>
              <div className="flex justify-between items-center text-xs text-hrms-darkText pt-2 border-t border-hrms-mediumGray">
                <span>{job.applicants} Applicants</span>
                <span className="font-medium text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  {job.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-xs border border-hrms-mediumGray overflow-hidden">
        <div className="p-4 border-b border-hrms-mediumGray">
          <h3 className="font-bold text-hrms-navy">Candidate Pipeline</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-hrms-blueGray text-hrms-navy text-xs uppercase font-semibold border-b border-hrms-mediumGray">
                <th className="p-4">Candidate ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Position Applied</th>
                <th className="p-4">Applied Date</th>
                <th className="p-4">Stage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hrms-mediumGray text-sm text-hrms-darkText">
              {candidates.map((cand) => (
                <tr
                  key={cand.id}
                  className="hover:bg-hrms-blueGray/50 transition-colors"
                >
                  <td className="p-4 font-medium text-hrms-navy">{cand.id}</td>
                  <td className="p-4 font-semibold">{cand.name}</td>
                  <td className="p-4 opacity-80">{cand.position}</td>
                  <td className="p-4 opacity-80">{cand.appliedDate}</td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        cand.stage === "Hired"
                          ? "bg-emerald-100 text-emerald-800"
                          : cand.stage === "Offered"
                            ? "bg-blue-100 text-blue-800"
                            : cand.stage === "Interview"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {cand.stage}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
