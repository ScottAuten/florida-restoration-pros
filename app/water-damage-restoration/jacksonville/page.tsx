import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { CITIES, SITE } from '@/lib/siteConfig';

const city = CITIES.find((c) => c.slug === 'jacksonville')!;

export const metadata: Metadata = {
  title: 'Water Damage Restoration Jacksonville FL | 60-Min Response | The Florida Restoration Pros',
  description:
    'IICRC-certified water damage restoration in Jacksonville, FL. 24/7 emergency response, St. Johns River flood specialists, historic home experts. Call (904) 371-7252.',
  alternates: { canonical: `${SITE.siteUrl}/water-damage-restoration/jacksonville/` },
};

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.siteUrl}/water-damage-restoration/jacksonville/#local`,
  name: SITE.businessName,
  url: `${SITE.siteUrl}/water-damage-restoration/jacksonville/`,
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
  areaServed: { '@type': 'City', name: 'Jacksonville', containedIn: { '@type': 'State', name: 'Florida' } },
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
      name: 'Why does Jacksonville flood worse than other Florida cities?',
      acceptedAnswer: { '@type': 'Answer', text: 'Jacksonville sits on the St. Johns River — one of the few rivers in North America that flows northward. The river is wide, slow-moving, and highly tidal, which means storm surge from the coast backs up into the river and all its tributaries, compounding flooding in areas miles from the ocean. Hurricane Irma in 2017 set record St. Johns flood levels not seen since 1846, surpassing even Hurricane Dora in 1965. The compound effect of coastal surge plus rainfall overwhelms drainage in riverside neighborhoods like San Marco, Riverside, and Avondale.' },
    },
    {
      '@type': 'Question',
      name: 'Do older Jacksonville homes like those in Riverside and Avondale face higher water damage risk?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Springfield, Riverside, and Avondale contain homes built primarily between 1900 and the 1930s. These properties often have aging galvanized steel plumbing that corrodes from the inside out, original cast-iron drain lines, and crawl-space or basement foundations that predated modern moisture barriers. When these homes flood, the damage penetrates building materials that were never treated with modern water-resistant coatings, requiring IICRC Class 3 and 4 drying protocols for deeply-held moisture.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly do you respond to water damage emergencies in Jacksonville?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Florida Restoration Pros targets a 60-minute response window across Jacksonville including San Marco, Riverside, Avondale, Mandarin, Ponte Vedra, Springfield, Ortega, Southside, and the Atlantic and Neptune beach communities. Our dispatchers answer every call 24 hours a day, 7 days a week.' },
    },
    {
      '@type': 'Question',
      name: 'What should I do immediately after water damage in my Jacksonville home?',
      acceptedAnswer: { '@type': 'Answer', text: 'First, ensure the water source is stopped if safe to do so — turn off the main water supply for a pipe failure, or avoid re-entering if the source is stormwater until the storm has passed. Do not run ceiling fans if the ceiling is saturated (electrical hazard). Do not walk on wet flooring if there is any possibility of subfloor structural damage. Call The Florida Restoration Pros immediately — the 24–48 hour mold colonization window starts from the moment materials become saturated, not from when you call.' },
    },
    {
      '@type': 'Question',
      name: 'Does flood damage from the St. Johns River require special handling?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. St. Johns River flooding that enters a structure is classified as Category 3 (black water) under the IICRC S500 standard because tidal/riverine water carries sewage, agricultural runoff, and biological contaminants. Category 3 water damage requires full containment, antimicrobial treatment, and in most cases removal of all affected porous materials including drywall, insulation, and flooring rather than drying in place.' },
    },
  ],
};

export default function JacksonvillePage() {
  return (
    <>
      <JsonLd data={LOCAL_BUSINESS} />
      <JsonLd data={FAQ_SCHEMA} />

      <nav className="bg-light-100 border-b border-light-200 px-6 py-2 text-sm text-navy-600">
        <div className="max-w-7xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span>/</span>
          <span className="text-navy-800 font-semibold">Water Damage Restoration Jacksonville FL</span>
        </div>
      </nav>

      <section className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-4 py-1.5 mb-5">
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">● 24/7 Emergency Response — Jacksonville FL</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Jacksonville Water Damage Restoration</h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-200 text-lg max-w-2xl mb-8">
            IICRC-certified restoration across Jacksonville — 60-minute response target to San Marco, Riverside, Avondale, Mandarin, Ponte Vedra, and all surrounding neighborhoods. St. Johns River flood specialists.
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
            The Florida Restoration Pros provides 24/7 emergency water damage restoration in Jacksonville, FL, targeting 60-minute on-site arrival. We specialize in St. Johns River tidal flooding (Cat 3 water), historic home restoration, and Irma-legacy water damage remediation. Call <a href={`tel:${city.phone}`} className="text-orange-600 hover:underline">{city.phone}</a> now.
          </p>
        </div>
      </section>

      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Why Jacksonville Faces Exceptional Flood Risk</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <p className="text-navy-700 leading-relaxed mb-4">
                Jacksonville&rsquo;s water damage risk is shaped by a geographic feature that no other major Florida city shares: the St. Johns River. One of the few rivers in North America that flows northward, the St. Johns is wide, shallow, and strongly tidal — meaning its water level rises and falls with ocean tides even 100 miles from the Atlantic coast. During major storms, coastal surge from the ocean backs up into the river mouth and pushes water upstream into every tributary and drainage canal, flooding neighborhoods miles from any beach.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                Hurricane Irma in September 2017 demonstrated this compound flooding mechanism in the most extreme terms Jacksonville had seen in over 150 years. The St. Johns River reached record flood levels not observed since 1846 — surpassing Hurricane Dora in 1965. Riverside, Avondale, San Marco, Ortega, and Springfield experienced flooding in streets and structures that had never flooded before in living memory.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Jacksonville is also Florida&rsquo;s oldest large city, which creates a secondary risk factor: the housing stock in historic neighborhoods like Springfield (Florida&rsquo;s largest historic district), Riverside, and Avondale dates primarily to 1900–1930. These homes have aging galvanized plumbing that corrodes from the inside out, original cast-iron drain systems, and crawl-space or pier-and-beam foundations that predate modern moisture barriers. Water that reaches these structures penetrates building materials in ways that require the most intensive IICRC Class 3 and 4 drying protocols.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Jacksonville&rsquo;s Specific Water Damage Drivers</h3>
              <ul className="space-y-3">
                {[
                  { heading: 'St. Johns River Tidal Flooding', detail: 'Northward-flowing, tidal river backs up ocean surge into neighborhoods miles inland. Category 3 contaminated floodwater requires full containment protocol.' },
                  { heading: 'Historic Home Vulnerability', detail: 'Springfield, Riverside, Avondale homes (1900–1930s) have aging galvanized plumbing, original cast iron, and crawl-space foundations with no modern moisture barriers.' },
                  { heading: 'Irma Legacy Damage', detail: 'Irma 2017 set 1846-era flood records. Properties with incomplete remediation may have hidden moisture and mold from that event that compromises future water damage response.' },
                  { heading: 'Riverfront Zone AE', detail: 'FEMA Zone AE flood zones line the St. Johns and tributaries — mandatory NFIP insurance required, and surge events are routine, not exceptional.' },
                  { heading: 'Beach & Coastal Communities', detail: 'Atlantic Beach, Neptune Beach, and Jacksonville Beach face direct ocean surge and overwash during Atlantic hurricane events.' },
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
          <h2 className="section-heading text-center mb-2">Water Damage Services in Jacksonville</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { title: 'Emergency Water Extraction', href: '/services/emergency-water-removal/', detail: '60-minute response. Truck-mounted extractors remove standing water before it wicks into walls and subfloors. Cat 3 river flood handled with full containment.' },
              { title: 'Flood Damage Restoration', href: '/services/flood-damage-restoration/', detail: 'Full-scope recovery from Cat 1 clean water to Cat 3 St. Johns River contaminated floodwater. Complete documentation for NFIP and homeowner claims.' },
              { title: 'Historic Home Restoration', href: '/contact/', detail: 'Specialized protocols for Springfield, Riverside, and Avondale homes. IICRC Class 3–4 drying for plaster walls, old-growth wood floors, and pier-and-beam substructures.' },
              { title: 'Structural Drying', href: '/services/structural-drying/', detail: 'Industrial dehumidifiers and air movers calibrated for Northeast Florida\'s coastal humidity. Thermal imaging confirms no hidden moisture in historic building materials.' },
              { title: 'Mold Remediation', href: '/services/mold-remediation/', detail: 'AMRT-certified mold assessment. Irma-legacy homes may harbor hidden mold in wall cavities from incomplete 2017 remediation — our technicians identify and address all growth.' },
              { title: 'Contents Restoration', href: '/services/contents-restoration/', detail: 'Antique furniture, original artwork, and historic documents common in Riverside/Avondale homes receive specialized treatment. Pack-out/pack-back with full inventory.' },
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
          <h2 className="section-heading text-white text-center mb-2">Our Jacksonville Restoration Process</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { step: '01', title: 'Emergency Dispatch', detail: '60-minute response target. Crew arrives with truck-mounted extractor, containment materials, moisture meters, and FLIR thermal camera.' },
              { step: '02', title: 'Water Category Assessment', detail: 'St. Johns River floodwater = IICRC Cat 3 (contaminated). Full PPE containment protocol immediately. Clean water sources assigned Cat 1–2.' },
              { step: '03', title: 'Structural Drying', detail: 'Historic home materials (plaster, old-growth wood, masonry) require extended drying cycles. Daily Delmhorst readings track moisture in all material types.' },
              { step: '04', title: 'Documentation & Rebuild', detail: 'Xactimate scope written. NFIP and homeowner claim documentation prepared. Historic preservation guidelines respected in rebuild specifications.' },
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
          <h2 className="section-heading mb-4">Jacksonville Neighborhoods We Serve</h2>
          <div className="orange-rule-left" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
            {['San Marco','Riverside','Avondale','Mandarin','Ponte Vedra','Springfield','Ortega','Southside','Deerwood','Atlantic Beach','Neptune Beach','Jacksonville Beach','Baymeadows','Intracoastal West','Orange Park','Fleming Island'].map((n) => (
              <div key={n} className="bg-light-100 border border-light-200 px-4 py-2 text-sm font-semibold text-navy-700">{n}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="section-heading mb-4">Jacksonville Flood Insurance & Claims</h2>
              <div className="orange-rule-left" />
              <p className="text-navy-700 leading-relaxed mb-4">
                Jacksonville has a higher proportion of FEMA Zone AE flood-mapped properties than any other major Florida city — driven by the St. Johns River network that runs through and around nearly every neighborhood. Homeowners in Zone AE with federally-backed mortgages are required to carry NFIP flood insurance, which is a separate policy from standard homeowner coverage.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                NFIP claims have strict documentation requirements and time-sensitive deadlines. Our technicians begin the claim documentation process on arrival: moisture readings at every affected surface, water source identification, IICRC category and class assignment, and photographic inventory of all structural and contents damage.
              </p>
              <p className="text-navy-700 leading-relaxed">
                For Irma-legacy properties — homes that experienced flooding in 2017 — incomplete remediation can create pre-existing mold conditions that carriers will try to exclude from new claims. Our AMRT technicians can distinguish new moisture damage from pre-existing conditions with thermal imaging and moisture mapping documentation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="card-light">
                <h3 className="font-bold text-navy-800 mb-2">Jacksonville Claim Documentation</h3>
                <ul className="space-y-2 text-sm text-navy-700">
                  {['NFIP and private flood claim documentation','St. Johns River Cat 3 contamination assessment','Historic home pre-loss value documentation','Irma-legacy pre-existing condition analysis','Xactimate scope for both mitigation and rebuild','FEMA Zone AE compliance documentation','Adjuster communication and supplement filing'].map((d) => (
                    <li key={d} className="flex gap-2"><span className="text-orange-500 font-bold flex-shrink-0">✓</span>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-500 p-5">
                <p className="text-white font-bold mb-1">Jacksonville flood emergency?</p>
                <p className="text-orange-100 text-sm mb-3">Cat 3 river water requires immediate containment. Call now.</p>
                <a href={`tel:${city.phone}`} className="block bg-white text-orange-500 font-bold text-center py-2.5 text-sm tracking-wide hover:bg-orange-50 transition-colors">{city.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Jacksonville Water Damage FAQ</h2>
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
          <p className="text-white font-bold text-2xl mb-2">Jacksonville flood or water damage? Call immediately.</p>
          <p className="text-orange-100 mb-6">St. Johns River floodwater is Cat 3 contaminated — every hour of delay increases health and structural risk.</p>
          <a href={`tel:${city.phone}`} className="inline-block bg-white text-orange-500 font-bold px-10 py-4 text-lg tracking-wide hover:bg-orange-50 transition-colors">☎ {city.phone} — Available 24/7</a>
        </div>
      </section>
    </>
  );
}
