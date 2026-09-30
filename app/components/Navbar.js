"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/buy", label: "Buy", icon: "directions_car" },
  { href: "/sell", label: "Sell", icon: "sell" },
  { href: "/about", label: "About", icon: "info" },
  { href: "/contact", label: "Contact", icon: "mail" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu whenever pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (isAdmin) return <AdminNavbar pathname={pathname} />;

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-nav flex justify-between items-center px-4 sm:px-8 h-20 max-w-full">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-['Space_Grotesk'] text-xl sm:text-2xl font-black text-white italic tracking-tighter hover:opacity-90 transition-opacity cursor-pointer"
          >
            JMD Motors
          </Link>
        </div>

        {/* Desktop Navigation Links */}
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

        {/* Right Actions: Call CTA + Hamburger Button */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            className="btn-primary text-xs font-semibold uppercase px-3 sm:px-6 py-2 sm:py-3 rounded-sm flex items-center gap-1.5 sm:gap-2 hover:scale-95 duration-200 ease-out whitespace-nowrap"
            href="tel:1234567890"
          >
            <span className="material-symbols-outlined text-base sm:text-lg">call</span>
            <span className="hidden xs:inline">Call Now</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#e8001d]/60 cursor-pointer"
          >
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 ease-out rounded-full ${
                isOpen ? "rotate-45 translate-y-1.5 bg-[#e8001d]" : "-translate-y-1"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-200 ease-out rounded-full ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 ease-out rounded-full ${
                isOpen ? "-rotate-45 -translate-y-1.5 bg-[#e8001d]" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop Overlay */}
      <div
        className={`fixed inset-0 top-20 bg-black/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Navigation Menu */}
      <div
        className={`fixed top-20 left-0 right-0 w-full z-40 md:hidden bg-[#0d0d0d]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out overflow-y-auto max-h-[calc(100vh-5rem)] ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-3 pointer-events-none invisible"
        }`}
      >
        <div className="flex flex-col p-5 space-y-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-[#e8001d]/15 text-[#e8001d] border-l-4 border-[#e8001d] pl-3.5 font-bold"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xl opacity-80">{link.icon}</span>
                  <span>{link.label}</span>
                </div>
                <span className="material-symbols-outlined text-sm opacity-40">arrow_forward_ios</span>
              </Link>
            );
          })}

          {/* Quick Mobile Action Buttons */}
          <div className="pt-4 mt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="tel:1234567890"
              className="btn-primary text-xs font-semibold uppercase py-3 rounded-sm flex items-center justify-center gap-2 w-full shadow-lg shadow-[#e8001d]/20"
            >
              <span className="material-symbols-outlined text-base">call</span>
              Call Now (+91 12345 67890)
            </a>
            <Link
              href="/sell"
              onClick={() => setIsOpen(false)}
              className="btn-secondary text-xs font-semibold uppercase py-3 rounded-sm flex items-center justify-center gap-2 w-full text-center"
            >
              <span className="material-symbols-outlined text-base">sell</span>
              Sell Your Car Instantly
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function AdminNavbar({ pathname }) {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const adminLinks = [
    { href: "/admin", label: "Dashboard", icon: "dashboard" },
    { href: "/admin/cars", label: "Cars", icon: "directions_car" },
    { href: "/admin/enquiries", label: "Enquiries", icon: "mail" },
    { href: "/admin/settings", label: "Settings", icon: "settings" },
  ];

  // Close mobile menu on pathname change
  useEffect(() => {
    setIsAdminOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isAdminOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isAdminOpen]);

  return (
    <>
      <header className="bg-black/90 backdrop-blur-md font-['Space_Grotesk'] font-bold uppercase tracking-tighter fixed top-0 w-full z-50 border-b border-white/10 flex justify-between items-center px-4 sm:px-8 h-20 max-w-full">
        <Link
          href="/"
          onClick={() => setIsAdminOpen(false)}
          className="text-xl sm:text-2xl font-black text-white italic flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
        >
          JMD Motors <span className="text-xs sm:text-sm font-normal not-italic text-[#e9bcb7] bg-white/5 px-2 py-0.5 rounded border border-white/10">ADMIN</span>
        </Link>

        {/* Desktop Admin Links */}
        <nav className="hidden md:flex space-x-6">
          {adminLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-[#e8001d] border-b-2 border-[#e8001d] pb-1 transition-all duration-300"
                    : "text-white/70 hover:text-white transition-colors duration-300"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side controls: Logout & Hamburger */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/"
            className="bg-[#e8001d] text-white px-3 sm:px-6 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider hover:bg-[#c00016] transition-colors flex items-center gap-1.5 sm:gap-2"
          >
            <span className="material-symbols-outlined text-sm">logout</span>
            <span className="hidden xs:inline">Logout</span>
          </Link>

          {/* Admin Mobile Toggle Button */}
          <button
            type="button"
            onClick={() => setIsAdminOpen((prev) => !prev)}
            aria-label={isAdminOpen ? "Close admin menu" : "Open admin menu"}
            aria-expanded={isAdminOpen}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#e8001d]/60 cursor-pointer"
          >
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 ease-out rounded-full ${
                isAdminOpen ? "rotate-45 translate-y-1.5 bg-[#e8001d]" : "-translate-y-1"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-200 ease-out rounded-full ${
                isAdminOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 ease-out rounded-full ${
                isAdminOpen ? "-rotate-45 -translate-y-1.5 bg-[#e8001d]" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Admin Mobile Backdrop Overlay */}
      <div
        className={`fixed inset-0 top-20 bg-black/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isAdminOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsAdminOpen(false)}
        aria-hidden="true"
      />

      {/* Admin Mobile Menu Drawer */}
      <div
        className={`fixed top-20 left-0 right-0 w-full z-40 md:hidden bg-[#0d0d0d]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out overflow-y-auto max-h-[calc(100vh-5rem)] font-['Inter'] ${
          isAdminOpen
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-3 pointer-events-none invisible"
        }`}
      >
        <div className="flex flex-col p-5 space-y-1.5">
          {adminLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsAdminOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-[#e8001d]/15 text-[#e8001d] border-l-4 border-[#e8001d] pl-3.5 font-bold"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xl opacity-80">{link.icon}</span>
                  <span>{link.label}</span>
                </div>
                <span className="material-symbols-outlined text-sm opacity-40">arrow_forward_ios</span>
              </Link>
            );
          })}

          <div className="pt-4 mt-3 border-t border-white/10">
            <Link
              href="/"
              onClick={() => setIsAdminOpen(false)}
              className="bg-[#e8001d] text-white py-3 px-4 rounded-sm text-xs font-semibold uppercase tracking-wider hover:bg-[#c00016] transition-colors flex items-center justify-center gap-2 w-full text-center"
            >
              <span className="material-symbols-outlined text-sm">logout</span> Exit Admin to Main Site
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

