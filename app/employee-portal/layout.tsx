import Link from "next/link";

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { name: "Overview", href: "/employee-portal" },
    { name: "My Profile", href: "/employee-portal/profile" },
    { name: "Attendance", href: "/employee-portal/attendance" },
    { name: "Leave", href: "/employee-portal/leave" },
    { name: "Payslips", href: "/employee-portal/payslips" },
    { name: "Documents", href: "/employee-portal/documents" },
    { name: "Expenses", href: "/employee-portal/expenses" },
  ];

  return (
    <div className="min-h-screen bg-hrms-blueGray flex">
      <aside className="w-64 bg-hrms-navy text-white flex flex-col justify-between md:flex border-r border-hrms-mediumGray/20">
        <div className="p-6 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-hrms-teal bg-hrms-teal/10 px-2 py-1 rounded">
              ESS Portal
            </span>
            <h2 className="text-xl font-extrabold text-white mt-2">
              CodeQor Staff
            </h2>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-hrms-blueGray hover:bg-white/10 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-6 border-t border-white/10">
          <Link
            href="/"
            className="text-xs text-rose-300 hover:underline font-medium block"
          >
            ← Log Out / Switch Role
          </Link>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
