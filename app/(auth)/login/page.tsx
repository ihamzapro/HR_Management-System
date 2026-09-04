"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type AuthMode = "signin" | "signup";
type UserRole = "Employee" | "HR Manager";

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>("signin");
  const [role, setRole] = useState<UserRole>("Employee");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-hrms-blueGray flex items-center justify-center p-6 bg-[radial-gradient(#0F8B8D15_1px,transparent_1px)] bg-size-[16px_16px]">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-hrms-mediumGray p-8 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#17324D] to-[#0F8B8D]" />

        <div className="text-center space-y-1">
          <h1 className="text-3xl font-extrabold tracking-tight text-hrms-navy">
            CodeQor HRMS
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80">
            {mode === "signin"
              ? "Welcome back! Please enter your details."
              : "Create your account to get started."}
          </p>
        </div>

        <div className="flex bg-hrms-blueGray p-1 rounded-xl border border-hrms-mediumGray">
          <button
            type="button"
            onClick={() => setMode("signin")}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
              mode === "signin"
                ? "bg-hrms-navy text-white shadow-sm"
                : "text-hrms-darkText hover:text-hrms-navy"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
              mode === "signup"
                ? "bg-hrms-navy text-white shadow-sm"
                : "text-hrms-darkText hover:text-hrms-navy"
            }`}
          >
            Sign Up
          </button>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-hrms-navy">
            Select Role
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setRole("Employee")}
              className={`py-2.5 px-4 text-xs font-bold rounded-xl border transition-all ${
                role === "Employee"
                  ? "border-hrms-teal bg-hrms-teal/10 text-hrms-teal"
                  : "border-hrms-mediumGray bg-white text-hrms-darkText hover:border-hrms-teal/50"
              }`}
            >
              Employee
            </button>
            <button
              type="button"
              onClick={() => setRole("HR Manager")}
              className={`py-2.5 px-4 text-xs font-bold rounded-xl border transition-all ${
                role === "HR Manager"
                  ? "border-hrms-teal bg-hrms-teal/10 text-hrms-teal"
                  : "border-hrms-mediumGray bg-white text-hrms-darkText hover:border-hrms-teal/50"
              }`}
            >
              HR / Admin
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-hrms-navy mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Sarah Jenkins"
                className="w-full bg-hrms-blueGray text-hrms-darkText text-sm px-4 py-2.5 rounded-xl border border-transparent focus:border-hrms-teal focus:bg-white focus:outline-none transition-all"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-hrms-navy mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={
                role === "Employee" ? "employee@codeqor.com" : "hr@codeqor.com"
              }
              className="w-full bg-hrms-blueGray text-hrms-darkText text-sm px-4 py-2.5 rounded-xl border border-transparent focus:border-hrms-teal focus:bg-white focus:outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-hrms-navy mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-hrms-blueGray text-hrms-darkText text-sm px-4 py-2.5 rounded-xl border border-transparent focus:border-hrms-teal focus:bg-white focus:outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-hrms-teal text-white font-semibold py-3 rounded-xl text-sm hover:opacity-95 transition-opacity shadow-md shadow-[#0F8B8D]/20 mt-2"
          >
            {mode === "signin"
              ? `Sign In as ${role}`
              : `Create ${role} Account`}
          </button>
        </form>
      </div>
    </div>
  );
}
