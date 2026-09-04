interface PerformanceReview {
  id: string;
  employeeName: string;
  department: string;
  reviewer: string;
  score: number;
  status: "Completed" | "Pending" | "In Review";
  cycle: string;
}

export default function PerformancePage() {
  const reviews: PerformanceReview[] = [
    {
      id: "REV-001",
      employeeName: "Sarah Jenkins",
      department: "Human Resources",
      reviewer: "Michael Scott",
      score: 4.8,
      status: "Completed",
      cycle: "Q2 2026",
    },
    {
      id: "REV-002",
      employeeName: "Alex Morgan",
      department: "Engineering",
      reviewer: "Jane Doe",
      score: 4.5,
      status: "Completed",
      cycle: "Q2 2026",
    },
    {
      id: "REV-003",
      employeeName: "David Chen",
      department: "Finance",
      reviewer: "Robert Smith",
      score: 3.9,
      status: "In Review",
      cycle: "Q2 2026",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-hrms-navy">
            Performance & Reviews
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80 mt-1">
            Evaluate employee KPIs, track appraisal cycles, and manage
            performance ratings.
          </p>
        </div>
        <button className="bg-hrms-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
          + New Review Cycle
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Average Company Score
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">
            4.4 / 5.0
          </p>
          <span className="text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mt-3">
            +0.3 from last cycle
          </span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Completed Reviews
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">84 / 92</p>
          <span className="text-xs text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full inline-block mt-3">
            91% Completion Rate
          </span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Pending Appraisals
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">8</p>
          <span className="text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Action Required
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-xs border border-hrms-mediumGray overflow-hidden">
        <div className="p-4 border-b border-hrms-mediumGray">
          <h3 className="font-bold text-hrms-navy">Recent Appraisals</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-hrms-blueGray text-hrms-navy text-xs uppercase font-semibold border-b border-hrms-mediumGray">
                <th className="p-4">Review ID</th>
                <th className="p-4">Employee</th>
                <th className="p-4">Department</th>
                <th className="p-4">Reviewer</th>
                <th className="p-4">Cycle</th>
                <th className="p-4">Score</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hrms-mediumGray text-sm text-hrms-darkText">
              {reviews.map((rev) => (
                <tr
                  key={rev.id}
                  className="hover:bg-hrms-blueGray/50 transition-colors"
                >
                  <td className="p-4 font-medium text-hrms-navy">{rev.id}</td>
                  <td className="p-4 font-semibold">{rev.employeeName}</td>
                  <td className="p-4 opacity-80">{rev.department}</td>
                  <td className="p-4 opacity-80">{rev.reviewer}</td>
                  <td className="p-4 opacity-80">{rev.cycle}</td>
                  <td className="p-4 font-bold text-hrms-teal">
                    {rev.score} / 5.0
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        rev.status === "Completed"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {rev.status}
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
