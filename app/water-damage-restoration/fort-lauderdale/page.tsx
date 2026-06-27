import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { CITIES, SITE } from '@/lib/siteConfig';

const city = CITIES.find((c) => c.slug === 'fort-lauderdale')!;

export const metadata: Metadata = {
  title: 'Water Damage Restoration Fort Lauderdale FL | April 2023 Flood & King Tide Specialists | The Florida Restoration Pros',
  description:
    'Fort Lauderdale water damage restoration — April 12 2023 flood veterans (25.91" in 12 hours), king tide saltwater specialists, Las Olas Isles canal experts. (954) 636-6057.',
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
      name: 'What caused the April 12, 2023 Fort Lauderdale flood?',
      acceptedAnswer: { '@type': 'Answer', text: 'On April 12, 2023, a slow-moving upper-level low pressure system stalled over South Florida and dumped approximately 25.91 inches of rain on Fort Lauderdale in roughly 12 hours. This is estimated to be a 1-in-1,000-year rainfall event. Fort Lauderdale-Hollywood International Airport was closed. Portions of I-595 flooded. Neighborhoods throughout the city were inundated, including Victoria Park, Rio Vista, and areas around the New River and the Intracoastal Waterway finger isles. Broward County and the state of Florida declared states of emergency. The water that entered homes during this event was stormwater flooding — Category 3 under IICRC S500 — meaning all affected porous materials required removal, not drying in place.' },
    },
    {
      '@type': 'Question',
      name: 'What are king tides and how do they damage Fort Lauderdale homes?',
      acceptedAnswer: { '@type': 'Answer', text: 'King tides are the highest natural tidal events of the year — predictable, astronomy-driven peaks in the tidal cycle that occur each fall, typically in September and October. In September 2025, Fort Lauderdale recorded 41 tidal events that exceeded the nuisance flooding threshold. King tides push saltwater up through the stormwater drainage system, flooding streets in Victoria Park, Las Olas Isles, and the Southeast Isles without any rainfall — the drain grates become fountains. This saltwater enters ground-floor garages, elevator pits in the finger-isle homes, and ground-level HVAC units. Repeated exposure to saltwater accelerates corrosion of metal components, leaves hygroscopic salt crystals in concrete that continue drawing moisture even after the tide recedes, and creates the substrate for rapid mold growth in Florida\'s humidity.' },
    },
    {
      '@type': 'Question',
      name: 'How is saltwater damage different from freshwater water damage?',
      acceptedAnswer: { '@type': 'Answer', text: 'Saltwater damage has three characteristics that make it more severe and expensive than freshwater damage of the same volume. First, salt is hygroscopic — it continues drawing ambient moisture from the air long after the water has been extracted, creating ongoing dampness in concrete and masonry even after conventional drying. Second, saltwater corrodes metals much faster than freshwater: steel rebar in concrete structures, copper plumbing, aluminum HVAC components, and electrical terminals all degrade rapidly. Third, saltwater is a Category 3 contaminated water source under IICRC S500, meaning all porous materials (drywall, insulation, carpet, upholstery) in contact with it must be removed rather than dried in place. The salt crystal removal process requires extended desiccant drying cycles and sometimes professional washing of structural concrete to remove residual salt before rebuilding.' },
    },
    {
      '@type': 'Question',
      name: 'What is the Fortify Lauderdale program and what does it mean for homeowners?',
      acceptedAnswer: { '@type': 'Answer', text: 'Fortify Lauderdale is Fort Lauderdale\'s approximately $1.6 billion long-term capital infrastructure investment program to address sea-level rise and tidal flooding, including seawall upgrades, stormwater system improvements, and tidal valves. The city has already installed approximately 200 tidal valves in its stormwater system to prevent king-tide saltwater from backing up through drains. Fortify Lauderdale represents the city\'s recognition that king tides and sea-level rise are permanent, intensifying conditions rather than temporary problems. For homeowners, the practical implication is twofold: infrastructure improvements reduce (but do not eliminate) flooding risk over time, and properties in tidal flood zones will face continued insurance cost pressure regardless of infrastructure investment.' },
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

      <section className="relative bg-navy-950 overflow-hidden">
        <Image src="/images/city-fort-lauderdale.webp" alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/75 via-navy-900/55 to-navy-900/35" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-4 py-1.5 mb-6">
              <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">● 24/7 Emergency — April 2023 Veterans · King Tide Saltwater Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Fort Lauderdale Water Damage Restoration</h1>
            <div className="w-16 h-1 bg-orange-500 mb-6" />
            <p className="text-white font-semibold text-lg leading-relaxed mb-8">
              IICRC-certified crews serving Fort Lauderdale&rsquo;s canal neighborhoods, finger isles, and inland communities — saltwater protocol for king tide events, full Cat 3 response for the April 2023-type events, and everyday plumbing failures across Victoria Park, Rio Vista, Las Olas Isles, and all of Broward County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${city.phone}`} className="btn-primary text-base uppercase tracking-wider text-center">☎ Call {city.phone}</a>
              <Link href="/contact/" className="btn-ghost text-sm uppercase tracking-wider text-center">Request Free Inspection</Link>
            </div>
          </div>
          <div
            className="flex-shrink-0 w-full lg:w-80 border border-orange-500/50 p-6"
            style={{ backgroundColor: 'rgba(27, 58, 92, 0.92)', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
          >
            <p className="text-orange-400 font-bold text-sm uppercase tracking-wider mb-4">Why Call Us First?</p>
            <ul className="space-y-3">
              {[
                'April 2023 extreme rainfall veterans',
                '60-min to Victoria Park & Las Olas Isles',
                'Cat 3 saltwater + king tide protocol',
                'Fortify Lauderdale area documentation',
                '$1.6B seawall corridor specialists',
                'All Broward County carriers accepted',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white font-semibold">
                  <span className="text-orange-400 mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={`tel:${city.phone}`} className="mt-6 block bg-orange-500 hover:bg-orange-400 text-white font-bold text-center py-3 tracking-wide transition-colors">
              Call Now — It&apos;s Free
            </a>
          </div>
        </div>
      </section>

      <section id="aeo-answer" className="max-w-7xl mx-auto px-6 py-10">
        <div className="aeo-block">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Quick Answer</p>
          <p className="text-navy-900 text-lg font-semibold leading-relaxed">
            The Florida Restoration Pros provides 24/7 emergency water damage restoration in Fort Lauderdale, FL — with specialized saltwater protocol for king tide flooding in Victoria Park, Las Olas Isles, and the Southeast Isles, and full Category 3 response for stormwater events like the April 12, 2023 flood that dropped 25.91 inches in 12 hours and triggered a state of emergency. Call <a href={`tel:${city.phone}`} className="text-orange-600 hover:underline">{city.phone}</a> now.
          </p>
        </div>
      </section>

      {/* April 2023 section */}
      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">April 12, 2023: The 1-in-1,000-Year Event That Changed Fort Lauderdale</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <p className="text-navy-700 leading-relaxed mb-4">
                On April 12, 2023, a stalled upper-level low brought approximately 25.91 inches of rain to Fort Lauderdale in roughly 12 hours. To put that in context: Fort Lauderdale averages 61.9 inches of rain per year. The city received nearly half its annual rainfall in a single day. The event is estimated to have been a 1-in-1,000-year occurrence by probability. Fort Lauderdale-Hollywood International Airport closed. I-595 flooded. Cars were submerged on streets throughout the city.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                The neighborhoods most severely affected were low-lying areas near the New River, the Intracoastal Waterway, and the city&rsquo;s 300+ miles of canals: Victoria Park, Rio Vista, the finger isles along the Intracoastal (Seven Isles, Las Olas Isles, Southeast Isles, Lauderdale-by-the-Sea waterfront), and inland residential streets where stormwater drainage was overwhelmed. The water that entered homes in this event was stormwater — Category 3 contaminated water under IICRC S500 — because urban stormwater carries sewage backup, automotive fluids, lawn chemicals, and other contaminants. All porous materials (drywall, insulation, flooring, carpet) in contact with that water must be removed, not dried.
              </p>
              <p className="text-navy-700 leading-relaxed">
                The April 2023 event accelerated Fort Lauderdale&rsquo;s Fortify Lauderdale infrastructure program — the approximately $1.6 billion investment in seawall upgrades, stormwater improvements, and the approximately 200 tidal valves already installed in the drainage system. But infrastructure improvements operate on multi-year timelines. Fort Lauderdale properties remain at elevated flooding risk today.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-navy-800 p-6">
                <h3 className="text-white font-bold text-lg mb-4">Fort Lauderdale&rsquo;s Two Flood Regimes</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Extreme Rainfall Events',
                      example: 'April 12, 2023 — 25.91" in ~12 hours',
                      detail: 'Category 3 stormwater. Overwhelms drainage citywide. All porous materials must be removed. Affects all neighborhoods regardless of elevation.',
                    },
                    {
                      title: 'King Tide / Tidal Saltwater',
                      example: 'Sep 2025 — 41 events above nuisance threshold',
                      detail: 'Predictable fall tidal events push saltwater up through stormwater drains. Primarily affects finger isles, Victoria Park, and low-lying canal properties. Saltwater protocol required.',
                    },
                  ].map((r) => (
                    <div key={r.title} className="border-l-4 border-orange-500 pl-4">
                      <p className="text-orange-400 font-bold text-sm">{r.title}</p>
                      <p className="text-steel-300 text-xs italic mb-1">{r.example}</p>
                      <p className="text-steel-400 text-xs">{r.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-light">
                <h3 className="font-bold text-navy-800 mb-2">Saltwater Damage Protocol</h3>
                <p className="text-navy-600 text-sm mb-3">King tide saltwater requires steps beyond standard freshwater restoration:</p>
                <ul className="space-y-1 text-sm text-navy-700">
                  {['Category 3 contamination protocol','Salt crystal removal from concrete surfaces','Extended desiccant drying (salt is hygroscopic)','Metal component corrosion assessment','HVAC unit flushing and inspection','Long-term moisture monitoring after drying'].map((d) => (
                    <li key={d} className="flex gap-2"><span className="text-orange-500 font-bold flex-shrink-0">✓</span>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood breakdown */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Fort Lauderdale Neighborhoods — Water Damage by Area</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              {
                nbhd: 'Victoria Park',
                risk: 'Tidal saltwater + April 2023 stormwater',
                detail: 'Sits adjacent to the Intracoastal and receives saltwater during king tide drain events. Also heavily affected by April 2023. Mix of 1960s-1970s ranch homes and newer construction — all at low elevation west of the Intracoastal.',
              },
              {
                nbhd: 'Las Olas Isles / Seven Isles / Southeast Isles',
                risk: 'Canal-front: tidal + saltwater corrosion',
                detail: 'Fort Lauderdale\'s most celebrated finger isles are surrounded by tidal canals. Saltwater enters garage floors, elevator pits, and landscaping drainage during king tides. Marine-environment corrosion of plumbing and HVAC is accelerated by constant salt air. These are high-value properties with complex insurance and HOA claim dynamics.',
              },
              {
                nbhd: 'Rio Vista',
                risk: 'New River flooding + stormwater',
                detail: 'Historic Rio Vista borders the New River on the west. River flooding affects the western edge during major rain events. The neighborhood\'s 1920s-1940s Mediterranean Revival and Mission homes contain original construction that requires careful moisture documentation for historic fabric preservation.',
              },
              {
                nbhd: 'Lauderdale-by-the-Sea',
                risk: 'Beach-front + tidal + salt air',
                detail: 'Ocean-side properties face Atlantic surge from tropical systems. Seawater is the most corrosive form of water intrusion and requires the same extended desiccant drying and salt removal protocol as king tide events. High-value oceanfront properties require specialty contents and structural documentation.',
              },
              {
                nbhd: 'Wilton Manors / Oakland Park',
                risk: 'Stormwater flooding + older plumbing',
                detail: 'Inland from the Intracoastal, these communities received heavy flooding during April 2023. 1950s-1970s housing stock with aging galvanized and CPVC supply lines. Lower elevation areas along Middle River are in Zone AE flood areas.',
              },
              {
                nbhd: 'Coral Ridge / Imperial Point',
                risk: 'Canal + tidal',
                detail: 'Coral Ridge waterfront properties on the Intracoastal face the same tidal saltwater flooding as Las Olas Isles. Inland Coral Ridge and Imperial Point homes are at risk from the area\'s high water table and stormwater drainage system flooding during extreme events like April 2023.',
              },
            ].map((n) => (
              <div key={n.nbhd} className="card-light">
                <h3 className="font-bold text-navy-800 text-base mb-1">{n.nbhd}</h3>
                <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">Primary risk: {n.risk}</p>
                <p className="text-navy-600 text-sm leading-relaxed">{n.detail}</p>
              </div>
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
              { step: '01', title: '60-Min to All Ft. Lauderdale Areas', detail: 'Victoria Park, Rio Vista, Las Olas Isles, Seven Isles, Southeast Isles, Wilton Manors, Oakland Park, Coral Ridge — 60-minute dispatch target 24/7.' },
              { step: '02', title: 'Source & Salt Assessment', detail: 'Saltwater vs. freshwater source confirmed. King tide events: salt mapping of all affected concrete and masonry. Stormwater events: Cat 3 containment established.' },
              { step: '03', title: 'Desiccant Drying + Salt Removal', detail: 'Extended desiccant cycles for saltwater events. Salt crystal removal from concrete before rebuilding. Corrosion assessment on metals and HVAC. Daily moisture readings until complete.' },
              { step: '04', title: 'NFIP + Flood Documentation', detail: 'Many Ft. Lauderdale finger-isle properties are in Zone AE requiring NFIP flood documentation. Saltwater source vs. freshwater pipe failure clearly established. Xactimate scope. Fortify Lauderdale program context noted where relevant.' },
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
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="https://www.iicrc.org" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">IICRC — ANSI/IICRC S500 Standard</a>
            <a href="https://www.epa.gov/mold/mold-cleanup-your-home" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">EPA Mold Cleanup Guidelines</a>
            <a href="https://www.fema.gov/flood-insurance" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">FEMA Flood Insurance</a>
          </div>
          <p className="text-xs text-steel-400 mt-6">This page was researched and produced in support of Brain b32bfc21 — The Florida Restoration Pros content development initiative. NAP: {city.streetAddress}, {city.addressLocality}, {city.addressRegion} {city.postalCode} · {city.phone}.</p>
        </div>
      </section>

      <section className="bg-orange-500 py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white font-bold text-2xl mb-2">Water damage in Fort Lauderdale? King tide, flood, or pipe — 24/7.</p>
          <p className="text-orange-100 mb-6">Victoria Park, Las Olas Isles, Rio Vista, Seven Isles — saltwater specialist crew on call around the clock.</p>
          <a href={`tel:${city.phone}`} className="inline-block bg-white text-orange-500 font-bold px-10 py-4 text-lg tracking-wide hover:bg-orange-50 transition-colors">☎ {city.phone} — Available 24/7</a>
        </div>
      </section>
    </>
  );
}
