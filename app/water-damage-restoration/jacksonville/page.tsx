import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { CITIES, SITE } from '@/lib/siteConfig';

const city = CITIES.find((c) => c.slug === 'jacksonville')!;

export const metadata: Metadata = {
  title: 'Water Damage Restoration Jacksonville FL | St. Johns River Flood Specialists | The Florida Restoration Pros',
  description:
    'Jacksonville water damage restoration — St. Johns River tidal flooding, Hurricane Irma 2017 record flood recovery, historic home specialists. 60-min response to Riverside, San Marco, Springfield. (904) 371-7252.',
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
      name: 'How did Hurricane Irma flood Jacksonville so severely in 2017?',
      acceptedAnswer: { '@type': 'Answer', text: 'Hurricane Irma made landfall in southwest Florida on September 10, 2017, but its effects on Jacksonville were catastrophic in a way that surprised many observers. As Irma tracked up the Florida peninsula and moved across northern Florida, its wind field pushed Atlantic Ocean water into the St. Johns River mouth at Mayport from the east — a classic "storm surge from the wrong side" scenario. Combined with Irma\'s enormous rainfall totals, the St. Johns River crested at levels not seen since 1846, exceeding the previous record from Hurricane Dora in 1965. San Marco, Riverside, Avondale, Ortega, and Mandarin all experienced flooding. The St. Johns\' wide, slow, tidal character means water backs up across an enormous area rather than cutting a narrow flood channel — which is why Irma affected neighborhoods many miles from the river\'s mouth.' },
    },
    {
      '@type': 'Question',
      name: 'Why do Jacksonville\'s historic neighborhoods have higher water damage risk?',
      acceptedAnswer: { '@type': 'Answer', text: 'Jacksonville is the oldest incorporated city in Florida and has the largest land area of any city in the contiguous United States — which means it also has the largest stock of aging historic housing. Springfield (Jacksonville\'s oldest neighborhood, with homes dating to the late 1800s) and the Riverside/Avondale Historic District (primarily 1900s-1920s Craftsman bungalows and Florida Vernacular construction) contain original cast-iron drain lines, galvanized supply pipes, clay sewer laterals, and wood-frame construction that holds moisture much longer than modern materials. Drying times for these homes are significantly longer than for modern drywall-and-framing construction, and non-destructive approaches using cavity drying systems are preferred to protect historic plaster walls and original woodwork.' },
    },
    {
      '@type': 'Question',
      name: 'Is the St. Johns River flood risk only from hurricanes?',
      acceptedAnswer: { '@type': 'Answer', text: 'No — the St. Johns River is a tidal river, meaning it flows both north to its mouth near Mayport AND experiences tidal influence from the Atlantic Ocean as far south as Palatka, 65 miles upstream. This creates a dual flood mechanism: tidal backing (where high tides push water upstream against the natural flow, raising river levels in San Marco, Riverside, and downtown Jacksonville without any storm present) and rainfall flooding (where heavy rain across the 9,800-square-mile drainage basin fills tributaries that empty into the St. Johns). Zone AE and Zone A properties along the St. Johns and its tributaries — including Ortega River, Julington Creek, and Hogan Creek — are subject to flood risk year-round, not just during hurricane season.' },
    },
    {
      '@type': 'Question',
      name: 'Do you work on historic homes in Riverside and Springfield?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — Riverside, Avondale, and Springfield historic homes are a significant part of our Jacksonville work. These properties require understanding of original construction materials: plaster over lath (which responds differently to moisture than modern drywall), old-growth heart pine floors that can be dried and saved rather than replaced, cast-iron drain lines that corrode differently than PVC, and balloon-frame construction where moisture travels vertically in wall cavities in unexpected ways. We use non-destructive drying approaches (Injectidry cavity systems, carefully directed air movers) wherever possible to preserve historic fabric, and we document all original materials separately in our insurance scope for maximum replacement cost recovery.' },
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

      <section className="relative bg-navy-950 overflow-hidden">
        <Image src="/images/city-jacksonville.webp" alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/75 via-navy-900/55 to-navy-900/35" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-4 py-1.5 mb-6">
              <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">● 24/7 Emergency — St. Johns River · Historic Home Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Jacksonville Water Damage Restoration</h1>
            <div className="w-16 h-1 bg-orange-500 mb-6" />
            <p className="text-white font-semibold text-lg leading-relaxed mb-8">
              IICRC-certified water damage restoration across Jacksonville&rsquo;s tidal river floodplain and historic neighborhoods — specialists in St. Johns River flooding, Irma-legacy damage, and the 1900s-era housing stock of Riverside, Avondale, and Springfield. 60-minute response citywide.
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
                'St. Johns River surge + tidal specialists',
                '60-min to Riverside/Avondale & San Marco',
                'Historic home non-destructive drying',
                'Zone AE flood documentation',
                'Irma-legacy damage assessment',
                'All Duval County carriers accepted',
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
            The Florida Restoration Pros provides 24/7 emergency water damage restoration in Jacksonville, FL — with deep expertise in the St. Johns River tidal flooding that has affected San Marco, Riverside, Avondale, and Mandarin since Hurricane Irma (2017) set flood records unseen since 1846. We also specialize in Jacksonville&rsquo;s aging historic housing stock — the oldest-standing residential buildings in Florida. Call <a href={`tel:${city.phone}`} className="text-orange-600 hover:underline">{city.phone}</a> now.
          </p>
        </div>
      </section>

      {/* The St. Johns River and Irma section */}
      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">The St. Johns River: Jacksonville&rsquo;s Year-Round Flood Engine</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <p className="text-navy-700 leading-relaxed mb-4">
                The St. Johns River is unlike any other waterway in Florida. It is wide, slow-moving, and tidal — influenced by Atlantic tides as far as 65 miles inland. It flows <em>northward</em>, the only major river in the eastern US to do so, and drains a 9,800-square-mile basin that encompasses much of northeast Florida. In practical terms for homeowners: the river backs up during every astronomical high tide, every nor&rsquo;easter, and every heavy rain event that fills its tributaries. Flood risk along the St. Johns is a year-round reality, not a seasonal event.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                Hurricane Irma (September 2017) delivered the most dramatic demonstration in modern memory. Irma made landfall at Marco Island in southwest Florida but tracked across the entire state. As it approached Jacksonville, its wind field drove Atlantic Ocean water into the river mouth at Mayport from the east. The St. Johns crested at flood levels not recorded since 1846 — exceeding the record set by Hurricane Dora in 1965 by a significant margin. San Marco, Riverside/Avondale, Ortega, Mandarin, and downtown Jacksonville all flooded. Properties in Zone AE that had never flooded before saw water inside first-floor rooms.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Seven years after Irma, Jacksonville still carries legacy water damage from that event: properties where mitigation was incomplete or done without professional drying now show hidden mold in wall cavities, subfloor rot, and compromised structural connections — the long-term consequences of inadequate post-flood response. We have performed mold remediation on numerous Jacksonville homes years after Irma, where prior owners attempted DIY cleanup and the problem was discovered during a sale or renovation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-800 mb-4">Jacksonville Flood Mechanisms</h3>
              <div className="space-y-4">
                {[
                  { title: 'Tidal Backing (Year-Round)', detail: 'High tides push upstream against river flow, raising levels in San Marco, downtown, and Riverside without any weather event. Spring tides and king tides are predictable — but still flood low-lying riverfront properties.' },
                  { title: 'Riverine Rainfall Flooding', detail: 'Heavy rain across the 9,800-sq-mile drainage basin fills tributaries — Ortega River, Julington Creek, Hogan Creek, McGirts Creek — which all drain to the St. Johns. A major rain event inland raises the river for days.' },
                  { title: 'Hurricane Storm Surge (Atlantic)', detail: 'Irma demonstrated this: Atlantic hurricanes can push water INTO the St. Johns from its mouth at Mayport. Onshore winds from a northeast-tracking storm create the worst surge scenario for Jacksonville.' },
                  { title: 'Nor\'easters & Winter Surge', detail: 'November–March nor\'easters drive sustained onshore winds that back up the river mouth and combine with king tides. Jacksonville experiences winter flooding events not typically associated with hurricane season.' },
                ].map((m) => (
                  <div key={m.title} className="border-l-4 border-orange-500 pl-4">
                    <p className="font-bold text-navy-800 text-sm">{m.title}</p>
                    <p className="text-navy-600 text-sm">{m.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historic neighborhoods */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Jacksonville&rsquo;s Historic Neighborhoods — Water Damage by District</h2>
          <div className="orange-rule-left" />
          <p className="text-navy-700 max-w-3xl mb-8 leading-relaxed">
            Jacksonville is the oldest large city in Florida. Its historic neighborhoods contain housing stock that requires specialist knowledge — construction methods, materials, and failure modes that differ fundamentally from modern tract homes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                nbhd: 'Riverside & Avondale',
                era: '1900s–1920s',
                detail: 'Jacksonville\'s most beloved historic district has Craftsman bungalows and Tudor Revival homes with original cast-iron drain lines, galvanized supply pipes, and plaster-over-lath walls. Flood risk from Willow Branch Creek and proximity to the St. Johns. Historic plaster and heart pine floors require non-destructive drying — we use cavity systems to preserve these irreplaceable materials.',
              },
              {
                nbhd: 'Springfield',
                era: 'Late 1800s–early 1900s',
                detail: 'Jacksonville\'s oldest neighborhood, listed on the National Register of Historic Places. Many homes date to the 1890s–1910s with balloon-frame construction, original wood floors, and clay sewer laterals. Moisture travels vertically in balloon-frame walls in unexpected ways. Springfield is adjacent to the Hogan Creek flood corridor — a tributary that backs up during high river events.',
              },
              {
                nbhd: 'San Marco',
                era: '1920s–1940s',
                detail: 'San Marco sits directly on the St. Johns River bend south of downtown. It flooded during Irma 2017. Mediterranean Revival architecture with tile roofs, stucco construction, and original casement windows. The business district and residential streets both experienced river flooding. Zone AE flood zone covers much of the neighborhood east of Hendricks Ave.',
              },
              {
                nbhd: 'Ortega & Ortega Hills',
                era: '1920s–1950s',
                detail: 'Affluent waterfront neighborhood on the Ortega River (St. Johns tributary). Persistent tidal backing affects low lots. Older estate homes with mature landscaping have root intrusion into clay sewer laterals. Ortega River-front properties require NFIP flood documentation in addition to standard HO claims.',
              },
              {
                nbhd: 'Mandarin',
                era: '1960s–1980s + historic',
                detail: 'South Jacksonville on the St. Johns\' western bank, Mandarin flooded in Irma. Mix of 1960s-1970s ranch homes with aging CPVC supply lines and older properties near the water. Julington Creek subdivision areas have newer construction on former wetland fill — slab leaks common.',
              },
              {
                nbhd: 'Jacksonville Beaches',
                era: 'Mixed, 1940s+',
                detail: 'Atlantic Beach, Neptune Beach, and Jacksonville Beach face different risk: ocean-side surge from Atlantic storms (rather than river flooding). Salt air + humidity accelerates corrosion of plumbing fittings and HVAC components. Post-storm saltwater intrusion requires the same desiccant drying protocol as Miami\'s saltwater events.',
              },
            ].map((n) => (
              <div key={n.nbhd} className="card-light">
                <h3 className="font-bold text-navy-800 text-base mb-1">{n.nbhd}</h3>
                <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">Primarily built: {n.era}</p>
                <p className="text-navy-600 text-sm leading-relaxed">{n.detail}</p>
              </div>
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
              { step: '01', title: '60-Min to All Jax Districts', detail: 'Riverside, Avondale, San Marco, Springfield, Mandarin, Ortega, and the Beaches — 60-minute target. River flooding events: Cat 3 protocol deployed immediately.' },
              { step: '02', title: 'Historic Material Assessment', detail: 'Plaster walls, heart pine floors, cast-iron drain lines, balloon-frame cavities — documented before any demolition decision. Non-destructive approach where water category and timing allow.' },
              { step: '03', title: 'Tidal & River Documentation', detail: 'St. Johns flooding is river/tidal water — Cat 3. Zone AE flood-policy documentation. Source determination for standard vs. flood claim. Irma-legacy mold assessment on request.' },
              { step: '04', title: 'Xactimate + Adjuster Coordination', detail: 'Historic materials documented at replacement cost. Separate mitigation/restoration line items. NFIP and standard carrier communication. Supplement support when initial scope is inadequate.' },
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
          <p className="text-white font-bold text-2xl mb-2">Water damage in Jacksonville? River, tidal, or pipe — we respond 24/7.</p>
          <p className="text-orange-100 mb-6">Riverside, San Marco, Springfield, Avondale, Mandarin — 60-minute response across all Jacksonville districts.</p>
          <a href={`tel:${city.phone}`} className="inline-block bg-white text-orange-500 font-bold px-10 py-4 text-lg tracking-wide hover:bg-orange-50 transition-colors">☎ {city.phone} — Available 24/7</a>
        </div>
      </section>
    </>
  );
}
