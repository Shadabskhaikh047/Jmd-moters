import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsAppIcon";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <img
            alt="Luxury car showroom at midnight"
            className="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkoqsYHecBllobxQHXmAxUCKw9QWxNbkSyp3e3AZiAaPiW_eXEgWDjlk7Wtgcw7wyX_zOryLBF71nlOzuKl481Qfy1aG-Z5dFdtOdKxDiWGsiRcGi3ORJnSC2MwtkxzsFmSYZv3-t9LfzOZzrf8_OLiLt_c9BhQ0Lyn5vB8PIdsmj-TzM4oTCjRsofBviLx4hoNlScxwSuPryD3FbjnYxwz1kyENZ8Y5CtMvLf431H-88OIIb0WH6ugJdQQdadHVQp4NLaWqLm6eo"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <h1 className="font-['Space_Grotesk'] text-[72px] leading-[1.1] tracking-[-0.02em] font-bold text-white mb-6">Find Your Perfect Drive</h1>
          <p className="font-[Inter] text-lg leading-relaxed text-white/80 mb-10 max-w-2xl mx-auto">
            500+ Verified Pre-Owned Cars. Zero Waiting. Full Transparency. Buy Your Dream Car Without Any Waiting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              className="btn-primary text-xs font-semibold uppercase px-8 py-4 rounded-sm flex items-center gap-2 w-full sm:w-auto justify-center"
              href="/buy"
            >
              Browse Cars
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link
              className="btn-secondary text-xs font-semibold uppercase px-8 py-4 rounded-sm w-full sm:w-auto justify-center text-center"
              href="/sell"
            >
              Sell Your Car
            </Link>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <section className="relative z-20 -mt-16 px-6 max-w-[1440px] mx-auto w-full">
        <div className="card-bg rounded-lg p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-white/50 uppercase">Brand</label>
              <select className="input-dark py-2 text-white bg-[#111111] appearance-none w-full cursor-pointer">
                <option>All Brands</option>
                <option>Mercedes-Benz</option>
                <option>BMW</option>
                <option>Audi</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-white/50 uppercase">Budget</label>
              <select className="input-dark py-2 text-white bg-[#111111] appearance-none w-full cursor-pointer">
                <option>Any Budget</option>
                <option>Under $50k</option>
                <option>$50k - $100k</option>
                <option>Over $100k</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-white/50 uppercase">Fuel</label>
              <select className="input-dark py-2 text-white bg-[#111111] appearance-none w-full cursor-pointer">
                <option>All Fuel Types</option>
                <option>Petrol</option>
                <option>Diesel</option>
                <option>Electric</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-white/50 uppercase">Transmission</label>
              <select className="input-dark py-2 text-white bg-[#111111] appearance-none w-full cursor-pointer">
                <option>Any</option>
                <option>Automatic</option>
                <option>Manual</option>
              </select>
            </div>
            <button className="btn-primary text-xs font-semibold uppercase px-6 py-3 h-[42px] rounded-sm w-full flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-lg">search</span>
              Search Cars
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-[1440px] mx-auto w-full">
        <h2 className="font-['Space_Grotesk'] text-[32px] leading-[1.2] font-semibold text-white mb-12 text-center">Why Choose JMD Motors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "verified", title: "100% Verified", desc: "Every vehicle undergoes a rigorous 150-point inspection before hitting our showroom." },
            { icon: "description", title: "Clear RC & Papers", desc: "Hassle-free documentation. We ensure all paperwork is pristine and legally sound." },
            { icon: "account_balance", title: "Easy EMI", desc: "Partnered with top banks to provide seamless financing options with rapid approval." },
            { icon: "restart_alt", title: "7-Day Return", desc: "Drive with confidence. If you're not satisfied, return it within 7 days, no questions asked." },
          ].map((f) => (
            <div key={f.title} className="card-bg p-8 rounded-lg flex flex-col items-center text-center glow-hover transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#222222] flex items-center justify-center mb-6 text-[#e8001d]">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{f.icon}</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl leading-[1.3] font-semibold text-white mb-3">{f.title}</h3>
              <p className="text-white/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20 px-6 max-w-[1440px] mx-auto w-full bg-[#050505]" id="featured">
        <div className="flex justify-between items-end mb-12 border-b border-[#222222] pb-6">
          <div>
            <h2 className="font-['Space_Grotesk'] text-[32px] leading-[1.2] font-semibold text-white mb-2">Hot Deals This Week</h2>
            <p className="text-white/60">Curated selection of pristine luxury vehicles available now.</p>
          </div>
          <Link className="hidden md:flex items-center gap-2 text-white/70 hover:text-white text-xs font-semibold uppercase transition-colors group" href="/buy">
            View Inventory
            <span className="material-symbols-outlined text-base transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Car Card 1 */}
          <div className="card-bg rounded-lg overflow-hidden group glow-hover transition-all duration-300 flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <img alt="2021 BMW 5 Series" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXOIuXSmURdxYxacX6RFQaeaEjQvuldHeA48bKRlX3rp4okuM125Ks5OX_GEoU2CAVOLaMz5yUwW5XozeyjsBQU4BeTon0Erdz_Bn-HIjU7x9NhW1OyBNUUDSUdpc-fVPLOzU-LhTnMgFKfoG0RoCrxpWonq8NSM0_rfBAVyfrzXEO1JXZc5sxRakd1244otBhHSWciCgVIAbrqizw2bS2VVUp2N53WcddSTBilkTuDM02zmcelIhkH0vjXlFYIX3Zra6JXeDyFHM" />
              <div className="absolute top-4 left-4 bg-[#e8001d] text-white text-xs font-semibold uppercase px-3 py-1 rounded-sm">Featured</div>
            </div>
            <div className="p-6 flex-grow">
              <h3 className="font-['Space_Grotesk'] text-2xl leading-[1.3] font-semibold text-white mb-2">2021 BMW M5 Competition</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="border border-[#222222] text-white/70 text-xs font-semibold px-2 py-1 rounded-sm">Petrol</span>
                <span className="border border-[#222222] text-white/70 text-xs font-semibold px-2 py-1 rounded-sm">Automatic</span>
                <span className="border border-[#222222] text-white/70 text-xs font-semibold px-2 py-1 rounded-sm">12,500 km</span>
              </div>
            </div>
            <div className="card-footer p-6 border-t border-[#222222] flex justify-between items-center">
              <div>
                <p className="text-xs font-semibold text-white/50 uppercase mb-1">Price</p>
                <p className="font-['Space_Grotesk'] text-2xl leading-[1.3] font-semibold text-[#e8001d]">$85,000</p>
              </div>
              <button className="bg-[#25D366] text-white text-xs font-semibold uppercase px-4 py-2 rounded-sm flex items-center gap-2 hover:bg-[#20b858] transition-colors">
                <WhatsAppIcon /> WhatsApp
              </button>
            </div>
          </div>

          {/* Car Card 2 (SOLD) */}
          <div className="card-bg rounded-lg overflow-hidden group flex flex-col relative opacity-70">
            <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
              <span className="bg-[#111111] text-white font-['Space_Grotesk'] text-2xl font-semibold px-6 py-2 border-2 border-white/20 rotate-[-15deg]">SOLD</span>
            </div>
            <div className="relative h-64 overflow-hidden">
              <img alt="2020 Porsche 911" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOOeMhcfsia3pC06rWirKFxxK3jaRo_wWXhuHfpP0Fs6nZGyq30ZcB2KWlt8aLbP3mSsAvsGu2y8RKtk0uDpJ9SNCD6sXjclr7vLi0nx6s2U3WdyaIqyTxBmQ9WlQH1SKpuDWbC3yb4foDN6lGxMOu3JkX3jnZbjWjYy1kH03L4n5fE18qeXmkt4XAIDo7NuItJJsalTnisyFxUU-aVrPENVb3Ol7jLKbEs4Le8gNP2gQYRe0HoA8n_-FQ1-mMEgvdO70NZ6RyWtE" />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="font-['Space_Grotesk'] text-2xl leading-[1.3] font-semibold text-white mb-2">2020 Porsche 911 Carrera S</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="border border-[#222222] text-white/70 text-xs font-semibold px-2 py-1 rounded-sm">Petrol</span>
                <span className="border border-[#222222] text-white/70 text-xs font-semibold px-2 py-1 rounded-sm">Automatic</span>
                <span className="border border-[#222222] text-white/70 text-xs font-semibold px-2 py-1 rounded-sm">8,200 km</span>
              </div>
            </div>
            <div className="card-footer p-6 border-t border-[#222222] flex justify-between items-center">
              <div>
                <p className="text-xs font-semibold text-white/50 uppercase mb-1">Price</p>
                <p className="font-['Space_Grotesk'] text-2xl leading-[1.3] font-semibold text-white/50 line-through">$115,000</p>
              </div>
            </div>
          </div>

          {/* Car Card 3 */}
          <div className="card-bg rounded-lg overflow-hidden group glow-hover transition-all duration-300 flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <img alt="2022 Audi RS7" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCwGeyYyHj62y6_GcSOM4C-zJ_Bq0lEmE2QcbfjSxFd5xIiDJSTr7aAR3MMIqOhhULXnzqABVGePcK9pu4ltGSC2Vzb-5re2pZVZ6hd1TjRT8FNfJOcjOFnuzBZnwFpkZhv2z_O1PS9fFLmkNHLWe_5XXTEx93YFlATePBZ43BdGm-QGCcp-BFciPVo4sYOdxxnH2Nunfivt9yKWLF7lsMeOFz5I9ss0NUo6xa_HCLEonxFF5hYF8I1iapeSMc9ZdSFAP4MMJ_CKo" />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="font-['Space_Grotesk'] text-2xl leading-[1.3] font-semibold text-white mb-2">2022 Audi RS7 Sportback</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="border border-[#222222] text-white/70 text-xs font-semibold px-2 py-1 rounded-sm">Petrol</span>
                <span className="border border-[#222222] text-white/70 text-xs font-semibold px-2 py-1 rounded-sm">Automatic</span>
                <span className="border border-[#222222] text-white/70 text-xs font-semibold px-2 py-1 rounded-sm">5,000 km</span>
              </div>
            </div>
            <div className="card-footer p-6 border-t border-[#222222] flex justify-between items-center">
              <div>
                <p className="text-xs font-semibold text-white/50 uppercase mb-1">Price</p>
                <p className="font-['Space_Grotesk'] text-2xl leading-[1.3] font-semibold text-[#e8001d]">$125,000</p>
              </div>
              <button className="bg-[#25D366] text-white text-xs font-semibold uppercase px-4 py-2 rounded-sm flex items-center gap-2 hover:bg-[#20b858] transition-colors">
                <WhatsAppIcon /> WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sell Your Car CTA */}
      <section className="py-20 px-6 max-w-[1440px] mx-auto w-full" id="sell">
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-[#E8001D] to-[#800010] p-12 flex flex-col md:flex-row items-center justify-between shadow-[0_0_40px_rgba(232,0,29,0.2)]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-2xl text-center md:text-left mb-8 md:mb-0">
            <h2 className="font-['Space_Grotesk'] text-[48px] leading-[1.2] tracking-[-0.01em] font-bold text-white mb-4">Ready to Upgrade? Sell Us Your Car.</h2>
            <p className="text-lg text-white/90">Get a competitive valuation in 30 minutes. Instant payment. Zero hassle.</p>
          </div>
          <div className="relative z-10">
            <Link href="/sell" className="bg-black text-white text-xs font-semibold uppercase px-8 py-4 rounded-sm flex items-center gap-2 hover:bg-[#111111] transition-colors border border-white/20 hover:border-white/50">
              Get Free Valuation
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section className="py-20 px-6 max-w-[1440px] mx-auto w-full border-t border-[#111111]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="card-bg p-8 rounded-lg">
            <h2 className="font-['Space_Grotesk'] text-[32px] leading-[1.2] font-semibold text-white mb-2">Request a Call Back</h2>
            <p className="text-white/60 mb-8">Leave your details and our showroom manager will contact you shortly.</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-white/50 uppercase mb-2">First Name</label>
                  <input className="input-dark py-2" placeholder="Enter your first name" type="text" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-white/50 uppercase mb-2">Last Name</label>
                  <input className="input-dark py-2" placeholder="Enter your last name" type="text" />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-white/50 uppercase mb-2">Phone Number</label>
                <input className="input-dark py-2" placeholder="+1 (555) 000-0000" type="tel" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-white/50 uppercase mb-2">Vehicle of Interest</label>
                <input className="input-dark py-2" placeholder="e.g., BMW M5" type="text" />
              </div>
              <button className="btn-primary text-xs font-semibold uppercase px-8 py-4 w-full rounded-sm mt-4" type="button">
                Submit Request
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-['Space_Grotesk'] text-[32px] leading-[1.2] font-semibold text-white mb-6">Showroom Location</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#e8001d] mt-1">location_on</span>
                  <div>
                    <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-white">JMD Motors Flagship</h4>
                    <p className="text-white/60">100 Luxury Avenue, Auto District<br />Metropolis, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#e8001d] mt-1">schedule</span>
                  <div>
                    <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-white">Opening Hours</h4>
                    <p className="text-white/60">Mon - Sat: 10:00 AM - 8:00 PM<br />Sun: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-grow w-full h-64 md:h-auto rounded-lg overflow-hidden border border-[#222222] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img alt="Map showing showroom location" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTo4oYhHfmgwJ8-fLcuSH_heioVy-mx2ceJrW5mT5RTHdA4nJukwY25xdiLTGuymHNb2fFuaCvdD5X9IQwdTsToxN_QZeeHqZ_vhwFXjYnDlmc-2RE2SKqvI9_CBZ7oEkdB_Q0Q8jifBSJUiCee0M1VUZa3PKMhhxNUB-1tr1RzxqvE5izsviaIuL2d8bAoNhb70rUkrk7KsKamBvi-MZjxJBXUpW-Zbjd-b1bn6J9qY9bwucdOQVYnA1DjlGpKG_5n7FC9znSwqU" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
