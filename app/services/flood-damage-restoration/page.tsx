import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { SITE, CITIES } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Flood Damage Restoration Florida | Cat 1-3 Water | The Florida Restoration Pros',
  description:
    'Full-scope flood damage restoration across Florida. Category 1, 2 & 3 water events. Hurricane flooding, pipe failures, stormwater intrusion. IICRC-certified. 24/7 emergency.',
  alternates: { canonical: `${SITE.siteUrl}/services/flood-damage-restoration/` },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between Category 1, 2, and 3 flood water?',
      acceptedAnswer: { '@type': 'Answer', text: 'The IICRC S500 standard defines three contamination categories: Category 1 (clean water) comes from sanitary sources — supply line breaks, tub overflows, appliance failures with clean water. Category 2 (gray water) carries significant contamination and can cause illness if ingested — dishwasher overflow, toilet overflow (urine only), washing machine discharge. Category 3 (black water) is grossly contaminated and poses serious health risk — sewage backups, flooding from rivers and canals, stormwater flooding, and seawater. Category 3 requires full containment, PPE, and demolition of all affected porous materials.' },
    },
    {
      '@type': 'Question',
      name: 'Does hurricane flooding require special restoration protocol?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Storm surge and hurricane flooding is classified as Category 3 (black water) under the IICRC S500 standard because floodwater from external sources carries sewage, agricultural runoff, animal waste, and chemical contaminants regardless of its visual appearance. All porous materials (drywall, insulation, flooring, carpet) that contact Category 3 water must be removed rather than dried in place. The work environment must be contained and maintained under negative air pressure with HEPA filtration to protect workers and unaffected areas.' },
    },
    {
      '@type': 'Question',
      name: 'What are moisture classes in water damage restoration?',
      acceptedAnswer: { '@type': 'Answer', text: 'IICRC S500 defines four moisture classes based on the amount of water absorption and the materials affected. Class 1 (least) involves minimal absorption — only part of a room affected. Class 2 involves the entire room with water absorbed into carpet and lower walls. Class 3 involves water absorbed into walls above the "24-inch line" (ceiling, upper walls, insulation). Class 4 involves deeply-held moisture in materials like hardwood, plaster, concrete, or masonry that require specialty drying equipment and extended drying times. Florida\'s humidity means Class 4 conditions develop faster than in drier climates.' },
    },
    {
      '@type': 'Question',
      name: 'How do you document flood damage for FEMA or insurance?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our technicians document all flood damage in formats accepted by FEMA individual assistance programs, NFIP adjusters, and private insurance carriers: moisture readings at every affected surface using Delmhorst meters, FLIR thermal imaging for hidden moisture, photo inventory of all structural and contents damage, written IICRC category and class determination, and a complete Xactimate-formatted scope of mitigation work. We communicate directly with your adjuster and can provide supplement documentation when initial claim estimates are inadequate.' },
    },
  ],
};

export default function FloodDamageRestorationPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />

      <nav className="bg-light-100 border-b border-light-200 px-6 py-2 text-sm text-navy-600">
        <div className="max-w-7xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span>/</span>
          <Link href="/services/" className="hover:text-orange-500">Services</Link>
          <span>/</span>
          <span className="text-navy-800 font-semibold">Flood Damage Restoration</span>
        </div>
      </nav>

      <section className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-4 py-1.5 mb-5">
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">● 24/7 Emergency — Cat 1, 2 & 3 Water</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Flood Damage Restoration</h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-200 text-lg max-w-2xl mb-8">
            Full-scope flood recovery from Category 1 clean water through Category 3 sewage and stormwater contamination. IICRC-certified structural assessment, debris removal, and complete insurance documentation across Florida.
          </p>
          <a href={`tel:${SITE.phone}`} className="btn-primary text-base uppercase tracking-wider">☎ Call Now — {SITE.phone}</a>
        </div>
      </section>

      <section id="aeo-answer" className="max-w-7xl mx-auto px-6 py-10">
        <div className="aeo-block">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Quick Answer</p>
          <p className="text-navy-900 text-lg font-semibold leading-relaxed">
            Flood damage restoration is the full-scope process of recovering a property after water intrusion — from emergency extraction through structural drying, demolition of non-salvageable materials, and rebuild to pre-loss condition. The Florida Restoration Pros handles all three IICRC water categories and all four moisture classes. Call <a href={`tel:${SITE.phone}`} className="text-orange-600 hover:underline">{SITE.phone}</a> for immediate dispatch.
          </p>
        </div>
      </section>

      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Water Categories &amp; What They Mean</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { cat: 'Category 1', label: 'Clean Water', color: 'border-t-4 border-green-500', sources: ['Supply line breaks', 'Appliance overflows (clean water)', 'Tub/sink overflow (clean)', 'Rainwater (roof leaks)'], protocol: 'Standard extraction and drying. Porous materials may be dried in place if addressed within 24–48 hours.' },
              { cat: 'Category 2', label: 'Gray Water', color: 'border-t-4 border-yellow-500', sources: ['Dishwasher overflow', 'Washing machine discharge', 'Toilet overflow (urine only)', 'Aquarium leaks'], protocol: 'Antimicrobial treatment required. Porous materials typically removed. Enhanced containment and PPE.' },
              { cat: 'Category 3', label: 'Black Water', color: 'border-t-4 border-red-600', sources: ['Sewage backups', 'Stormwater / hurricane flooding', 'River and canal flooding', 'Seawater intrusion'], protocol: 'Full containment, negative air pressure, HEPA filtration required. All porous materials removed. Extended remediation protocol.' },
            ].map((c) => (
              <div key={c.cat} className={`card-light ${c.color}`}>
                <p className="font-bold text-navy-800 text-lg">{c.cat}</p>
                <p className="text-orange-500 font-semibold text-sm mb-3">{c.label}</p>
                <p className="text-xs font-bold text-navy-600 uppercase tracking-wider mb-2">Common Sources</p>
                <ul className="space-y-1 mb-4">
                  {c.sources.map((s) => (
                    <li key={s} className="text-sm text-navy-700 flex gap-2"><span className="text-orange-500">•</span>{s}</li>
                  ))}
                </ul>
                <p className="text-xs font-bold text-navy-600 uppercase tracking-wider mb-1">Protocol</p>
                <p className="text-sm text-navy-700">{c.protocol}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Flood Restoration Process</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { step: '01', title: 'Emergency Response', detail: 'Crew dispatched within minutes. 60-minute response target. Category assessment on arrival determines containment level immediately.' },
              { step: '02', title: 'Containment & Extraction', detail: 'Cat 3 events: full containment established before extraction begins. All water categories: standing water removed completely with truck-mounted and portable units.' },
              { step: '03', title: 'Demolition & Drying', detail: 'Non-salvageable materials (Cat 3-affected drywall, flooring, insulation) removed. Industrial drying equipment installed for salvageable structural materials.' },
              { step: '04', title: 'Documentation & Rebuild', detail: 'Complete Xactimate scope. NFIP and private carrier documentation. Rebuild to pre-loss condition with licensed contractors.' },
            ].map((p) => (
              <div key={p.step} className="bg-navy-800 p-6">
                <div className="text-3xl font-bold text-orange-400 mb-3">{p.step}</div>
                <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                <p className="text-steel-300 text-sm leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Florida Flood Types We Restore</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              { title: 'Hurricane & Storm Surge Flooding', detail: 'Cat 3 protocol. Storm surge from the Gulf, Atlantic, or Tampa Bay carries marine contamination. All affected porous materials removed. Documentation supports NFIP claims.' },
              { title: 'River & Canal Flooding', detail: 'St. Johns River tidal flooding in Jacksonville; canal overflows in Fort Lauderdale\'s finger isles. Riverine water is Cat 3 — full containment required.' },
              { title: 'Extreme Rainfall Events', detail: 'Events like Fort Lauderdale\'s April 2023 25.91" rainfall overwhelm stormwater systems. Stormwater flooding is Cat 3 regardless of source.' },
              { title: 'Sewage Backup & Overflow', detail: 'Cat 3 regardless of volume. Floor drain backups, main line failures, and municipal sewer surcharging all require full Cat 3 remediation protocol.' },
              { title: 'Pipe Burst & Supply Line Failure', detail: 'Cat 1 clean water requiring prompt extraction and drying. Florida\'s aging plumbing stock (pre-2002 galvanized) creates high pipe burst frequency in older neighborhoods.' },
              { title: 'King Tide & Saltwater Intrusion', detail: 'Miami Beach and Fort Lauderdale canal properties. Salt-laden water requires desiccant drying and corrosion assessment beyond standard freshwater protocol.' },
            ].map((f) => (
              <div key={f.title} className="card-light">
                <h3 className="font-bold text-navy-800 mb-2">{f.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{f.detail}</p>
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
          <h2 className="section-heading text-center mb-2">Flood Damage Restoration FAQ</h2>
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
            <a href="https://www.iicrc.org" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">IICRC S500 Standard</a>
            <a href="https://www.epa.gov/mold/mold-cleanup-your-home" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">EPA Mold Guidelines</a>
            <a href="https://www.fema.gov/flood-insurance" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">FEMA Flood Insurance</a>
          </div>
          <p className="text-xs text-steel-400 mt-4">This page was researched and produced in support of Brain b32bfc21 — The Florida Restoration Pros content development initiative.</p>
        </div>
      </section>

      <section className="bg-orange-500 py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white font-bold text-2xl mb-2">Flood damage in your Florida home or business?</p>
          <p className="text-orange-100 mb-6">24/7 response across Tampa, Orlando, Jacksonville, Fort Lauderdale, and Miami. IICRC-certified Cat 1–3 protocol.</p>
          <a href={`tel:${SITE.phone}`} className="inline-block bg-white text-orange-500 font-bold px-10 py-4 text-lg tracking-wide hover:bg-orange-50 transition-colors">☎ {SITE.phone} — Available 24/7</a>
        </div>
      </section>
    </>
  );
}
