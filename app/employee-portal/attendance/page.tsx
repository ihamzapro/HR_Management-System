interface AttendanceRecord {
  id: string;
  date: string;
  checkIn: string;
  checkOut: string;
  totalHours: string;
  status: "Present" | "Late" | "Absent" | "Half-Day";
}

export default function EmployeeAttendancePage() {
  const attendanceLogs: AttendanceRecord[] = [
    {
      id: "ATT-001",
      date: "2026-09-04",
      checkIn: "09:00 AM",
      checkOut: "05:30 PM",
      totalHours: "8.5 hrs",
      status: "Present",
    },
    {
      id: "ATT-002",
      date: "2026-09-03",
      checkIn: "09:15 AM",
      checkOut: "05:30 PM",
      totalHours: "8.25 hrs",
      status: "Late",
    },
    {
      id: "ATT-003",
      date: "2026-09-02",
      checkIn: "08:55 AM",
      checkOut: "05:00 PM",
      totalHours: "8.0 hrs",
      status: "Present",
    },
    {
      id: "ATT-004",
      date: "2026-09-01",
      checkIn: "09:00 AM",
      checkOut: "05:30 PM",
      totalHours: "8.5 hrs",
      status: "Present",
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
            Attendance & Time Log
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80 mt-0.5">
            Track your daily check-in logs, working hours, and monthly
            punctuality.
          </p>
        </div>
        <button className="bg-hrms-teal text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-95 transition-opacity shadow-md shadow-[#0F8B8D]/20">
          Clock In Now
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            On-Time Arrival
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">95%</p>
          <span className="text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Excellent Record
          </span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Average Daily Hours
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">8.3 hrs</p>
          <span className="text-xs text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full inline-block mt-3">
            Target: 8.0 hrs
          </span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-sm font-semibold text-hrms-darkText opacity-80">
            Total Days Logged
          </h3>
          <p className="text-3xl font-extrabold text-hrms-navy mt-2">18 Days</p>
          <span className="text-xs text-hrms-teal bg-hrms-teal/10 px-2 py-0.5 rounded-full inline-block mt-3">
            September Cycle
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xs border border-hrms-mediumGray overflow-hidden">
        <div className="p-5 border-b border-hrms-mediumGray">
          <h3 className="font-bold text-hrms-navy">Attendance History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-hrms-blueGray text-hrms-navy text-xs uppercase font-semibold border-b border-hrms-mediumGray">
                <th className="p-4">Record ID</th>
                <th className="p-4">Date</th>
                <th className="p-4">Check In</th>
                <th className="p-4">Check Out</th>
                <th className="p-4">Total Hours</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hrms-mediumGray text-sm text-hrms-darkText">
              {attendanceLogs.map((log) => (
                <tr
                  key={log.id}
                  className="hover:bg-hrms-blueGray/50 transition-colors"
                >
                  <td className="p-4 font-medium text-hrms-navy">{log.id}</td>
                  <td className="p-4 font-semibold">{log.date}</td>
                  <td className="p-4 opacity-80">{log.checkIn}</td>
                  <td className="p-4 opacity-80">{log.checkOut}</td>
                  <td className="p-4 font-medium text-hrms-teal">
                    {log.totalHours}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        log.status === "Present"
                          ? "bg-emerald-100 text-emerald-800"
                          : log.status === "Late"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {log.status}
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
