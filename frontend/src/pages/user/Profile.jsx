import React from "react";

const Profile = () => {
  const userProfile = {
    name: "John Doe",
    email: "john.doe@smartcampus.edu",
    role: "Student",
    studentId: "STU-2026-0891",
    department: "Computer Science",
    joined: "Aug 2024"
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">User Profile</h1>
      
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
        
        <div className="px-8 pb-8">
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg">
              <div className="w-full h-full rounded-xl bg-indigo-100 flex items-center justify-center text-4xl font-bold text-indigo-600">
                {userProfile.name.charAt(0)}
              </div>
            </div>
            <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-colors">
              Edit Profile
            </button>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800">{userProfile.name}</h2>
            <p className="text-slate-500 font-medium">{userProfile.role} • {userProfile.department}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</p>
              <p className="text-slate-700 font-medium">{userProfile.email}</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Student ID</p>
              <p className="text-slate-700 font-medium">{userProfile.studentId}</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Department</p>
              <p className="text-slate-700 font-medium">{userProfile.department}</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Joined Date</p>
              <p className="text-slate-700 font-medium">{userProfile.joined}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
