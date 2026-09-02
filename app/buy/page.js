import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = { title: "Buy a Car - JMD Motors" };

const cars = [
  { name: "Porsche 911 GT3 RS", price: "$245,000", year: 2023, km: "1,200 km", trans: "Automatic", fuel: "Petrol", specs: ["V8 Biturbo", "AWD"], badge: "New Arrival", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoQOYvdDPz6DyJmQFrRBNo_B5vcQtcKQCEUWFeJJqugNBy9gz8csh04m051pmhDVCdOckTz7pR4O-hq2sBaXkA7wgCuOV1uh77T_yxPXAvyFtLCgPqE2s49H2PRhKHi28nsDZiF9UtYbwslTWsxywn6cbR5DP63KXL8U6sH3mZcYvfUBkUoC5PBUWd350UlnWfZkOtaApv_z3STsrA0WBe-jTyLObZJktW2r9SDs0RCEYUPS31e93pZpc9XPZrqweOaPkayVdgCGo" },
  { name: "Audi RS7 Sportback", price: "$135,000", year: 2022, km: "15,400 km", trans: "Automatic", fuel: "Petrol", specs: ["4.0L V8", "Quattro"], img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqDt0IFS_wvxk9anuy4PwRj3RipLQ6RPacpHQlKvqdsPCpmPnz9x3OyU8GrMV5olYirGM2OKNfWAA7_S_-QrX4BAif7l2p7eD-1_tZ5JEtFAon__nro0_kfgy9IAKOUP-DS6pdQGDuODme9pjUlH4iEVXVDrCVuYDqwX3DedZZlVWJ5wHxw29DOlLrDoX5EEKoAYjI91Auam7ZKy0cNoemxB3EioqdtCBu0RxPoXhhoSPx7LjL2mVQ2ATxw1eNWCGHcFOYpvweU9E" },
  { name: "BMW M4 Competition", price: "$89,900", year: 2021, km: "28,000 km", trans: "Automatic", fuel: "Petrol", specs: ["3.0L I6", "RWD"], img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYr_xD2w1KdSQoifwblwFnSLRVcpAz-sAzFnf83lryjPuEoBg_zR2Np-_vPnvRpLt_Su-wL1FnZha5Z0wjzEajpJoYvj_QV9gE5td1lYCcvrw-kacQwUZkvgCk8wrGeh_BmUZkxLUC-EMeawLL7lYLX18Iw8P5nu1VL4J4PCJBpD4p44Izv4nc-O8gkU7YW5ujYW_7J3FOYbaOvgRvs8jUZfDZPiMCZrgtF44kGBlzhLMlMwdcWOTXn56D6bfmhIrVHBPyB0ciELs" },
  { name: "Ferrari F8 Tributo", price: "$320,000", year: 2020, km: "8,500 km", trans: "Automatic", fuel: "Petrol", specs: ["3.9L V8", "RWD"], badge: "Reserved", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVT_XtaQ3KTlMUyOiyyl0GJLbmhh6FfmWp_zeV1dziQFvvHTZxmlvFUE3yk-Uyr1P_EvFM7kaDPm2mTMuOmLKNz7C92CYQrIZszekTwNf4hu1tKmMHqdWUKrUv0pvnhJvdqYsjBOrcLEnWu_Vt5GLWawPmLRwjqV1gnXOEaptFDENbc6xUAyMezaH0dzUuQjfQnafy99eSwh4Hc4ez4-ZYz3dpcAJbuXwvuwz7vjHjHlssJmCLD65QE9sGrVAkMFZs19kRC2NqO2Y" },
];

export default function BuyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col md:flex-row w-full max-w-[1440px] mx-auto px-4 md:px-8 py-12 gap-12 pt-32 min-h-screen">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4 flex-shrink-0 flex flex-col gap-8">
          <div className="flex items-center justify-between border-b border-[#222222] pb-4">
            <h2 className="font-['Space_Grotesk'] text-2xl font-semibold text-white">Filters</h2>
            <button className="text-xs font-semibold text-[#E8001D] uppercase hover:text-white transition-colors">Reset All</button>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#222222] rounded-full text-xs font-semibold">
              Porsche <span className="material-symbols-outlined text-base cursor-pointer hover:text-[#E8001D]">close</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#222222] rounded-full text-xs font-semibold">
              2020 - 2024 <span className="material-symbols-outlined text-base cursor-pointer hover:text-[#E8001D]">close</span>
            </div>
          </div>
          {/* Brand Filter */}
          <div className="flex flex-col gap-4 border-b border-[#222222] pb-6">
            <h3 className="font-['Space_Grotesk'] text-xl text-white/80">Brand</h3>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/50">search</span>
              <input className="w-full bg-[#111111] border-b border-[#222222] border-t-0 border-l-0 border-r-0 pl-10 pr-4 py-2 text-white placeholder-white/30 focus:border-[#E8001D] focus:ring-0 focus:outline-none transition-colors" placeholder="Search brand..." type="text" />
            </div>
            <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-2">
              {[["Audi", 45], ["BMW", 32], ["Mercedes-Benz", 28], ["Porsche", 15, true]].map(([brand, count, checked]) => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                  <input className="accent-[#E8001D] w-4 h-4" type="checkbox" defaultChecked={checked} />
                  <span className={`text-base ${checked ? "text-white" : "text-white/70"} group-hover:text-white transition-colors`}>{brand} <span className="text-white/30 text-sm ml-1">({count})</span></span>
                </label>
              ))}
            </div>
          </div>
          {/* Year Range */}
          <div className="flex flex-col gap-4 border-b border-[#222222] pb-6">
            <div className="flex justify-between items-center">
              <h3 className="font-['Space_Grotesk'] text-xl text-white/80">Year</h3>
              <span className="text-xs font-semibold text-[#E8001D]">2020 - 2024</span>
            </div>
            <input className="range-slider mt-2" max="2024" min="2010" type="range" defaultValue="2020" />
            <div className="flex justify-between text-white/30 text-xs"><span>2010</span><span>2024</span></div>
          </div>
          {/* Price Range */}
          <div className="flex flex-col gap-4 border-b border-[#222222] pb-6">
            <div className="flex justify-between items-center">
              <h3 className="font-['Space_Grotesk'] text-xl text-white/80">Price</h3>
              <span className="text-xs font-semibold text-[#E8001D]">Any</span>
            </div>
            <input className="range-slider mt-2" max="200000" min="0" type="range" defaultValue="100000" />
            <div className="flex justify-between text-white/30 text-xs"><span>$0</span><span>$200k+</span></div>
          </div>
        </aside>

        {/* Main Content */}
        <section className="w-full md:w-3/4 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#222222] pb-6">
            <div>
              <h1 className="font-['Space_Grotesk'] text-[48px] leading-[1.2] tracking-[-0.01em] font-bold text-white uppercase tracking-tighter">Browse Our Collection</h1>
              <p className="text-white/50 mt-2">Showing 15 high-performance vehicles matching your criteria.</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-white/50 uppercase">Sort by:</span>
              <select className="bg-[#111111] border border-[#222222] text-white py-2 px-4 rounded-sm focus:border-[#E8001D] focus:ring-0 focus:outline-none appearance-none text-xs font-semibold uppercase cursor-pointer min-w-[160px]">
                <option>Newest First</option>
                <option>Price Low-High</option>
                <option>Price High-Low</option>
                <option>Mileage Low-High</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cars.map((car, i) => (
              <article key={i} className="bg-[#111111] border border-[#222222] group hover:border-[#E8001D]/50 transition-colors duration-300 flex flex-col relative overflow-hidden">
                <div className="h-[240px] w-full overflow-hidden relative">
                  <img alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src={car.img} />
                  {car.badge && (
                    <div className={`absolute top-4 left-4 ${car.badge === "Reserved" ? "bg-[#111111] border border-[#222222]" : "bg-[#E8001D]"} text-white text-xs font-bold px-2 py-1 uppercase tracking-wider`}>
                      {car.badge}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow bg-[#1A1A1A]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-white">{car.name}</h3>
                    <span className="font-['Space_Grotesk'] text-2xl font-semibold text-white">{car.price}</span>
                  </div>
                  <p className="text-white/50 text-sm mb-6">{car.year} • {car.km} • {car.trans} • {car.fuel}</p>
                  <div className="mt-auto pt-4 border-t border-[#222222] flex justify-between items-center">
                    <div className="flex gap-2">
                      {car.specs.map((s) => (
                        <span key={s} className="px-2 py-1 bg-[#111111] border border-[#222222] text-xs text-white/70">{s}</span>
                      ))}
                    </div>
                    <Link href="/car/2021-maruti-swift-zxi" className="text-[#E8001D] font-bold text-sm uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8 border-t border-[#222222] pt-8">
            <button className="w-10 h-10 flex items-center justify-center border border-[#222222] text-white/50 hover:text-white hover:border-white transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-[#E8001D] text-white font-bold">1</button>
            <button className="w-10 h-10 flex items-center justify-center border border-[#222222] text-white/70 hover:text-white hover:border-white transition-colors">2</button>
            <button className="w-10 h-10 flex items-center justify-center border border-[#222222] text-white/70 hover:text-white hover:border-white transition-colors">3</button>
            <span className="text-white/50 mx-2">...</span>
            <button className="w-10 h-10 flex items-center justify-center border border-[#222222] text-white/70 hover:text-white hover:border-white transition-colors">8</button>
            <button className="w-10 h-10 flex items-center justify-center border border-[#222222] text-white/50 hover:text-white hover:border-white transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
