import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { CITIES, SITE } from '@/lib/siteConfig';

const city = CITIES.find((c) => c.slug === 'orlando')!;

export const metadata: Metadata = {
  title: 'Water Damage Restoration Orlando FL | 60-Min Response | The Florida Restoration Pros',
  description:
    'IICRC-certified water damage restoration in Orlando, FL. 24/7 emergency response, sinkhole water intrusion specialists, vacation rental damage experts. Call (321) 388-0733.',
  alternates: { canonical: `${SITE.siteUrl}/water-damage-restoration/orlando/` },
};

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.siteUrl}/water-damage-restoration/orlando/#local`,
  name: SITE.businessName,
  url: `${SITE.siteUrl}/water-damage-restoration/orlando/`,
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
  areaServed: { '@type': 'City', name: 'Orlando', containedIn: { '@type': 'State', name: 'Florida' } },
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
      name: 'Can Orlando sinkholes cause water damage inside my home?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Central Florida sits on the "sinkhole alley" karst zone where limestone bedrock dissolves and creates subsurface voids. When a sinkhole event disrupts a foundation slab or underground plumbing, water intrusion can enter through cracks or pipe failures. Under Florida Statute 627.706, catastrophic ground cover collapse is a covered event. Our technicians document all water intrusion pathways and coordinate with structural engineers when sinkhole activity is suspected.' },
    },
    {
      '@type': 'Question',
      name: 'How do you handle water damage in an Orlando vacation rental?',
      acceptedAnswer: { '@type': 'Answer', text: 'Vacation rental properties require fast turnaround because each missed booking day has a direct dollar cost. The Florida Restoration Pros prioritizes rapid extraction and accelerated drying protocols for STR properties. We document both structural damage and rental income loss for comprehensive insurance claims. We work directly with vacation rental management companies and their carriers.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly do you respond to water damage emergencies in Orlando?',
      acceptedAnswer: { '@type': 'Answer', text: 'We target a 60-minute on-site response across the Orlando metro including Dr. Phillips, Lake Nona, Windermere, Winter Park, Baldwin Park, College Park, Conway, and Hunter\'s Creek. Our dispatchers are available 24 hours a day, 7 days a week.' },
    },
    {
      '@type': 'Question',
      name: 'How much rain does Orlando get — and how often does it cause flooding?',
      acceptedAnswer: { '@type': 'Answer', text: 'Orlando averages over 50 inches of rainfall annually, primarily driven by daily summer afternoon thunderstorms that can drop 2–4 inches per hour. This regularly causes flash flooding in low-lying neighborhoods and drainage failures in older communities. Hurricane Ian (2022) and Irma (2017) brought significant flooding across Orange and Osceola counties despite the metro\'s inland position.' },
    },
    {
      '@type': 'Question',
      name: 'What mold risk does Orlando face after water damage?',
      acceptedAnswer: { '@type': 'Answer', text: 'Orlando\'s subtropical humidity averages 74% relative humidity, meaning mold spores can germinate on wet materials within 24–48 hours per EPA guidelines. Central Florida\'s slab-on-grade construction creates moisture traps in wall cavities before visual signs appear. Our AMRT-certified technicians assess for mold risk during every water damage response.' },
    },
  ],
};

export default function OrlandoPage() {
  return (
    <>
      <JsonLd data={LOCAL_BUSINESS} />
      <JsonLd data={FAQ_SCHEMA} />

      <nav className="bg-light-100 border-b border-light-200 px-6 py-2 text-sm text-navy-600">
        <div className="max-w-7xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span>/</span>
          <span className="text-navy-800 font-semibold">Water Damage Restoration Orlando FL</span>
        </div>
      </nav>

      <section className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-4 py-1.5 mb-5">
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">● 24/7 Emergency Response — Orlando FL</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Orlando Water Damage Restoration</h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-200 text-lg max-w-2xl mb-8">
            IICRC-certified restoration across Greater Orlando — 60-minute response target to Winter Park, Dr. Phillips, Lake Nona, Windermere, and all surrounding neighborhoods. Sinkhole intrusion specialists.
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
            The Florida Restoration Pros provides 24/7 emergency water damage restoration in Orlando, FL, targeting 60-minute on-site arrival. Our certified technicians handle summer storm flooding, burst pipes, sinkhole-related intrusion, and vacation rental emergencies. Call <a href={`tel:${city.phone}`} className="text-orange-600 hover:underline">{city.phone}</a> now.
          </p>
        </div>
      </section>

      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Why Orlando Properties Face Unique Water Damage Risks</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <p className="text-navy-700 leading-relaxed mb-4">
                Orlando sits at the heart of Central Florida&rsquo;s karst limestone geology — commonly called &ldquo;sinkhole alley&rdquo; — where dissolution of underground limestone creates subsurface voids that can cause sudden ground movement, crack foundation slabs, and rupture underground plumbing. When a sinkhole event disrupts a home&rsquo;s foundation or water lines, the resulting intrusion can be extensive and hidden within wall cavities before reaching living spaces.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                Under Florida Statute 627.706, catastrophic ground cover collapse is a defined covered peril under standard homeowner policies. However, optional sinkhole coverage for lesser ground movement is a separate policy rider, and many Orlando homeowners do not carry it. Our technicians work alongside structural engineers to document all water pathways when sinkhole activity is suspected, ensuring your claim is properly supported.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Orlando also has the highest concentration of vacation rental and short-term rental properties in the state, with tens of thousands of units serving Disney-area visitors. Water damage in a vacation rental — a burst pipe, AC condensate leak, or storm intrusion — carries an immediate financial impact beyond structural repair: every missed booking night is documented lost rental income that can be claimed under loss-of-use coverage.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Orlando&rsquo;s Water Damage Risk Factors</h3>
              <ul className="space-y-3">
                {[
                  { heading: 'Karst & Sinkhole Risk', detail: 'Limestone dissolution creates subsurface voids that crack slabs and rupture plumbing — a water intrusion pathway unique to Central FL.' },
                  { heading: 'Daily Summer Storms', detail: 'Orlando averages 50+ inches of rain annually. Afternoon convective storms can drop 2–4 inches/hour, overwhelming drainage in low-lying neighborhoods.' },
                  { heading: 'Vacation Rental Volume', detail: 'Tens of thousands of STR properties around Disney and Universal face higher water event frequency from high-occupancy turnover.' },
                  { heading: 'Slab-on-Grade Construction', detail: 'Limited subfloor ventilation traps moisture under flooring and behind baseboards, accelerating hidden mold growth.' },
                  { heading: 'Hurricane Exposure', detail: 'Ian (2022) and Irma (2017) delivered significant flooding across Orange and Osceola counties despite Orlando\'s inland position.' },
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
          <h2 className="section-heading text-center mb-2">Water Damage Services in Orlando</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { title: 'Emergency Water Extraction', href: '/services/emergency-water-removal/', detail: '60-minute response target. Truck-mounted and portable extractors remove standing water before it reaches walls, subfloors, and structural cavities.' },
              { title: 'Sinkhole Water Intrusion', href: '/contact/', detail: 'Specialized assessment for water intrusion linked to karst ground movement. Documented for Florida Statute 627.706 catastrophic ground cover collapse claims.' },
              { title: 'Vacation Rental Restoration', href: '/contact/', detail: 'Priority turnaround protocols for STR properties. We document rental income loss alongside structural damage for comprehensive insurance claims.' },
              { title: 'Structural Drying', href: '/services/structural-drying/', detail: 'Industrial dehumidifiers and air movers calibrated for Central Florida humidity. Daily moisture readings until IICRC S500 dry standard is reached.' },
              { title: 'Mold Remediation', href: '/services/mold-remediation/', detail: 'AMRT-certified mold assessment and remediation. Orlando\'s slab construction hides mold in wall cavities long before any visual signs appear.' },
              { title: 'Contents Restoration', href: '/services/contents-restoration/', detail: 'Document drying, electronics stabilization, and textile cleaning. Maximize insurance recovery by restoring rather than replacing belongings.' },
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
          <h2 className="section-heading text-white text-center mb-2">Our Orlando Restoration Process</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { step: '01', title: 'Emergency Dispatch', detail: '60-minute response target. Crew arrives with extractor, moisture meters, FLIR thermal camera, and full drying equipment.' },
              { step: '02', title: 'Assessment & Extraction', detail: 'IICRC moisture class and water category determined. Sinkhole intrusion pathways documented if applicable. Standing water fully extracted.' },
              { step: '03', title: 'Industrial Drying', detail: 'LGR dehumidifiers and directional air movers installed. Slab moisture monitored — concrete holds moisture longer than wood-frame construction.' },
              { step: '04', title: 'Scope & Rebuild', detail: 'Xactimate scope written. Rental income loss documented for STR properties. Rebuild coordinated with licensed Orlando contractors.' },
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
          <h2 className="section-heading mb-4">Orlando Neighborhoods We Serve</h2>
          <div className="orange-rule-left" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
            {['Dr. Phillips','Lake Nona','Windermere','Winter Park','Baldwin Park','College Park','Conway','Hunter\'s Creek','Avalon Park','Maitland','Altamonte Springs','Kissimmee','Celebration','Ocoee','Apopka','Sanford'].map((n) => (
              <div key={n} className="bg-light-100 border border-light-200 px-4 py-2 text-sm font-semibold text-navy-700">{n}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="section-heading mb-4">Orlando Water Damage Insurance Claims</h2>
              <div className="orange-rule-left" />
              <p className="text-navy-700 leading-relaxed mb-4">
                Water damage is the most frequently filed homeowner insurance claim in Florida. In Orlando, complexity increases because sinkhole-related intrusion can trigger multiple policy riders simultaneously — the standard property policy for structural damage AND optional sinkhole or catastrophic ground cover collapse coverage.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                Our technicians document all intrusion pathways from the first hour: moisture readings at every affected surface, thermal imaging, and photographed source identification. This documentation is critical whether your carrier sends a standard adjuster or a specialized sinkhole engineer.
              </p>
              <p className="text-navy-700 leading-relaxed">
                For vacation rental owners, we document lost rental income with booking history and platform rate data, supporting the Additional Living Expense or business interruption component of your claim. Most STR policies in Orange County include this coverage but require same-day documentation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="card-light">
                <h3 className="font-bold text-navy-800 mb-2">Claims We Handle in Orlando</h3>
                <ul className="space-y-2 text-sm text-navy-700">
                  {['Sudden and accidental pipe burst or appliance overflow','AC condensate line overflow and ceiling damage','Roof leak and wind-driven rain intrusion','Foundation crack and slab water intrusion','Sinkhole-related plumbing failure documentation','Vacation rental loss-of-use documentation','Storm surge and hurricane flooding'].map((d) => (
                    <li key={d} className="flex gap-2"><span className="text-orange-500 font-bold flex-shrink-0">✓</span>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-500 p-5">
                <p className="text-white font-bold mb-1">Orlando water damage emergency?</p>
                <p className="text-orange-100 text-sm mb-3">We pick up every call. 60-minute response target.</p>
                <a href={`tel:${city.phone}`} className="block bg-white text-orange-500 font-bold text-center py-2.5 text-sm tracking-wide hover:bg-orange-50 transition-colors">{city.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Orlando Water Damage FAQ</h2>
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
          <p className="text-white font-bold text-2xl mb-2">Water damage in Orlando? Call now — every hour matters.</p>
          <p className="text-orange-100 mb-6">Florida humidity means mold risk starts within 24 hours. Our crews are ready 24/7.</p>
          <a href={`tel:${city.phone}`} className="inline-block bg-white text-orange-500 font-bold px-10 py-4 text-lg tracking-wide hover:bg-orange-50 transition-colors">☎ {city.phone} — Available 24/7</a>
        </div>
      </section>
    </>
  );
}
