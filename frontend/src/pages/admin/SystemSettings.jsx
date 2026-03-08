import React from "react";

const SystemSettings = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">System Settings</h1>
      
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        {/* General Settings */}
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-4">General Configuration</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="font-semibold text-slate-700">Campus Name</p>
                <p className="text-sm text-slate-500">The official name displayed on the portal</p>
              </div>
              <input type="text" defaultValue="Smart Campus Main" className="px-4 py-2 border border-slate-200 rounded-lg text-sm w-64 focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="font-semibold text-slate-700">Timezone</p>
                <p className="text-sm text-slate-500">System default timezone for bookings</p>
              </div>
              <select className="px-4 py-2 border border-slate-200 rounded-lg text-sm w-64 outline-none">
                <option>Asia/Colombo (GMT+5:30)</option>
                <option>UTC (GMT+0:00)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Security Policies</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="font-semibold text-slate-700">Require 2FA</p>
                <p className="text-sm text-slate-500">Mandatory two-factor authentication for Admin/Manager roles</p>
              </div>
              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle1" checked readOnly className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-indigo-500" style={{ right: 0 }} />
                <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-6 rounded-full bg-indigo-500 cursor-pointer"></label>
              </div>
            </div>
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="font-semibold text-slate-700">Session Timeout</p>
                <p className="text-sm text-slate-500">Automatically logout inactive users</p>
              </div>
              <select className="px-4 py-2 border border-slate-200 rounded-lg text-sm w-64 outline-none">
                <option>30 Minutes</option>
                <option>1 Hour</option>
                <option>4 Hours</option>
              </select>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="p-6">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Active Integrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center font-bold text-emerald-700 text-xs">G</div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">Google Workspace</p>
                    <p className="text-xs text-slate-500">Connected</p>
                  </div>
                </div>
                <button className="text-xs font-semibold text-slate-500 hover:text-slate-700">Configure</button>
             </div>
             <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs">S</div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">Slack Notifications</p>
                    <p className="text-xs text-slate-500">Not configured</p>
                  </div>
                </div>
                <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">Connect</button>
             </div>
          </div>
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
          <button className="px-6 py-2 border border-slate-200 rounded-xl text-slate-600 font-medium hover:bg-slate-100 transition-colors">Discard</button>
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-sm">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;
