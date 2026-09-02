import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "JMD Motors - Sell Your Car" };

export default function SellPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section with Form */}
        <section className="relative min-h-[921px] flex items-center pt-20 pb-20 border-b border-[#222222]">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYIWKRklE8D3YfxoNhUDf3u1vYyobyI8pZlEyRLWyKPDEn80NH-U5szwF8lmz2ePZs0kkqBpTGoJqn-EjFK6lWdMzTnZ_OX6nrLdZTmLIbLLvgOoZ6dTsH10_A1RbGWbpoa3BjGns-yngWJSl6gmCvhOLRL90tfQLUsJ3LoAOiZ_zrC2Ro4Mx7BSwXTnZG3EaCVlfvWLJ4RT4l9C0LiaZpdR5qY1WbG97laWd4jViewBJsG-FvnC-w81MckaOXqe4Z7ZeXRvbNOcY" alt="Luxury showroom" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#200e0d] via-[#200e0d]/90 to-transparent"></div>
          </div>
          <div className="max-w-[1440px] mx-auto w-full px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6 space-y-3">
              <h1 className="font-['Space_Grotesk'] text-[72px] leading-[1.1] tracking-[-0.02em] font-bold text-white">Get the Best Price for Your Car</h1>
              <p className="text-lg leading-relaxed text-[#c8c6c5] max-w-lg">
                Experience a white-glove valuation process. We offer premium rates for well-maintained luxury and performance vehicles. Zero hassle, instant payment.
              </p>
              <div className="flex flex-wrap gap-6 pt-6">
                {[
                  { icon: "check_circle", text: "₹0 Charges" },
                  { icon: "bolt", text: "Same Day Payment" },
                  { icon: "assignment_turned_in", text: "Free RC Transfer" },
                ].map((t) => (
                  <div key={t.text} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e8001d]" style={{ fontVariationSettings: "'FILL' 1" }}>{t.icon}</span>
                    <span className="text-xs font-semibold text-[#ffdad6] uppercase tracking-widest">{t.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="bg-[#111111]/80 backdrop-blur-xl border border-[#222222] p-12 rounded-sm hover:border-[#333333] transition-colors duration-500 relative overflow-hidden group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#e8001d]/0 to-[#e8001d]/0 group-hover:from-[#e8001d]/5 group-hover:to-transparent opacity-50 blur-xl transition-all duration-700"></div>
                <h2 className="font-['Space_Grotesk'] text-2xl font-semibold text-white mb-6 relative z-10">Instant Valuation</h2>
                <form className="space-y-6 relative z-10">
                  <div className="grid grid-cols-2 gap-3">
                    <input className="w-full bg-transparent border-0 border-b border-[#222222] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-white py-3 px-1 placeholder-[#c8c6c5] transition-colors" placeholder="Brand (e.g. BMW)" type="text" />
                    <input className="w-full bg-transparent border-0 border-b border-[#222222] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-white py-3 px-1 placeholder-[#c8c6c5] transition-colors" placeholder="Model" type="text" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input className="w-full bg-transparent border-0 border-b border-[#222222] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-white py-3 px-1 placeholder-[#c8c6c5] transition-colors" placeholder="Year" type="number" />
                    <input className="w-full bg-transparent border-0 border-b border-[#222222] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-white py-3 px-1 placeholder-[#c8c6c5] transition-colors" placeholder="Kilometers" type="number" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <select className="w-full bg-transparent border-0 border-b border-[#222222] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#c8c6c5] py-3 px-1 transition-colors appearance-none">
                      <option disabled selected value="">Fuel Type</option>
                      <option className="bg-[#111111]" value="petrol">Petrol</option>
                      <option className="bg-[#111111]" value="diesel">Diesel</option>
                      <option className="bg-[#111111]" value="electric">Electric</option>
                    </select>
                    <select className="w-full bg-transparent border-0 border-b border-[#222222] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#c8c6c5] py-3 px-1 transition-colors appearance-none">
                      <option disabled selected value="">Condition</option>
                      <option className="bg-[#111111]" value="excellent">Excellent</option>
                      <option className="bg-[#111111]" value="good">Good</option>
                      <option className="bg-[#111111]" value="fair">Fair</option>
                    </select>
                  </div>
                  <div className="space-y-3 pt-1">
                    <input className="w-full bg-transparent border-0 border-b border-[#222222] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-white py-3 px-1 placeholder-[#c8c6c5] transition-colors" placeholder="Full Name" type="text" />
                    <input className="w-full bg-transparent border-0 border-b border-[#222222] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-white py-3 px-1 placeholder-[#c8c6c5] transition-colors" placeholder="Phone Number" type="tel" />
                  </div>
                  <button className="w-full mt-6 bg-[#e8001d] text-white text-xs font-semibold uppercase tracking-widest py-4 rounded-sm hover:bg-[#c00016] transition-all duration-300 flex justify-center items-center gap-2 group" type="button">
                    Get Free Quote
                    <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-20 max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-['Space_Grotesk'] text-[32px] leading-[1.2] font-semibold text-white mb-3">Seamless Process. Absolute Discretion.</h2>
            <p className="text-[#c8c6c5] max-w-2xl mx-auto">Selling your premium vehicle should be as effortless as driving it. Our three-step process guarantees maximum value with zero friction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", icon: "edit_document", title: "Fill Form", desc: "Provide accurate details about your vehicle's make, model, and condition to receive an immediate preliminary quote.", yOffset: "" },
              { num: "02", icon: "car_repair", title: "Free Inspection", desc: "Our certified technicians will conduct a thorough 150-point inspection at your preferred location, ensuring a fair and transparent assessment.", yOffset: "md:translate-y-6" },
              { num: "03", icon: "payments", title: "Get Paid", desc: "Upon agreement, receive instant payment securely transferred to your account. We handle all RC transfer paperwork complimentary.", yOffset: "md:translate-y-12" },
            ].map((step) => (
              <div key={step.num} className={`bg-[#111111] border border-[#222222] p-12 rounded-sm hover:border-[#e8001d]/50 transition-colors duration-300 relative group ${step.yOffset}`}>
                <div className="absolute top-0 right-0 p-6 opacity-10 font-['Space_Grotesk'] text-[72px] font-bold text-white group-hover:text-[#e8001d] transition-colors">{step.num}</div>
                <span className="material-symbols-outlined text-[#e8001d] text-4xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>{step.icon}</span>
                <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-white mb-1 relative z-10">{step.title}</h3>
                <p className="text-[#c8c6c5] relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
