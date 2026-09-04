"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [companyName, setCompanyName] = useState("CodeQor Technologies");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-hrms-navy">
          Settings & Preferences
        </h1>
        <p className="text-sm text-hrms-darkText opacity-80 mt-1">
          Configure organization preferences, security configurations, and
          notification controls.
        </p>
      </div>

      {saved && (
        <div className="bg-emerald-100 border border-emerald-300 text-emerald-800 text-sm px-4 py-3 rounded-xl">
          Settings updated successfully!
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        <div className="bg-white rounded-xl shadow-xs border border-hrms-mediumGray p-6 space-y-4">
          <h3 className="font-bold text-hrms-navy text-lg border-b border-hrms-mediumGray pb-3">
            Organization Profile
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-hrms-navy mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full bg-hrms-blueGray text-hrms-darkText text-sm px-4 py-2.5 rounded-xl border border-transparent focus:border-hrms-teal focus:bg-white focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-hrms-navy mb-1">
                Primary Currency
              </label>
              <select className="w-full bg-hrms-blueGray text-hrms-darkText text-sm px-4 py-2.5 rounded-xl border border-transparent focus:border-hrms-teal focus:bg-white focus:outline-none transition-all">
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xs border border-hrms-mediumGray p-6 space-y-4">
          <h3 className="font-bold text-hrms-navy text-lg border-b border-hrms-mediumGray pb-3">
            Security & Notifications
          </h3>
          <div className="space-y-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
                className="w-4 h-4 text-hrms-teal rounded border-hrms-mediumGray focus:ring-[#0F8B8D]"
              />
              <span className="text-sm font-medium text-hrms-darkText">
                Enable Email Alerts for Leave Requests & Payroll
              </span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={twoFactorAuth}
                onChange={(e) => setTwoFactorAuth(e.target.checked)}
                className="w-4 h-4 text-hrms-teal rounded border-hrms-mediumGray focus:ring-[#0F8B8D]"
              />
              <span className="text-sm font-medium text-hrms-darkText">
                Require Two-Factor Authentication (2FA) for HR Managers
              </span>
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-hrms-teal text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-95 transition-opacity shadow-md shadow-[#0F8B8D]/20"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
