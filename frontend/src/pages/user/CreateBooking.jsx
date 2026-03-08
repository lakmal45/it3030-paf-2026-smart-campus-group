import React, { useState } from "react";

const CreateBooking = () => {
  const [formData, setFormData] = useState({ resource: "", date: "", time: "", reason: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Request Submitted: \n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Create New Booking</h1>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Resource</label>
            <select 
              className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-600"
              value={formData.resource}
              onChange={(e) => setFormData({ ...formData, resource: e.target.value })}
            >
              <option value="">Select a resource to book</option>
              <option value="Conference Room A">Conference Room A</option>
              <option value="Auditorium">Auditorium</option>
              <option value="Projector X1">Projector X1</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
            <input 
              type="date"
              className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-600"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Time</label>
            <input 
              type="time"
              className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-600"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Reason for Booking</label>
            <textarea 
              rows="4"
              className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-600"
              placeholder="Brief description..."
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            ></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors">
            Submit Booking Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBooking;
