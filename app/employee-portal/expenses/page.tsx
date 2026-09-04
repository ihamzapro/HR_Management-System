interface ExpenseItem {
  id: string;
  title: string;
  category: "Travel" | "Client Dining" | "Equipment" | "Software";
  date: string;
  amount: string;
  status: "Approved" | "Pending" | "Rejected";
}

export default function EmployeeExpensesPage() {
  const expensesList: ExpenseItem[] = [
    {
      id: "EXP-001",
      title: "Client Dinner - Q3 Pitch",
      category: "Client Dining",
      date: "2026-08-28",
      amount: "$145.00",
      status: "Approved",
    },
    {
      id: "EXP-002",
      title: "Flight to Regional Tech Conference",
      category: "Travel",
      date: "2026-08-15",
      amount: "$420.00",
      status: "Approved",
    },
    {
      id: "EXP-003",
      title: "Ergonomic Keyboard & Mouse",
      category: "Equipment",
      date: "2026-09-02",
      amount: "$89.99",
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
            Expense Claims
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80 mt-0.5">
            Submit business expenses, upload receipts, and track reimbursement
            statuses.
          </p>
        </div>
        <button className="bg-hrms-teal text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-95 transition-opacity shadow-md shadow-[#0F8B8D]/20">
          + Submit Expense Claim
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Total Reimbursed YTD
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">
            $1,845.00
          </p>
          <span className="text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Paid via Payroll
          </span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Pending Claims
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">$89.99</p>
          <span className="text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full inline-block mt-3">
            1 Claim Under Review
          </span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Monthly Allowance
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">$500.00</p>
          <span className="text-xs text-hrms-teal bg-hrms-teal/10 px-2 py-0.5 rounded-full inline-block mt-3">
            $410.01 Available
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xs border border-hrms-mediumGray overflow-hidden">
        <div className="p-5 border-b border-hrms-mediumGray">
          <h3 className="font-bold text-hrms-navy">Expense Claim History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-hrms-blueGray text-hrms-navy text-xs uppercase font-semibold border-b border-hrms-mediumGray">
                <th className="p-4">Claim ID</th>
                <th className="p-4">Description</th>
                <th className="p-4">Category</th>
                <th className="p-4">Date</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hrms-mediumGray text-sm text-hrms-darkText">
              {expensesList.map((exp) => (
                <tr
                  key={exp.id}
                  className="hover:bg-hrms-blueGray/50 transition-colors"
                >
                  <td className="p-4 font-medium text-hrms-navy">{exp.id}</td>
                  <td className="p-4 font-semibold">{exp.title}</td>
                  <td className="p-4 opacity-80">{exp.category}</td>
                  <td className="p-4 opacity-80">{exp.date}</td>
                  <td className="p-4 font-extrabold text-hrms-navy">
                    {exp.amount}
                  </td>
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
                  <td className="p-4">
                    <button className="text-hrms-teal font-medium text-xs hover:underline">
                      View Receipt
                    </button>
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
