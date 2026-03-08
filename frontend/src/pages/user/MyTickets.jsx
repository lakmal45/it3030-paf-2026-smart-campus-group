import React from "react";

const MyTickets = () => {
  const mockTickets = [
    { id: "TCK-1042", subject: "Wi-Fi Issue in Library", date: "2026-03-05", status: "Resolved", priority: "High" },
    { id: "TCK-1045", subject: "AC not working in Room 402", date: "2026-03-06", status: "In Progress", priority: "Medium" },
    { id: "TCK-1050", subject: "Request for new ID card", date: "2026-03-07", status: "Open", priority: "Low" },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">My IT Tickets</h1>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm">
          + New Ticket
        </button>
      </div>

      <div className="grid gap-4">
        {mockTickets.map((ticket) => (
          <div key={ticket.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-indigo-100 transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-bold text-slate-800">{ticket.id}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  ticket.priority === 'High' ? 'bg-rose-100 text-rose-700' : 
                  ticket.priority === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {ticket.priority}
                </span>
              </div>
              <h3 className="text-slate-600 font-medium">{ticket.subject}</h3>
              <p className="text-xs text-slate-400 mt-1">Submitted on: {ticket.date}</p>
            </div>
            
            <div className="flex items-center">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                ticket.status === "Resolved" ? "bg-emerald-100 text-emerald-700" : 
                ticket.status === "In Progress" ? "bg-indigo-100 text-indigo-700" : "bg-slate-100 text-slate-600"
              }`}>
                {ticket.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTickets;
