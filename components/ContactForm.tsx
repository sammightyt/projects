'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { validateEmail, validatePhone } from '@/lib/utils';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-cricket-blue mb-6">General Inquiry</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            className={`input-field ${errors.name ? 'border-red-500' : ''}`}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            className={`input-field ${errors.email ? 'border-red-500' : ''}`}
            {...register('email', {
              required: 'Email is required',
              validate: (value) => validateEmail(value) || 'Invalid email address',
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            id="contact-phone"
            type="tel"
            className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
            {...register('phone', {
              required: 'Phone number is required',
              validate: (value) => validatePhone(value) || 'Invalid phone number',
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="inquiry-type" className="block text-sm font-semibold text-gray-700 mb-2">
            Inquiry Type *
          </label>
          <select
            id="inquiry-type"
            className={`input-field ${errors.inquiryType ? 'border-red-500' : ''}`}
            {...register('inquiryType', { required: 'Please select an inquiry type' })}
          >
            <option value="">Select an option</option>
            <option value="general">General Information</option>
            <option value="youth">Youth Programs</option>
            <option value="adult">Adult Programs</option>
            <option value="facilities">Facilities</option>
            <option value="coaching">Coaching</option>
            <option value="other">Other</option>
          </select>
          {errors.inquiryType && (
            <p className="mt-1 text-sm text-red-600">{errors.inquiryType.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            rows={5}
            className={`input-field ${errors.message ? 'border-red-500' : ''}`}
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Thank you for your inquiry! We'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            There was an error submitting your inquiry. Please try again.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </button>
      </form>
    </div>
  );
}
