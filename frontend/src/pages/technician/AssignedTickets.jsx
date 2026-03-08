import React from "react";

const AssignedTickets = () => {
  const tickets = [
    { id: "TCK-2309", subject: "Network down in Lab 4", location: "Building B, Lab 4", priority: "High", time: "09:30 AM" },
    { id: "TCK-2310", subject: "Projector replacement", location: "Room 101", priority: "Medium", time: "11:15 AM" },
    { id: "TCK-2314", subject: "Fix printer paper jam", location: "Library 2nd Floor", priority: "Low", time: "02:45 PM" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">My Assigned Tickets</h1>
      
      <div className="grid gap-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-indigo-200 transition-colors">
            {ticket.priority === 'High' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>}
            {ticket.priority === 'Medium' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>}
            {ticket.priority === 'Low' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>}
            
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pl-3">
              <div>
                <div className="flex items-center gap-3 mb-1">
                   <h3 className="font-bold text-slate-800 text-lg">{ticket.id}</h3>
                   <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider
                     ${ticket.priority === 'High' ? 'bg-rose-100 text-rose-700' : 
                       ticket.priority === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                     {ticket.priority} Priority
                   </span>
                </div>
                <p className="text-slate-600 font-medium">{ticket.subject}</p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span> {ticket.location}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span> Assigned: Today at {ticket.time}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                 <button className="px-4 py-2 border border-slate-200 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors">
                   Details
                 </button>
                 <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm">
                   Acknowledge
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignedTickets;
