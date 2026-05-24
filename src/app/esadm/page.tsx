"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Webinar {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  partner: string;
  status: "upcoming" | "past";
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

interface Registration {
  id: number;
  webinarId: number;
  name: string;
  email: string;
  company: string;
  jobTitle: string | null;
  phone: string;
  createdAt: string;
}

type Tab = "webinars" | "registrations";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("webinars");
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Webinar | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    partner: "",
    status: "upcoming" as "upcoming" | "past",
    imageUrl: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const [webinarRes, regRes] = await Promise.all([
      fetch("/api/admin/webinars?page=1&limit=100"),
      fetch("/api/admin/registrations"),
    ]);
    if (webinarRes.status === 401 || regRes.status === 401) {
      router.push("/esadm/login");
      return;
    }
    const webinarData = await webinarRes.json();
    const regData = await regRes.json();
    setWebinars(webinarData.data);
    setRegistrations(regData.data);
    setLoading(false);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/esadm/login");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editing ? "PUT" : "POST";
    const url = editing
      ? `/api/admin/webinars?id=${editing.id}`
      : "/api/admin/webinars";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setEditing(null);
      setShowForm(false);
      resetForm();
      fetchData();
    }
  };

  const handleEdit = (webinar: Webinar) => {
    setEditing(webinar);
    setFormData({
      title: webinar.title,
      description: webinar.description,
      date: webinar.date,
      time: webinar.time,
      location: webinar.location,
      partner: webinar.partner,
      status: webinar.status,
      imageUrl: webinar.imageUrl || "",
    });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this webinar?")) return;
    setDeleting(id);
    const res = await fetch(`/api/admin/webinars?id=${id}`, { method: "DELETE" });
    if (res.ok) fetchData();
    setDeleting(null);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      partner: "",
      status: "upcoming",
      imageUrl: "",
    });
  };

  const getRegistrationsForWebinar = (webinarId: number) =>
    registrations.filter((r) => r.webinarId === webinarId);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container-custom mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E31E24] to-[#C4181E] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-[#1A1A1A]">Webinar Admin</h1>
          </div>
          <div className="flex items-center gap-3">
            <a href="/webinar" target="_blank" className="text-sm text-gray-600 hover:text-[#E31E24] transition">
              View Public Page →
            </a>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="container-custom mx-auto px-4 pt-6">
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1 w-fit">
          <button
            onClick={() => setActiveTab("webinars")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeTab === "webinars"
                ? "bg-white text-[#1A1A1A] shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Webinars ({webinars.length})
          </button>
          <button
            onClick={() => setActiveTab("registrations")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeTab === "registrations"
                ? "bg-white text-[#1A1A1A] shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Registrations ({registrations.length})
          </button>
        </div>
      </div>

      <main className="container-custom mx-auto px-4 py-6">
        {/* Webinars Tab */}
        {activeTab === "webinars" && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">All Webinars</h2>
              <button
                onClick={() => {
                  setEditing(null);
                  resetForm();
                  setShowForm(!showForm);
                }}
                className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Webinar
              </button>
            </div>

            {/* Form */}
            {showForm && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  {editing ? "Edit Webinar" : "New Webinar"}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-transparent outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Partner</label>
                      <input
                        type="text"
                        value={formData.partner}
                        onChange={(e) => setFormData({ ...formData, partner: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-transparent outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <input
                        type="text"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        placeholder="October 17, 2025"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-transparent outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                      <input
                        type="text"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        placeholder="14:00 - 15:30 WIB"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-transparent outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Online via Zoom"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-transparent outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value as "upcoming" | "past" })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-transparent outline-none"
                      >
                        <option value="upcoming">Upcoming</option>
                        <option value="past">Past</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                    <input
                      type="text"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                      placeholder="/events/my-webinar.png"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-transparent outline-none"
                      required
                    />
                  </div>
                  <div className="flex gap-3 justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setEditing(null);
                        resetForm();
                      }}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#E31E24] to-[#C4181E] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
                    >
                      {editing ? "Update" : "Create"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Title</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Date</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Partner</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Registrations</th>
                    <th className="text-right px-4 py-3 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {webinars.map((webinar) => {
                    const regCount = getRegistrationsForWebinar(webinar.id).length;
                    return (
                      <tr key={webinar.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{webinar.title}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{webinar.date}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{webinar.partner}</td>
                        <td className="px-4 py-3 text-sm">
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                              webinar.status === "upcoming"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {webinar.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">{regCount}</td>
                        <td className="px-4 py-3 text-sm text-right">
                          <div className="flex gap-2 justify-end">
                            <button
                              onClick={() => handleEdit(webinar)}
                              className="text-blue-600 hover:text-blue-800 transition"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(webinar.id)}
                              disabled={deleting === webinar.id}
                              className="text-red-600 hover:text-red-800 transition disabled:opacity-50"
                            >
                              {deleting === webinar.id ? "Deleting..." : "Delete"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {webinars.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                        No webinars yet. Click &quot;Add Webinar&quot; to create one.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Registrations Tab */}
        {activeTab === "registrations" && (
          <>
            <h2 className="text-lg font-semibold text-gray-800 mb-6">All Registrations</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Name</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Email</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Company</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Event</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Registered</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {registrations.map((reg) => {
                    const webinar = webinars.find((w) => w.id === reg.webinarId);
                    return (
                      <tr key={reg.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{reg.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{reg.email}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {reg.company}
                          {reg.jobTitle && <span className="text-gray-400"> · {reg.jobTitle}</span>}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {webinar ? webinar.title : "Unknown"}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">
                          {new Date(reg.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    );
                  })}
                  {registrations.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                        No registrations yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
