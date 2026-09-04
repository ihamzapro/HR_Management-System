interface PayrollRecord {
  id: string;
  employeeName: string;
  department: string;
  baseSalary: string;
  deductions: string;
  netPay: string;
  status: "Paid" | "Processing" | "Pending";
}

export default function PayrollPage() {
  const payrolls: PayrollRecord[] = [
    {
      id: "PAY-001",
      employeeName: "Sarah Jenkins",
      department: "Human Resources",
      baseSalary: "$4,500",
      deductions: "$300",
      netPay: "$4,200",
      status: "Paid",
    },
    {
      id: "PAY-002",
      employeeName: "Alex Morgan",
      department: "Engineering",
      baseSalary: "$6,000",
      deductions: "$450",
      netPay: "$5,550",
      status: "Paid",
    },
    {
      id: "PAY-003",
      employeeName: "David Chen",
      department: "Finance",
      baseSalary: "$5,000",
      deductions: "$350",
      netPay: "$4,650",
      status: "Processing",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-hrms-navy">
            Payroll & Compensation
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80 mt-1">
            Manage salary structures, view tax deductions, and process staff
            disbursements.
          </p>
        </div>
        <button className="bg-hrms-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
          + Run Payroll
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Total Payroll (September)
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">$14,400</p>
          <span className="text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Disbursed Successfully
          </span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Average Net Salary
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">$4,800</p>
          <span className="text-xs text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Across 3 Departments
          </span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Pending Disbursals
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">1</p>
          <span className="text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Awaiting Approval
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-xs border border-hrms-mediumGray overflow-hidden">
        <div className="p-4 border-b border-hrms-mediumGray">
          <h3 className="font-bold text-hrms-navy">Payslip Records</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-hrms-blueGray text-hrms-navy text-xs uppercase font-semibold border-b border-hrms-mediumGray">
                <th className="p-4">Record ID</th>
                <th className="p-4">Employee</th>
                <th className="p-4">Department</th>
                <th className="p-4">Base Salary</th>
                <th className="p-4">Deductions</th>
                <th className="p-4">Net Pay</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hrms-mediumGray text-sm text-hrms-darkText">
              {payrolls.map((pay) => (
                <tr
                  key={pay.id}
                  className="hover:bg-hrms-blueGray/50 transition-colors"
                >
                  <td className="p-4 font-medium text-hrms-navy">{pay.id}</td>
                  <td className="p-4 font-semibold">{pay.employeeName}</td>
                  <td className="p-4 opacity-80">{pay.department}</td>
                  <td className="p-4 opacity-80">{pay.baseSalary}</td>
                  <td className="p-4 text-rose-600 font-medium">
                    {pay.deductions}
                  </td>
                  <td className="p-4 font-bold text-hrms-teal">{pay.netPay}</td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        pay.status === "Paid"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {pay.status}
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
