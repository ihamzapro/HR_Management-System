interface AttendanceRecord {
  id: string;
  employeeName: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: "Present" | "Absent" | "Late" | "Half Day";
  overtime: string;
}

export default function AttendancePage() {
  const attendanceList: AttendanceRecord[] = [
    {
      id: "ATT-001",
      employeeName: "Sarah Jenkins",
      date: "2026-09-03",
      checkIn: "09:00 AM",
      checkOut: "05:00 PM",
      status: "Present",
      overtime: "0 hrs",
    },
    {
      id: "ATT-002",
      employeeName: "Alex Morgan",
      date: "2026-09-03",
      checkIn: "09:45 AM",
      checkOut: "05:00 PM",
      status: "Late",
      overtime: "0 hrs",
    },
    {
      id: "ATT-003",
      employeeName: "David Chen",
      date: "2026-09-03",
      checkIn: "-",
      checkOut: "-",
      status: "Absent",
      overtime: "0 hrs",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-hrms-navy">
            Attendance & Shifts
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80 mt-1">
            Monitor daily check-ins, work hours, shifts, and attendance
            exceptions.
          </p>
        </div>
        <button className="bg-hrms-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
          + Manual Entry
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-xs border border-hrms-mediumGray overflow-hidden">
        <div className="p-4 border-b border-hrms-mediumGray">
          <h3 className="font-bold text-hrms-navy">Todays Attendance Logs</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-hrms-blueGray text-hrms-navy text-xs uppercase font-semibold border-b border-hrms-mediumGray">
                <th className="p-4">Record ID</th>
                <th className="p-4">Employee</th>
                <th className="p-4">Date</th>
                <th className="p-4">Check-In</th>
                <th className="p-4">Check-Out</th>
                <th className="p-4">Overtime</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hrms-mediumGray text-sm text-hrms-darkText">
              {attendanceList.map((record: AttendanceRecord) => (
                <tr
                  key={record.id}
                  className="hover:bg-hrms-blueGray/50 transition-colors"
                >
                  <td className="p-4 font-medium text-hrms-navy">
                    {record.id}
                  </td>
                  <td className="p-4 font-semibold">{record.employeeName}</td>
                  <td className="p-4 opacity-80">{record.date}</td>
                  <td className="p-4 opacity-80">{record.checkIn}</td>
                  <td className="p-4 opacity-80">{record.checkOut}</td>
                  <td className="p-4 opacity-80">{record.overtime}</td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        record.status === "Present"
                          ? "bg-emerald-100 text-emerald-800"
                          : record.status === "Late"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {record.status}
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
