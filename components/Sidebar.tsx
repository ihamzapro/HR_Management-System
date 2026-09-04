"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Employees", href: "/employees" },
    { label: "Recruitment", href: "/recruitment" },
    { label: "Attendance", href: "/attendance" },
    { label: "Leave", href: "/leave" },
    { label: "Payroll", href: "/payroll" },
    { label: "Performance", href: "/performance" },
    { label: "Expenses", href: "/expenses" },
    // { label: "Documents", href: "/documents" },
    { label: "Reports", href: "/reports" },
    { label: "Settings", href: "/settings" },
  ];

  return (
    <aside className="w-64 bg-hrms-navy text-white flex flex-col h-screen sticky top-0 shadow-lg">
      <div className="p-6 border-b border-hrms-darkText">
        <h1 className="text-xl font-bold tracking-wider text-hrms-blueGray">
          CodeQor HRMS
        </h1>
        <p className="text-xs text-hrms-mediumGray mt-1">Management System</p>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-hrms-teal text-white"
                  : "text-hrms-blueGray hover:bg-hrms-darkText hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
