export default function EmployeeDashboardPage() {
  const recentLeaves = [
    {
      id: "LEV-001",
      type: "Casual Leave",
      dates: "Sep 10, 2026 - Sep 12, 2026",
      status: "Approved",
    },
    {
      id: "LEV-002",
      type: "Sick Leave",
      dates: "Aug 22, 2026",
      status: "Approved",
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
            Welcome back, Sarah!
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80 mt-0.5">
            Here is a quick overview of your attendance, leaves, and latest
            updates.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-hrms-navy text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-hrms-navy/90 transition-colors">
            Clock In / Out
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Available Leaves
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">14 Days</p>
          <span className="text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Annual Quota Remaining
          </span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Attendance Streak
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">18 Days</p>
          <span className="text-xs text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full inline-block mt-3">
            100% On-Time This Month
          </span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Latest Net Pay
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">
            $4,200.00
          </p>
          <span className="text-xs text-hrms-teal bg-hrms-teal/10 px-2 py-0.5 rounded-full inline-block mt-3">
            August Payslip Ready
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xs border border-hrms-mediumGray overflow-hidden">
        <div className="p-5 border-b border-hrms-mediumGray flex justify-between items-center">
          <h3 className="font-bold text-hrms-navy">Recent Leave Requests</h3>
          <button className="text-xs font-semibold text-hrms-teal hover:underline">
            Apply for Leave +
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-hrms-blueGray text-hrms-navy text-xs uppercase font-semibold border-b border-hrms-mediumGray">
                <th className="p-4">Request ID</th>
                <th className="p-4">Leave Type</th>
                <th className="p-4">Dates</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hrms-mediumGray text-sm text-hrms-darkText">
              {recentLeaves.map((leave) => (
                <tr
                  key={leave.id}
                  className="hover:bg-hrms-blueGray/50 transition-colors"
                >
                  <td className="p-4 font-medium text-hrms-navy">{leave.id}</td>
                  <td className="p-4 font-semibold">{leave.type}</td>
                  <td className="p-4 opacity-80">{leave.dates}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
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
