import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { CITIES, SITE } from '@/lib/siteConfig';

const city = CITIES.find((c) => c.slug === 'tampa')!;

export const metadata: Metadata = {
  title: 'Water Damage Restoration Tampa FL | Storm Surge & Flood Specialists | The Florida Restoration Pros',
  description:
    'Tampa water damage restoration after Idalia, Milton, and everyday pipe failures. IICRC-certified, 60-min response to Davis Islands, Hyde Park, Seminole Heights, Bayshore. (813) 212-5279.',
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
      name: 'Why is Tampa considered one of the most surge-vulnerable cities in the US?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Karen Clark & Company 2015 catastrophe model estimated Tampa Bay\'s potential storm-surge loss at approximately $175 billion — the highest of any U.S. metro at the time. The reason is geography: Tampa Bay is a large, shallow, funnel-shaped body of water oriented directly toward the southwest. When a storm tracks from the Gulf toward the bay, wind-driven surge has nowhere to go except inland. The bay\'s shallow shelf amplifies that surge dramatically compared to a deep-draft coastline. Davis Islands, Harbor Island, South Tampa, and Bayshore are all at or near sea level, making them especially vulnerable when surge enters the bay.' },
    },
    {
      '@type': 'Question',
      name: 'What did Hurricane Idalia 2023 do to Tampa neighborhoods?',
      acceptedAnswer: { '@type': 'Answer', text: 'Hurricane Idalia made landfall at Keaton Beach on August 30, 2023, well north of Tampa, yet still pushed significant surge into Hillsborough Bay. Davis Islands, Harbor Island, and Bayshore Boulevard saw water inundation from the surge — a vivid demonstration of how Tampa neighborhoods at sea level flood even from storms that track away from the metro. Idalia produced mandatory evacuation orders across Zone A (which includes Davis Islands) and images of flooded streets along Bayshore became widely shared. Property owners in these areas who experienced flooding need professional Category 3 water extraction and drying, not DIY cleanup — stormwater flooding is grossly contaminated water under IICRC S500.' },
    },
    {
      '@type': 'Question',
      name: 'Does the $39 million Seminole Heights stormwater project mean flooding is solved there?',
      acceptedAnswer: { '@type': 'Answer', text: 'No — the approximately $39 million Hillsborough County stormwater improvement project announced in 2025 for the Seminole Heights area is a mitigation improvement, not a flood-elimination solution. Seminole Heights sits in a low-lying inland basin where summer convective storms routinely dump 3–5 inches of rain in under an hour, overwhelming aging stormwater infrastructure built for a far lower level of impervious surface. The project will improve drainage capacity over time, but Seminole Heights properties remain at elevated flash flood risk during any significant rain event — particularly older homes on lower lots along the drainage corridors.' },
    },
    {
      '@type': 'Question',
      name: 'Does my Tampa homeowner insurance cover surge flooding from a hurricane?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Standard Florida homeowner policies explicitly exclude storm surge and rising floodwater from external sources. That requires a separate NFIP flood policy or private flood insurance. Many South Tampa and Davis Islands homeowners are in FEMA Special Flood Hazard Areas (Zone AE) where flood insurance is required by mortgage lenders, but even voluntary coverage is critical given Tampa\'s surge risk. The Florida Restoration Pros documents all water damage regardless of coverage type and can help clarify whether an event is covered under your existing policy or requires a separate flood claim.' },
    },
    {
      '@type': 'Question',
      name: 'How fast can you reach Hyde Park or Davis Islands after a water emergency?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Florida Restoration Pros targets a 60-minute response window across all of the Tampa metro including Davis Islands, Hyde Park, Harbor Island, Bayshore, South Tampa, Seminole Heights, Channelside, Palma Ceia, and Ballast Point. Our dispatchers answer every call 24 hours a day, 7 days a week, including during active weather events. During large-scale surge events, dispatch priority is assigned by water category — Cat 3 contaminated water (stormwater flooding) gets first response.' },
    },
  ],
};

export default function TampaPage() {
  return (
    <>
      <JsonLd data={LOCAL_BUSINESS} />
      <JsonLd data={FAQ_SCHEMA} />

      <nav className="bg-light-100 border-b border-light-200 px-6 py-2 text-sm text-navy-600">
        <div className="max-w-7xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span>/</span>
          <span className="text-navy-800 font-semibold">Water Damage Restoration Tampa FL</span>
        </div>
      </nav>

      <section className="relative bg-navy-950 overflow-hidden">
        <Image
          src="/images/hero-tampa.webp"
          alt="Tampa water damage restoration"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/75 via-navy-900/55 to-navy-900/35" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-4 py-1.5 mb-6">
              <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">● 24/7 Emergency — Tampa Bay&apos;s Most Surge-Vulnerable Metro</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Tampa Water Damage Restoration</h1>
            <div className="w-16 h-1 bg-orange-500 mb-6" />
            <p className="text-white font-semibold text-lg leading-relaxed mb-8">
              IICRC-certified crews serving Tampa&rsquo;s surge zones, historic neighborhoods, and aging housing stock — 60-minute response to Davis Islands, Hyde Park, Seminole Heights, Bayshore, and all surrounding communities.
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
                'Zone A/B mandatory evacuation coverage',
                '60-min response to Davis Islands & Hyde Park',
                'Cat 3 surge water specialists',
                'NFIP + private flood documentation',
                'Idalia/Milton certified response team',
                'All Hillsborough County carriers accepted',
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
            The Florida Restoration Pros provides 24/7 emergency water damage restoration in Tampa, FL — targeting 60-minute response to South Tampa, Davis Islands, Hyde Park, Seminole Heights, Bayshore, Channelside, Palma Ceia, and Ballast Point. Tampa is among the most surge-vulnerable metros in the country per the Karen Clark &amp; Company 2015 catastrophe model (~$175B potential loss). Idalia (2023) flooded Davis Islands and Bayshore. Milton (2024) triggered mandatory evacuations. Call <a href={`tel:${city.phone}`} className="text-orange-600 hover:underline">{city.phone}</a> now.
          </p>
        </div>
      </section>

      {/* What Idalia + Milton revealed about Tampa */}
      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">What Idalia and Milton Revealed About Tampa&rsquo;s Water Damage Risk</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <p className="text-navy-700 leading-relaxed mb-4">
                Hurricane Idalia made landfall at Keaton Beach on August 30, 2023 — well over 100 miles north of Tampa Bay. But the city still flooded. Davis Islands, Harbor Island, and Bayshore Boulevard were inundated as surge pushed through Hillsborough Bay. Flood-level photos from Bayshore circulated nationally. This is the Tampa paradox: a storm doesn&rsquo;t need to hit the city directly to cause major water damage, because the bay&rsquo;s shallow funnel shape amplifies surge from any storm tracking toward the Gulf Coast.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                Hurricane Milton in October 2024 triggered mandatory evacuation orders across Zone A (which includes Davis Islands) and Zone B (which covers most of South Tampa, Harbor Island, and Channelside). Residents of Hyde Park, Palma Ceia, and Ballast Point — neighborhoods built on low-lying ground between the bay and Hillsborough River — were included in evacuation zones. Properties that experience storm surge flooding face Category 3 water — grossly contaminated stormwater — which requires full professional containment, removal of all affected porous materials, and HEPA filtration. No amount of household cleanup is adequate.
              </p>
              <p className="text-navy-700 leading-relaxed">
                The Karen Clark &amp; Company 2015 catastrophe model estimated Tampa Bay&rsquo;s maximum surge loss at approximately $175 billion — the highest figure of any U.S. metro at the time. That estimate reflects what happens when a major storm makes a direct-track landfall into the bay. Every professional in the water damage restoration industry operating in Tampa understands that this is not a question of if but when.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-navy-800 p-6">
                <h3 className="text-white font-bold text-lg mb-4">Tampa&rsquo;s Water Damage Risk by Zone</h3>
                <div className="space-y-3">
                  {[
                    { zone: 'Zone A (Highest Surge Risk)', areas: 'Davis Islands, Harbor Island, MacDill AFB perimeter', risk: 'Direct surge from Hillsborough Bay. Mandatory evacuation Cat 2+.' },
                    { zone: 'South Tampa / Hyde Park', areas: 'Bayshore Blvd, Palma Ceia, Ballast Point', risk: 'Sea-level neighborhoods. Surge floods Bayshore. Aging 1920s-1950s plumbing.' },
                    { zone: 'Seminole Heights', areas: 'Old Seminole Heights, Southeast Seminole Heights', risk: 'Flash flood basin. ~$39M stormwater project (2025) improving but not solved. Old galvanized pipe.' },
                    { zone: 'Channelside / Downtown', areas: 'Water Street, Sparkman Wharf', risk: 'High-rise pipe failures + new construction plumbing warranty claims.' },
                    { zone: 'Ybor City / East Tampa', areas: '7th Ave corridor, historic district', risk: 'Pre-1940 housing stock. Aging cast-iron drain lines. Basement-style foundation flooding.' },
                  ].map((z) => (
                    <div key={z.zone} className="border-l-4 border-orange-500 pl-4">
                      <p className="text-orange-400 font-bold text-sm">{z.zone}</p>
                      <p className="text-steel-300 text-xs mb-1">{z.areas}</p>
                      <p className="text-steel-400 text-xs">{z.risk}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood-specific water damage section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Tampa Neighborhood Water Damage — What We See</h2>
          <div className="orange-rule-left" />
          <p className="text-navy-700 max-w-3xl mb-8 leading-relaxed">
            Water damage in Tampa isn&rsquo;t uniform. Each neighborhood has a distinct risk profile shaped by its elevation, construction era, drainage infrastructure, and proximity to the bay or river. Here&rsquo;s what our technicians encounter most often in each area.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                nbhd: 'Davis Islands & Harbor Island',
                primary: 'Storm surge — Cat 3',
                detail: 'Both islands sit at or below 5 feet elevation with the bay on all sides. Idalia (2023) flooded streets. Any Gulf storm tracking northeast floods these islands first. Surge water is Category 3 (grossly contaminated) — all flooring, drywall, insulation must be removed, not dried in place.',
              },
              {
                nbhd: 'Bayshore Boulevard & South Tampa',
                primary: 'Surge + aging plumbing',
                detail: 'The Bayshore seawall dates to the 1930s. When surge overtops it, South Tampa properties flood. Away from the water, 1920s-1960s homes in Palma Ceia and Ballast Point have aging galvanized supply lines that fail silently inside walls — the most common non-storm water damage call in the area.',
              },
              {
                nbhd: 'Hyde Park',
                primary: 'Internal plumbing — Cat 1/2',
                detail: 'Hyde Park\'s Victorian and Craftsman bungalows are beloved but old. Original cast-iron drain lines, galvanized supply lines, and clay sewer laterals are all past their useful lives. Slow leaks inside walls go undetected until mold is visible. Full wall cavity opening and drying is typically required on older homes.',
              },
              {
                nbhd: 'Seminole Heights',
                primary: 'Flash flooding + old plumbing',
                detail: 'Old Seminole Heights sits in a drainage basin that receives runoff from a large surrounding area. The ~$39M Hillsborough County stormwater improvement project (announced 2025) acknowledges the chronic flooding problem. Until improvements are complete, properties on low lots remain at high flash flood risk. Pre-war housing stock also generates regular plumbing failure calls.',
              },
              {
                nbhd: 'Channelside & Water Street',
                primary: 'High-rise pipe failures',
                detail: 'Tampa\'s new downtown construction is high-quality but high-rise water events are high-volume: a single pipe failure on a 20th-floor unit can affect multiple floors simultaneously. We coordinate with building management and HOA boards for multi-unit drying and provide separate documentation for each affected unit.',
              },
              {
                nbhd: 'Carrollwood, New Tampa & Brandon',
                primary: 'Internal plumbing + slab leaks',
                detail: 'Inland suburban Tampa features large tract-built homes from the 1980s-2000s with CPVC and polybutylene supply lines. Both materials degrade in Florida\'s hard water and heat. Slab leaks — supply line failures beneath the concrete foundation — are the most common call from Carrollwood, New Tampa, and Brandon.',
              },
            ].map((n) => (
              <div key={n.nbhd} className="card-light">
                <h3 className="font-bold text-navy-800 text-base mb-1">{n.nbhd}</h3>
                <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">Most common: {n.primary}</p>
                <p className="text-navy-600 text-sm leading-relaxed">{n.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tampa-specific services */}
      <section className="bg-navy-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-white text-center mb-2">Tampa-Specific Water Damage Services</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { title: 'Hurricane Surge Cleanup (Cat 3)', href: '/services/flood-damage-restoration/', detail: 'All Idalia- and Milton-type surge events are Category 3 (grossly contaminated). Full containment, negative air pressure, removal of all porous materials in the flood zone. NFIP and private flood policy documentation included.' },
              { title: 'Emergency Extraction — 60 Min', href: '/services/emergency-water-removal/', detail: 'Truck-mounted extractors dispatched within minutes. 60-minute target to Davis Islands, Hyde Park, South Tampa, Seminole Heights, and all surrounding Tampa neighborhoods.' },
              { title: 'Slab Leak & Hidden Pipe Drying', href: '/services/structural-drying/', detail: 'Common in Carrollwood, Brandon, and New Tampa tract homes. Thermal imaging locates slab leak moisture under tile and wood floors. Injectidry cavity drying systems reach moisture without full demolition when Cat 1.' },
              { title: 'Historic Home Water Damage', href: '/services/structural-drying/', detail: 'Hyde Park and Seminole Heights Craftsman bungalows require non-destructive drying approaches where possible. We understand old-growth wood, plaster walls, and cast-iron drain lines — and document everything for maximum insurance recovery.' },
              { title: 'Structural Drying — IICRC S500', href: '/services/structural-drying/', detail: 'Industrial LGR and desiccant dehumidifiers sized for Tampa\'s 74% average humidity. Daily psychrometric readings. FLIR thermal imaging confirms complete drying in structural cavities before equipment is removed.' },
              { title: 'Mold Remediation Post-Surge', href: '/services/mold-remediation/', detail: 'Tampa\'s heat + humidity means mold colonizes Cat 3 flood zones in 12–24 hours. AMRT-certified containment and remediation for any property that wasn\'t professionally dried within 48 hours of a water event.' },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="bg-navy-700 p-6 hover:bg-navy-600 transition-colors block border border-navy-600">
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-steel-300 text-sm leading-relaxed">{s.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Surge vs. standard insurance */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="section-heading mb-4">Tampa Insurance: Surge vs. Sudden &amp; Accidental</h2>
              <div className="orange-rule-left" />
              <p className="text-navy-700 leading-relaxed mb-4">
                The most important insurance distinction for Tampa homeowners is the line between <strong>storm surge / rising floodwater</strong> (excluded from standard HO policies) and <strong>sudden and accidental internal water damage</strong> (covered). When Bayshore floods and water enters your home from outside, that is a NFIP or private flood claim — not a homeowner claim. When your water heater fails and floods your garage, that is a homeowner claim.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                The distinction matters enormously after a hurricane like Idalia or Milton: many Tampa homeowners are in FEMA Zone AE (Special Flood Hazard Area) where flood insurance is required by mortgage lenders, but coverage gaps are still common. Zone AE includes Davis Islands, Harbor Island, and much of South Tampa below 8 feet elevation. Homeowners outside Zone AE often carry no flood coverage at all, despite living in areas that flooded during Idalia.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Our technicians document all damage in formats acceptable to both standard carriers and NFIP adjusters. Mitigation (emergency loss-prevention work) and restoration (rebuild to pre-loss condition) are documented separately — a critical distinction that maximizes Replacement Cost Value recovery under both policy types.
              </p>
            </div>
            <div className="space-y-4">
              <div className="card-light">
                <h3 className="font-bold text-navy-800 mb-3">Tampa Insurance Documentation</h3>
                <ul className="space-y-2 text-sm text-navy-700">
                  {[
                    'Source determination: surge vs. pipe failure vs. roof leak',
                    'NFIP-compliant damage documentation for Zone AE properties',
                    'Xactimate scope for standard homeowner claims',
                    'IICRC Category 1–3 and Class 1–4 determination in writing',
                    'Thermal imaging + moisture meter readings at every surface',
                    'Separate mitigation vs. restoration line items',
                    'Adjuster direct communication + supplement support',
                  ].map((d) => (
                    <li key={d} className="flex gap-2"><span className="text-orange-500 font-bold flex-shrink-0">✓</span>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-500 p-5">
                <p className="text-white font-bold mb-1">Post-surge or pipe failure in Tampa?</p>
                <p className="text-orange-100 text-sm mb-3">60-minute response. Documentation starts on arrival.</p>
                <a href={`tel:${city.phone}`} className="block bg-white text-orange-500 font-bold text-center py-2.5 text-sm tracking-wide hover:bg-orange-50 transition-colors">{city.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <div className="px-6 pb-5 text-navy-700 leading-relaxed border-t border-light-200 pt-4">{q.acceptedAnswer.text}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-50 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="https://www.iicrc.org" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">IICRC — ANSI/IICRC S500 Water Damage Restoration Standard</a>
            <a href="https://www.epa.gov/mold/mold-cleanup-your-home" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">EPA Mold Cleanup Guidelines</a>
            <a href="https://www.fema.gov/flood-insurance" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">FEMA National Flood Insurance Program</a>
          </div>
          <p className="text-xs text-steel-400 mt-6">This page was researched and produced in support of Brain b32bfc21 — The Florida Restoration Pros content development initiative. NAP: {city.streetAddress}, {city.addressLocality}, {city.addressRegion} {city.postalCode} · {city.phone}.</p>
        </div>
      </section>

      <section className="bg-orange-500 py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white font-bold text-2xl mb-2">Water damage in Tampa? Surge or pipe — we respond 24/7.</p>
          <p className="text-orange-100 mb-6">Davis Islands, Hyde Park, Seminole Heights, Bayshore — 60-minute response across all Tampa neighborhoods.</p>
          <a href={`tel:${city.phone}`} className="inline-block bg-white text-orange-500 font-bold px-10 py-4 text-lg tracking-wide hover:bg-orange-50 transition-colors">☎ {city.phone} — Available 24/7</a>
        </div>
      </section>
    </>
  );
}
