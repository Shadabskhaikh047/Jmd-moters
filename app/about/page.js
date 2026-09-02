import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "About Us | JMD Motors" };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero */}
        <section className="relative h-[716px] flex items-center justify-center overflow-hidden border-b border-[#222222]">
          <div className="absolute inset-0 z-0">
            <img alt="Hero Image" className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4RA75afut_TOvDbD2n7hcLfsgSwaSI6oGH11k4RmYSSZHA6zRNqzsL1whZdHynOSezoguLGZRLFNBc2T3Nh66fmL-h28gY7VZ8o1_JQzhJ5DiZf2ytgtq3gaP4QP5U-pzySEzV8x9b42KfBC8YaBsK1j5cNva04jGJfY0Zlna1yf0ikx2lseyD0_l9xFSB913UV4PZKF8BpQRgib3pPntOc6bf_kBSyjHGlRazMD-G0Ze7HOWV8ai-YUlN9GLLMHno15gqewKOWU" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#200e0d] via-[#200e0d]/80 to-transparent"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-12 mt-12">
            <h1 className="font-['Space_Grotesk'] text-[72px] leading-[1.1] tracking-[-0.02em] font-bold text-white">Engineering Exclusivity</h1>
            <p className="text-lg leading-relaxed text-[#c8c6c5] max-w-2xl mx-auto">
              We don&apos;t just sell cars; we curate high-octane experiences. Precision, transparency, and a relentless pursuit of perfection define our digital showroom.
            </p>
          </div>
        </section>

        {/* Story & Mission */}
        <section className="py-20 px-6 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-[#1a0908] border border-[#222222] p-12 rounded-sm flex flex-col justify-center relative overflow-hidden group hover:border-[#444] transition-colors duration-500">
              <span className="material-symbols-outlined text-[120px] text-[#2e1a18] absolute -top-4 -left-4 opacity-50 z-0 select-none">format_quote</span>
              <div className="relative z-10">
                <h2 className="font-['Space_Grotesk'] text-[32px] leading-[1.2] font-semibold text-white mb-6 leading-tight">&quot;The true luxury of a performance vehicle is not just in its speed, but in the absolute certainty of its pedigree.&quot;</h2>
                <div className="flex items-center gap-3 mt-12">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#222222]">
                    <img alt="Founder Portrait" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9nFtOalLtRnOmyIE4sayTtL1gMVtJFOcTLXnX3nNIA3TCldIKzViTpsLnhEQOtvyKaBvvwqDW9-XU58r8L2xCMujalxdqmCzsdSWc2RxsL0zCU7iZS8yjaUTRG1bFQqcgg0BmVjW2kHd6NWtCX-cS9yhOiY9ea4lstm3J7juP2F0Ei3y2DV8elY6OxR9bgUzOpYcj1v9DhSlss5GiV1lA3eaf9KXn5JM51pZ52JAimi_BuOdL8YoUw6Qv3iQyh_9GQ95xRonb-S4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white uppercase tracking-widest">Jameson M. Davies</p>
                    <p className="text-sm text-[#c8c6c5]">Founder &amp; CEO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 bg-[#200e0d] border border-[#222222] p-12 rounded-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#e8001d] rounded-sm flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white">bolt</span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-white mb-3">Our Mission</h3>
                <p className="text-[#c8c6c5]">
                  To redefine automotive acquisition by offering a meticulously curated selection of the world&apos;s most elite vehicles, delivered through a flawless, white-glove digital and physical experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 border-y border-[#222222] bg-[#1a0908]">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#222222]">
              <div className="py-12 md:py-0 md:px-12 text-center flex flex-col items-center justify-center">
                <span className="font-['Space_Grotesk'] text-[80px] font-bold text-white leading-none tracking-tighter mb-1">2.5k<span className="text-[#e8001d]">+</span></span>
                <span className="text-xs font-semibold text-[#c8c6c5] uppercase tracking-widest">Vehicles Delivered</span>
              </div>
              <div className="py-12 md:py-0 md:px-12 text-center flex flex-col items-center justify-center">
                <span className="font-['Space_Grotesk'] text-[80px] font-bold text-white leading-none tracking-tighter mb-1">10<span className="text-[#e8001d]">+</span></span>
                <span className="text-xs font-semibold text-[#c8c6c5] uppercase tracking-widest">Years of Excellence</span>
              </div>
              <div className="py-12 md:py-0 md:px-12 text-center flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-['Space_Grotesk'] text-[80px] font-bold text-white leading-none tracking-tighter">4.8</span>
                  <span className="material-symbols-outlined text-[#e8001d] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <span className="text-xs font-semibold text-[#c8c6c5] uppercase tracking-widest">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-6 max-w-[1440px] mx-auto">
          <div className="mb-12">
            <h2 className="font-['Space_Grotesk'] text-[48px] leading-[1.2] font-bold text-white mb-3">The Curators</h2>
            <p className="text-lg text-[#c8c6c5] max-w-3xl">Expertise is our baseline. Our specialists are dedicated to ensuring every transaction is as flawless as the vehicles we represent.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Elena Rostova", title: "Head of Acquisitions", desc: "Specializing in rare European imports, Elena ensures that only the most pristine examples enter our inventory, utilizing a rigorous 300-point inspection protocol.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC1HeU8ItHH08tVwqegMEEbhcQNte8TvbqgWOtQK9SfURGqnXnhqXqmdzP3K6_nhakEqZI9ShJVfBPq-ALHRtvYLA0oh-RFlpl68imZppSTqwlRd-OUMMgwO5aK9MKz4g6-y4XkUnGNuYGTriYltXDtHY35I8UAfnkwEPoCpAknDsWqryBxGBmecU7y9ewzK4e24q8viutZZ3EZhy2pvYxBBuwUQ2ukirhw55zJGgFlOcuZe6H1J932OTSpPVsiZmmM9w88CGPCts" },
              { name: "Marcus Vance", title: "Performance Director", desc: "With a background in track dynamics, Marcus oversees the mechanical integrity of every high-output vehicle, guaranteeing peak performance upon delivery.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBITIWdGGl7-BTYe39992t9dAR7B-KMXmUEFHwwIIYii-ly0XG5fp1QkhZ6y0Ojk2z2be_Ffp5NR3SoWwI9YIQEyVUxIm341H54fdTNxPS-nq-UwwyvDBFiPRMESEbyBAyGML2pSrKueW72_8YjlpaDWWAmyDzNp9CYAJZvk0yCy75OHNlZFV0g57Ph0QahLfOu3dN4ZDn1hhl79o2MQodM8XE730fM_kN0DZG0OHvReqx8Yh0ezeUjpW9WXkdDT1HWsC3KEs7xF38" },
              { name: "Sarah Lin", title: "Client Experience Lead", desc: "Sarah orchestrates the entire acquisition journey, from initial inquiry to the final handover, ensuring a seamless, high-touch experience tailored to each individual client.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASR5e3HO-fGykCzZQU7rNOItX_Uk1qepRBfvXJ1PjWJYVl6CR9M8p1UvlA2Fmga01qBcKdwambkYXZMbHuaL5OW3xRlVTnnUwY0q8IdVoa80yZdxiGsmkwtJDWdbnmjoIvVDgXSJBtIAPAV0Pntx7_GiRLW2a4fWsvRxr_u1b_PIszbDTqs6EOB8qLjOiRBLErRv6NQh99igdzcvbTfTG583H29vKC-a6o6qzd46164Eg_Lxia3oZxYiJoNK4bxP9cj2m34mypOOQ" },
            ].map((person) => (
              <div key={person.name} className="group border border-[#222222] bg-[#200e0d] rounded-sm overflow-hidden hover:border-[#e8001d] transition-colors duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" src={person.img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#200e0d] to-transparent opacity-80"></div>
                </div>
                <div className="p-6 relative z-10 -mt-12">
                  <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-white mb-1">{person.name}</h3>
                  <p className="text-xs font-semibold text-[#e8001d] uppercase tracking-widest mb-6">{person.title}</p>
                  <p className="text-sm text-[#c8c6c5] line-clamp-3">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
