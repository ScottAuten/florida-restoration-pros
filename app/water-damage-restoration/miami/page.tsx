import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { CITIES, SITE } from '@/lib/siteConfig';

const city = CITIES.find((c) => c.slug === 'miami')!;

export const metadata: Metadata = {
  title: 'Water Damage Restoration Miami FL | Sea Level & High-Rise Experts | The Florida Restoration Pros',
  description:
    'IICRC-certified water damage restoration in Miami, FL. 24/7 emergency response, sea-level flooding, high-rise HOA water intrusion, saltwater specialists. Call (786) 347-3624.',
  alternates: { canonical: `${SITE.siteUrl}/water-damage-restoration/miami/` },
};

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.siteUrl}/water-damage-restoration/miami/#local`,
  name: SITE.businessName,
  url: `${SITE.siteUrl}/water-damage-restoration/miami/`,
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
  areaServed: { '@type': 'City', name: 'Miami', containedIn: { '@type': 'State', name: 'Florida' } },
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
      name: 'Does Miami face flooding even without storms?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Miami Beach and low-lying Miami-Dade neighborhoods experience "sunny-day flooding" from king tides — predictable high tides that push saltwater up through storm drains, flooding streets and parking garages with no rain. Sunny-day flooding events on Miami Beach have increased approximately 400% since 2006 as sea levels have risen. This flooding enters buildings through garage drains, elevator pits, and ground-floor unit door sweeps — creating water damage events without any weather event.' },
    },
    {
      '@type': 'Question',
      name: 'What does the Surfside collapse teach us about water damage in Miami high-rises?',
      acceptedAnswer: { '@type': 'Answer', text: 'The 2021 Champlain Towers South collapse in Surfside brought national attention to the role of saltwater intrusion and drainage failures in Miami-Dade high-rise structural deterioration. The subsequent grand jury report identified saltwater penetration into the pool deck and parking garage, inadequate drainage maintenance, and failure to address documented water damage as contributing factors. Miami-Dade\'s 40-year and 50-year recertification process now requires documented water intrusion assessments, making professional restoration documentation a legal necessity for building management.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly do you respond to water damage emergencies in Miami?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Florida Restoration Pros targets a 60-minute response window across Miami-Dade including Brickell, Coconut Grove, Coral Gables, Wynwood, Edgewater, Miami Beach, Cutler Bay, and surrounding communities. Our dispatchers answer every call 24 hours a day, 7 days a week, in English and Spanish — Hablamos español.' },
    },
    {
      '@type': 'Question',
      name: 'How do you handle water damage in a Miami condo or high-rise?',
      acceptedAnswer: { '@type': 'Answer', text: 'High-rise water damage events in Miami typically involve multiple affected units when a pipe failure or roof drain backup occurs on an upper floor. The Florida Restoration Pros coordinates directly with building management and HOA boards, documents all affected units separately for individual insurance claims, and manages the building access and elevator logistics required for large-scale multi-unit drying operations. We provide the documented assessment reports now required under Miami-Dade\'s recertification process.' },
    },
    {
      '@type': 'Question',
      name: 'How fast does mold grow after water damage in Miami\'s climate?',
      acceptedAnswer: { '@type': 'Answer', text: 'Miami averages over 75% relative humidity year-round — among the highest of any major U.S. city. Per EPA guidelines, mold spores can germinate on wet materials within 24 to 48 hours in subtropical conditions. In Miami\'s climate, mold colonization on drywall and carpet can begin in as little as 12–24 hours during summer months when both temperature and humidity peak. Every water damage event in Miami should be treated as a mold prevention emergency from the moment it is discovered.' },
    },
  ],
};

export default function MiamiPage() {
  return (
    <>
      <JsonLd data={LOCAL_BUSINESS} />
      <JsonLd data={FAQ_SCHEMA} />

      <nav className="bg-light-100 border-b border-light-200 px-6 py-2 text-sm text-navy-600">
        <div className="max-w-7xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span>/</span>
          <span className="text-navy-800 font-semibold">Water Damage Restoration Miami FL</span>
        </div>
      </nav>

      <section className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-4 py-1.5 mb-5">
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">● 24/7 Emergency — Miami FL · Hablamos Español</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Miami Water Damage Restoration</h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-200 text-lg max-w-2xl mb-8">
            IICRC-certified restoration across Miami-Dade — 60-minute response to Brickell, Coconut Grove, Coral Gables, Wynwood, Miami Beach, and all surrounding communities. Sea-level flooding and high-rise specialists. Hablamos español.
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
            The Florida Restoration Pros provides 24/7 emergency water damage restoration in Miami, FL, targeting 60-minute on-site arrival. We specialize in sea-level king tide flooding, high-rise and condo water intrusion, saltwater damage, and Miami-Dade recertification documentation. English and Spanish. Call <a href={`tel:${city.phone}`} className="text-orange-600 hover:underline">{city.phone}</a> now.
          </p>
        </div>
      </section>

      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Why Miami Water Damage Is a Year-Round Emergency</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <p className="text-navy-700 leading-relaxed mb-4">
                Miami faces water damage risk that no other American city fully shares: the combination of sea-level rise, king tide sunny-day flooding, high-rise structural vulnerability, and the most extreme humidity levels of any major U.S. metro. Unlike storm surge events that occur intermittently, Miami&rsquo;s sea-level flooding is now a routine occurrence — not a rare catastrophe.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                Miami Beach has documented approximately a 400% increase in sunny-day flooding events since 2006. Saltwater now routinely enters buildings through garage drains, elevator pits, and ground-floor door sweeps during predictable king tide events in September and October each year. This salt-laden water creates the same accelerated corrosion and persistent moisture issues as any other saltwater intrusion — metal degradation, hygroscopic crystal formation in concrete, and mold colonization within hours in Miami&rsquo;s high-humidity environment.
              </p>
              <p className="text-navy-700 leading-relaxed">
                The 2021 Champlain Towers South collapse in Surfside permanently changed Miami-Dade&rsquo;s regulatory approach to water damage in high-rise buildings. Miami-Dade County&rsquo;s 40-year and 50-year recertification process now requires documented structural assessments that explicitly address water intrusion and drainage failures. Building management and HOA boards are legally responsible for maintaining professional documentation of all water damage events — and our technicians provide the reports that satisfy these requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Miami&rsquo;s Water Damage Risk Factors</h3>
              <ul className="space-y-3">
                {[
                  { heading: 'Sea-Level King Tide Flooding', detail: 'Sunny-day flooding events on Miami Beach have increased ~400% since 2006. Saltwater enters buildings through drains and garage floors with no rainfall.' },
                  { heading: 'High-Rise HOA Intrusion', detail: 'Post-Surfside: pipe failures and drainage issues in high-rises affect multiple units and require documented recertification assessments under Miami-Dade law.' },
                  { heading: 'Hurricane Irma Surge', detail: 'Irma (2017) pushed 3–6 feet of surge into Brickell and Coconut Grove. Legacy incomplete remediation creates ongoing mold risk in affected units.' },
                  { heading: 'Extreme Humidity', detail: 'Miami averages 75%+ relative humidity year-round. Mold colonization can begin within 12–24 hours in summer months — faster than any other FL metro.' },
                  { heading: 'Saltwater Corrosion', detail: 'Miami\'s marine environment means even freshwater intrusion events carry airborne salt that accelerates corrosion of metals, rebar, and HVAC components.' },
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
          <h2 className="section-heading text-center mb-2">Water Damage Services in Miami</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { title: 'Emergency Water Extraction', href: '/services/emergency-water-removal/', detail: '60-minute response. Saltwater and contaminated water handled with full Cat 3 containment. Multilingual crew — hablamos español.' },
              { title: 'High-Rise & Condo Restoration', href: '/contact/', detail: 'Multi-unit coordination with building management and HOA boards. Miami-Dade recertification documentation provided. Elevator and access logistics managed.' },
              { title: 'Sea-Level & King Tide Remediation', href: '/contact/', detail: 'Specialized protocol for saltwater sunny-day flooding via drains and garage floors. Salt crystal removal and extended desiccant drying for concrete slabs.' },
              { title: 'Structural Drying', href: '/services/structural-drying/', detail: 'Industrial desiccant dehumidifiers for Miami\'s extreme humidity. Daily moisture readings. Thermal imaging confirms complete drying in high-rise concrete construction.' },
              { title: 'Mold Remediation', href: '/services/mold-remediation/', detail: 'AMRT-certified mold response. Miami\'s humidity means mold risk begins within 12–24 hours in summer. Irma-legacy properties assessed for pre-existing mold conditions.' },
              { title: 'Contents Restoration', href: '/services/contents-restoration/', detail: 'High-value art, electronics, and documents treated with specialized protocols. Pack-out/pack-back coordinated with building management for multi-unit events.' },
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
          <h2 className="section-heading text-white text-center mb-2">Our Miami Restoration Process</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { step: '01', title: 'Emergency Dispatch', detail: '60-minute response. Saltwater events receive immediate Cat 3 containment. High-rise events: crew coordinates with building management on arrival.' },
              { step: '02', title: 'Assessment & Containment', detail: 'Saltwater source and category confirmed. Miami-Dade recertification documentation started immediately. Affected units identified and isolated.' },
              { step: '03', title: 'Desiccant Drying', detail: 'Miami\'s extreme humidity requires desiccant units. Extended drying cycles for concrete high-rise construction. Daily FLIR thermal imaging confirms hidden moisture removal.' },
              { step: '04', title: 'Documentation & Rebuild', detail: 'Xactimate scope. Miami-Dade 40/50-year recertification report. HOA board briefing. Public adjuster coordination if requested. Multilingual communication.' },
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
          <h2 className="section-heading mb-4">Miami Neighborhoods We Serve</h2>
          <div className="orange-rule-left" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
            {['Brickell','Coconut Grove','Coral Gables','Wynwood','Edgewater','Miami Beach','South Beach','Cutler Bay','Homestead','Aventura','Doral','Hialeah','Little Havana','Pinecrest','Palmetto Bay','North Miami'].map((n) => (
              <div key={n} className="bg-light-100 border border-light-200 px-4 py-2 text-sm font-semibold text-navy-700">{n}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="section-heading mb-4">Miami Water Damage Insurance & HOA Claims</h2>
              <div className="orange-rule-left" />
              <p className="text-navy-700 leading-relaxed mb-4">
                Miami water damage claims are among the most complex in the country, involving the intersection of standard homeowner policies, NFIP flood insurance, HOA master policies, and increasingly, Miami-Dade building recertification requirements. Our technicians navigate all of these simultaneously.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                In high-rise and condo situations, individual unit owners and the HOA board may each have coverage obligations for the same event. We document all affected areas separately — individual units AND common elements — so each party can file independently. We provide building management the written assessment reports now required under Miami-Dade&rsquo;s recertification process.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Miami-Dade&rsquo;s public adjuster culture means many property owners engage third-party advocates for major claims. The Florida Restoration Pros works effectively with public adjusters, providing the technical documentation they need to support supplement filing and ensure full Replacement Cost Value recovery.
              </p>
            </div>
            <div className="space-y-4">
              <div className="card-light">
                <h3 className="font-bold text-navy-800 mb-2">Miami Claim Documentation</h3>
                <ul className="space-y-2 text-sm text-navy-700">
                  {['Saltwater vs freshwater source documentation','Multi-unit condo claim separation','Miami-Dade 40/50-year recertification reports','NFIP and private flood policy documentation','Public adjuster coordination and support','HOA master policy vs unit owner allocation','High-rise Cat 3 containment certification'].map((d) => (
                    <li key={d} className="flex gap-2"><span className="text-orange-500 font-bold flex-shrink-0">✓</span>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-500 p-5">
                <p className="text-white font-bold mb-1">Miami water damage — llamenos ahora</p>
                <p className="text-orange-100 text-sm mb-3">24/7 emergency. English &amp; Spanish. 60-minute response.</p>
                <a href={`tel:${city.phone}`} className="block bg-white text-orange-500 font-bold text-center py-2.5 text-sm tracking-wide hover:bg-orange-50 transition-colors">{city.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Miami Water Damage FAQ</h2>
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
          <p className="text-white font-bold text-2xl mb-2">Miami water damage? Mold starts in hours — not days.</p>
          <p className="text-orange-100 mb-6">Miami&rsquo;s humidity accelerates mold faster than anywhere in Florida. Call now for immediate dispatch. Hablamos español.</p>
          <a href={`tel:${city.phone}`} className="inline-block bg-white text-orange-500 font-bold px-10 py-4 text-lg tracking-wide hover:bg-orange-50 transition-colors">☎ {city.phone} — Available 24/7</a>
        </div>
      </section>
    </>
  );
}
