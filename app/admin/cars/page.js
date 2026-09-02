import Navbar from "../../components/Navbar";
import Link from "next/link";

export const metadata = { title: "Add New Car - JMD Motors Admin" };

export default function AddNewCarPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-1 pt-20">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 bg-[#1a0908] border-r border-[#222222] fixed h-full z-40 pt-8">
          <nav className="flex-1 px-4 space-y-2">
            {[
              { icon: "dashboard", label: "Dashboard" },
              { icon: "directions_car", label: "Manage Cars", active: true },
              { icon: "mail", label: "Enquiries" },
              { icon: "reviews", label: "Testimonials" },
              { icon: "view_carousel", label: "Banners" },
              { icon: "settings", label: "Settings" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.label === "Dashboard" ? "/admin" : item.label === "Enquiries" ? "/admin/enquiries" : "/admin/cars"}
                className={`flex items-center gap-3 px-4 py-3 rounded text-xs font-semibold ${
                  item.active
                    ? "bg-[#2e1a18] text-[#e8001d] border border-[#5e3f3b]"
                    : "text-[#ffdad6] hover:bg-[#2a1614] border border-transparent"
                } transition-colors`}
              >
                <span className="material-symbols-outlined">{item.icon}</span> {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-8 bg-black min-h-screen">
          <div className="flex items-center gap-4 mb-8 text-[#e9bcb7] text-xs font-semibold">
            <Link className="hover:text-white transition-colors flex items-center gap-1" href="/admin">
              <span className="material-symbols-outlined text-base">arrow_back</span>Dashboard
            </Link>
            <span className="material-symbols-outlined text-base">chevron_right</span>
            <span className="text-[#ffdad6]">Add New Car</span>
          </div>
          <h1 className="font-['Space_Grotesk'] text-[32px] font-semibold text-white mb-12">Add New Car to Inventory</h1>

          <form className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-8 space-y-8">
              {/* Basic Info */}
              <section className="admin-card rounded p-8">
                <h2 className="font-['Space_Grotesk'] text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#e8001d]">info</span> Basic Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider">Brand *</label>
                    <input className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#ffdad6] py-3 px-4 transition-colors" placeholder="e.g., BMW" type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider">Model *</label>
                    <input className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#ffdad6] py-3 px-4 transition-colors" placeholder="e.g., M5 Competition" type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider">Year *</label>
                    <input className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#ffdad6] py-3 px-4 transition-colors" placeholder="2024" type="number" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider">Price (₹ Lakh) *</label>
                    <input className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#ffdad6] py-3 px-4 transition-colors" placeholder="85.00" type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider">KMs Driven</label>
                    <input className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#ffdad6] py-3 px-4 transition-colors" placeholder="12,500" type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider">Number of Owners</label>
                    <select className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#e9bcb7] py-3 px-4 transition-colors appearance-none">
                      <option>1st Owner</option>
                      <option>2nd Owner</option>
                      <option>3+ Owners</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Specifications */}
              <section className="admin-card rounded p-8">
                <h2 className="font-['Space_Grotesk'] text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#e8001d]">build</span> Specifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider">Fuel Type</label>
                    <select className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#e9bcb7] py-3 px-4 transition-colors appearance-none">
                      <option>Petrol</option><option>Diesel</option><option>Electric</option><option>Hybrid</option><option>CNG</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider">Transmission</label>
                    <select className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#e9bcb7] py-3 px-4 transition-colors appearance-none">
                      <option>Automatic</option><option>Manual</option><option>iMT</option><option>CVT</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider">Body Type</label>
                    <select className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#e9bcb7] py-3 px-4 transition-colors appearance-none">
                      <option>Sedan</option><option>SUV</option><option>Hatchback</option><option>Coupe</option><option>Convertible</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Description */}
              <section className="admin-card rounded p-8">
                <h2 className="font-['Space_Grotesk'] text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#e8001d]">description</span> Description
                </h2>
                <textarea className="w-full bg-[#200e0d] border border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#ffdad6] py-3 px-4 transition-colors rounded resize-none" rows="6" placeholder="Enter a detailed description of the vehicle..."></textarea>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Image Upload */}
              <div className="admin-card rounded p-8">
                <h2 className="font-['Space_Grotesk'] text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#e8001d]">image</span> Images
                </h2>
                <div className="border-2 border-dashed border-[#5e3f3b] rounded p-8 text-center hover:border-[#e8001d] transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-4xl text-[#5e3f3b] group-hover:text-[#e8001d] mb-2 block transition-colors">cloud_upload</span>
                  <p className="text-[#e9bcb7] text-sm mb-1">Drag &amp; drop images here</p>
                  <p className="text-[#e9bcb7] text-xs">or click to browse</p>
                  <p className="text-xs text-[#5e3f3b] mt-4">JPG, PNG, WEBP up to 5MB each<br />Min: 1200×800px recommended</p>
                </div>
              </div>

              {/* Publish Actions */}
              <div className="admin-card rounded p-8 border-[#e8001d]/30">
                <h2 className="font-['Space_Grotesk'] text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#e8001d]">publish</span> Publish
                </h2>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input className="accent-[#e8001d]" type="checkbox" defaultChecked />
                    <span className="text-[#ffdad6]">Mark as Featured</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input className="accent-[#e8001d]" type="checkbox" />
                    <span className="text-[#ffdad6]">Mark as Sold</span>
                  </label>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <button className="w-full bg-[#e8001d] text-white text-xs font-semibold py-4 rounded hover:bg-[#c00016] transition-colors uppercase tracking-wider flex items-center justify-center gap-2" type="button">
                    <span className="material-symbols-outlined text-sm">publish</span> Publish Car
                  </button>
                  <button className="w-full bg-transparent border border-[#222222] text-[#ffdad6] text-xs font-semibold py-4 rounded hover:border-white transition-colors uppercase tracking-wider" type="button">
                    Save as Draft
                  </button>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
