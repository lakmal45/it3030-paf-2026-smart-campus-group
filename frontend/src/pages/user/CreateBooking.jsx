import React, { useState } from "react";

const CreateBooking = () => {
  const [formData, setFormData] = useState({ resource: "", date: "", time: "", reason: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.resource) newErrors.resource = "Resource is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (!formData.reason.trim()) newErrors.reason = "Reason is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Booking Request Submitted: \n${JSON.stringify(formData, null, 2)}`);
      setFormData({ resource: "", date: "", time: "", reason: "" });
      setErrors({});
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Create New Booking</h1>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Resource</label>
            <select 
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none ${errors.resource ? 'border-red-500 text-red-600' : 'border-slate-200 text-slate-600'}`}
              value={formData.resource}
              onChange={(e) => { setFormData({ ...formData, resource: e.target.value }); if (errors.resource) setErrors({ ...errors, resource: '' }); }}
            >
              <option value="">Select a resource to book</option>
              <option value="Conference Room A">Conference Room A</option>
              <option value="Auditorium">Auditorium</option>
              <option value="Projector X1">Projector X1</option>
            </select>
            {errors.resource && <p className="text-red-500 text-xs mt-1">{errors.resource}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
            <input 
              type="date"
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none ${errors.date ? 'border-red-500 text-red-600' : 'border-slate-200 text-slate-600'}`}
              value={formData.date}
              onChange={(e) => { setFormData({ ...formData, date: e.target.value }); if (errors.date) setErrors({ ...errors, date: '' }); }}
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Time</label>
            <input 
              type="time"
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none ${errors.time ? 'border-red-500 text-red-600' : 'border-slate-200 text-slate-600'}`}
              value={formData.time}
              onChange={(e) => { setFormData({ ...formData, time: e.target.value }); if (errors.time) setErrors({ ...errors, time: '' }); }}
            />
            {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Reason for Booking</label>
            <textarea 
              rows="4"
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none ${errors.reason ? 'border-red-500 text-red-600' : 'border-slate-200 text-slate-600'}`}
              placeholder="Brief description..."
              value={formData.reason}
              onChange={(e) => { setFormData({ ...formData, reason: e.target.value }); if (errors.reason) setErrors({ ...errors, reason: '' }); }}
            ></textarea>
            {errors.reason && <p className="text-red-500 text-xs mt-1">{errors.reason}</p>}
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
