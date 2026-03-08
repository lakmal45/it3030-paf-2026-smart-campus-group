import React from "react";

const UserManagement = () => {
  const mockUsers = [
    { id: "U001", name: "Alice Smith", email: "alice@smartcampus.edu", role: "Manager", status: "Active" },
    { id: "U002", name: "Bob Johnson", email: "bob@smartcampus.edu", role: "Technician", status: "Active" },
    { id: "U003", name: "Charlie Brown", email: "charlie@smartcampus.edu", role: "Student", status: "Suspended" },
    { id: "U004", name: "Diana Prince", email: "diana@smartcampus.edu", role: "Admin", status: "Active" },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">User Management</h1>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm">
          Add User
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex gap-4 bg-slate-50/50">
          <input 
            type="text" 
            placeholder="Search users..." 
            className="flex-1 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400"
          />
          <select className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none text-slate-600">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>Technician</option>
            <option>Student</option>
          </select>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-xs uppercase tracking-wider">
              <th className="p-4 font-semibold">User</th>
              <th className="p-4 font-semibold">Role</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((user) => (
              <tr key={user.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-slate-800 font-semibold text-sm">{user.name}</p>
                      <p className="text-slate-500 text-xs">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-slate-600 text-sm font-medium">{user.role}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    user.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium mr-3">Edit</button>
                  <button className="text-rose-600 hover:text-rose-800 text-sm font-medium">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
