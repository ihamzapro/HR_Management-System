export default function DashboardPage() {
  const stats = [
    {
      label: "Total Employees",
      value: "148",
      change: "+4 this month",
      color: "border-l-[#17324D]",
    },
    {
      label: "Present Today",
      value: "138",
      change: "93.2% attendance",
      color: "border-l-[#0F8B8D]",
    },
    {
      label: "On Leave",
      value: "6",
      change: "4 pending approval",
      color: "border-l-amber-500",
    },
    {
      label: "Open Vacancies",
      value: "12",
      change: "3 in final interview",
      color: "border-l-blue-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-hrms-navy">
          Dashboard Overview
        </h1>
        <p className="text-sm text-hrms-darkText opacity-80 mt-1">
          Welcome back, Super Admin. Here is what is happening across CodeQor
          today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-xl shadow-xs border border-hrms-mediumGray border-l-4 ${stat.color} flex flex-col justify-between`}
          >
            <div>
              <p className="text-sm font-medium text-hrms-darkText opacity-70">
                {stat.label}
              </p>
              <h3 className="text-3xl font-bold text-hrms-navy mt-2">
                {stat.value}
              </h3>
            </div>
            <p className="text-xs text-hrms-teal font-medium mt-4">
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-lg font-bold text-hrms-navy mb-4">
            Pending Approvals
          </h3>
          <p className="text-sm text-hrms-darkText opacity-70">
            No pending leave or expense requests requiring your attention.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xs border border-hrms-mediumGray">
          <h3 className="text-lg font-bold text-hrms-navy mb-4">
            Recent Activity
          </h3>
          <p className="text-sm text-hrms-darkText opacity-70">
            System audit logs are active and tracking updates.
          </p>
        </div>
      </div>
    </div>
  );
}
