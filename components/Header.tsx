"use client";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-hrms-mediumGray px-6 flex items-center justify-between sticky top-0 z-10 shadow-xs">
      <div className="flex items-center gap-4 w-96">
        <input
          type="text"
          placeholder="Search employees, documents, reports..."
          className="w-full bg-hrms-blueGray text-hrms-darkText text-sm px-4 py-2 rounded-lg border border-transparent focus:border-hrms-teal focus:outline-none transition-colors"
        />
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-hrms-darkText">
          Super Admin
        </span>
        <div className="w-10 h-10 rounded-full bg-hrms-navy text-white flex items-center justify-center font-bold text-sm shadow-xs">
          SA
        </div>
      </div>
    </header>
  );
}
