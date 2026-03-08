import React from "react";

const RoleManagement = () => {
  const roles = [
    { name: "Admin", users: 3, permissions: "All access", description: "Full system control and configuration" },
    { name: "Manager", users: 12, permissions: "Reports, Analytics, Maintenance", description: "Oversight of campus resources and metrics" },
    { name: "Technician", users: 24, permissions: "Tickets, Updates", description: "Handles maintenance and support tickets" },
    { name: "USER", users: 8540, permissions: "Bookings, Tickets, Profile", description: "Standard student/staff access" },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Role Management</h1>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm">
          Create Role
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {roles.map((role) => (
          <div key={role.name} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-slate-800">{role.name}</h2>
              <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full">{role.users} Users</span>
            </div>
            <p className="text-sm text-slate-500 mb-6">{role.description}</p>
            
            <div className="mb-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Permissions Overview</p>
              <div className="flex flex-wrap gap-2">
                {role.permissions.split(", ").map(perm => (
                  <span key={perm} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded-lg text-xs font-medium">
                    {perm}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100">
              <button className="flex-1 py-2 text-indigo-600 border border-indigo-100 bg-indigo-50/50 hover:bg-indigo-50 rounded-xl text-sm font-semibold transition-colors">
                Edit Matrix
              </button>
              <button className="flex-1 py-2 text-slate-600 border border-slate-100 bg-slate-50 hover:bg-slate-100 rounded-xl text-sm font-semibold transition-colors">
                View Users
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleManagement;
