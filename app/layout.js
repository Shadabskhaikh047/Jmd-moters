import "./globals.css";

export const metadata = {
  title: "JMD Motors - Find Your Perfect Drive",
  description: "500+ Verified Pre-Owned Cars. Zero Waiting. Full Transparency. Buy Your Dream Car Without Any Waiting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Space+Grotesk:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-[Inter] text-base antialiased selection:bg-[#e8001d] selection:text-white">
        {children}
      </body>
    </html>
  );
}
