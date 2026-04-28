'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    // Job Title validation
    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Job title is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      const errorMessages = Object.values(errors).join('\n');
      alert(`Please fix the following errors:\n\n${errorMessages}`);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Set flag in sessionStorage for thank you page validation
        sessionStorage.setItem('formSubmitted', 'true');
        // Redirect to thank you page
        router.push('/thank-you');
      } else {
        // Handle API validation errors
        if (result.errors) {
          setErrors(result.errors);
          const errorMessages = Object.values(result.errors).join('\n');
          alert(`Please fix the following errors:\n\n${errorMessages}`);
        } else {
          alert('Failed to send message. Please try again.');
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-bg-light to-dark-bg">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6">
            GET IN{" "}
            <span className="gradient-text">TOUCH</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ready to transform your enterprise with AI? Let's talk about your goals 
            and how EasternStack can help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-text-dark mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => {
                        setFormData({...formData, firstName: e.target.value});
                        if (errors.firstName) setErrors({...errors, firstName: ''});
                      }}
                      className={`w-full px-4 py-3 bg-bg-light-card border rounded-lg text-text-dark focus:outline-none transition-colors ${
                        errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-border-color focus:border-primary-orange-light'
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => {
                        setFormData({...formData, lastName: e.target.value});
                        if (errors.lastName) setErrors({...errors, lastName: ''});
                      }}
                      className={`w-full px-4 py-3 bg-bg-light-card border rounded-lg text-text-dark focus:outline-none transition-colors ${
                        errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-border-color focus:border-primary-orange-light'
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({...formData, email: e.target.value});
                        if (errors.email) setErrors({...errors, email: ''});
                      }}
                      className={`w-full px-4 py-3 bg-bg-light-card border rounded-lg text-text-dark focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-border-color focus:border-primary-orange-light'
                      }`}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({...formData, phone: e.target.value});
                        if (errors.phone) setErrors({...errors, phone: ''});
                      }}
                      className={`w-full px-4 py-3 bg-bg-light-card border rounded-lg text-text-dark focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-border-color focus:border-primary-orange-light'
                      }`}
                      placeholder="+62 812 3456 7890"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Company *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => {
                        setFormData({...formData, company: e.target.value});
                        if (errors.company) setErrors({...errors, company: ''});
                      }}
                      className={`w-full px-4 py-3 bg-bg-light-card border rounded-lg text-text-dark focus:outline-none transition-colors ${
                        errors.company ? 'border-red-500 focus:border-red-500' : 'border-border-color focus:border-primary-orange-light'
                      }`}
                      placeholder="Your Company"
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Job Title *</label>
                    <input
                      type="text"
                      required
                      value={formData.jobTitle}
                      onChange={(e) => {
                        setFormData({...formData, jobTitle: e.target.value});
                        if (errors.jobTitle) setErrors({...errors, jobTitle: ''});
                      }}
                      className={`w-full px-4 py-3 bg-bg-light-card border rounded-lg text-text-dark focus:outline-none transition-colors ${
                        errors.jobTitle ? 'border-red-500 focus:border-red-500' : 'border-border-color focus:border-primary-orange-light'
                      }`}
                      placeholder="CTO"
                    />
                    {errors.jobTitle && <p className="text-red-500 text-xs mt-1">{errors.jobTitle}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-text-secondary text-sm mb-2">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({...formData, message: e.target.value});
                      if (errors.message) setErrors({...errors, message: ''});
                    }}
                    rows={5}
                    className={`w-full px-4 py-3 bg-bg-light-card border rounded-lg text-text-dark focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-border-color focus:border-primary-orange-light'
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full py-4 text-lg ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending...</span>
                    </span>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold text-text-dark mb-6">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="card">
                  <h3 className="text-lg font-semibold text-text-dark mb-4">Office Address</h3>
                  <p className="text-text-secondary">
                    <strong>PT. INOVASI KONVERSASI DIGITAL</strong><br />
                    Menara Caraka, 3rd Floor<br />
                    Jl. Dr. Ide Anak Agung Gde Agung<br />
                    Lot E4-7 No. 1, Kuningan Timur<br />
                    Jakarta 12950, Indonesia
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-text-dark mb-4">Contact Details</h3>
                  <div className="space-y-3 text-text-secondary">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      sales@easternstack.com
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +62 21 1234 5678
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-text-dark mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-bg-light-card border border-border-color rounded-lg flex items-center justify-center text-text-secondary hover:text-primary-orange hover:border-primary-orange-light transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-bg-light-card border border-border-color rounded-lg flex items-center justify-center text-text-secondary hover:text-primary-orange hover:border-primary-orange-light transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
