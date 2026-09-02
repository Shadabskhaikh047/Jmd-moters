"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return <AdminNavbar pathname={pathname} />;

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav flex justify-between items-center px-8 h-20 max-w-full">
      <div className="flex items-center gap-4">
        <Link href="/" className="font-['Space_Grotesk'] text-2xl font-black text-white italic tracking-tighter">
          JMD Motors
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-8 font-[Inter] text-xs font-semibold uppercase tracking-[0.05em]">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive
                  ? "text-[#e8001d] border-b-2 border-[#e8001d] pb-1 transition-colors"
                  : "text-white/70 hover:text-white transition-colors"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <div>
        <a
          className="btn-primary text-xs font-semibold uppercase px-6 py-3 rounded-sm flex items-center gap-2 hover:scale-95 duration-200 ease-out"
          href="tel:1234567890"
        >
          <span className="material-symbols-outlined text-lg">call</span>
          Call Now
        </a>
      </div>
    </nav>
  );
}

function AdminNavbar({ pathname }) {
  const adminLinks = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/cars", label: "Cars" },
    { href: "/admin/enquiries", label: "Enquiries" },
    { href: "/admin/settings", label: "Settings" },
  ];

  return (
    <header className="bg-black/80 backdrop-blur-md font-['Space_Grotesk'] font-bold uppercase tracking-tighter fixed top-0 w-full z-50 border-b border-white/10 flex justify-between items-center px-8 h-20 max-w-full">
      <div className="text-2xl font-black text-white italic">
        JMD Motors <span className="text-sm font-normal not-italic text-[#e9bcb7] ml-2">ADMIN</span>
      </div>
      <nav className="hidden md:flex space-x-6">
        {adminLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive
                  ? "text-red-600 border-b-2 border-red-600 pb-1 hover:bg-red-600 hover:text-white transition-all duration-300"
                  : "text-white/70 hover:text-white transition-colors hover:bg-red-600 hover:text-white transition-all duration-300"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <Link
        href="/"
        className="bg-[#e8001d] text-white px-6 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider hover:bg-[#c00016] transition-colors flex items-center gap-2"
      >
        <span className="material-symbols-outlined text-sm">logout</span> Logout
      </Link>
    </header>
  );
}
