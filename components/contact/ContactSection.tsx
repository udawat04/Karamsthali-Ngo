'use client';

import React, { useState } from 'react';
import { Mail, Phone, MoveUpRight } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = 'First name is required.';

    if (!formData.lastName.trim())
      newErrors.lastName = 'Last name is required.';

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!validate()) return;

    // ✅ VALID — wire up your mail logic here later
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  const inputClass = (error?: string) =>
    `w-full bg-[#f8f9fb] border rounded-2xl px-6 py-4 text-brand-dark placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 transition-all outline-none ${
      error ? 'border-red-400 bg-red-50' : 'border-transparent'
    }`;

  return (
    <section className="py-20 lg:py-12 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1320px]">
        <div className="bg-white rounded-[2rem]  p-4 md:p-8 lg:p-12 border border-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── LEFT: Image ── */}
            <div className="relative rounded-[1.5rem] overflow-hidden group h-[500px] md:h-[600px] lg:h-[700px] xl:h-full animate-in fade-in slide-in-from-left-8 duration-1000">
              <img
                src="https://html.awaikenthemes.com/aasha/images/contact-us-image.jpg"
                alt="Community Action"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/0 transition-colors duration-500" />
            </div>

            {/* ── RIGHT: Form ── */}
            <div className="flex flex-col animate-in fade-in slide-in-from-right-8 duration-1000">

              {/* Badge & Header */}
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-100 bg-white shadow-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-brand-dark/70 text-[13px] font-bold uppercase tracking-widest font-stack-sans">
                    Get In Touch
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-6 leading-tight">
                  Contact Us Today
                </h2>
                <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                  We'd love to hear from you! Whether you want to volunteer,
                  support our programs, or learn more about our initiatives.
                </p>
              </div>

              {/* Form */}
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-dark/80 uppercase tracking-wider ml-1">
                      First Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter First Name"
                      className={inputClass(errors.firstName)}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs ml-1">{errors.firstName}</p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-dark/80 uppercase tracking-wider ml-1">
                      Last Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter Last Name"
                      className={inputClass(errors.lastName)}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs ml-1">{errors.lastName}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-dark/80 uppercase tracking-wider ml-1">
                      Phone Number <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone Number"
                      className={inputClass(errors.phone)}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs ml-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-dark/80 uppercase tracking-wider ml-1">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email Address"
                      className={inputClass(errors.email)}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs ml-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Message (optional) */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark/80 uppercase tracking-wider ml-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any Message..."
                    className="w-full bg-[#f8f9fb] border border-transparent rounded-2xl px-6 py-5 text-brand-dark placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full md:w-auto bg-primary text-brand-dark font-bold px-10 py-4 rounded-2xl shadow-btn-yellow hover:bg-white transition-all flex items-center justify-center gap-2 group"
                >
                  Submit Message
                  <MoveUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}