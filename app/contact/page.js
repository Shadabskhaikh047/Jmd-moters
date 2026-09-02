import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Contact JMD Motors" };

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full min-h-screen">
        <div className="mb-16">
          <h1 className="font-['Space_Grotesk'] text-[48px] leading-[1.2] tracking-[-0.01em] font-bold text-[#ffdad6] mb-4">Get in Touch</h1>
          <p className="text-lg leading-relaxed text-[#e9bcb7] max-w-2xl">Experience white-glove service. Whether you are looking to acquire a masterpiece or consign one, our team is ready to assist you.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Contact Form */}
          <div className="bg-[#2e1a18] rounded-lg p-8 md:p-12 border border-[#5e3f3b]/30">
            <form className="space-y-8">
              <div>
                <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider" htmlFor="name">Full Name</label>
                <input className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#ffdad6] py-3 px-4 transition-colors" id="name" placeholder="John Doe" type="text" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider" htmlFor="phone">Phone Number</label>
                  <input className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#ffdad6] py-3 px-4 transition-colors" id="phone" placeholder="+91 98765 43210" type="tel" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider" htmlFor="email">Email Address</label>
                  <input className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#ffdad6] py-3 px-4 transition-colors" id="email" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider" htmlFor="message">Message</label>
                <textarea className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#ffdad6] py-3 px-4 transition-colors resize-none" id="message" placeholder="How can we assist you?" rows="4"></textarea>
              </div>
              <button className="w-full bg-[#e8001d] text-white text-xs font-semibold py-4 rounded-sm hover:bg-[#c00016] transition-colors uppercase tracking-wider flex items-center justify-center gap-2" type="button">
                <span>Send Message</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col space-y-12">
            <div className="h-64 md:h-80 w-full rounded-lg overflow-hidden border border-[#5e3f3b]/30 relative bg-[#200e0d]">
              <img alt="Map location" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDd48M5ikez05j-jjgWxs5okfz61nj8VxdWjaIIuvF1cRUj1OAfUKS76XUYzSsKPxXgkDGN_Eob17cMRVppZTkmSCvl3CGRL3dAZUlDhYWNP7_lxoMXmKy6_IGbpRbIkWue64rvkayrdWKK3DyDby1Udfy4SqdxOayE816WZAGniIZx8-dA25KlJo5etYBVR-2-iT6AErj0pg9h0GpDJ0Qlwvm2CWMJp5C4ik0-PDkwzqxlp_vFTF4FNa3jAafKgT7WXsnbnrqZE4" />
              <div className="absolute inset-0 border border-[#222222] pointer-events-none rounded-lg"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-[#ffdad6] mb-2">Showroom</h3>
                  <p className="text-[#e9bcb7] flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#e8001d] mt-1 text-xl">location_on</span>
                    123 Luxury Drive,<br />Gomti Nagar, Lucknow,<br />Uttar Pradesh 226010
                  </p>
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-[#ffdad6] mb-2">Direct Lines</h3>
                  <p className="text-[#e9bcb7] flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-[#e8001d] text-xl">phone</span>+91 98765 43210
                  </p>
                  <p className="text-[#e9bcb7] flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-[#e8001d] text-xl">chat</span>WhatsApp Available
                  </p>
                  <p className="text-[#e9bcb7] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e8001d] text-xl">mail</span>sales@jmdmotors.com
                  </p>
                </div>
              </div>
              <div className="bg-[#2a1614] p-6 rounded-lg border border-[#5e3f3b]/20">
                <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-[#ffdad6] mb-4">Working Hours</h3>
                <table className="w-full text-left text-[#e9bcb7]">
                  <tbody>
                    <tr className="border-b border-[#5e3f3b]/20"><td className="py-2">Monday - Friday</td><td className="py-2 text-right">10:00 - 20:00</td></tr>
                    <tr className="border-b border-[#5e3f3b]/20"><td className="py-2">Saturday</td><td className="py-2 text-right">10:00 - 18:00</td></tr>
                    <tr><td className="py-2">Sunday</td><td className="py-2 text-right">By Appointment</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
