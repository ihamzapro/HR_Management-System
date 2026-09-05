import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-hrms-blueGray flex flex-col justify-between">
      <header className="max-w-7xl mx-auto w-full px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-xl bg-hrms-teal text-white font-extrabold flex items-center justify-center text-lg shadow-md shadow-[#0F8B8D]/20">
            Q
          </div>
          <span className="text-xl font-extrabold text-hrms-navy tracking-tight">
            CodeQor HRMS
          </span>
        </div>
        <div className="flex space-x-4">
          <Link
            href="/login"
            className="text-sm font-semibold text-hrms-navy px-4 py-2 hover:opacity-80 transition-opacity"
          >
            Sign In
          </Link>
          <Link
            href="/login"
            className="bg-hrms-teal text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-95 transition-opacity shadow-md shadow-[#0F8B8D]/20"
          >
            Get Started
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 text-center space-y-8">
        <div className="space-y-4">
          <span className="text-xs font-bold text-hrms-teal bg-hrms-teal/10 px-3 py-1 rounded-full uppercase tracking-wider">
            Enterprise People Operations
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-hrms-navy tracking-tight leading-tight">
            Unified HR Management & <br />
            <span className="text-hrms-teal">Employee Self-Service</span>
          </h1>
          <p className="text-base md:text-lg text-hrms-darkText opacity-80 max-w-2xl mx-auto">
            Streamline recruitment, attendance, payroll, leave tracking, and
            document compliance with a dual-portal platform built for modern
            teams.
          </p>
        </div>

        <div className="flex justify-center space-x-4 pt-4">
          <Link
            href="/login"
            className="bg-hrms-navy text-white font-semibold px-8 py-3.5 rounded-xl text-base hover:bg-hrms-navy/90 transition-colors shadow-lg shadow-[#17324D]/20"
          >
            Access Portal →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 text-left">
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
            <h3 className="font-bold text-hrms-navy text-lg">HR Management</h3>
            <p className="text-sm text-hrms-darkText opacity-80 mt-2">
              Full oversight over company payroll, recruitment pipelines,
              performance analytics, and system configurations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
            <h3 className="font-bold text-hrms-navy text-lg">
              Employee Self-Service
            </h3>
            <p className="text-sm text-hrms-darkText opacity-80 mt-2">
              Empower staff to track attendance, apply for leave, view payslips,
              and manage personal document vaults.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-hrms-mediumGray">
            <h3 className="font-bold text-hrms-navy text-lg">
              Secure & Role-Based
            </h3>
            <p className="text-sm text-hrms-darkText opacity-80 mt-2">
              Seamlessly route users to dedicated HR or Employee portals based
              on verified login credentials.
            </p>
          </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto w-full px-6 py-6 text-center text-xs text-hrms-darkText opacity-60 border-t border-hrms-mediumGray">
        © 2026 CodeQor Technologies. All rights reserved.
      </footer>
    </div>
  );
}
