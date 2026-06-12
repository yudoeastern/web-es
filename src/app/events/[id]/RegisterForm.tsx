"use client";

import { useState } from "react";

interface RegisterFormProps {
  webinarId: number;
  webinarTitle: string;
}

export default function RegisterForm({ webinarId, webinarTitle }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Name is required (min 2 characters)";
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.phone.trim() || !/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Valid phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/events/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          webinarId,
          ...formData,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
      } else {
        const errorMessages = result.errors
          ? Object.values(result.errors).join("\n")
          : result.message || "Failed to register. Please try again.";
        alert(errorMessages);
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-text-dark mb-2">Registration Successful!</h3>
        <p className="text-text-secondary mb-4">
          We&apos;ve sent a confirmation email to <strong>{formData.email}</strong> with the event details.
        </p>
        <p className="text-sm text-text-secondary">
          If you don&apos;t see the email, please check your spam folder.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: "" });
          }}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-transparent outline-none transition ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="John Doe"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: "" });
          }}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-transparent outline-none transition ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="john@company.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => {
            setFormData({ ...formData, company: e.target.value });
            if (errors.company) setErrors({ ...errors, company: "" });
          }}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-transparent outline-none transition ${
            errors.company ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Your Company"
        />
        {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
          <input
            type="text"
            value={formData.jobTitle}
            onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-transparent outline-none transition"
            placeholder="CTO"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: "" });
            }}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E31E24] focus:border-transparent outline-none transition ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="+62 812 3456 7890"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-gradient-to-r from-[#E31E24] to-[#C4181E] text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition disabled:opacity-50 ${
          isSubmitting ? "cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Registering...
          </span>
        ) : (
          "Register Now"
        )}
      </button>
    </form>
  );
}
