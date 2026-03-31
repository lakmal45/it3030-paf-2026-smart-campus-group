import React, { useEffect, useState } from "react";
import api from "../../services/api";

const ROLES = ["USER", "ADMIN", "MANAGER", "TECHNICIAN"];

const roleBadge = {
  ADMIN: "bg-violet-100 text-violet-700",
  MANAGER: "bg-blue-100 text-blue-700",
  TECHNICIAN: "bg-amber-100 text-amber-700",
  USER: "bg-slate-100 text-slate-600",
};

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [editingUser, setEditingUser] = useState(null); // Full user object for the modal
  const [pendingRole, setPendingRole] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  // ── Fetch all users ──────────────────────────────────────────────
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.get("/admin/users");
      setUsers(res.data);
    } catch (err) {
      setError(
        err.response?.status === 403
          ? "Access denied. Admin privileges required."
          : "Failed to load users. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ── Role update ──────────────────────────────────────────────────
  const handleRoleUpdate = async () => {
    if (!editingUser) return;
    try {
      setActionLoading(true);
      await api.put(`/admin/users/${editingUser.id}/role?role=${pendingRole}`);
      setUsers((prev) =>
        prev.map((u) =>
          u.id === editingUser.id ? { ...u, role: pendingRole } : u,
        ),
      );
      setEditingUser(null);
    } catch {
      alert("Failed to update role. Please try again.");
    } finally {
      setActionLoading(false);
    }
  };

  // ── Delete user ──────────────────────────────────────────────────
  const handleDelete = async (userId) => {
    try {
      setActionLoading(true);
      await api.delete(`/admin/users/${userId}`);
      setUsers((prev) => prev.filter((u) => u.id !== userId));
      setDeleteId(null);
    } catch {
      alert("Failed to delete user. Please try again.");
    } finally {
      setActionLoading(false);
    }
  };

  // ── Filtering ────────────────────────────────────────────────────
  const filtered = users.filter((u) => {
    const matchesSearch =
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase());
    const matchesRole = filterRole === "All" || u.role === filterRole;
    return matchesSearch && matchesRole;
  });

  // ── Avatar initials ──────────────────────────────────────────────
  const initials = (name) =>
    name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .slice(0, 2)
          .toUpperCase()
      : "?";

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">User Management</h1>
          <p className="text-slate-500 text-sm mt-1">
            {loading ? "Loading…" : `${users.length} total users`}
          </p>
        </div>
        <button
          onClick={fetchUsers}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm flex items-center gap-2"
        >
          ↻ Refresh
        </button>
      </div>

      {/* Error banner */}
      {error && (
        <div className="mb-4 p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-700 text-sm font-medium">
          {error}
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Search & Filter bar */}
        <div className="p-4 border-b border-slate-100 flex gap-4 bg-slate-50/50">
          <input
            type="text"
            placeholder="Search by name or email…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400"
          />
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none text-slate-600"
          >
            <option value="All">All Roles</option>
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-3" />
            <p className="text-sm">Loading users…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <p className="text-2xl mb-2">👤</p>
            <p className="text-sm font-medium">No users found</p>
            <p className="text-xs mt-1">Try adjusting your search or filter</p>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-semibold">User</th>
                <th className="p-4 font-semibold">Role</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
                >
                  {/* User info */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {initials(user.name)}
                      </div>
                      <div>
                        <p className="text-slate-800 font-semibold text-sm">
                          {user.name || "—"}
                        </p>
                        <p className="text-slate-500 text-xs">{user.email}</p>
                      </div>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        roleBadge[user.role] ?? "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-4 text-right whitespace-nowrap">
                    <button
                      onClick={() => {
                        setEditingUser(user);
                        setPendingRole(user.role);
                      }}
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium mr-4"
                    >
                      Edit Role
                    </button>
                    <button
                      onClick={() => setDeleteId(user.id)}
                      className="text-rose-500 hover:text-rose-700 text-sm font-medium"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Edit Role Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md mx-4 border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg">
                {initials(editingUser.name)}
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800">
                  Edit User Role
                </h2>
                <p className="text-slate-500 text-sm">{editingUser.email}</p>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Select New Role
              </label>
              <div className="grid grid-cols-2 gap-3">
                {ROLES.map((r) => (
                  <button
                    key={r}
                    onClick={() => setPendingRole(r)}
                    className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                      pendingRole === r
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700 ring-2 ring-indigo-500/10"
                        : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setEditingUser(null)}
                className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800 transition-colors"
                disabled={actionLoading}
              >
                Cancel
              </button>
              <button
                disabled={actionLoading}
                onClick={handleRoleUpdate}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold disabled:opacity-50 transition-all shadow-md shadow-indigo-200 active:scale-95"
              >
                {actionLoading ? "Saving..." : "Update Role"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirmation modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm mx-4">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4 text-xl">
              ⚠️
            </div>
            <h2 className="text-lg font-bold text-slate-800 mb-2">
              Delete User
            </h2>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              Are you sure you want to delete this user? This action is
              permanent and cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800"
                disabled={actionLoading}
              >
                Cancel
              </button>
              <button
                disabled={actionLoading}
                onClick={() => handleDelete(deleteId)}
                className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-sm font-semibold disabled:opacity-50 transition-all shadow-md shadow-rose-200 active:scale-95"
              >
                {actionLoading ? "Deleting..." : "Delete User"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
