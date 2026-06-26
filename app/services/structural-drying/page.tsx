import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { SITE, CITIES } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Structural Drying Florida | IICRC S500 Protocol | The Florida Restoration Pros',
  description:
    'Professional structural drying across Florida. Industrial desiccant dehumidifiers, daily moisture tracking, FLIR thermal imaging. IICRC WRT/ASD certified. 24/7 emergency.',
  alternates: { canonical: `${SITE.siteUrl}/services/structural-drying/` },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does structural drying take in Florida?',
      acceptedAnswer: { '@type': 'Answer', text: 'Standard structural drying in Florida typically takes 3–5 days for Class 1–2 moisture events, though IICRC S500 defines drying goals in terms of dry standard readings rather than fixed time. Florida\'s high ambient humidity extends drying times compared to drier climates — without adequate dehumidification capacity, ambient moisture re-wets materials. Class 3 (moisture above 24-inch wall line) and Class 4 (deeply-held moisture in concrete, hardwood, or masonry) events often require 5–10+ days.' },
    },
    {
      '@type': 'Question',
      name: 'What is the "dry standard" in water damage restoration?',
      acceptedAnswer: { '@type': 'Answer', text: 'The IICRC S500 standard defines "dry standard" as the moisture content typical of unaffected materials of the same type in the same building — measured before any drying begins on unaffected comparison areas. Drying is complete when affected materials reach the same moisture content as unaffected materials in the same environment. Our technicians take dry standard readings at project initiation and document affected material readings daily until the dry standard is achieved.' },
    },
    {
      '@type': 'Question',
      name: 'Why does Florida need desiccant dehumidifiers instead of refrigerant units?',
      acceptedAnswer: { '@type': 'Answer', text: 'Refrigerant dehumidifiers cool air below its dew point to condense moisture. They lose efficiency as humidity decreases. Desiccant dehumidifiers absorb moisture directly into a rotating desiccant wheel and remain highly effective even at low humidity. In Florida\'s baseline high-humidity environment, desiccant units are often deployed alongside refrigerant units to drive humidity low enough for complete structural drying, particularly in Class 3–4 events and structures with concrete or masonry construction.' },
    },
    {
      '@type': 'Question',
      name: 'What is thermal imaging used for in structural drying?',
      acceptedAnswer: { '@type': 'Answer', text: 'FLIR thermal imaging cameras detect temperature differences on surfaces — evaporative cooling from wet materials causes cooler surface temperatures visible on thermal images. Thermal imaging identifies hidden moisture inside walls, under flooring, above ceilings, and in structural cavities where penetrating meters cannot reach. Per IICRC S500 guidelines, thermal imaging is a visual screening tool — any area flagged must be confirmed with a penetrating moisture meter. Our daily drying logs include thermal images and meter readings at every monitored location.' },
    },
  ],
};

export default function StructuralDryingPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />

      <nav className="bg-light-100 border-b border-light-200 px-6 py-2 text-sm text-navy-600">
        <div className="max-w-7xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span>/</span>
          <Link href="/services/" className="hover:text-orange-500">Services</Link>
          <span>/</span>
          <span className="text-navy-800 font-semibold">Structural Drying</span>
        </div>
      </nav>

      <section className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-4 py-1.5 mb-5">
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">● IICRC S500 Protocol — WRT & ASD Certified</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Structural Drying</h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-200 text-lg max-w-2xl mb-8">
            Industrial drying systems designed for Florida&rsquo;s subtropical humidity. IICRC WRT/ASD-certified technicians. Daily moisture documentation. FLIR thermal imaging. Deployed 24/7 across all five Florida metro areas.
          </p>
          <a href={`tel:${SITE.phone}`} className="btn-primary text-base uppercase tracking-wider">☎ Call Now — {SITE.phone}</a>
        </div>
      </section>

      <section id="aeo-answer" className="max-w-7xl mx-auto px-6 py-10">
        <div className="aeo-block">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Quick Answer</p>
          <p className="text-navy-900 text-lg font-semibold leading-relaxed">
            Structural drying is the science-driven process of removing moisture from building materials after water damage using industrial dehumidifiers and directed-air equipment, monitored daily until IICRC S500 dry standard is achieved. In Florida&rsquo;s subtropical climate, professional-grade equipment is essential — household fans cannot overcome ambient humidity. Call <a href={`tel:${SITE.phone}`} className="text-orange-600 hover:underline">{SITE.phone}</a> for same-day equipment deployment.
          </p>
        </div>
      </section>

      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Why Florida Needs Professional-Grade Drying</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <p className="text-navy-700 leading-relaxed mb-4">
                Florida averages 50–75% relative humidity year-round — the highest baseline of any major U.S. metro. This creates a critical problem for structural drying: household fans and consumer dehumidifiers add airflow to an already humid environment, which can spread moisture rather than remove it from structure if not properly calculated and positioned.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                IICRC S500-compliant drying requires a calculated drying system — a specific ratio of airflow (measured in CFM) to dehumidification capacity (pints per day per 1,000 cubic feet) calibrated for the ambient conditions and moisture class of the affected area. In Florida, this system must overcome both the moisture in the structure and the constant re-loading from ambient humidity penetrating from outside.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Our technicians calculate the drying system at project initiation, document daily psychrometric readings (temperature, relative humidity, and specific humidity), and adjust equipment placement based on daily moisture meter readings. Drying is declared complete only when all affected materials reach their dry standard as defined by unaffected comparison materials in the same building.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-800 mb-4">IICRC Moisture Classes</h3>
              <div className="space-y-3">
                {[
                  { cls: 'Class 1', detail: 'Least moisture absorption. Only part of a room affected. Minimal wet carpet, no wet pad. Fastest drying times — typically 2–3 days.' },
                  { cls: 'Class 2', detail: 'Significant absorption. Entire room affected. Carpet and pad wet. Water wicked into walls 12–24 inches. Typical residential flood event — 3–5 days.' },
                  { cls: 'Class 3', detail: 'Greatest absorption into structure. Moisture above 24-inch wall line — upper walls, ceiling, insulation. Requires cavity drying and extended equipment time.' },
                  { cls: 'Class 4', detail: 'Specialty drying. Hardwood, concrete, plaster, masonry, crawl spaces. Deep-held moisture requires specialty equipment and 7–14+ day drying cycles.' },
                ].map((c) => (
                  <div key={c.cls} className="flex gap-4 border-l-4 border-orange-500 pl-4">
                    <div>
                      <p className="font-bold text-navy-800 text-sm">{c.cls}</p>
                      <p className="text-navy-600 text-sm">{c.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Structural Drying Equipment</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { title: 'Commercial Desiccant Dehumidifiers', detail: 'High-capacity desiccant units for Florida\'s baseline humidity. Effective even as relative humidity drops toward completion — unlike refrigerant units that lose efficiency at low humidity.' },
              { title: 'LGR Refrigerant Dehumidifiers', detail: 'Low-grain refrigerant dehumidifiers maintain efficiency at moderate humidity levels. Deployed alongside desiccant units in large-area events to maximize total moisture removal capacity.' },
              { title: 'High-Velocity Air Movers', detail: 'Calculated-CFM air movers directed at wet surfaces accelerate evaporation. Positioned per IICRC drying zone protocol. Adjusted daily based on moisture readings.' },
              { title: 'FLIR Thermal Imaging', detail: 'Infrared cameras identify hidden moisture via thermal differentials. Every project documented with daily thermal images showing drying progress through walls and floors.' },
              { title: 'Penetrating Moisture Meters', detail: 'Pin-type meters confirm moisture content in wood framing, drywall, and subfloor at documented locations. Daily readings track progress to dry standard.' },
              { title: 'Drying Chamber Systems', detail: 'For Class 3–4 events, sealed drying chambers concentrate dehumidification capacity within wall cavities or floor assemblies to achieve drying unreachable by surface air movers.' },
            ].map((e) => (
              <div key={e.title} className="card-light">
                <h3 className="font-bold text-navy-800 mb-2">{e.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{e.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-white text-center mb-2">The Structural Drying Process</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { step: '01', title: 'System Calculation', detail: 'Moisture class determined. Total affected volume calculated. Equipment quantities calculated per IICRC ratios. Dry standard readings taken on unaffected materials.' },
              { step: '02', title: 'Equipment Placement', detail: 'Air movers positioned per drying zone protocol. Dehumidifiers placed for maximum coverage. Thermal images baseline documented. Day 1 moisture readings logged.' },
              { step: '03', title: 'Daily Monitoring', detail: 'Technician returns daily. Psychrometric data logged. Moisture meter readings at all documented locations. Equipment adjusted as materials dry progressively.' },
              { step: '04', title: 'Dry Standard Achieved', detail: 'All affected materials match dry standard. Final thermal images confirm no hidden wet areas. Equipment removed. Complete drying log provided for insurance claim.' },
            ].map((p) => (
              <div key={p.step} className="bg-navy-700 p-6">
                <div className="text-3xl font-bold text-orange-400 mb-3">{p.step}</div>
                <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                <p className="text-steel-300 text-sm leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Service Areas</h2>
          <div className="orange-rule" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {CITIES.map((c) => (
              <Link key={c.slug} href={`/water-damage-restoration/${c.slug}/`} className="card-light text-center hover:border-orange-300 transition-colors">
                <p className="font-bold text-navy-800">{c.city}</p>
                <p className="text-orange-500 text-sm mt-1">{c.phone}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Structural Drying FAQ</h2>
          <div className="orange-rule" />
          <div className="mt-8 space-y-4">
            {FAQ_SCHEMA.mainEntity.map((q) => (
              <details key={q.name} className="border border-light-200 group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-navy-800 hover:text-orange-600 list-none flex justify-between items-center">
                  {q.name}
                  <span className="text-orange-500 font-bold text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-navy-700 leading-relaxed border-t border-light-200 pt-4">{q.acceptedAnswer.text}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-50 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="https://www.iicrc.org" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">IICRC S500 Standard for Professional Water Damage Restoration</a>
            <a href="https://www.epa.gov/mold/mold-cleanup-your-home" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">EPA Mold Cleanup Guidelines</a>
            <a href="https://www.fema.gov/flood-insurance" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">FEMA Flood Insurance</a>
          </div>
          <p className="text-xs text-steel-400 mt-4">This page was researched and produced in support of Brain b32bfc21 — The Florida Restoration Pros content development initiative.</p>
        </div>
      </section>

      <section className="bg-orange-500 py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white font-bold text-2xl mb-2">Water damage in your Florida property?</p>
          <p className="text-orange-100 mb-6">Our IICRC-certified structural drying teams deploy 24/7. We document everything for your insurance claim.</p>
          <a href={`tel:${SITE.phone}`} className="inline-block bg-white text-orange-500 font-bold px-10 py-4 text-lg tracking-wide hover:bg-orange-50 transition-colors">☎ {SITE.phone} — Available 24/7</a>
        </div>
      </section>
    </>
  );
}
