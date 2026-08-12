import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export const metadata = {
  title: 'Contact Us | Nakul Properties Faridabad',
  description: 'Book a free site visit or consultation with Nakul Properties. Contact us via Phone, WhatsApp, or visit our office in Sector 65, Faridabad.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact Nakul Properties',
    'description': 'Book a free site visit or consultation with Nakul Properties in Sector 65, Faridabad.',
    'url': 'https://nakulproperties.com/contact',
    'mainEntity': {
      '@type': 'RealEstateAgent',
      'name': 'Nakul Properties',
      'telephone': '+919811548267',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Sector 65',
        'addressLocality': 'Faridabad',
        'addressRegion': 'Haryana',
        'postalCode': '121004',
        'addressCountry': 'IN',
      },
    },
  };

  const contactDetails = [
    {
      icon: <Phone className="w-6 h-6 text-black" />,
      title: 'Call Us Directly',
      val: '+91 9811548267',
      href: 'tel:+919811548267',
      linkText: 'Tap to Call',
    },
    {
      icon: <FaWhatsapp className="w-6 h-6 text-black" />,
      title: 'WhatsApp Chat',
      val: '+91 9811548267',
      href: 'https://wa.me/919811548267',
      linkText: 'Start Chat',
    },
    {
      icon: <MapPin className="w-6 h-6 text-black" />,
      title: 'Office Location',
      val: 'Sector 65, Faridabad, Haryana - 121004',
      href: 'https://www.google.com/maps/search/?api=1&query=Sector%2065%2C%20Faridabad%2C%20Haryana%20121004',
      linkText: 'Get Directions',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Insert JSON-LD script for ContactPage Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/* Hero Title Area */}
      <section className="relative w-full overflow-hidden py-20 sm:py-24 font-outfit" style={{ paddingTop: '140px', minHeight: '340px' }}>
        <div className="absolute inset-0">
          <img
            src="/cat-gated.png"
            alt="Contact Nakul Properties"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 rounded-full inline-block">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Connect With Our Real Estate Experts
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            Whether you want to buy, sell, or rent a property, our team is ready to assist you with transparent legal consulting.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 font-outfit space-y-12">
        
        {/* Direct Contacts Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactDetails.map((detail, idx) => (
            <div key={idx} className="border border-neutral-200/80 rounded-xl p-6 flex flex-col justify-between items-start gap-4">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center border border-neutral-200/60">
                  {detail.icon}
                </div>
                <h3 className="text-base font-bold text-black">{detail.title}</h3>
                <p className="text-neutral-600 text-sm font-semibold">{detail.val}</p>
              </div>
              <a
                href={detail.href}
                className="text-xs font-bold text-black underline underline-offset-4 hover:text-neutral-600 transition-colors"
                target={detail.href.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
              >
                {detail.linkText}
              </a>
            </div>
          ))}
        </section>

        {/* Embedded Inquiry Form */}
        <section>
          <ContactForm />
        </section>

        {/* Office Hours */}
        <section className="bg-neutral-50 rounded-xl border border-neutral-200/80 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-black shrink-0" />
            <div>
              <h3 className="text-base font-bold text-black">Office Business Hours</h3>
              <p className="text-neutral-500 text-xs sm:text-sm font-light mt-0.5">Visit us or call within business hours for fast support.</p>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-sm font-bold text-black">Monday - Sunday</div>
            <div className="text-xs sm:text-sm text-neutral-600">09:00 AM - 08:00 PM</div>
          </div>
        </section>

        {/* Office Location Map */}
        <Map />

      </main>
    </div>
  );
}
