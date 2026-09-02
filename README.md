# JMD Motors Luxury Dealership - Next.js Conversion

The **JMD Motors Luxury Dealership** website has been converted into a high-performance **Next.js (App Router)** application located in [`jmd-motors-nextjs`](file:///c:/Users/sadab/Downloads/stitch_jmd_motors_luxury_dealership/stitch_jmd_motors_luxury_dealership/jmd-motors-nextjs).

---

## 🚀 Migrated Routes & Features

| Route | Original HTML Screen | Description |
|---|---|---|
| **`/`** | `jmd_motors_home/code.html` | Hero showroom banner, interactive search/filter bar, Why Choose Us, featured cars with WhatsApp CTA, sell CTA banner, callback request & showroom map. |
| **`/buy`** | `browse_cars_jmd_motors/code.html` | Inventory catalog with brand/price/year filter sidebar, car cards with specs & badges, pagination. |
| **`/sell`** | `sell_your_car_jmd_motors/code.html` | Free valuation form, instant price quote, 3-step process cards, transparency badges. |
| **`/about`** | `our_story_jmd_motors/code.html` | Founder quote, brand mission, key statistics counter, team curator profiles. |
| **`/contact`** | `contact_us_jmd_motors/code.html` | Inquiry submission form, direct phone/WhatsApp lines, interactive showroom map & operating hours. |
| **`/car/[slug]`** | `2021_maruti_swift_zxi_jmd_motors/code.html` | Vehicle detail page with thumbnail gallery, specs pills, tabbed specs, sticky price action card & related cars. |
| **`/admin`** | `admin_dashboard_jmd_motors/code.html` | Admin dashboard with KPI metrics, inventory stats, recent enquiries table. |
| **`/admin/cars`** | `add_new_car_jmd_motors_admin/code.html` | Inventory management and add new car form with specs, image upload dropzone & publish controls. |
| **`/admin/enquiries`** | `enquiries_management_jmd_motors_admin/code.html` | Lead management dashboard with status filters, source badges, WhatsApp quick actions, CSV export. |
| **`/admin/settings`** | Extended Admin | Dealership configuration, notification preferences & contact info settings. |

---

## 🎨 Theme & Architecture Highlights

- **Tailwind CSS Design System**: Custom luxury dark palette (`#000000`, `#111111`, `#1A1A1A`, `#E8001D`, `#ffdad6`).
- **Typography**: Google Fonts integration for **Space Grotesk** and **Inter**.
- **Material Symbols**: Integrated icon system across all navigation and UI elements.
- **Shared Components**:
  - `Navbar.js`: Dynamic client-side navbar with route highlighting and dedicated Admin header mode.
  - `Footer.js`: Complete dealership footer with inventory, services, and company links.
  - `WhatsAppIcon.js`: Optimized inline SVG for direct WhatsApp lead generation.

---

## 🛠️ How to Run

Navigate into the project directory and start the dev server:

```bash
cd jmd-motors-nextjs
npm run dev
```

Visit `http://localhost:3000` to view the application.
