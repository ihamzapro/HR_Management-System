interface ExpenseRecord {
  id: string;
  employeeName: string;
  category: "Travel" | "Equipment" | "Client Meeting" | "Software";
  amount: string;
  date: string;
  status: "Approved" | "Pending" | "Rejected";
}

export default function ExpensesPage() {
  const expenses: ExpenseRecord[] = [
    {
      id: "EXP-001",
      employeeName: "Sarah Jenkins",
      category: "Travel",
      amount: "$350.00",
      date: "2026-09-01",
      status: "Approved",
    },
    {
      id: "EXP-002",
      employeeName: "Alex Morgan",
      category: "Equipment",
      amount: "$1,200.00",
      date: "2026-09-02",
      status: "Pending",
    },
    {
      id: "EXP-003",
      employeeName: "David Chen",
      category: "Client Meeting",
      amount: "$145.50",
      date: "2026-09-02",
      status: "Approved",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-hrms-navy">
            Expenses & Reimbursements
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80 mt-1">
            Track business expenses, review employee claim requests, and manage
            corporate spend.
          </p>
        </div>
        <button className="bg-hrms-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
          + Submit Claim
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Total Claims (September)
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">
            $1,695.50
          </p>
          <span className="text-xs text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full inline-block mt-3">
            3 Active Requests
          </span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Approved Reimbursements
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">$495.50</p>
          <span className="text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Ready for Payout
          </span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Pending Approvals
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">
            $1,200.00
          </p>
          <span className="text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Manager Review Needed
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-xs border border-hrms-mediumGray overflow-hidden">
        <div className="p-4 border-b border-hrms-mediumGray">
          <h3 className="font-bold text-hrms-navy">Expense Claim List</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-hrms-blueGray text-hrms-navy text-xs uppercase font-semibold border-b border-hrms-mediumGray">
                <th className="p-4">Claim ID</th>
                <th className="p-4">Employee</th>
                <th className="p-4">Category</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hrms-mediumGray text-sm text-hrms-darkText">
              {expenses.map((exp) => (
                <tr
                  key={exp.id}
                  className="hover:bg-hrms-blueGray/50 transition-colors"
                >
                  <td className="p-4 font-medium text-hrms-navy">{exp.id}</td>
                  <td className="p-4 font-semibold">{exp.employeeName}</td>
                  <td className="p-4 opacity-80">{exp.category}</td>
                  <td className="p-4 font-bold text-hrms-teal">{exp.amount}</td>
                  <td className="p-4 opacity-80">{exp.date}</td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        exp.status === "Approved"
                          ? "bg-emerald-100 text-emerald-800"
                          : exp.status === "Pending"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {exp.status}
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
