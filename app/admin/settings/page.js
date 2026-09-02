import Navbar from "../../components/Navbar";
import Link from "next/link";

export const metadata = { title: "Admin Settings - JMD Motors" };

export default function AdminSettingsPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-1 pt-20">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 bg-[#111111] border-r border-[#222222] fixed h-full z-40 pt-8">
          <div className="px-6 pb-6 border-b border-[#222222]">
            <h1 className="font-['Space_Grotesk'] text-2xl font-bold text-white italic">JMD Motors</h1>
            <span className="text-xs font-semibold text-[#ffb4ac] uppercase mt-1 block tracking-wider">Admin Portal</span>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2">
            {[
              { icon: "dashboard", label: "Dashboard", href: "/admin" },
              { icon: "contact_mail", label: "Enquiries", href: "/admin/enquiries" },
              { icon: "directions_car", label: "Inventory", href: "/admin/cars" },
              { icon: "settings", label: "Settings", href: "/admin/settings", active: true },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded text-xs font-semibold ${
                  item.active
                    ? "bg-[#e8001d]/10 text-white border-l-2 border-[#e8001d]"
                    : "text-[#e9bcb7] hover:text-white hover:bg-[#1a1a1a]"
                } transition-colors`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-8 bg-black min-h-screen">
          <div className="mb-8">
            <h1 className="font-['Space_Grotesk'] text-[32px] font-semibold text-white mb-1">Dealership Settings</h1>
            <p className="text-[#e9bcb7] text-sm">Configure showroom details, contact phone numbers, WhatsApp alerts, and inventory preferences.</p>
          </div>

          <div className="max-w-3xl space-y-8">
            <div className="admin-card rounded p-8">
              <h2 className="font-['Space_Grotesk'] text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#e8001d]">store</span> Showroom Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider">Dealership Name</label>
                  <input className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#ffdad6] py-3 px-4 transition-colors" defaultValue="JMD Motors Luxury Dealership" type="text" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider">Primary Phone</label>
                    <input className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#ffdad6] py-3 px-4 transition-colors" defaultValue="+91 98765 43210" type="tel" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider">WhatsApp Number</label>
                    <input className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#ffdad6] py-3 px-4 transition-colors" defaultValue="+91 98765 43210" type="tel" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#e9bcb7] mb-2 uppercase tracking-wider">Showroom Address</label>
                  <input className="w-full bg-[#200e0d] border-b border-[#5e3f3b] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-[#ffdad6] py-3 px-4 transition-colors" defaultValue="123 Luxury Drive, Gomti Nagar, Lucknow, Uttar Pradesh 226010" type="text" />
                </div>
              </div>
            </div>

            <div className="admin-card rounded p-8">
              <h2 className="font-['Space_Grotesk'] text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#e8001d]">notifications</span> Lead Notifications
              </h2>
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input className="accent-[#e8001d] w-4 h-4" type="checkbox" defaultChecked />
                  <span className="text-[#ffdad6]">Instant WhatsApp alert on new enquiry</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input className="accent-[#e8001d] w-4 h-4" type="checkbox" defaultChecked />
                  <span className="text-[#ffdad6]">Daily enquiry summary email</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input className="accent-[#e8001d] w-4 h-4" type="checkbox" defaultChecked />
                  <span className="text-[#ffdad6]">Auto-assign leads to available sales agents</span>
                </label>
              </div>
            </div>

            <button className="bg-[#e8001d] text-white px-8 py-4 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#c00016] transition-colors shadow-[0_0_15px_rgba(232,0,29,0.2)]">
              Save Changes
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
