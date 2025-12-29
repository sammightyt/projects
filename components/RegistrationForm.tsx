'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { validateEmail, validatePhone, calculateAge } from '@/lib/utils';

interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  dob: string;
  program: 'Youth' | 'Adult' | '';
  ageGroup?: 'U10' | 'U13' | 'U15' | '';
  league?: 'APCL Plate' | 'APCL Elite' | '';
  agreeToTerms: boolean;
}

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<string>('');
  
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<RegistrationFormData>();

  const program = watch('program');

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setSelectedProgram('');
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
      <h3 className="text-2xl font-bold text-cricket-blue mb-6">Player Registration</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="reg-name" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            id="reg-name"
            type="text"
            className={`input-field ${errors.name ? 'border-red-500' : ''}`}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="reg-email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            id="reg-email"
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
          <label htmlFor="reg-phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            id="reg-phone"
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
          <label htmlFor="reg-dob" className="block text-sm font-semibold text-gray-700 mb-2">
            Date of Birth *
          </label>
          <input
            id="reg-dob"
            type="date"
            className={`input-field ${errors.dob ? 'border-red-500' : ''}`}
            {...register('dob', { required: 'Date of birth is required' })}
          />
          {errors.dob && (
            <p className="mt-1 text-sm text-red-600">{errors.dob.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mb-2">
            Program Selection *
          </label>
          <select
            id="program"
            className={`input-field ${errors.program ? 'border-red-500' : ''}`}
            {...register('program', { required: 'Please select a program' })}
            onChange={(e) => setSelectedProgram(e.target.value)}
          >
            <option value="">Select a program</option>
            <option value="Youth">Youth Cricket</option>
            <option value="Adult">Adult Cricket</option>
          </select>
          {errors.program && (
            <p className="mt-1 text-sm text-red-600">{errors.program.message}</p>
          )}
        </div>

        {program === 'Youth' && (
          <div>
            <label htmlFor="age-group" className="block text-sm font-semibold text-gray-700 mb-2">
              Age Group *
            </label>
            <select
              id="age-group"
              className={`input-field ${errors.ageGroup ? 'border-red-500' : ''}`}
              {...register('ageGroup', { 
                required: program === 'Youth' ? 'Please select an age group' : false 
              })}
            >
              <option value="">Select age group</option>
              <option value="U10">Under 10 (U10)</option>
              <option value="U13">Under 13 (U13)</option>
              <option value="U15">Under 15 (U15)</option>
            </select>
            {errors.ageGroup && (
              <p className="mt-1 text-sm text-red-600">{errors.ageGroup.message}</p>
            )}
          </div>
        )}

        {program === 'Adult' && (
          <div>
            <label htmlFor="league" className="block text-sm font-semibold text-gray-700 mb-2">
              League Selection *
            </label>
            <select
              id="league"
              className={`input-field ${errors.league ? 'border-red-500' : ''}`}
              {...register('league', { 
                required: program === 'Adult' ? 'Please select a league' : false 
              })}
            >
              <option value="">Select league</option>
              <option value="APCL Plate">APCL Plate</option>
              <option value="APCL Elite">APCL Elite</option>
            </select>
            {errors.league && (
              <p className="mt-1 text-sm text-red-600">{errors.league.message}</p>
            )}
            <p className="mt-2 text-sm text-gray-600">
              <strong>APCL Plate:</strong> Intermediate competitive level<br />
              <strong>APCL Elite:</strong> Advanced competitive level
            </p>
          </div>
        )}

        <div className="flex items-start">
          <input
            id="agree-terms"
            type="checkbox"
            className="mt-1 mr-3 h-4 w-4 text-cricket-gold focus:ring-cricket-gold border-gray-300 rounded"
            {...register('agreeToTerms', { 
              required: 'You must agree to the terms and conditions' 
            })}
          />
          <label htmlFor="agree-terms" className="text-sm text-gray-700">
            I agree to the terms and conditions, privacy policy, and understand that my information will be used for registration purposes. *
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-sm text-red-600">{errors.agreeToTerms.message}</p>
        )}

        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Registration successful! We'll contact you with next steps.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            There was an error with your registration. Please try again.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Register Now'}
        </button>
      </form>
    </div>
  );
}
