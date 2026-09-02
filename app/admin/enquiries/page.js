import Navbar from "../../components/Navbar";
import Link from "next/link";

export const metadata = { title: "Lead Management - JMD Motors Admin" };

const enquiries = [
  {
    date: "Oct 24, 2023",
    name: "Michael Chang",
    phone: "+1 (555) 019-2834",
    email: "m.chang@example.com",
    car: "2022 Porsche 911 GT3",
    stock: "Stock #8492A",
    source: "Website",
    sourceIcon: "language",
    status: "New",
    statusClass: "bg-[#e8001d]/20 border-[#e8001d] text-[#ffdad6]",
    dotColor: "bg-[#e8001d]",
  },
  {
    date: "Oct 23, 2023",
    name: "Sarah Jenkins",
    phone: "+1 (555) 847-1029",
    email: "s.jenkins@example.com",
    car: "2021 Lamborghini Huracán",
    stock: "Stock #7731B",
    source: "WhatsApp",
    sourceIcon: "forum",
    status: "Contacted",
    statusClass: "bg-[#0078bf]/20 border-[#0078bf] text-[#99cbff]",
    dotColor: "bg-[#0078bf]",
  },
  {
    date: "Oct 21, 2023",
    name: "David Ross",
    phone: "+1 (555) 392-0011",
    email: "d.ross@example.com",
    car: "2023 Ferrari F8 Tributo",
    stock: "Stock #9012C",
    source: "Phone",
    sourceIcon: "call",
    status: "Closed",
    statusClass: "bg-emerald-900/40 border-emerald-800 text-emerald-400",
    dotColor: "bg-emerald-500",
  },
];

export default function EnquiriesManagementPage() {
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
              { icon: "contact_mail", label: "Enquiries", href: "/admin/enquiries", active: true },
              { icon: "directions_car", label: "Inventory", href: "/admin/cars" },
              { icon: "sell", label: "Sales", href: "/admin" },
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
          <div className="p-6 border-t border-[#222222]">
            <Link className="flex items-center space-x-3 text-[#e9bcb7] hover:text-[#ffb4ac] transition-colors text-xs font-semibold uppercase tracking-wider" href="/">
              <span className="material-symbols-outlined">logout</span>
              <span>Sign Out</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-8 bg-black min-h-screen">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="font-['Space_Grotesk'] text-[32px] font-semibold text-white">Lead Management</h2>
              <p className="text-[#e9bcb7] text-sm mt-1">Manage and track incoming vehicle enquiries.</p>
            </div>
            <button className="bg-[#e8001d] text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#c00016] transition-colors flex items-center gap-2 rounded-sm shadow-[0_0_15px_rgba(232,0,29,0.2)]">
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
              Export to CSV
            </button>
          </div>

          {/* Search & Filter Bar */}
          <div className="glass-panel p-6 mb-8 rounded-lg flex flex-col lg:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <label className="text-xs font-semibold text-[#e9bcb7] mb-2 block uppercase tracking-wider">Search</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#e9bcb7]">search</span>
                <input className="w-full bg-[#111111] border-0 border-b border-[#222222] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-white pl-10 py-2 transition-colors" placeholder="Search name, email, or phone..." type="text" />
              </div>
            </div>
            <div className="w-full lg:w-48">
              <label className="text-xs font-semibold text-[#e9bcb7] mb-2 block uppercase tracking-wider">Status</label>
              <select className="w-full bg-[#111111] border-0 border-b border-[#222222] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-white py-2 appearance-none cursor-pointer">
                <option>All Statuses</option>
                <option>New</option>
                <option>Contacted</option>
                <option>Closed</option>
              </select>
            </div>
            <div className="w-full lg:w-48">
              <label className="text-xs font-semibold text-[#e9bcb7] mb-2 block uppercase tracking-wider">Brand</label>
              <select className="w-full bg-[#111111] border-0 border-b border-[#222222] focus:border-[#e8001d] focus:ring-0 focus:outline-none text-white py-2 appearance-none cursor-pointer">
                <option>All Brands</option>
                <option>Porsche</option>
                <option>Ferrari</option>
                <option>Lamborghini</option>
              </select>
            </div>
            <button className="w-full lg:w-auto px-6 py-2 border border-[#222222] text-white hover:border-white transition-colors text-xs font-semibold uppercase h-[42px] rounded-sm">
              Apply Filters
            </button>
          </div>

          {/* Enquiries Table */}
          <div className="glass-panel rounded-lg overflow-hidden overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-[#111111] border-b border-[#222222]">
                  {["Date", "Name", "Contact", "Car of Interest", "Source", "Status", "Actions"].map((h) => (
                    <th key={h} className={`p-4 text-xs font-semibold text-[#e9bcb7] uppercase tracking-wider ${h === "Actions" ? "text-right" : ""}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222222]">
                {enquiries.map((row, i) => (
                  <tr key={i} className="table-row-hover transition-colors">
                    <td className="p-4 text-sm text-[#e9bcb7]">{row.date}</td>
                    <td className="p-4 text-white font-medium">{row.name}</td>
                    <td className="p-4">
                      <div className="text-sm text-white">{row.phone}</div>
                      <div className="text-xs text-[#e9bcb7]">{row.email}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-white">{row.car}</div>
                      <div className="text-xs text-[#e9bcb7]">{row.stock}</div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-[#111111] border border-[#222222] rounded text-[#e9bcb7]">
                        <span className="material-symbols-outlined text-[14px]">{row.sourceIcon}</span> {row.source}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 ${row.statusClass} border rounded`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${row.dotColor}`}></span> {row.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="text-[#e9bcb7] hover:text-white transition-colors p-1" title="WhatsApp">
                          <span className="material-symbols-outlined text-lg">forum</span>
                        </button>
                        <button className="text-[#e9bcb7] hover:text-[#ffb4ac] transition-colors p-1" title="Edit Status">
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                        <button className="text-[#e9bcb7] hover:text-white transition-colors p-1" title="View Details">
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <span className="text-xs font-semibold text-[#e9bcb7]">Showing 1-3 of 24 entries</span>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center border border-[#222222] text-[#e9bcb7] hover:border-white hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-[#e8001d] text-white border border-[#e8001d] text-xs font-semibold">1</button>
              <button className="w-8 h-8 flex items-center justify-center border border-[#222222] text-[#e9bcb7] hover:border-white hover:text-white transition-colors text-xs font-semibold">2</button>
              <button className="w-8 h-8 flex items-center justify-center border border-[#222222] text-[#e9bcb7] hover:border-white hover:text-white transition-colors text-xs font-semibold">3</button>
              <button className="w-8 h-8 flex items-center justify-center border border-[#222222] text-[#e9bcb7] hover:border-white hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
