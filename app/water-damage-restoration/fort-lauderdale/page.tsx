import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { CITIES, SITE } from '@/lib/siteConfig';

const city = CITIES.find((c) => c.slug === 'fort-lauderdale')!;

export const metadata: Metadata = {
  title: 'Water Damage Restoration Fort Lauderdale FL | King Tide & Flood Experts | The Florida Restoration Pros',
  description:
    'IICRC-certified water damage restoration in Fort Lauderdale, FL. April 2023 flood veterans, king tide specialists, canal seepage experts. 24/7 emergency. (954) 636-6057.',
  alternates: { canonical: `${SITE.siteUrl}/water-damage-restoration/fort-lauderdale/` },
};

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.siteUrl}/water-damage-restoration/fort-lauderdale/#local`,
  name: SITE.businessName,
  url: `${SITE.siteUrl}/water-damage-restoration/fort-lauderdale/`,
  telephone: city.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: city.streetAddress,
    addressLocality: city.addressLocality,
    addressRegion: city.addressRegion,
    postalCode: city.postalCode,
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: city.geo.lat, longitude: city.geo.lng },
  areaServed: { '@type': 'City', name: 'Fort Lauderdale', containedIn: { '@type': 'State', name: 'Florida' } },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was the April 2023 Fort Lauderdale flood the worst in history?',
      acceptedAnswer: { '@type': 'Answer', text: 'The April 12, 2023 rainfall event recorded approximately 25.91 inches of rain in roughly 12 hours over Fort Lauderdale — a statistical 1-in-1,000-year precipitation event that triggered a state of emergency declaration. Fort Lauderdale-Hollywood International Airport recorded 21+ inches in one day. The event flooded thousands of homes and businesses, closed major roads for days, and exposed the limitations of the city\'s stormwater infrastructure in canal-dense neighborhoods like Victoria Park, Rio Vista, and the Las Olas Isles.' },
    },
    {
      '@type': 'Question',
      name: 'What is king tide flooding and how does it affect Fort Lauderdale homes?',
      acceptedAnswer: { '@type': 'Answer', text: 'King tides are predictable high tides that occur when the sun, moon, and Earth align, pushing tidal water 1–3 feet above normal high tide. In Fort Lauderdale, king tides — which typically peak in September and October — push saltwater backward through drainage systems and canal networks, causing "sunny-day flooding" in the lowest-lying neighborhoods even with no rain. In September 2025, Fort Lauderdale recorded 41 tidal events above flood threshold. Saltwater intrusion through drains and seawalls carries different damage characteristics than fresh water: salt accelerates corrosion of metals, stains masonry, and creates conditions where mold establishes faster.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly do you respond to water damage emergencies in Fort Lauderdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Florida Restoration Pros targets a 60-minute response window across Fort Lauderdale and Broward County including Victoria Park, Rio Vista, Las Olas Isles, Southeast Isles, Seven Isles, Lauderdale-by-the-Sea, Wilton Manors, and surrounding communities. Our dispatchers answer every call 24 hours a day, 7 days a week.' },
    },
    {
      '@type': 'Question',
      name: 'Does saltwater flood damage require different restoration than freshwater?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Salt-laden stormwater from king tide events or canal seepage is classified as Category 3 (black water) under the IICRC S500 standard regardless of visual appearance. Saltwater accelerates corrosion of metal studs, fasteners, and HVAC components; leaves hygroscopic salt crystals that continue drawing moisture even after visible drying; and creates elevated mold risk because salt-damaged materials hold residual moisture at a microscopic level. Our technicians treat all coastal saltwater intrusion as Cat 3 and apply the appropriate protocol.' },
    },
    {
      '@type': 'Question',
      name: 'What is the Fortify Lauderdale program and will it prevent future flooding?',
      acceptedAnswer: { '@type': 'Answer', text: 'Fortify Lauderdale is the city\'s approximately $1.6 billion stormwater and resilience infrastructure program designed to address chronic flooding in low-lying areas through improved drainage, stormwater pump stations, seawall improvements, and approximately 200 tidal backflow valves. While the program will reduce flooding frequency and severity over time, properties in the lowest flood-risk zones will continue to experience water intrusion during major rainfall events and extreme king tides until full infrastructure completion.' },
    },
  ],
};

export default function FortLauderdalePage() {
  return (
    <>
      <JsonLd data={LOCAL_BUSINESS} />
      <JsonLd data={FAQ_SCHEMA} />

      <nav className="bg-light-100 border-b border-light-200 px-6 py-2 text-sm text-navy-600">
        <div className="max-w-7xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span>/</span>
          <span className="text-navy-800 font-semibold">Water Damage Restoration Fort Lauderdale FL</span>
        </div>
      </nav>

      <section className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-4 py-1.5 mb-5">
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">● 24/7 Emergency Response — Fort Lauderdale FL</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Fort Lauderdale Water Damage Restoration</h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-200 text-lg max-w-2xl mb-8">
            IICRC-certified restoration across Broward County — 60-minute response to Victoria Park, Rio Vista, Las Olas Isles, Southeast Isles, and all Fort Lauderdale neighborhoods. April 2023 flood veterans and king tide specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${city.phone}`} className="btn-primary text-base uppercase tracking-wider text-center">☎ Call {city.phone}</a>
            <Link href="/contact/" className="btn-ghost text-sm uppercase tracking-wider text-center">Request Free Inspection</Link>
          </div>
        </div>
      </section>

      <section id="aeo-answer" className="max-w-7xl mx-auto px-6 py-10">
        <div className="aeo-block">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Quick Answer</p>
          <p className="text-navy-900 text-lg font-semibold leading-relaxed">
            The Florida Restoration Pros provides 24/7 emergency water damage restoration in Fort Lauderdale, FL, targeting 60-minute on-site arrival. We specialize in April 2023-type extreme rainfall events, king tide saltwater intrusion, canal seepage, and the full range of South Florida flood damage scenarios. Call <a href={`tel:${city.phone}`} className="text-orange-600 hover:underline">{city.phone}</a> now.
          </p>
        </div>
      </section>

      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Fort Lauderdale&rsquo;s Unique Flood Risk Profile</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <p className="text-navy-700 leading-relaxed mb-4">
                Fort Lauderdale sits on one of the most flood-exposed coastal geographies in the United States: a low-elevation, canal-dense landscape where saltwater from the Atlantic Ocean, the Intracoastal Waterway, and dozens of residential canals can enter properties from multiple directions simultaneously. No other major Florida city combines extreme rainfall events, routine king tide flooding, and saltwater canal intrusion in the same geography.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                The April 12, 2023 event redefined &ldquo;worst case&rdquo; for Fort Lauderdale. Approximately 25.91 inches of rainfall in roughly 12 hours — a statistical 1-in-1,000-year precipitation event — flooded thousands of properties, overwhelmed the stormwater system, and triggered a state of emergency declaration. Properties in Victoria Park, Rio Vista, and the Las Olas finger isles flooded from below (stormwater drains backing up) and from above (direct rainfall) simultaneously.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Beyond extreme events, Fort Lauderdale faces a chronic flooding pattern driven by king tides: predictable high tides driven by lunar and solar alignment that push sea level 1–3 feet above normal. In September 2025, the city recorded 41 tidal events above its flood threshold. King tides push saltwater backward through drainage systems, causing &ldquo;sunny-day flooding&rdquo; with no rain, and the salt content of this water creates damage mechanisms — metal corrosion, persistent hygroscopic moisture, accelerated mold — that differ from standard freshwater events.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Fort Lauderdale&rsquo;s Water Damage Risk Factors</h3>
              <ul className="space-y-3">
                {[
                  { heading: 'April 2023 Event Legacy', detail: 'The 25.91" 1-in-1,000-year rainfall exposed every property in low-lying areas to extreme stormwater flooding. Incomplete remediation from this event creates ongoing mold and structural risk.' },
                  { heading: 'King Tide Flooding', detail: '41 tidal flood threshold events in Sep 2025 alone. Sunny-day saltwater intrusion via drains in Victoria Park, Las Olas Isles, and Southeast Isles is now routine.' },
                  { heading: 'Saltwater Corrosion', detail: 'Canal and king tide water is salt-laden. Salt accelerates metal corrosion, penetrates masonry, and holds residual moisture even after visible drying — requiring Cat 3 protocol.' },
                  { heading: 'Canal & Seawall Seepage', detail: 'Finger-isle and waterfront properties face groundwater seepage through seawalls and slab foundations during high tide events.' },
                  { heading: 'Mold Acceleration', detail: 'Salt-damaged materials combined with South Florida humidity create mold colonization conditions within 24 hours — faster than freshwater events.' },
                ].map((r) => (
                  <li key={r.heading} className="flex gap-3">
                    <span className="text-orange-500 font-bold mt-0.5">→</span>
                    <span className="text-navy-700"><strong className="text-navy-800">{r.heading}:</strong> {r.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Water Damage Services in Fort Lauderdale</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { title: 'Emergency Water Extraction', href: '/services/emergency-water-removal/', detail: '60-minute response. Cat 3 saltwater intrusion handled with full containment. Truck-mounted extractors remove standing water before salt penetrates building materials.' },
              { title: 'King Tide Saltwater Remediation', href: '/contact/', detail: 'Specialized protocol for salt-laden canal and tidal intrusion. Includes antimicrobial treatment, salt crystal removal, and corrosion assessment of metal structural components.' },
              { title: 'Flood Damage Restoration', href: '/services/flood-damage-restoration/', detail: 'Full-scope recovery from the April 2023 type extreme rainfall events. Complete documentation for state emergency declarations and private flood insurance claims.' },
              { title: 'Structural Drying', href: '/services/structural-drying/', detail: 'Desiccant dehumidifiers remove hygroscopic salt moisture that standard LGR units miss. Thermal imaging confirms complete drying in waterfront slab-on-grade homes.' },
              { title: 'Mold Remediation', href: '/services/mold-remediation/', detail: 'AMRT-certified mold response. April 2023 legacy properties and king tide-affected homes face accelerated mold risk from salt-damaged materials and residual moisture.' },
              { title: 'Canal & Seawall Seepage', href: '/contact/', detail: 'Assessment and documentation for groundwater seepage through seawall foundations and slab edges during high tide events — common in Victoria Park and the finger isles.' },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="card-light hover:border-orange-300 transition-colors block">
                <h3 className="text-lg font-bold text-navy-800 mb-2">{s.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{s.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-white text-center mb-2">Our Fort Lauderdale Restoration Process</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { step: '01', title: 'Emergency Dispatch', detail: '60-minute response. Saltwater events receive immediate Cat 3 containment protocol — PPE, negative air pressure, full isolation before extraction begins.' },
              { step: '02', title: 'Water Source & Category', detail: 'Canal/tidal water assessed for salt content and contamination. Delmhorst moisture readings establish baseline. FLIR thermal identifies hidden pathways.' },
              { step: '03', title: 'Desiccant Drying', detail: 'Hygroscopic salts require desiccant dehumidifiers rather than standard LGR units. Extended drying cycles for salt-contaminated concrete slab and masonry.' },
              { step: '04', title: 'Documentation & Rebuild', detail: 'Xactimate scope. NFIP and private flood documentation. State emergency claim support. Corrosion assessment for metal HVAC and structural components.' },
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
          <h2 className="section-heading mb-4">Fort Lauderdale Neighborhoods We Serve</h2>
          <div className="orange-rule-left" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
            {['Victoria Park','Rio Vista','Las Olas Isles','Southeast Isles','Seven Isles','Lauderdale-by-the-Sea','Wilton Manors','Oakland Park','Coral Ridge','Middle River Terrace','Tarpon River','Colee Hammock','Flagler Village','Downtown Fort Lauderdale','Pompano Beach','Deerfield Beach'].map((n) => (
              <div key={n} className="bg-light-100 border border-light-200 px-4 py-2 text-sm font-semibold text-navy-700">{n}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="section-heading mb-4">Fort Lauderdale Flood Insurance Claims</h2>
              <div className="orange-rule-left" />
              <p className="text-navy-700 leading-relaxed mb-4">
                Fort Lauderdale&rsquo;s flood insurance landscape is among the most complex in the state. Canal-front and finger-isle properties typically carry both a standard homeowner policy (for sudden/accidental water damage) and a separate NFIP or private flood policy (for rising water). The April 2023 event and recurring king tide events create situations where multiple policies are triggered simultaneously, and proper documentation of the water source is critical to maximizing recovery.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                Saltwater intrusion events require special attention in the claim: salt damage to metals, masonry, and flooring systems is often not fully visible until weeks after the event, and initial claim scopes frequently undervalue the damage. Our technicians write comprehensive Xactimate scopes that account for corrosion progression, extended drying requirements, and the higher labor cost of Cat 3 protocol.
              </p>
              <p className="text-navy-700 leading-relaxed">
                The Fortify Lauderdale infrastructure program ($1.6B) and the city&rsquo;s ongoing tidal valve installation (~200 valves) indicate the municipality&rsquo;s recognition that flooding is a chronic condition, not an exceptional event. Properties in the lowest flood zones should maintain current NFIP policies and document all water events — even minor ones — as part of a claim history.
              </p>
            </div>
            <div className="space-y-4">
              <div className="card-light">
                <h3 className="font-bold text-navy-800 mb-2">Fort Lauderdale Claim Documentation</h3>
                <ul className="space-y-2 text-sm text-navy-700">
                  {['Saltwater vs freshwater source documentation','NFIP and private flood policy claim filing','April 2023 legacy damage assessment','King tide pattern documentation for chronic claims','Salt corrosion assessment on metals and HVAC','Xactimate scope with Cat 3 labor rates','State emergency declaration claim support'].map((d) => (
                    <li key={d} className="flex gap-2"><span className="text-orange-500 font-bold flex-shrink-0">✓</span>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-500 p-5">
                <p className="text-white font-bold mb-1">Fort Lauderdale flooding?</p>
                <p className="text-orange-100 text-sm mb-3">Salt water requires Cat 3 protocol. Call immediately.</p>
                <a href={`tel:${city.phone}`} className="block bg-white text-orange-500 font-bold text-center py-2.5 text-sm tracking-wide hover:bg-orange-50 transition-colors">{city.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Fort Lauderdale Water Damage FAQ</h2>
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
          <h3 className="font-bold text-navy-800 mb-4">Water Damage Resources</h3>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="https://www.iicrc.org" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">IICRC — Institute of Inspection, Cleaning and Restoration Certification</a>
            <a href="https://www.epa.gov/mold/mold-cleanup-your-home" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">EPA Mold Cleanup Guidelines</a>
            <a href="https://www.fema.gov/flood-insurance" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">FEMA National Flood Insurance Program</a>
          </div>
          <p className="text-xs text-steel-400 mt-6">This page was researched and produced in support of Brain b32bfc21 — The Florida Restoration Pros content development initiative. NAP: {city.streetAddress}, {city.addressLocality}, {city.addressRegion} {city.postalCode} · {city.phone}.</p>
        </div>
      </section>

      <section className="bg-orange-500 py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white font-bold text-2xl mb-2">Fort Lauderdale flood or water damage? Don&rsquo;t wait.</p>
          <p className="text-orange-100 mb-6">Salt water damage accelerates corrosion and mold faster than freshwater. Immediate response is critical.</p>
          <a href={`tel:${city.phone}`} className="inline-block bg-white text-orange-500 font-bold px-10 py-4 text-lg tracking-wide hover:bg-orange-50 transition-colors">☎ {city.phone} — Available 24/7</a>
        </div>
      </section>
    </>
  );
}
