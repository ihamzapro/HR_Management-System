interface DocumentItem {
  id: string;
  docName: string;
  category: "Employment" | "Tax & Compliance" | "Policies" | "Certificates";
  uploadDate: string;
  fileSize: string;
  format: "PDF";
}

export default function EmployeeDocumentsPage() {
  const documentsList: DocumentItem[] = [
    {
      id: "DOC-001",
      docName: "Employment Agreement - CodeQor",
      category: "Employment",
      uploadDate: "2024-03-15",
      fileSize: "1.8 MB",
      format: "PDF",
    },
    {
      id: "DOC-002",
      docName: "W-4 Tax Withholding Form 2026",
      category: "Tax & Compliance",
      uploadDate: "2026-01-10",
      fileSize: "650 KB",
      format: "PDF",
    },
    {
      id: "DOC-003",
      docName: "CodeQor Employee Handbook v3.2",
      category: "Policies",
      uploadDate: "2026-02-01",
      fileSize: "3.4 MB",
      format: "PDF",
    },
    {
      id: "DOC-004",
      docName: "AWS Certified Developer Certificate",
      category: "Certificates",
      uploadDate: "2025-11-20",
      fileSize: "1.2 MB",
      format: "PDF",
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
            My Documents
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80 mt-0.5">
            Access your contracts, tax documentation, company handbooks, and
            professional certificates.
          </p>
        </div>
        <button className="bg-hrms-teal text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-95 transition-opacity shadow-md shadow-[#0F8B8D]/20">
          + Upload Document
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Total Files
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">8</p>
          <span className="text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Secure Vault
          </span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Compliance Status
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">100%</p>
          <span className="text-xs text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full inline-block mt-3">
            All Signed & Verified
          </span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Vault Storage
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">14.2 MB</p>
          <span className="text-xs text-hrms-teal bg-hrms-teal/10 px-2 py-0.5 rounded-full inline-block mt-3">
            Cloud Encrypted
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xs border border-hrms-mediumGray overflow-hidden">
        <div className="p-5 border-b border-hrms-mediumGray">
          <h3 className="font-bold text-hrms-navy">Document Repository</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-hrms-blueGray text-hrms-navy text-xs uppercase font-semibold border-b border-hrms-mediumGray">
                <th className="p-4">Document ID</th>
                <th className="p-4">Document Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Upload Date</th>
                <th className="p-4">Size</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hrms-mediumGray text-sm text-hrms-darkText">
              {documentsList.map((doc) => (
                <tr
                  key={doc.id}
                  className="hover:bg-hrms-blueGray/50 transition-colors"
                >
                  <td className="p-4 font-medium text-hrms-navy">{doc.id}</td>
                  <td className="p-4 font-semibold">{doc.docName}</td>
                  <td className="p-4 opacity-80">{doc.category}</td>
                  <td className="p-4 opacity-80">{doc.uploadDate}</td>
                  <td className="p-4 opacity-80">{doc.fileSize}</td>
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
