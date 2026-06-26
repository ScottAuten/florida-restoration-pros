'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SITE, CITIES } from '@/lib/siteConfig';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/water-damage-restoration/tampa/', label: 'Tampa' },
  { href: '/water-damage-restoration/orlando/', label: 'Orlando' },
  { href: '/water-damage-restoration/jacksonville/', label: 'Jacksonville' },
  { href: '/water-damage-restoration/fort-lauderdale/', label: 'Fort Lauderdale' },
  { href: '/water-damage-restoration/miami/', label: 'Miami' },
  { href: '/contact/', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Emergency bar */}
      <div className="bg-orange-500 py-1.5 px-4 text-center">
        <a
          href={`tel:${SITE.phone}`}
          className="text-white font-semibold text-sm tracking-wide hover:text-orange-100 transition-colors"
        >
          ☎ 24/7 EMERGENCY RESPONSE — {SITE.phone} — We Pick Up Every Call
        </a>
      </div>

      {/* Main nav */}
      <div className="bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none group">
            <span className="text-white font-bold text-lg tracking-tight group-hover:text-orange-300 transition-colors">
              The Florida Restoration Pros
            </span>
            <span className="text-steel-300 text-xs tracking-wider uppercase">
              IICRC Certified · 24/7 Emergency
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-5">
              <Link href="/" className="text-steel-200 text-sm hover:text-orange-300 transition-colors">
                Home
              </Link>
              <div className="group relative">
                <button className="text-steel-200 text-sm hover:text-orange-300 transition-colors flex items-center gap-1">
                  Cities <span className="text-xs opacity-60">▾</span>
                </button>
                <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-navy-900 shadow-xl py-2 min-w-[180px] border border-navy-700">
                  {CITIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/water-damage-restoration/${c.slug}/`}
                      className="px-4 py-2 text-sm text-steel-200 hover:bg-navy-700 hover:text-orange-300 transition-colors whitespace-nowrap"
                    >
                      {c.city}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/services/emergency-water-removal/" className="text-steel-200 text-sm hover:text-orange-300 transition-colors">
                Services
              </Link>
              <Link href="/contact/" className="text-steel-200 text-sm hover:text-orange-300 transition-colors">
                Contact
              </Link>
            </div>
            <a
              href={`tel:${SITE.phone}`}
              className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold px-5 py-2 tracking-wide transition-colors whitespace-nowrap"
            >
              Call Now: {SITE.phone}
            </a>
          </nav>

          {/* Mobile toggle + phone */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${SITE.phone}`}
              className="bg-orange-500 text-white text-xs font-bold px-3 py-2"
            >
              Call Now
            </a>
            <button
              className="text-steel-200 p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-0.5 bg-current mb-1.5" />
              <div className="w-5 h-0.5 bg-current mb-1.5" />
              <div className="w-5 h-0.5 bg-current" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-navy-900 border-t border-navy-700 px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-steel-200 text-sm py-1 hover:text-orange-300 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phone}`}
              className="bg-orange-500 text-white text-sm font-bold px-4 py-2.5 text-center mt-2"
            >
              ☎ Emergency: {SITE.phone}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
