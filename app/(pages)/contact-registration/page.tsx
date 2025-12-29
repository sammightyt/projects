import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import RegistrationForm from '@/components/RegistrationForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Registration | Hill Country Cricket Association',
  description: 'Get in touch with HCCA or register for our youth and adult cricket programs.',
};

export default function ContactRegistrationPage() {
  return (
    <>
      <Hero
        title="Contact & Registration"
        subtitle="Get in touch with us or register for our cricket programs"
      />

      <section className="section-container bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              Have a question or ready to join? Fill out the appropriate form below and we'll get back to you promptly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <ContactForm />
            <RegistrationForm />
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-cricket-blue text-white rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Additional Contact Information</h3>
              <p className="text-gray-200">
                Prefer to reach out directly? Use the contact details below.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Email</h4>
                <p className="text-gray-200">info@hillcountrycricket.com</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Phone</h4>
                <p className="text-gray-200">(512) 555-0100</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Location</h4>
                <p className="text-gray-200">Hill Country, Texas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
