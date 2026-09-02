import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = { title: "2021 Maruti Swift ZXI - JMD Motors" };

const thumbs = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDj-SU2jdcIQVKPXbz01ZAWZ-Y2t0Zk4ZIIyE1Mv7VQSw6HRHHMax4XV9ze_-c_ZFaEyHcM8tNxvSX8BsRbnKscVWc-SdsEaLZyMLct4MK0b1Vw72xUEsUzMBG92PCUqQK7QX0NkZjmJ8tnTNQGu2P8VuxAkZYQbFdbkgqCrOm9yUcDL66HJmfEk4p556jc3uKmr00Cz6W9aOV8HrA-N4EYc0ene86ODeY3ZBGpiUru2vIQTyEqi3czXilc13sFmv5_1oNjJk0Y77E",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCAMoFH6UFmN41Vlt-IngU0airIU7dPcT_M-Vcx7_MHStv6jfBy7Q5YqVajUg7cQbmDFTaYIdUz2UiSd0z-z77PsMYj12zQqn2oBwSpZ_-2CLF5FYBO8a2hBW8MAiKNoKEW1jzBzUrCPA2ZVdhvoVAJC6CGXeFIuvLFg_tuyoNHzeycNyUn1fYdLiSJup3_DGKXketZa1iI2HkIDyIQbEO23lgGjqKMq5c9uNSj27eSocZwg8hc_ErOEGRNw5ezZheFSdKx1FfVC-Q",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDx7l-kaZd8igHW2m3wn5MPIsVoOA_bH_ZReB3Zcd2k9CAYZBYiQWb8WAMM6zZBDklUWbdAHMz79nC3_VH7VH9MEivX93MxltJvezCXXcEHb6S4PbqbjMpoII7JJQNWcGD-ZhSc3KwsICPjF8fyznitON-K-78hoHeEGzTaXkvVI2OvuN6_oD41urSE9Isq7XSmQRjeuXURRRQy0nAXmYj9koO-SgWzKOouGLgKJshWZJPMOHsKxe7B3coVtF5XiPC5IdEvhvUopcA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDfCLbptqbvLh3XHFM-0LRUQMpZTHLiVOY57tT3_lKTcpov2l-Vj95D7uieOgAHCDJesfHeDz_35UE_V8TVNpjT9lrwCzMnmNrOGeAdMUp1K-aKRhh1HMJNZDc2M8atL-oSEAiK7R_DkYYW7fhjg6aBkyNqESHDiuQjzY-zIAwtQ4trPWBbK79JS3IUEevL83VOsjL-py-GsULUSijQAb8BVK5EJrY4Fryj0Sj-3zqDwCFm1tN1PDt_ohRx0o-7kbMQvlBHKSbkxXs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCopfhTTMDjEgCLpA2ybTpg8X1_aM_EdGS4HfkcBHX5OI22seyOMdXkzVvcbnBLTg35gCDoVH7VOJWBsRMJusbBu5ER-JY4TslNzedPXZbBYrXcSVHGjhEzr9VveE7YzuQLxDyHDHyxT7iv55O-5WOEypbApVoaAiLkJMTSe0L6ubSwXXN8nzgFYW2Ts03W7Qkdv5xaqQe5FS9W5KjTUS9IVn1BO6c-lbN-NTPfrXdDGZRq4EPzeRl0csmJNODiajpvtd6BtbKfee0",
];

const relatedCars = [
  { name: "2020 Hyundai i20", info: "28,000 km • Petrol • Manual", price: "₹6.10 Lakh", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSYWt_-5BCdr0wYJrgi8dHGh8HNgFCke_s5T0fUl4dV6E1RyvrDIT_DGVoM969eeyEqf9lpxoD2-sBw4PXpygE3XhCRR1EThz_T6YJn-RPqvPMMgN8c_8S1B7aM03xorVY1wfEqWCEKTllT_zB3_f0A1hjlpdUcQeBk7Dh96AVt8urIu_U14XTlS1jg51RNklQS2R8z5Y-ogHut5dDZF-C2vQEFTXD5RjnT2vaays9QdOFoHLBk95blR_GraqmOfMlKV8s5SdfeqQ" },
  { name: "2022 Tata Altroz", info: "15,200 km • Petrol • Manual", price: "₹7.25 Lakh", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9Mv8sjfVfvmbuTLg4EnutRWOZnddbg0R8fJkqKKzizYSFMTAP9zNHPYhp1uN5bIZ4KWEPDTmWECEf3bAJSpt99WJlutQGRvxyJtTV-_RaV1g-ZCbcktPFAYspXQcxBcM0r7ccQ26hx3xYM2ZD1BBgRa-2zXBxkRPFQkRO91mEkIKVUcDGx3sMTF4xvu5uQ3XoymD2PQH8KaI6vFsiYT66Iqc5w2aTxDqk5xKU2sWZYiIMU1e-CwBpDGoZezGTt8p6e_JvPNmobuE" },
  { name: "2019 Maruti Baleno", info: "45,000 km • Petrol • Automatic", price: "₹5.50 Lakh", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvNSlu5paBEqQcGcfwpC1d9cu30NrgRY_8lxpnibvBk3J4UIYmBMm-4oqbSg0WsSmQpzXWkwZROuoFvHn77sp_Uc08fqEY6Q2HPSIIc5hdgq8D5ygsL1t-y7uvUHPU0sRAUtofuPvAEPZ7GD-QteQf2DSkgZUcX7pJhIPeQoGzzgLr2Qtfx1vuJh3e8nzl5-Oe1AHVposP0HTHg08M_QrSh-ZvwTvihlz0CnA4-B4mZaPOIFdXpw9GzTVhTHSTxq9_JI3JJa_YGiU" },
];

export default function CarDetailPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 pb-20 px-6 max-w-[1440px] mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-[#e9bcb7] text-xs font-semibold mb-12">
          <Link className="hover:text-[#ffb4ac] transition-colors" href="/">Home</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <Link className="hover:text-[#ffb4ac] transition-colors" href="/buy">Buy a Car</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-[#ffdad6]">2021 Maruti Swift ZXI</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* Gallery */}
            <div className="flex flex-col gap-2">
              <div className="w-full aspect-[16/9] bg-card rounded overflow-hidden relative border border-subtle">
                <img alt="Main view" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQcu9fANopn95hFz0GvggJ9Ysgen5QhxW8L63TqN3PqUOA_pAUsqtpVgOJXSYeL7w8LIzYDCDExM-FPqzmFAaN2x9b5Xzj-P-Br0lyngJrKgWyN7zwwqOn7odI9uz8O_sRBJN6EBzvVNcXuguH3Tv5xL8gbjI9trc05AIEhNEhDb0KvM649jK_Ce44YE8o7fSJSWJNLLO8oVlV4uXESqXKAEIs-I0JGiw2uNZ8NKdSA3cvynNLndiyMrD9XEP6adGpn4xSt_7tGZw" />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {thumbs.map((t, i) => (
                  <div key={i} className={`aspect-video bg-card rounded overflow-hidden border border-subtle ${i === 0 ? "hover:border-[#e8001d]" : "opacity-70 hover:opacity-100"} cursor-pointer transition-colors relative`}>
                    <img alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" src={t} />
                    {i === 4 && <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-xs font-semibold text-white">+12</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Header & Specs */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="inline-block bg-[#2e1a18] px-3 py-1 rounded text-xs font-semibold text-[#e9bcb7] mb-1">2021</div>
                <h1 className="font-['Space_Grotesk'] text-[48px] leading-[1.2] tracking-[-0.01em] font-bold text-[#ffdad6]">Maruti Swift ZXI</h1>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: "local_gas_station", label: "Fuel", value: "Petrol" },
                  { icon: "speed", label: "KMs Driven", value: "32,400 km" },
                  { icon: "calendar_month", label: "Year", value: "2021" },
                  { icon: "person", label: "Owners", value: "1st Owner" },
                  { icon: "settings", label: "Transmission", value: "Manual" },
                ].map((s) => (
                  <div key={s.label} className="bg-card border border-subtle px-4 py-3 rounded flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e8001d]">{s.icon}</span>
                    <div>
                      <div className="text-xs font-semibold text-[#e9bcb7]">{s.label}</div>
                      <div className="text-[#ffdad6]">{s.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-subtle flex space-x-6 mt-6">
              <button className="font-['Space_Grotesk'] text-2xl font-semibold text-[#ffdad6] border-b-2 border-[#e8001d] pb-3">Overview</button>
              <button className="font-['Space_Grotesk'] text-2xl font-semibold text-[#e9bcb7] hover:text-[#ffdad6] transition-colors pb-3">Features</button>
              <button className="font-['Space_Grotesk'] text-2xl font-semibold text-[#e9bcb7] hover:text-[#ffdad6] transition-colors pb-3">Inspection Report</button>
              <button className="font-['Space_Grotesk'] text-2xl font-semibold text-[#e9bcb7] hover:text-[#ffdad6] transition-colors pb-3">Documents</button>
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 py-6">
              {[
                ["Make", "Maruti Suzuki"], ["Model", "Swift"], ["Variant", "ZXI"],
                ["Body Type", "Hatchback"], ["Color", "Solid Fire Red"], ["Engine", "1197 cc"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-subtle py-2">
                  <span className="text-[#e9bcb7]">{k}</span>
                  <span className="text-[#ffdad6]">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-[100px] bg-card border border-subtle rounded flex flex-col p-6">
              <div className="mb-6">
                <div className="font-['Space_Grotesk'] text-[72px] leading-[1.1] tracking-[-0.02em] font-bold text-[#ffdad6] leading-none mb-1">₹5.75 Lakh</div>
                <div className="text-[#e9bcb7]">EMI starts @ ₹12,500/month</div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="w-full bg-[#e8001d] text-white text-xs font-semibold py-4 rounded flex items-center justify-center gap-1 hover:bg-[#c00016] transition-colors">
                  <span className="material-symbols-outlined">call</span> Call Dealer
                </button>
                <button className="w-full bg-[#25D366] text-black text-xs font-semibold py-4 rounded flex items-center justify-center gap-1 hover:bg-[#128C7E] transition-colors">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span> WhatsApp Enquiry
                </button>
                <button className="w-full bg-transparent border border-subtle text-[#ffdad6] text-xs font-semibold py-4 rounded flex items-center justify-center gap-1 hover:border-[#ffdad6] transition-colors">
                  <span className="material-symbols-outlined">directions_car</span> Book Test Drive
                </button>
              </div>
              <div className="mt-6 pt-6 border-t border-subtle">
                <div className="font-['Space_Grotesk'] text-2xl font-semibold text-[#ffdad6] mb-3">Dealer Info</div>
                <div className="text-[#e9bcb7] mb-1">JMD Motors Andheri East</div>
                <div className="text-xs font-semibold text-[#e9bcb7] flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">location_on</span> Mumbai, Maharashtra
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Cars */}
        <div className="mt-20 pt-20 border-t border-subtle">
          <h2 className="font-['Space_Grotesk'] text-[32px] leading-[1.2] font-semibold text-[#ffdad6] mb-12">Similar Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCars.map((car) => (
              <div key={car.name} className="bg-card border border-subtle rounded overflow-hidden flex flex-col group">
                <div className="aspect-[4/3] bg-[#2e1a18] relative overflow-hidden">
                  <img alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={car.img} />
                </div>
                <div className="p-6 flex-grow">
                  <div className="font-['Space_Grotesk'] text-2xl font-semibold text-[#ffdad6] mb-1">{car.name}</div>
                  <div className="text-[#e9bcb7] mb-6">{car.info}</div>
                </div>
                <div className="bg-card-footer p-6 flex justify-between items-center border-t border-subtle">
                  <div className="font-['Space_Grotesk'] text-[32px] font-semibold text-[#ffdad6]">{car.price}</div>
                  <button className="text-[#e8001d] hover:translate-x-1 transition-transform">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
