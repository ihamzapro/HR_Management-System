export default function EmployeesPage() {
  const employees = [
    {
      id: "EMP001",
      name: "Sarah Jenkins",
      role: "HR Manager",
      department: "Human Resources",
      type: "Full-time",
      status: "Active",
    },
    {
      id: "EMP002",
      name: "Alex Morgan",
      role: "Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      status: "Active",
    },
    {
      id: "EMP003",
      name: "David Chen",
      role: "Payroll Officer",
      department: "Finance",
      type: "Full-time",
      status: "Active",
    },
    {
      id: "EMP004",
      name: "Emma Watson",
      role: "Recruiter",
      department: "Human Resources",
      type: "Contract",
      status: "On Leave",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-hrms-navy">
            Employee Directory
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80 mt-1">
            Manage personnel records, departments, and employment details.
          </p>
        </div>
        <button className="bg-hrms-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
          + Add Employee
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-xs border border-hrms-mediumGray overflow-hidden">
        <div className="p-4 border-b border-hrms-mediumGray flex gap-4">
          <input
            type="text"
            placeholder="Search by name, ID or department..."
            className="flex-1 bg-hrms-blueGray text-hrms-darkText text-sm px-4 py-2 rounded-lg border border-transparent focus:border-hrms-teal focus:outline-none"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-hrms-blueGray text-hrms-navy text-xs uppercase font-semibold border-b border-hrms-mediumGray">
                <th className="p-4">Employee ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Designation</th>
                <th className="p-4">Department</th>
                <th className="p-4">Type</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hrms-mediumGray text-sm text-hrms-darkText">
              {employees.map((emp) => (
                <tr
                  key={emp.id}
                  className="hover:bg-hrms-blueGray/50 transition-colors"
                >
                  <td className="p-4 font-medium text-hrms-navy">{emp.id}</td>
                  <td className="p-4 font-semibold">{emp.name}</td>
                  <td className="p-4 opacity-80">{emp.role}</td>
                  <td className="p-4 opacity-80">{emp.department}</td>
                  <td className="p-4 opacity-80">{emp.type}</td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        emp.status === "Active"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {emp.status}
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
