import Navbar from '@/components/Navbar';
import { Award, Compass, ShieldCheck, Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Nakul Properties Faridabad',
  description: 'Learn about Nakul Properties - Faridabad’s most trusted real estate consultancy with over 28 years of experience in sector plots, luxury builder floors, and gated societies.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const stats = [
    { value: '28+', label: 'Years Experience' },
    { value: '1,500+', label: 'Properties Managed' },
    { value: '100%', label: 'Registry Legal Title Clearance' },
    { value: '0%', label: 'Brokerage Options' },
  ];

  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-black" />,
      title: '100% Legal Verification',
      desc: 'Every single plot, flat, and commercial listing undergoes rigorous documentation checks before we list them.',
    },
    {
      icon: <Award className="w-8 h-8 text-black" />,
      title: 'Expert Guidance',
      desc: 'With over two decades of local experience, we guide you through registration, circle rates, and legal compliance.',
    },
    {
      icon: <Compass className="w-8 h-8 text-black" />,
      title: 'Circle & Sector Mastery',
      desc: 'Deep local knowledge of prime sectors (14, 15, 21, 28) and Neharpar developments gives our clients an upper hand.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden font-outfit py-24 sm:py-32" style={{ paddingTop: '140px', minHeight: '360px' }}>
        <div className="absolute inset-0">
          <img
            src="/hero-banner.png"
            alt="About Nakul Properties"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full inline-block">
            Our Journey
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Redefining Trust in Faridabad Real Estate
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Founded on the pillars of transparency, legal accuracy, and customer satisfaction. We help families find their dream homes and premium investment assets.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 font-outfit space-y-16">
        
        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
              A Legacy of Trust Built Over Decades
            </h2>
            <div className="text-neutral-600 text-sm sm:text-base leading-relaxed space-y-4 font-light">
              <p>
                Nakul Properties has been at the forefront of Faridabad's residential and commercial growth. From the early stages of established sectors like Sector 14, 15, and 21, to the modern high-rise expansion and gated society townships in Greater Faridabad (Neharpar), we have consulted and facilitated key deals with absolute legal security.
              </p>
              <p>
                Our Faridabad real estate agency history dates back over two decades of successful deals. As a top rated property broker Faridabad, we function as a trusted real estate consultant Faridabad and experienced property advisor Faridabad. If you want secure deals, we are the best property dealer in Faridabad providing professional assistance for property title clearance Faridabad.
              </p>
              <p>
                Whether you are looking for legal verified plots Faridabad or seeking an HSVP registry expert Faridabad, our team offers unmatched advisory. From our real estate consultancy Sector 65 Faridabad, we operate also as a zero brokerage builder floor dealer on selected luxury properties.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 bg-neutral-50 rounded-xl border border-neutral-200/80 p-8 grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-black">{stat.value}</div>
                <div className="text-neutral-500 text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-neutral-100" />

        {/* Values Section */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">Our Core Principles</h2>
            <p className="text-neutral-500 text-sm sm:text-base mt-2 font-light">
              What sets us apart as Faridabad's premium real estate dealer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="border border-neutral-200/80 rounded-xl p-6 space-y-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-neutral-50 rounded-lg flex items-center justify-center border border-neutral-200/60">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-black">{v.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Strip */}
        <section className="bg-black rounded-xl p-8 sm:p-12 text-center text-white space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Looking for a customized property search?</h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            Share your budget, sector preference, and size requirement, and we will find the perfect matched legal listings for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-black font-semibold text-sm px-6 py-3 rounded-lg transition-all"
            >
              <span>Contact Us Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
