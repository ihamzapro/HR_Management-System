interface LeaveApplication {
  id: string;
  type: "Casual Leave" | "Sick Leave" | "Annual Leave";
  startDate: string;
  endDate: string;
  days: number;
  status: "Approved" | "Pending" | "Rejected";
}

export default function EmployeeLeavePage() {
  const leaves: LeaveApplication[] = [
    {
      id: "LEV-001",
      type: "Casual Leave",
      startDate: "2026-09-10",
      endDate: "2026-09-12",
      days: 3,
      status: "Approved",
    },
    {
      id: "LEV-002",
      type: "Sick Leave",
      startDate: "2026-08-22",
      endDate: "2026-08-22",
      days: 1,
      status: "Approved",
    },
    {
      id: "LEV-003",
      type: "Annual Leave",
      startDate: "2026-10-01",
      endDate: "2026-10-05",
      days: 5,
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray flex justify-between items-center">
        <div>
          <span className="text-xs font-bold text-hrms-teal bg-hrms-teal/10 px-2.5 py-1 rounded-md uppercase tracking-wider">
            Employee Portal
          </span>
          <h1 className="text-2xl font-extrabold text-hrms-navy mt-2">
            Leave Management
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80 mt-0.5">
            Check your remaining leave quotas, apply for time off, and monitor
            request statuses.
          </p>
        </div>
        <button className="bg-hrms-teal text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-95 transition-opacity shadow-md shadow-[#0F8B8D]/20">
          + Apply For Leave
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Casual Leave Balance
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">8 Days</p>
          <span className="text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Out of 12 Total
          </span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Sick Leave Balance
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">6 Days</p>
          <span className="text-xs text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Out of 8 Total
          </span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Pending Requests
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">1</p>
          <span className="text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Awaiting HR Approval
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xs border border-hrms-mediumGray overflow-hidden">
        <div className="p-5 border-b border-hrms-mediumGray">
          <h3 className="font-bold text-hrms-navy">My Leave History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-hrms-blueGray text-hrms-navy text-xs uppercase font-semibold border-b border-hrms-mediumGray">
                <th className="p-4">Request ID</th>
                <th className="p-4">Leave Type</th>
                <th className="p-4">Start Date</th>
                <th className="p-4">End Date</th>
                <th className="p-4">Duration</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hrms-mediumGray text-sm text-hrms-darkText">
              {leaves.map((leave) => (
                <tr
                  key={leave.id}
                  className="hover:bg-hrms-blueGray/50 transition-colors"
                >
                  <td className="p-4 font-medium text-hrms-navy">{leave.id}</td>
                  <td className="p-4 font-semibold">{leave.type}</td>
                  <td className="p-4 opacity-80">{leave.startDate}</td>
                  <td className="p-4 opacity-80">{leave.endDate}</td>
                  <td className="p-4 font-medium">
                    {leave.days} {leave.days === 1 ? "Day" : "Days"}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        leave.status === "Approved"
                          ? "bg-emerald-100 text-emerald-800"
                          : leave.status === "Pending"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {leave.status}
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
