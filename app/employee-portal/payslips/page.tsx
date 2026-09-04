interface PayslipItem {
  id: string;
  month: string;
  grossPay: string;
  deductions: string;
  netPay: string;
  status: "Paid" | "Processing";
}

export default function EmployeePayslipsPage() {
  const payslipsList: PayslipItem[] = [
    {
      id: "PAY-2026-08",
      month: "August 2026",
      grossPay: "$5,000.00",
      deductions: "$800.00",
      netPay: "$4,200.00",
      status: "Paid",
    },
    {
      id: "PAY-2026-07",
      month: "July 2026",
      grossPay: "$5,000.00",
      deductions: "$800.00",
      netPay: "$4,200.00",
      status: "Paid",
    },
    {
      id: "PAY-2026-06",
      month: "June 2026",
      grossPay: "$4,800.00",
      deductions: "$760.00",
      netPay: "$4,040.00",
      status: "Paid",
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
            Payslips & Compensation
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80 mt-0.5">
            View your salary earnings breakdown, tax deductions, and download
            monthly statements.
          </p>
        </div>
        <button className="bg-hrms-teal text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-95 transition-opacity shadow-md shadow-[#0F8B8D]/20">
          Download Tax Statement (YTD)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Year-to-Date Earnings
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">
            $33,640.00
          </p>
          <span className="text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Tax Year 2026
          </span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Latest Net Pay
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">
            $4,200.00
          </p>
          <span className="text-xs text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full inline-block mt-3">
            August Cycle
          </span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Direct Deposit
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">
            •••• 4892
          </p>
          <span className="text-xs text-hrms-teal bg-hrms-teal/10 px-2 py-0.5 rounded-full inline-block mt-3">
            Verified Account
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xs border border-hrms-mediumGray overflow-hidden">
        <div className="p-5 border-b border-hrms-mediumGray">
          <h3 className="font-bold text-hrms-navy">Payslip History Archive</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-hrms-blueGray text-hrms-navy text-xs uppercase font-semibold border-b border-hrms-mediumGray">
                <th className="p-4">Reference ID</th>
                <th className="p-4">Payroll Month</th>
                <th className="p-4">Gross Pay</th>
                <th className="p-4">Deductions</th>
                <th className="p-4">Net Pay</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hrms-mediumGray text-sm text-hrms-darkText">
              {payslipsList.map((pay) => (
                <tr
                  key={pay.id}
                  className="hover:bg-hrms-blueGray/50 transition-colors"
                >
                  <td className="p-4 font-medium text-hrms-navy">{pay.id}</td>
                  <td className="p-4 font-semibold">{pay.month}</td>
                  <td className="p-4 opacity-80">{pay.grossPay}</td>
                  <td className="p-4 text-rose-600">-{pay.deductions}</td>
                  <td className="p-4 font-extrabold text-hrms-navy">
                    {pay.netPay}
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      {pay.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-hrms-teal font-medium text-xs hover:underline">
                      Download PDF
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
