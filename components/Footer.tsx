import Link from 'next/link';
import { SITE, CITIES, SERVICES } from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-steel-300">
      {/* Emergency CTA strip */}
      <div className="bg-orange-500 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">Water damage? Don&apos;t wait.</p>
            <p className="text-orange-100 text-sm">Mold begins within 24–48 hours. Call us now — we respond 24/7.</p>
          </div>
          <a
            href={`tel:${SITE.phone}`}
            className="bg-white text-orange-600 font-bold px-8 py-3 text-lg tracking-wide hover:bg-orange-50 transition-colors whitespace-nowrap"
          >
            ☎ {SITE.phone}
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <p className="text-white font-bold text-base mb-1">{SITE.businessName}</p>
          <p className="text-steel-400 text-xs mb-4 leading-relaxed">
            IICRC-certified water damage restoration across Florida. 24/7 emergency response, insurance claims handled.
          </p>
          <div className="flex flex-col gap-1 text-xs text-steel-400">
            <span>✓ IICRC Certified Firm</span>
            <span>✓ WRT · ASD · AMRT Certified</span>
            <span>✓ Licensed & Insured in Florida</span>
            <span>✓ All Insurance Accepted</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</p>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}/`}
                  className="text-steel-300 text-sm hover:text-orange-300 transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cities */}
        <div>
          <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Service Areas</p>
          <ul className="space-y-2">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/water-damage-restoration/${c.slug}/`}
                  className="text-steel-300 text-sm hover:text-orange-300 transition-colors"
                >
                  Water Damage {c.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</p>
          <div className="space-y-3 text-sm text-steel-300">
            <div>
              <p className="text-steel-400 text-xs uppercase tracking-wider mb-1">Emergency Line</p>
              <a href={`tel:${SITE.phone}`} className="text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                {SITE.phone}
              </a>
              <p className="text-steel-500 text-xs mt-0.5">Available 24/7</p>
            </div>
            <div>
              <p className="text-steel-400 text-xs uppercase tracking-wider mb-1">Coverage</p>
              <p>Tampa · Orlando · Jacksonville</p>
              <p>Fort Lauderdale · Miami</p>
            </div>
            <div>
              <Link href="/contact/" className="text-steel-300 hover:text-orange-300 transition-colors text-sm">
                → Schedule Free Inspection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-700 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-steel-500">
          <p>© {new Date().getFullYear()} {SITE.businessName}. All rights reserved.</p>
          <p>
            IICRC Certified · ANSI/IICRC S500 Standard · Licensed Water Damage Contractor
          </p>
        </div>
      </div>
    </footer>
  );
}
