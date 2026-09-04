interface ReportItem {
  id: string;
  reportName: string;
  category: "HR Analytics" | "Financial" | "Attendance" | "Performance";
  generatedDate: string;
  fileSize: string;
  format: "PDF" | "CSV" | "XLSX";
}

export default function ReportsPage() {
  const reportsList: ReportItem[] = [
    {
      id: "REP-001",
      reportName: "Monthly Payroll Summary - August 2026",
      category: "Financial",
      generatedDate: "2026-09-01",
      fileSize: "2.4 MB",
      format: "PDF",
    },
    {
      id: "REP-002",
      reportName: "Employee Attendance & Tardiness Report",
      category: "Attendance",
      generatedDate: "2026-09-02",
      fileSize: "1.1 MB",
      format: "CSV",
    },
    {
      id: "REP-003",
      reportName: "Q2 Performance Appraisal Analytics",
      category: "Performance",
      generatedDate: "2026-08-31",
      fileSize: "4.8 MB",
      format: "PDF",
    },
    {
      id: "REP-004",
      reportName: "Headcount & Turnover Metrics",
      category: "HR Analytics",
      generatedDate: "2026-09-03",
      fileSize: "850 KB",
      format: "XLSX",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-hrms-navy">
            Analytics & Reports
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80 mt-1">
            Generate, analyze, and export comprehensive HR, financial, and
            operational reports.
          </p>
        </div>
        <button className="bg-hrms-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
          + Generate Custom Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Total Reports Available
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">24</p>
          <span className="text-xs text-hrms-teal bg-hrms-teal/10 px-2 py-0.5 rounded-full inline-block mt-3">
            Updated Today
          </span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Scheduled Exports
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">5</p>
          <span className="text-xs text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Automated Weekly
          </span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Storage Used
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">142 MB</p>
          <span className="text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Cloud Secure
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-xs border border-hrms-mediumGray overflow-hidden">
        <div className="p-4 border-b border-hrms-mediumGray">
          <h3 className="font-bold text-hrms-navy">
            Generated Reports Archive
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-hrms-blueGray text-hrms-navy text-xs uppercase font-semibold border-b border-hrms-mediumGray">
                <th className="p-4">Report ID</th>
                <th className="p-4">Report Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Generated Date</th>
                <th className="p-4">Size</th>
                <th className="p-4">Format</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hrms-mediumGray text-sm text-hrms-darkText">
              {reportsList.map((rep) => (
                <tr
                  key={rep.id}
                  className="hover:bg-hrms-blueGray/50 transition-colors"
                >
                  <td className="p-4 font-medium text-hrms-navy">{rep.id}</td>
                  <td className="p-4 font-semibold">{rep.reportName}</td>
                  <td className="p-4 opacity-80">{rep.category}</td>
                  <td className="p-4 opacity-80">{rep.generatedDate}</td>
                  <td className="p-4 opacity-80">{rep.fileSize}</td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-hrms-blueGray text-hrms-navy border border-hrms-mediumGray">
                      {rep.format}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-hrms-teal font-medium text-xs hover:underline">
                      Download
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
