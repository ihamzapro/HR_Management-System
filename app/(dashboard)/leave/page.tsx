export default function LeavePage() {
  const leaveRequests = [
    {
      id: "LEV-101",
      employee: "Sarah Jenkins",
      type: "Annual Leave",
      from: "2026-09-10",
      to: "2026-09-15",
      days: 5,
      status: "Pending",
    },
    {
      id: "LEV-102",
      employee: "Alex Morgan",
      type: "Sick Leave",
      from: "2026-09-02",
      to: "2026-09-03",
      days: 2,
      status: "Approved",
    },
    {
      id: "LEV-103",
      employee: "David Chen",
      type: "Casual Leave",
      from: "2026-09-20",
      to: "2026-09-20",
      days: 1,
      status: "Pending",
    },
  ];

  const leaveBalances = [
    { type: "Annual Leave", allocated: 20, used: 5, remaining: 15 },
    { type: "Sick Leave", allocated: 10, used: 2, remaining: 8 },
    { type: "Casual Leave", allocated: 7, used: 3, remaining: 4 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-hrms-navy">
            Leave Management
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80 mt-1">
            Track leave policies, employee balances, and approval workflows.
          </p>
        </div>
        <button className="bg-hrms-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
          + Request Leave
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {leaveBalances.map((bal, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-xs border border-hrms-mediumGray"
          >
            <h3 className="text-md font-bold text-hrms-navy">{bal.type}</h3>
            <div className="flex justify-between mt-4 text-sm">
              <span className="text-hrms-darkText opacity-70">
                Allocated: {bal.allocated}
              </span>
              <span className="text-hrms-darkText opacity-70">
                Used: {bal.used}
              </span>
              <span className="font-bold text-hrms-teal">
                Remaining: {bal.remaining}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-xs border border-hrms-mediumGray overflow-hidden">
        <div className="p-4 border-b border-hrms-mediumGray">
          <h3 className="font-bold text-hrms-navy">
            Leave Requests & Approvals
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-hrms-blueGray text-hrms-navy text-xs uppercase font-semibold border-b border-hrms-mediumGray">
                <th className="p-4">Request ID</th>
                <th className="p-4">Employee</th>
                <th className="p-4">Leave Type</th>
                <th className="p-4">From</th>
                <th className="p-4">To</th>
                <th className="p-4">Days</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hrms-mediumGray text-sm text-hrms-darkText">
              {leaveRequests.map((req) => (
                <tr
                  key={req.id}
                  className="hover:bg-hrms-blueGray/50 transition-colors"
                >
                  <td className="p-4 font-medium text-hrms-navy">{req.id}</td>
                  <td className="p-4 font-semibold">{req.employee}</td>
                  <td className="p-4 opacity-80">{req.type}</td>
                  <td className="p-4 opacity-80">{req.from}</td>
                  <td className="p-4 opacity-80">{req.to}</td>
                  <td className="p-4 font-medium">{req.days}</td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        req.status === "Approved"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {req.status}
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
