import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = { title: "JMD Motors - Admin Dashboard" };

const enquiries = [
  { name: "Rahul Sharma", phone: "+91 98765 43210", car: "Porsche 911 Carrera S", date: "Oct 24, 2023", status: "New", statusClass: "bg-[#e8001d]/10 text-[#e8001d] border-[#e8001d]/30" },
  { name: "Anita Desai", phone: "+91 91234 56789", car: "Mercedes-Benz G-Class", date: "Oct 23, 2023", status: "Contacted", statusClass: "bg-[#4b3331] text-[#ffdad6] border-[#5e3f3b]" },
  { name: "Vikram Singh", phone: "+91 99887 76655", car: "Audi RS Q8", date: "Oct 22, 2023", status: "Closed", statusClass: "bg-[#462f2d] text-[#e9bcb7] border-[#222222] opacity-50" },
];

export default function AdminDashboard() {
  return (
    <>
      <Navbar />
      <div className="flex flex-1 pt-20">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 bg-[#1a0908] border-r border-[#222222] fixed h-full z-40 pt-8">
          <nav className="flex-1 px-4 space-y-2">
            {[
              { icon: "dashboard", label: "Dashboard", active: true },
              { icon: "directions_car", label: "Manage Cars" },
              { icon: "mail", label: "Enquiries" },
              { icon: "reviews", label: "Testimonials" },
              { icon: "view_carousel", label: "Banners" },
              { icon: "settings", label: "Settings" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.label === "Enquiries" ? "/admin/enquiries" : item.label === "Manage Cars" ? "/admin/cars" : "/admin"}
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="font-['Space_Grotesk'] text-[32px] font-semibold text-white mb-1">Dashboard Overview</h1>
              <p className="text-[#e9bcb7] text-sm">Welcome back. Here is the current status of your inventory and leads.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/admin/enquiries" className="bg-transparent border border-[#222222] text-white px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider hover:border-white transition-colors flex items-center gap-2">
                View All Enquiries
              </Link>
              <Link href="/admin/cars" className="bg-[#e8001d] text-white px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#c00016] transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(232,0,29,0.2)]">
                <span className="material-symbols-outlined text-sm">add</span> Add New Car
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Total Cars", value: "48", icon: "directions_car" },
              { label: "Active Listings", value: "42", icon: "visibility", change: "12%" },
              { label: "Total Enquiries", value: "187", icon: "mail", change: "5%" },
              { label: "Revenue Estimate", value: "₹84.5L", icon: "payments", special: true },
            ].map((stat) => (
              <div key={stat.label} className={`admin-card rounded p-6 flex flex-col justify-between h-32 relative overflow-hidden group ${stat.special ? "border-[#e8001d]/30 bg-gradient-to-br from-[#111111] to-[#200e0d]" : ""}`}>
                <div className={`absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity ${stat.special ? "text-[#e8001d]" : ""}`}>
                  <span className="material-symbols-outlined text-9xl">{stat.icon}</span>
                </div>
                <p className="text-[#e9bcb7] text-xs font-semibold uppercase tracking-wider relative z-10">{stat.label}</p>
                <div className="flex items-baseline gap-2 relative z-10">
                  <h2 className={`font-['Space_Grotesk'] ${stat.special ? "text-[32px]" : "text-[48px]"} font-bold text-white`}>{stat.value}</h2>
                  {stat.change && (
                    <span className="text-[#22c55e] text-sm flex items-center">
                      <span className="material-symbols-outlined text-xs">arrow_upward</span> {stat.change}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Recent Enquiries Table */}
          <div className="admin-card rounded overflow-hidden">
            <div className="p-6 border-b border-[#222222] flex justify-between items-center bg-[#0a0a0a]">
              <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-white">Recent Enquiries</h3>
              <Link href="/admin/enquiries" className="text-[#e8001d] hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left admin-table border-collapse">
                <thead className="bg-[#111111]">
                  <tr>
                    {["Name", "Phone", "Car of Interest", "Date", "Status", "Actions"].map((h) => (
                      <th key={h} className={`p-4 text-xs font-semibold text-[#e9bcb7] uppercase tracking-wider ${h === "Actions" ? "text-right" : ""}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {enquiries.map((e) => (
                    <tr key={e.name} className="hover:bg-[#151515] transition-colors">
                      <td className="p-4 font-medium text-white">{e.name}</td>
                      <td className="p-4 text-[#e9bcb7]">{e.phone}</td>
                      <td className="p-4 text-white">{e.car}</td>
                      <td className="p-4 text-[#e9bcb7]">{e.date}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 ${e.statusClass} border rounded text-[10px] font-semibold uppercase tracking-wider`}>{e.status}</span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-[#e9bcb7] hover:text-white transition-colors p-1"><span className="material-symbols-outlined text-sm">edit</span></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
