import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { CITIES, SITE } from '@/lib/siteConfig';

const city = CITIES.find((c) => c.slug === 'tampa')!;

export const metadata: Metadata = {
  title: 'Water Damage Restoration Tampa FL | 60-Min Response | The Florida Restoration Pros',
  description:
    'IICRC-certified water damage restoration in Tampa, FL. 24/7 emergency response targeting 60-minute arrival. Surge damage, pipe bursts, flood cleanup. Call (813) 212-5279.',
  alternates: { canonical: `${SITE.siteUrl}/water-damage-restoration/tampa/` },
};

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.siteUrl}/water-damage-restoration/tampa/#local`,
  name: SITE.businessName,
  url: `${SITE.siteUrl}/water-damage-restoration/tampa/`,
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
  areaServed: { '@type': 'City', name: 'Tampa', containedIn: { '@type': 'State', name: 'Florida' } },
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
      name: 'How quickly can you reach my Tampa home after a water damage emergency?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Florida Restoration Pros targets a 60-minute response window across Tampa and its surrounding neighborhoods — South Tampa, Hyde Park, Davis Islands, Seminole Heights, Channelside, and Bayshore. Our dispatchers answer every call 24 hours a day, 7 days a week, including holidays.' },
    },
    {
      '@type': 'Question',
      name: 'Is Tampa at high risk for storm surge water damage?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Tampa Bay is considered one of the most surge-vulnerable metros in the United States due to the bay\'s shallow shelf and funnel shape. Hurricanes Idalia (2023) flooded Davis Islands, Harbor Island, and Bayshore Boulevard, and Hurricane Milton (2024) triggered mandatory evacuations across low-lying South Tampa zones. Flood-damaged properties need professional extraction and drying within 24–48 hours to prevent Category 3 mold colonization per EPA guidelines.' },
    },
    {
      '@type': 'Question',
      name: 'Does my Tampa homeowner insurance cover water damage?',
      acceptedAnswer: { '@type': 'Answer', text: 'Standard homeowner policies in Florida cover sudden and accidental water damage (burst pipes, appliance failures, roof leaks) but NOT storm surge or rising floodwater — that requires a separate NFIP or private flood policy. Our technicians document all damage with moisture readings and thermal imaging in Xactimate format, which your adjuster requires. We communicate directly with your carrier throughout the process.' },
    },
    {
      '@type': 'Question',
      name: 'How long does structural drying take in Tampa\'s humid climate?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most residential drying projects in Tampa reach ANSI/IICRC S500 dry standards in 3–5 days under controlled conditions. Tampa\'s average relative humidity of 74% year-round accelerates mold risk on wet materials, which is why professional industrial dehumidifiers — not household fans — are required. Our Phoenix and Dri-Eaz LGR equipment is calibrated for Florida\'s subtropical environment.' },
    },
    {
      '@type': 'Question',
      name: 'Do you handle both mitigation and full restoration in Tampa?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Mitigation covers emergency loss-prevention — water extraction, structural drying, content stabilization. Restoration covers rebuilding to pre-loss condition: drywall, flooring, painting. We handle both phases and document each separately for your insurance claim to ensure full Replacement Cost Value recovery.' },
    },
  ],
};

export default function TampaPage() {
  return (
    <>
      <JsonLd data={LOCAL_BUSINESS} />
      <JsonLd data={FAQ_SCHEMA} />

      {/* Breadcrumb */}
      <nav className="bg-light-100 border-b border-light-200 px-6 py-2 text-sm text-navy-600">
        <div className="max-w-7xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span>/</span>
          <span className="text-navy-800 font-semibold">Water Damage Restoration Tampa FL</span>
        </div>
      </nav>

      {/* Page hero */}
      <section className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-4 py-1.5 mb-5">
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">● 24/7 Emergency Response — Tampa FL</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Tampa Water Damage Restoration</h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-200 text-lg max-w-2xl mb-8">
            IICRC-certified crews serving Tampa Bay since day one — targeting 60-minute response to South Tampa, Hyde Park, Davis Islands, Seminole Heights, Channelside, and all surrounding neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${city.phone}`} className="btn-primary text-base uppercase tracking-wider text-center">
              ☎ Call {city.phone}
            </a>
            <Link href="/contact/" className="btn-ghost text-sm uppercase tracking-wider text-center">
              Request Free Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* AEO Answer block */}
      <section id="aeo-answer" className="max-w-7xl mx-auto px-6 py-10">
        <div className="aeo-block">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Quick Answer</p>
          <p className="text-navy-900 text-lg font-semibold leading-relaxed">
            The Florida Restoration Pros provides 24/7 emergency water damage restoration in Tampa, FL, targeting 60-minute on-site arrival. Our WRT/ASD/AMRT-certified technicians extract standing water, apply industrial drying equipment, and document all damage for your insurance claim — all in compliance with the ANSI/IICRC S500-2021 standard. Call <a href={`tel:${city.phone}`} className="text-orange-600 hover:underline">{city.phone}</a> now.
          </p>
        </div>
      </section>

      {/* Why Tampa is uniquely at risk */}
      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Why Tampa Properties Face Extreme Water Damage Risk</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <p className="text-navy-700 leading-relaxed mb-4">
                Tampa Bay sits at the convergence of three serious water damage risk factors that no other major Florida metro combines in the same way: hurricane storm surge vulnerability, aging pre-2002 housing stock with deteriorating plumbing, and year-round subtropical humidity that turns any moisture event into a potential mold crisis within 48 hours.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                According to the Karen Clark &amp; Company 2015 catastrophe model, Tampa Bay ranks as one of the most surge-vulnerable metropolitan areas in the United States. The bay&rsquo;s shallow shelf and funnel shape amplify surge from direct-hit storms in ways that inland Florida cities simply don&rsquo;t experience. Hurricane Idalia in August 2023 demonstrated this in real time — flooding Davis Islands, Harbor Island, Bayshore Boulevard, and portions of South Tampa even as a Category 3 storm making landfall well north of the metro. Hurricane Milton in October 2024 prompted mandatory evacuation orders across multiple South Tampa zones.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Beyond hurricanes, Tampa&rsquo;s summer convective storm pattern — afternoon downpours that can drop 3–5 inches in under an hour — regularly overwhelms older drainage infrastructure, particularly in Seminole Heights, Palma Ceia, and Ballast Point. The Hillsborough County stormwater system serves pre-WWII neighborhoods that were never designed for current impervious-surface runoff loads, and the approximately $39M stormwater improvement project announced in April 2025 acknowledges the ongoing infrastructure gap.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Tampa&rsquo;s Specific Water Damage Drivers</h3>
              <ul className="space-y-3">
                {[
                  { heading: 'Storm Surge', detail: 'Low coastal elevation + shallow Tampa Bay shelf amplifies hurricane surge into South Tampa and waterfront neighborhoods.' },
                  { heading: 'Aging Plumbing Stock', detail: 'Pre-2002 homes in Hyde Park, Seminole Heights, and Palma Ceia often have galvanized or cast-iron supply and drain lines nearing end-of-life.' },
                  { heading: 'Rapid Mold Window', detail: 'Average 74% relative humidity means mold can colonize wet drywall in 24–48 hours — EPA confirms this risk for subtropical climates.' },
                  { heading: 'Flash Flooding', detail: 'Summer convective storms regularly overwhelm stormwater infrastructure in low-lying inland neighborhoods.' },
                  { heading: 'High-Rise & Condo Water Intrusion', detail: 'Channelside and downtown high-rises face pipe failures and roof-drain backups that can affect multiple units simultaneously.' },
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

      {/* Services in Tampa */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Water Damage Restoration Services in Tampa</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { title: 'Emergency Water Extraction', href: '/services/emergency-water-removal/', detail: 'Truck-mounted and portable extractors deployed within 60 minutes of your call, 24/7. Standing water is removed before it wicks into walls and subfloors.' },
              { title: 'Flood Damage Restoration', href: '/services/flood-damage-restoration/', detail: 'Full-scope recovery from Category 1 clean water to Category 3 sewage or stormwater intrusion. Complete documentation for your insurance carrier.' },
              { title: 'Structural Drying', href: '/services/structural-drying/', detail: 'Industrial desiccant dehumidifiers and air movers dry walls, floors, and cavities to ANSI/IICRC S500 standards. Thermal imaging confirms completion.' },
              { title: 'Mold Remediation', href: '/services/mold-remediation/', detail: 'AMRT-certified assessment and containment. Tampa\'s humidity makes mold remediation a near-certain follow-on to any water event not dried within 48 hours.' },
              { title: 'Contents Restoration', href: '/services/contents-restoration/', detail: 'Document drying, electronics stabilization, textile cleaning, and pack-out/pack-back for your belongings while the structure is dried and rebuilt.' },
              { title: 'Insurance Claim Documentation', href: '/contact/', detail: 'Xactimate-formatted moisture reports, thermal imaging, and written scope of work that your adjuster needs. We communicate directly with your carrier.' },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="card-light hover:border-orange-300 transition-colors block">
                <h3 className="text-lg font-bold text-navy-800 mb-2">{s.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{s.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Restoration process */}
      <section className="bg-navy-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-white text-center mb-2">Our Tampa Restoration Process</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { step: '01', title: 'Emergency Dispatch', detail: 'Call received, crew dispatched. 60-minute target response to Tampa metro. Crew arrives with truck-mounted extractor and full drying kit.' },
              { step: '02', title: 'Assessment & Extraction', detail: 'IICRC moisture class (1–4) and water category (Cat 1–3) determined. Standing water extracted. Delmhorst and FLIR thermal readings document moisture map.' },
              { step: '03', title: 'Structural Drying', detail: 'Air movers, LGR dehumidifiers, and desiccant units installed. Daily readings track drying progress. S500 goal: equilibrium moisture content in structural materials.' },
              { step: '04', title: 'Documentation & Rebuild', detail: 'Complete Xactimate scope written. Insurance adjuster briefed. Mold clearance testing if applicable. Rebuild coordinated through licensed contractors.' },
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

      {/* Neighborhoods */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Tampa Neighborhoods We Serve</h2>
          <div className="orange-rule-left" />
          <p className="text-navy-700 leading-relaxed mb-6 max-w-3xl">
            Our Tampa crews are positioned to reach every neighborhood in the metro — from surge-prone waterfront areas to inland communities with drainage challenges.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              'South Tampa', 'Hyde Park', 'Davis Islands', 'Harbor Island',
              'Bayshore', 'Palma Ceia', 'Ballast Point', 'Seminole Heights',
              'Channelside', 'Ybor City', 'Westshore', 'Carrollwood',
              'New Tampa', 'Brandon', 'Riverview', 'Temple Terrace',
            ].map((n) => (
              <div key={n} className="bg-light-100 border border-light-200 px-4 py-2 text-sm font-semibold text-navy-700">
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance section */}
      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="section-heading mb-4">Tampa Water Damage Insurance Claims</h2>
              <div className="orange-rule-left" />
              <p className="text-navy-700 leading-relaxed mb-4">
                Florida homeowner insurance claims for water damage — the most common claim type in the state — require documentation that meets carrier standards from the first hour. When you call The Florida Restoration Pros, our technician begins the insurance documentation process immediately: moisture readings at every affected surface, photographic inventory, and a written scope in Xactimate format before we leave.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                Understanding the difference between <strong>mitigation</strong> (emergency loss-prevention work billed under the emergency service line item) and <strong>restoration</strong> (rebuild to pre-loss condition) is critical to maximizing your Replacement Cost Value. Many Tampa homeowners leave insurance money on the table because their restoration contractor fails to distinguish these two phases in the written scope.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Important: standard homeowner policies cover sudden and accidental water damage but do NOT cover storm surge or rising floodwater from external sources. If your Tampa property flooded from Hillsborough Bay or a storm-driven tidal surge, you need a separate NFIP or private flood policy. We can help you document the damage regardless of coverage type.
              </p>
            </div>
            <div className="space-y-4">
              <div className="card-light">
                <h3 className="font-bold text-navy-800 mb-2">What We Document for Your Carrier</h3>
                <ul className="space-y-2 text-sm text-navy-700">
                  {[
                    'Moisture map with Delmhorst readings at every affected surface',
                    'FLIR thermal imaging showing hidden moisture behind walls',
                    'Photographic inventory of all water-damaged areas and contents',
                    'Written IICRC category (Cat 1–3) and class (1–4) determination',
                    'Xactimate-formatted scope of mitigation work',
                    'Daily drying logs with equipment placement and readings',
                    'Final clearance documentation when dry standard is reached',
                  ].map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-500 p-5">
                <p className="text-white font-bold mb-1">Need to file a claim now?</p>
                <p className="text-orange-100 text-sm mb-3">Call us first — we start documentation immediately.</p>
                <a href={`tel:${city.phone}`} className="block bg-white text-orange-500 font-bold text-center py-2.5 text-sm tracking-wide hover:bg-orange-50 transition-colors">
                  {city.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Tampa Water Damage FAQ</h2>
          <div className="orange-rule" />
          <div className="mt-8 space-y-4">
            {FAQ_SCHEMA.mainEntity.map((q) => (
              <details key={q.name} className="border border-light-200 group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-navy-800 hover:text-orange-600 list-none flex justify-between items-center">
                  {q.name}
                  <span className="text-orange-500 font-bold text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-navy-700 leading-relaxed border-t border-light-200 pt-4">
                  {q.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Resources + Attribution */}
      <section className="bg-light-50 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-bold text-navy-800 mb-4">Water Damage Resources</h3>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="https://www.iicrc.org" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">
              IICRC — Institute of Inspection, Cleaning and Restoration Certification
            </a>
            <a href="https://www.epa.gov/mold/mold-cleanup-your-home" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">
              EPA Mold Cleanup Guidelines
            </a>
            <a href="https://www.fema.gov/flood-insurance" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">
              FEMA National Flood Insurance Program
            </a>
          </div>
          <p className="text-xs text-steel-400 mt-6">
            This page was researched and produced in support of Brain b32bfc21 — The Florida Restoration Pros content development initiative. NAP: {city.streetAddress}, {city.addressLocality}, {city.addressRegion} {city.postalCode} · {city.phone}.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-orange-500 py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white font-bold text-2xl mb-2">Water damage in Tampa? Every minute matters.</p>
          <p className="text-orange-100 mb-6">Mold colonizes wet materials within 24–48 hours in Florida&rsquo;s humidity. Call now for immediate dispatch.</p>
          <a href={`tel:${city.phone}`} className="inline-block bg-white text-orange-500 font-bold px-10 py-4 text-lg tracking-wide hover:bg-orange-50 transition-colors">
            ☎ {city.phone} — Available 24/7
          </a>
        </div>
      </section>
    </>
  );
}
