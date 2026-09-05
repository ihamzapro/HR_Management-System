"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"HR Manager" | "Employee">("HR Manager");
  const [error, setError] = useState("");

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    if (role === "HR Manager") {
      router.push("/dashboard");
    } else {
      router.push("/employee-portal");
    }
  };

  return (
    <div className="min-h-screen bg-hrms-blueGray flex flex-col justify-center items-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-hrms-mediumGray p-8 space-y-6">
        <div className="text-center space-y-2">
          <Link href="/" className="inline-block">
            <div className="w-12 h-12 rounded-2xl bg-hrms-teal text-white font-extrabold flex items-center justify-center text-xl shadow-md shadow-[#0F8B8D]/20 mx-auto">
              Q
            </div>
          </Link>
          <h1 className="text-2xl font-extrabold text-hrms-navy tracking-tight">
            Sign in to CodeQor
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80">
            Select your portal role to access your workspace.
          </p>
        </div>

        {error && (
          <div className="bg-rose-100 border border-rose-300 text-rose-800 text-sm px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-hrms-navy mb-1">
              Select Portal Role
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("HR Manager")}
                className={`py-2.5 px-4 rounded-xl text-sm font-semibold border transition-all ${
                  role === "HR Manager"
                    ? "bg-hrms-navy text-white border-hrms-navy shadow-md shadow-[#17324D]/20"
                    : "bg-hrms-blueGray text-hrms-darkText border-hrms-mediumGray hover:bg-white"
                }`}
              >
                HR Manager
              </button>
              <button
                type="button"
                onClick={() => setRole("Employee")}
                className={`py-2.5 px-4 rounded-xl text-sm font-semibold border transition-all ${
                  role === "Employee"
                    ? "bg-hrms-teal text-white border-hrms-teal shadow-md shadow-[#0F8B8D]/20"
                    : "bg-hrms-blueGray text-hrms-darkText border-hrms-mediumGray hover:bg-white"
                }`}
              >
                Employee
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-hrms-navy mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder={
                role === "HR Manager"
                  ? "hr.manager@codeqor.com"
                  : "sarah.jenkins@codeqor.com"
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-hrms-blueGray text-hrms-darkText text-sm px-4 py-3 rounded-xl border border-transparent focus:border-hrms-teal focus:bg-white focus:outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-hrms-navy mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-hrms-blueGray text-hrms-darkText text-sm px-4 py-3 rounded-xl border border-transparent focus:border-hrms-teal focus:bg-white focus:outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-hrms-teal text-white py-3 rounded-xl text-sm font-semibold hover:opacity-95 transition-opacity shadow-lg shadow-[#0F8B8D]/20 mt-2"
          >
            Login as {role}
          </button>
        </form>

        <div className="text-center pt-2">
          <Link
            href="/"
            className="text-xs font-medium text-hrms-darkText opacity-70 hover:opacity-100"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
