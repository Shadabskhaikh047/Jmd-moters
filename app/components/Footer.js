import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 w-full border-t border-zinc-900 grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16">
      <div className="flex flex-col gap-4">
        <span className="text-xl font-black text-white italic font-['Space_Grotesk']">JMD Motors</span>
        <p className="font-['Space_Grotesk'] text-sm text-zinc-400 max-w-xs">
          Buy Your Dream Car Without Any Waiting. Premium pre-owned vehicles with complete transparency.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-['Space_Grotesk'] text-base text-white uppercase tracking-wider mb-2 font-semibold">Inventory</h4>
        <Link className="font-['Space_Grotesk'] text-sm text-zinc-500 hover:text-red-500 transition-colors transition-transform duration-300 hover:translate-x-1" href="/buy">All Cars</Link>
        <Link className="font-['Space_Grotesk'] text-sm text-zinc-500 hover:text-red-500 transition-colors transition-transform duration-300 hover:translate-x-1" href="/#featured">Featured Deals</Link>
        <Link className="font-['Space_Grotesk'] text-sm text-zinc-500 hover:text-red-500 transition-colors transition-transform duration-300 hover:translate-x-1" href="/buy">Recently Sold</Link>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-['Space_Grotesk'] text-base text-white uppercase tracking-wider mb-2 font-semibold">Services</h4>
        <Link className="font-['Space_Grotesk'] text-sm text-zinc-500 hover:text-red-500 transition-colors transition-transform duration-300 hover:translate-x-1" href="/buy">Financing</Link>
        <Link className="font-['Space_Grotesk'] text-sm text-zinc-500 hover:text-red-500 transition-colors transition-transform duration-300 hover:translate-x-1" href="/sell">Valuation</Link>
        <Link className="font-['Space_Grotesk'] text-sm text-zinc-500 hover:text-red-500 transition-colors transition-transform duration-300 hover:translate-x-1" href="/sell">Sell Your Car</Link>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-['Space_Grotesk'] text-base text-white uppercase tracking-wider mb-2 font-semibold">Company</h4>
        <Link className="font-['Space_Grotesk'] text-sm text-zinc-500 hover:text-red-500 transition-colors transition-transform duration-300 hover:translate-x-1" href="/about">Our Story</Link>
        <Link className="font-['Space_Grotesk'] text-sm text-zinc-500 hover:text-red-500 transition-colors transition-transform duration-300 hover:translate-x-1" href="/contact">Contact Us</Link>
        <Link className="font-['Space_Grotesk'] text-sm text-zinc-500 hover:text-red-500 transition-colors transition-transform duration-300 hover:translate-x-1" href="#">Privacy Policy</Link>
      </div>
      <div className="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-zinc-900 flex justify-between items-center">
        <p className="font-['Space_Grotesk'] text-sm text-zinc-400">© 2024 JMD Motors. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a className="text-zinc-500 hover:text-red-500 transition-colors" href="#">
            <span className="material-symbols-outlined">share</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
