import React, { useState } from "react";

const UpdateStatus = () => {
  const [ticketId, setTicketId] = useState("");
  const [status, setStatus] = useState("In Progress");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Status Updated for ${ticketId} to ${status}`);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Update Ticket Status</h1>
      
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Ticket ID</label>
            <input 
              type="text"
              placeholder="e.g. TCK-2309"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-600"
              value={ticketId}
              onChange={(e) => setTicketId(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">New Status</label>
            <div className="grid grid-cols-3 gap-3">
              {['In Progress', 'On Hold', 'Resolved'].map(s => (
                <button 
                  type="button"
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                    status === s 
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm' 
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Resolution Notes</label>
            <textarea 
              rows="5"
              placeholder="Detail the work done or reason for hold..."
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-600 resize-none"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              required={status === 'Resolved'}
            ></textarea>
            {status === 'Resolved' && <p className="text-xs text-amber-600 mt-2 font-medium flex items-center before:content-['*'] before:mr-1">Notes are required when resolving a ticket.</p>}
          </div>
          
          <div className="pt-2">
            <button type="submit" className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-sm hover:shadow-md">
              Submit Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStatus;
