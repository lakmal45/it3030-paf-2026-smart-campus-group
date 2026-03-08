import React from "react";

const Maintenance = () => {
  const maintenanceTasks = [
    { id: "MNT-01", asset: "Library Server Rack", schedule: "2026-03-10", status: "Scheduled", handler: "Tech Team A" },
    { id: "MNT-02", asset: "Room 302 Projector", schedule: "2026-03-08", status: "In Progress", handler: "John Tech" },
    { id: "MNT-03", asset: "Main Hall AC Units", schedule: "2026-03-05", status: "Completed", handler: "HVAC Corp" },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Maintenance Oversight</h1>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm">
          Schedule Maintenance
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-xs uppercase tracking-wider">
              <th className="p-4 font-semibold">Task ID</th>
              <th className="p-4 font-semibold">Asset / Area</th>
              <th className="p-4 font-semibold">Schedule Date</th>
              <th className="p-4 font-semibold">Handler</th>
              <th className="p-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {maintenanceTasks.map((task) => (
              <tr key={task.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <td className="p-4 text-slate-800 font-bold text-sm">{task.id}</td>
                <td className="p-4 text-slate-600 text-sm font-medium">{task.asset}</td>
                <td className="p-4 text-slate-600 text-sm">{task.schedule}</td>
                <td className="p-4 text-slate-600 text-sm">{task.handler}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    task.status === "Completed" ? "bg-emerald-100 text-emerald-700" :
                    task.status === "In Progress" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"
                  }`}>
                    {task.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Maintenance;
