import React from "react";

const Reports = () => {
  const mockReports = [
    { title: "Monthly Resource Utilization", generatedDate: "2026-03-01", type: "PDF" },
    { title: "Weekly Ticket Resolution", generatedDate: "2026-03-05", type: "CSV" },
    { title: "User Activity Overview", generatedDate: "2026-02-28", type: "PDF" },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">System Reports</h1>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm">
          Generate New Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockReports.map((report, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:border-indigo-100 transition-colors">
            <div className="flex justify-between items-start mb-4">
               <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                  report.type === 'PDF' ? 'bg-rose-100 text-rose-600' : 'bg-green-100 text-green-600'
               }`}>
                  {report.type}
               </div>
               <button className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold">Download</button>
            </div>
            <h3 className="font-bold text-slate-800 mb-2">{report.title}</h3>
            <p className="text-xs text-slate-500 mt-auto pt-4 border-t border-slate-50">Generated: {report.generatedDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
