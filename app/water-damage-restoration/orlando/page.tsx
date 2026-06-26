import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { CITIES, SITE } from '@/lib/siteConfig';

const city = CITIES.find((c) => c.slug === 'orlando')!;

export const metadata: Metadata = {
  title: 'Water Damage Restoration Orlando FL | Sinkhole & Vacation Rental Specialists | The Florida Restoration Pros',
  description:
    'Orlando water damage restoration — karst sinkhole water intrusion, vacation rental flood damage, daily storm flooding. 60-min response to Dr. Phillips, Lake Nona, Winter Park. (321) 388-0733.',
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
      name: 'What is "sinkhole alley" and how does it affect water damage in Orlando?',
      acceptedAnswer: { '@type': 'Answer', text: 'Central Florida lies within what geologists and insurers call "sinkhole alley" — a belt running roughly from Tampa through Orlando where the underlying limestone karst geology is especially prone to subsurface dissolution by groundwater. When a sinkhole or compressible karst feature develops beneath a slab foundation, it can fracture underground plumbing, cause foundation movement that breaks supply lines, and allow groundwater to migrate through the slab into living spaces. Areas with the highest documented sinkhole frequency in the greater Orlando area include Winter Park, Conway, and Pine Hills. Florida Statute 627.706 distinguishes between catastrophic ground cover collapse (covered by most policies) and more gradual sinkhole activity (optional endorsement — many Orlando homeowners don\'t carry it).' },
    },
    {
      '@type': 'Question',
      name: 'How does Orlando\'s vacation rental market create unique water damage risks?',
      acceptedAnswer: { '@type': 'Answer', text: 'Orlando has one of the densest short-term vacation rental markets in the country, concentrated in Dr. Phillips, Windermere, Celebration, and the International Drive corridor. Vacation rental properties face specific water damage risks: higher guest turnover means appliances (dishwashers, washing machines, refrigerator ice makers) are used more intensively and fail faster; guests are less likely to notice slow leaks; and properties may sit unoccupied between bookings for days without any person present to catch a pipe failure. Insurance for vacation rentals in Orlando is also more complex — standard homeowner policies may not cover rental use, requiring either a vacation rental endorsement or a commercial policy, each with different water damage claim procedures.' },
    },
    {
      '@type': 'Question',
      name: 'Does Orlando flood from hurricanes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, though Orlando\'s flooding mechanism differs from coastal cities. Orlando does not face ocean storm surge, but Central Florida sits in the track of many Florida hurricanes and tropical storms that bring enormous rainfall totals as they traverse the state. Hurricane Ian (2022) and Irma (2017) both produced severe inland flooding across Orange County from rainfall alone. Orlando\'s numerous lakes, which sit at or near residential elevations across the metro, can overflow their banks during intense rain events, flooding lakefront properties in Baldwin Park, Lake Nona, and the Winter Park chain of lakes corridor. Additionally, the flat terrain and high water table mean heavy rain events saturate soils quickly and drive stormwater into basements and ground-floor units.' },
    },
    {
      '@type': 'Question',
      name: 'What are the most common water damage causes in Orlando\'s newer subdivisions?',
      acceptedAnswer: { '@type': 'Answer', text: 'Orlando has had enormous development since the 1980s, resulting in a large stock of slab-on-grade homes built on fill material over former wetlands and low-lying land — especially in Lake Nona, Avalon Park, Hunter\'s Creek, and Horizon West. These properties face specific risks: fill settlement can stress slab plumbing; former wetland soils retain high moisture that maintains lateral pressure against foundation walls; and CPVC supply lines widely installed in 1990s-2000s Florida construction are now reaching the end of their rated service life. The slab leak — a supply line failure beneath the concrete foundation — is the most common non-storm water damage call we receive from newer Orlando suburban construction.' },
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
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">● 24/7 Emergency — Sinkhole Alley · Vacation Rental · Storm Specialists</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Orlando Water Damage Restoration</h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-200 text-lg max-w-2xl mb-8">
            IICRC-certified water damage restoration across Orange County — karst sinkhole water intrusion, vacation rental flood response, hurricane rainfall flooding, and daily convective storm damage. 60-minute response to Dr. Phillips, Lake Nona, Winter Park, Baldwin Park, and all surrounding communities.
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
            The Florida Restoration Pros provides 24/7 emergency water damage restoration in Orlando, FL — specializing in the three risk factors that make Central Florida unique: karst sinkhole-related water intrusion in Winter Park, Conway, and Pine Hills; vacation rental water damage with complex insurance implications; and hurricane rainfall flooding from storms that track across the state. Call <a href={`tel:${city.phone}`} className="text-orange-600 hover:underline">{city.phone}</a> now.
          </p>
        </div>
      </section>

      {/* Sinkhole Alley — Orlando's unique risk */}
      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Sinkhole Alley: Orlando&rsquo;s Hidden Water Damage Risk</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <p className="text-navy-700 leading-relaxed mb-4">
                Central Florida sits within what geologists and the insurance industry call &ldquo;sinkhole alley&rdquo; — a belt of limestone karst geology running from Tampa through Orlando where underground dissolution by groundwater creates subsurface voids. When those voids affect the karst below a slab foundation, the consequences often appear first as water damage: underground supply lines fracture, foundation movement breaks drain connections, and groundwater migrates through cracks in the slab into living spaces.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                Winter Park, Conway, and Pine Hills have some of the highest documented sinkhole-related claim frequencies in Orange County. The Winter Park sinkhole of 1981 — which swallowed a Porsche dealership, a house, and most of a city block — remains the most visible example, but countless smaller karst events occur across the metro annually, most presenting first as unexplained moisture, efflorescence on slab surfaces, or doors that suddenly won&rsquo;t close (a sign of foundation movement).
              </p>
              <p className="text-navy-700 leading-relaxed">
                Florida Statute 627.706 is the key insurance reference: it distinguishes between <strong>catastrophic ground cover collapse</strong> (covered by most policies — visible, sudden sinkhole activity) and <strong>sinkhole damage</strong> (optional endorsement that most Orlando homeowners don&rsquo;t purchase). The practical effect is that many Orlando homeowners with karst-related water intrusion face coverage disputes. Our technicians document water damage origin precisely — foundation intrusion paths, slab moisture mapping, and lateral migration — providing the evidence needed regardless of whether the claim goes through standard HO or sinkhole endorsement channels.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-800 mb-4">Orlando&rsquo;s Water Damage Risk Factors</h3>
              <div className="space-y-4">
                {[
                  { title: 'Karst / Sinkhole Activity', areas: 'Winter Park, Conway, Pine Hills, Azalea Park', detail: 'Underground limestone dissolution fractures foundation plumbing and allows groundwater intrusion through slab. FL Stat 627.706 covers catastrophic collapse; gradual sinkhole damage requires optional endorsement.' },
                  { title: 'Daily Summer Convective Storms', areas: 'Metro-wide, June–September', detail: 'Orlando averages 55+ thunderstorm days annually — among the highest in the US. Concentrated afternoon downpours of 2–4 inches overwhelm gutters, window seals, and flat roofs. Vacation rental HVAC pans also flood from condensate backup.' },
                  { title: 'Hurricane Rainfall Flooding', areas: 'Lakefront properties, low lots metro-wide', detail: 'Ian (2022) and Irma (2017) both produced major inland flooding in Orange County. Lakefront properties in Baldwin Park, Lake Nona, and Winter Park face overflow risk from Orlando\'s 100+ lakes.' },
                  { title: 'Slab Leaks — Filled-Land Subdivisions', areas: 'Lake Nona, Avalon Park, Hunter\'s Creek, Horizon West', detail: 'Former wetland soil under newer subdivisions retains moisture and stresses CPVC supply lines. Slab leaks are the most common non-storm WD call in newer Orlando construction.' },
                  { title: 'Vacation Rental Appliance Failures', areas: 'Dr. Phillips, Windermere, International Drive corridor', detail: 'High-turnover rental use accelerates appliance failure. Properties may go unoccupied for days with active leak. Insurance complexity: standard HO may not cover rental use.' },
                ].map((r) => (
                  <div key={r.title} className="flex gap-3">
                    <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span>
                    <div>
                      <p className="font-bold text-navy-800 text-sm">{r.title} <span className="font-normal text-navy-500">({r.areas})</span></p>
                      <p className="text-navy-600 text-sm">{r.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacation rental section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Orlando Vacation Rental Water Damage — A Separate Playbook</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <p className="text-navy-700 leading-relaxed mb-4">
                Orlando&rsquo;s short-term rental market — concentrated in Dr. Phillips, Windermere, Celebration, Kissimmee, and the International Drive corridor — has specific water damage dynamics that differ from primary residences. Vacation rental properties generate water damage calls that primary homes don&rsquo;t: HVAC condensate pan overflow from units running 24/7 in July heat, dishwasher failures from back-to-back heavy use, bathroom supply line failures discovered by cleaning crews 48 hours after the fact, and refrigerator ice-maker line failures in units that sit unoccupied between bookings.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Insurance for vacation rentals in Orlando is complex. Standard HO policies typically exclude commercial rental use. Many rental owners operate under vacation rental endorsements or commercial dwelling policies that have different water damage claim procedures, different mitigation requirements, and different coverage limits on contents. When we arrive at a vacation rental, we document the event in formats acceptable to both personal-lines adjusters and commercial-lines adjusters, including occupancy status at time of loss and the specific appliance or system that failed.
              </p>
            </div>
            <div className="bg-light-100 border border-light-200 p-6">
              <h3 className="font-bold text-navy-800 mb-4">Vacation Rental Water Damage Response</h3>
              <ul className="space-y-3 text-sm text-navy-700">
                {[
                  'Rapid response — bookings can\'t wait; we minimize vacancy time',
                  'Contents documentation for rental-use furnishings and equipment',
                  'Occupancy-at-loss documentation for insurance',
                  'Commercial policy and vacation rental endorsement claim support',
                  'Odor elimination critical for rental re-occupancy',
                  'Coordination with property management companies',
                  'Post-drying clearance documentation for rental platform liability',
                ].map((d) => (
                  <li key={d} className="flex gap-2"><span className="text-orange-500 font-bold flex-shrink-0">✓</span>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Orlando Neighborhoods We Serve</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {[
              { name: 'Dr. Phillips', note: 'Luxury vacation rentals; appliance failures; slab leaks' },
              { name: 'Windermere', note: 'Estate homes; lakefront overflow; aging HVAC systems' },
              { name: 'Winter Park', note: 'High sinkhole frequency; 1950s-1970s plumbing stock' },
              { name: 'Baldwin Park', note: 'Lakefront overflow risk; newer slab construction on fill' },
              { name: 'Lake Nona', note: 'Fill-land slab leaks; medical district high-rise pipe failures' },
              { name: 'College Park / Edgewater', note: 'Pre-war bungalows; original cast-iron drain lines' },
              { name: 'Conway', note: 'Sinkhole alley; flat terrain flash flooding' },
              { name: 'Pine Hills', note: 'Sinkhole frequency; 1960s-1970s housing stock' },
              { name: 'Hunter\'s Creek', note: 'Filled wetland; CPVC slab leak; vacation rental density' },
              { name: 'Avalon Park', note: 'Filled wetland; slab leaks; active family occupancy' },
              { name: 'Maitland / Altamonte', note: 'Lake chain overflow; older split-level construction' },
              { name: 'Celebration', note: 'High vacation rental density; managed HOA community' },
            ].map((n) => (
              <div key={n.name} className="bg-white border border-light-200 px-4 py-3">
                <p className="font-bold text-navy-800 text-sm">{n.name}</p>
                <p className="text-navy-500 text-xs mt-0.5">{n.note}</p>
              </div>
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
              { step: '01', title: '60-Min Dispatch', detail: 'Dr. Phillips, Lake Nona, Winter Park, Baldwin Park, Conway — 60-minute target. Vacation rental or primary residence — same response speed.' },
              { step: '02', title: 'Slab & Foundation Scan', detail: 'Thermal imaging and penetrating meters identify slab leak moisture and karst intrusion paths through foundation. Source confirmed before drying begins.' },
              { step: '03', title: 'Calibrated Drying', detail: 'Orlando\'s inland humidity requires calculated drying systems. Daily psychrometric readings. Injectidry cavity systems for slab-leak moisture in floor assemblies.' },
              { step: '04', title: 'Documentation', detail: 'Vacation rental or primary HO policy — separate documentation packages. Xactimate scope. Occupancy status recorded. Clearance testing available.' },
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
          <p className="text-white font-bold text-2xl mb-2">Water damage in Orlando? Sinkhole, pipe, or storm — we respond 24/7.</p>
          <p className="text-orange-100 mb-6">Dr. Phillips, Lake Nona, Winter Park, Baldwin Park — 60-minute response across greater Orlando.</p>
          <a href={`tel:${city.phone}`} className="inline-block bg-white text-orange-500 font-bold px-10 py-4 text-lg tracking-wide hover:bg-orange-50 transition-colors">☎ {city.phone} — Available 24/7</a>
        </div>
      </section>
    </>
  );
}
