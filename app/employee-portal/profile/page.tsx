"use client";

import { useState } from "react";

export default function EmployeeProfilePage() {
  const [name, setName] = useState("Sarah Jenkins");
  const [email, setEmail] = useState("sarah.jenkins@codeqor.com");
  const [phone, setPhone] = useState("+1 (555) 234-5678");
  const [address, setAddress] = useState("742 Evergreen Terrace, Springfield");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-hrms-blueGray p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-bold text-hrms-teal bg-hrms-teal/10 px-2.5 py-1 rounded-md uppercase tracking-wider">
            Employee Self-Service
          </span>
          <h1 className="text-2xl font-extrabold text-hrms-navy mt-2">
            My Profile
          </h1>
          <p className="text-sm text-hrms-darkText opacity-80 mt-0.5">
            View and update your personal information and contact details.
          </p>
        </div>

        {saved && (
          <div className="bg-emerald-100 border border-emerald-300 text-emerald-800 text-sm px-4 py-3 rounded-xl">
            Profile updated successfully!
          </div>
        )}

        <form
          onSubmit={handleSave}
          className="bg-white rounded-2xl shadow-xs border border-hrms-mediumGray p-6 space-y-6"
        >
          <div className="flex items-center space-x-4 pb-6 border-b border-hrms-mediumGray">
            <div className="w-16 h-16 rounded-full bg-hrms-navy text-white flex items-center justify-center text-xl font-bold">
              SJ
            </div>
            <div>
              <h3 className="font-bold text-hrms-navy text-lg">
                Sarah Jenkins
              </h3>
              <p className="text-sm text-hrms-darkText opacity-75">
                Software Engineer • Engineering Department
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-hrms-navy mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-hrms-blueGray text-hrms-darkText text-sm px-4 py-2.5 rounded-xl border border-transparent focus:border-hrms-teal focus:bg-white focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-hrms-navy mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-hrms-blueGray text-hrms-darkText text-sm px-4 py-2.5 rounded-xl border border-transparent focus:border-hrms-teal focus:bg-white focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-hrms-navy mb-1">
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-hrms-blueGray text-hrms-darkText text-sm px-4 py-2.5 rounded-xl border border-transparent focus:border-hrms-teal focus:bg-white focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-hrms-navy mb-1">
                Residential Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-hrms-blueGray text-hrms-darkText text-sm px-4 py-2.5 rounded-xl border border-transparent focus:border-hrms-teal focus:bg-white focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-hrms-mediumGray">
            <button
              type="submit"
              className="bg-hrms-teal text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-95 transition-opacity shadow-md shadow-[#0F8B8D]/20"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
