import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { CITIES, SITE } from '@/lib/siteConfig';

const city = CITIES.find((c) => c.slug === 'miami')!;

export const metadata: Metadata = {
  title: 'Water Damage Restoration Miami FL | Sea Level Rise & High-Rise Specialists | The Florida Restoration Pros',
  description:
    'Miami water damage restoration — sea-level king tide flooding, post-Surfside high-rise HOA specialists, saltwater intrusion. English & Spanish. 60-min response. (786) 347-3624.',
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
      name: 'How does sea-level rise create water damage in Miami even without storms?',
      acceptedAnswer: { '@type': 'Answer', text: 'Miami Beach and low-lying Miami-Dade communities experience what is called "sunny-day flooding" — tidal flooding that occurs during king tide events without any rainfall. The mechanism is sea-level rise combined with predictable astronomical tides: as the absolute sea level has risen, the same high-tide cycles that previously stayed below street level now overtop seawalls and push saltwater up through stormwater drains. Miami Beach has documented approximately a 400% increase in sunny-day flooding events since 2006. This saltwater enters buildings through garage floor drains, elevator pits, ground-level landscaping irrigation systems, and door sweeps — creating water damage events that are saltwater contamination (Category 3 under IICRC S500), not freshwater pipe failures, and require the extended desiccant drying and salt removal protocol.' },
    },
    {
      '@type': 'Question',
      name: '¿Qué debo hacer si hay daños por agua en mi propiedad en Miami? (What should I do about water damage in Miami?)',
      acceptedAnswer: { '@type': 'Answer', text: 'Si hay agua estancada en su propiedad, llame a The Florida Restoration Pros al (786) 347-3624 inmediatamente — respondemos en 60 minutos las 24 horas. No intente limpiar el agua de inundación usted mismo: el agua que entra desde el exterior (mareas, tormentas) es Categoría 3 según IICRC S500 y contiene contaminantes. Nuestro equipo habla español. // In English: If you have standing water, call immediately at (786) 347-3624. Do not attempt to clean stormwater or king-tide intrusion yourself — it is Category 3 contaminated water. We respond in 60 minutes, 24/7. English and Spanish.' },
    },
    {
      '@type': 'Question',
      name: 'How did the Surfside collapse connect to water damage and building maintenance?',
      acceptedAnswer: { '@type': 'Answer', text: 'The 2021 collapse of Champlain Towers South in Surfside prompted a grand jury investigation that specifically identified saltwater intrusion and drainage failure as contributing factors in the building\'s structural deterioration. The grand jury report found that the pool deck waterproofing had failed, allowing saltwater to penetrate the concrete structure and corrode rebar over years. Miami-Dade County\'s response included significantly strengthened 40-year and 50-year building recertification requirements that now explicitly require documented water intrusion assessments. Building managers and HOA boards who fail to address documented water damage events in high-rises now face legal liability under these expanded recertification rules.' },
    },
    {
      '@type': 'Question',
      name: 'What happened to Brickell and Coconut Grove during Hurricane Irma?',
      acceptedAnswer: { '@type': 'Answer', text: 'Hurricane Irma (September 2017) produced storm surge of approximately 3 to 6 feet in low-lying sections of Brickell and Coconut Grove — the two lowest-elevation neighborhoods in central Miami. Brickell Bay Drive and sections of Coconut Grove near the bay were inundated. Properties that experienced Irma surge and were not professionally restored at the time may still carry legacy damage: hidden mold in wall cavities, compromised waterproofing membranes in below-grade parking, and saltwater corrosion of structural metals that has progressed silently since 2017. We perform legacy damage assessments for properties seeking pre-sale inspections or recertification-related documentation.' },
    },
    {
      '@type': 'Question',
      name: 'How do you handle water damage in a Miami condo or high-rise?',
      acceptedAnswer: { '@type': 'Answer', text: 'High-rise water damage events in Miami typically involve multiple floors and units when a pipe failure or roof drain backup occurs — a single supply line failure on floor 30 can affect the units directly below through multiple levels. The Florida Restoration Pros coordinates directly with building management and HOA boards, documents each affected unit separately for individual insurance claims, and manages elevator access, parking, and building protocol logistics. We provide the water intrusion assessment reports required under Miami-Dade\'s post-Surfside enhanced recertification process, and our documentation is accepted by the building departments and HOA boards across Miami-Dade.' },
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

      <section className="relative bg-navy-950 overflow-hidden">
        <Image
          src="/images/hero-miami.webp"
          alt="Miami water damage restoration"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/75 via-navy-900/55 to-navy-900/35" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-4 py-1.5 mb-6">
              <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">● 24/7 Emergency · English &amp; Español · Sea Level &amp; High-Rise Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Miami Water Damage Restoration</h1>
            <div className="w-16 h-1 bg-orange-500 mb-6" />
            <p className="text-white font-semibold text-lg leading-relaxed mb-8">
              IICRC-certified water damage restoration across Miami-Dade — sea-level king tide saltwater protocol, post-Surfside high-rise HOA documentation, Irma-legacy damage assessment, and everyday pipe failures in Brickell, Coconut Grove, Coral Gables, Wynwood, and all surrounding communities. English and Spanish. Hablamos español.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${city.phone}`} className="btn-primary text-base uppercase tracking-wider text-center">☎ Llame / Call {city.phone}</a>
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
                'Sea-level king tide saltwater protocol',
                '60-min to Brickell & Coconut Grove',
                'Post-Surfside HOA recertification docs',
                'English & Spanish / Hablamos español',
                'Irma surge legacy assessment',
                'All Miami-Dade carriers accepted',
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
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Quick Answer / Respuesta Rápida</p>
          <p className="text-navy-900 text-lg font-semibold leading-relaxed">
            The Florida Restoration Pros — <em>Los Profesionales de Restauración de Florida</em> — provides 24/7 emergency water damage restoration in Miami, FL, targeting a 60-minute response. We specialize in sea-level saltwater king tide intrusion, post-Surfside high-rise HOA water damage documentation, Irma-legacy assessment, and Cat 3 stormwater flooding. English and Spanish. Call <a href={`tel:${city.phone}`} className="text-orange-600 hover:underline">{city.phone}</a> now.
          </p>
        </div>
      </section>

      {/* Sea-level rise section */}
      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Miami&rsquo;s Water Damage Reality: Flooding Without Rain</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <p className="text-navy-700 leading-relaxed mb-4">
                Miami faces a water damage challenge no other American city fully shares: sea levels are rising faster here than almost anywhere else on the U.S. coastline. The combination of global sea-level rise and natural land subsidence makes Miami-Dade one of the most rapidly changing coastal environments in the world. The practical result is flooding that occurs routinely during king tide events in September and October — without any storm, without any rainfall — when astronomical high tides now exceed seawall heights that were adequate for decades.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                Miami Beach has documented approximately a 400% increase in sunny-day flooding events since 2006. During a king tide event, saltwater pushes up through stormwater drain grates across Miami Beach and low-lying Brickell, flooding streets and parking garages. That saltwater enters buildings through garage floor drains, elevator pits, and ground-floor door gaps. This is not a weather event — it is a predictable, calendar-based occurrence that property managers in Miami Beach and Brickell now plan around.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Hurricane Irma (2017) demonstrated what happens when surge combines with sea-level-rise baseline conditions. Irma pushed approximately 3 to 6 feet of surge into Brickell and Coconut Grove — both low-lying waterfront neighborhoods now sitting closer to sea level than they were in 2005. Properties that experienced Irma flooding without professional restoration carry legacy saltwater damage that continues to manifest years later: corroded rebar, hygroscopic salt crystals re-wetting concrete during humid weather, and hidden mold in wall assemblies. The Surfside grand jury report — which identified saltwater intrusion and drainage failure as contributing factors to the Champlain Towers South structural deterioration — brought national attention to exactly this kind of slow-developing, moisture-driven structural damage in Miami-Dade high-rises.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-800 mb-4">Por Qué Miami Es Diferente / Why Miami Is Different</h3>
              <div className="space-y-3">
                {[
                  { es: 'Mareas de sicigias (king tides)', en: 'King tide sunny-day flooding', detail: 'Saltwater up through drain grates — no rain required. Miami Beach +400% events since 2006. Predictable fall calendar.' },
                  { es: 'Intrusión de agua salada', en: 'Saltwater intrusion', detail: 'Sea-level rise pushes saltwater through slab and foundation drainage. Post-Surfside: now a legal liability issue in high-rise recertification.' },
                  { es: 'Alta humedad — moho en 24 horas', en: '24-hour mold risk', detail: 'Miami\'s 75%+ baseline humidity means mold can colonize wet materials in 12–24 hours in summer. Faster than any other FL city.' },
                  { es: 'Surge de Irma (2017)', en: 'Irma surge legacy', detail: '3–6 feet of surge into Brickell/Coconut Grove (2017). Irma-legacy saltwater damage in walls/parking structures still manifesting.' },
                  { es: 'Post-Surfside: recertificación', en: 'Post-Surfside recertification', detail: 'Miami-Dade 40/50-year recertification now requires documented water intrusion assessments. Failure to address = HOA board legal liability.' },
                ].map((r) => (
                  <div key={r.es} className="border-l-4 border-orange-500 pl-4">
                    <p className="font-bold text-navy-800 text-sm">{r.es} <span className="font-normal text-navy-500">/ {r.en}</span></p>
                    <p className="text-navy-600 text-xs">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Surfside high-rise section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">High-Rise &amp; Condo Water Damage — Post-Surfside Protocol</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <p className="text-navy-700 leading-relaxed mb-4">
                The 2021 collapse of Champlain Towers South in Surfside fundamentally changed how Miami-Dade County regulates water damage documentation in high-rise buildings. The grand jury investigation found that years of undocumented saltwater intrusion into the pool deck, parking garage, and concrete structure had corroded rebar and weakened the post-tension slab — and that building management had failed to act on documented water damage concerns. Miami-Dade&rsquo;s response was to substantially strengthen the 40-year and 50-year building recertification process to require explicit water intrusion assessments.
              </p>
              <p className="text-navy-700 leading-relaxed">
                HOA boards and building managers across Miami-Dade now face clear legal exposure if they fail to address documented water damage. When a pipe failure affects multiple units, or when king tide saltwater enters a parking garage, a professional restoration contractor must be engaged — and that contractor must provide the written documentation that satisfies the recertification process. The Florida Restoration Pros provides the water intrusion assessment reports, category determinations, and drying completion documentation required for Miami-Dade recertification across all the high-rise buildings we serve.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-navy-800 p-6">
                <h3 className="text-white font-bold mb-3">High-Rise Water Damage Coordination</h3>
                <ul className="space-y-2 text-sm text-steel-300">
                  {[
                    'Separate documentation for each affected unit',
                    'HOA master policy vs. unit owner allocation',
                    'Miami-Dade 40/50-year recertification reports',
                    'Elevator and building access logistics managed',
                    'Multi-floor pipe failure tracking and documentation',
                    'Saltwater garage flood Category 3 protocol',
                    'Public adjuster coordination and supplement support',
                  ].map((d) => (
                    <li key={d} className="flex gap-2"><span className="text-orange-400 font-bold flex-shrink-0">✓</span>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-500 p-5">
                <p className="text-white font-bold mb-1">Emergency en Miami / Emergency in Miami</p>
                <p className="text-orange-100 text-sm mb-3">Respondemos en 60 minutos · 60-minute response · Hablamos español</p>
                <a href={`tel:${city.phone}`} className="block bg-white text-orange-500 font-bold text-center py-2.5 text-sm tracking-wide hover:bg-orange-50 transition-colors">{city.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Miami Neighborhoods We Serve — Por Vecindario</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {[
              { name: 'Brickell', note: 'Irma surge legacy · high-rise pipe failures · tidal saltwater in parking garages' },
              { name: 'Coconut Grove', note: 'Irma 3–6ft surge · older single-family homes · bay-front tidal exposure' },
              { name: 'Coral Gables', note: 'Elevated terrain (lower surge risk) · aging 1930s-1960s plumbing stock · Mediterranean Revival historic fabric' },
              { name: 'Miami Beach', note: 'Ground zero for king tide sunny-day flooding · +400% events since 2006 · saltwater through drain grates' },
              { name: 'Wynwood', note: 'Flat terrain · converted industrial buildings · roof drain failures during summer storms' },
              { name: 'Edgewater', note: 'Bay-adjacent · tidal exposure · rapid new high-rise development with warranty plumbing claims' },
              { name: 'Cutler Bay', note: 'South Miami-Dade · lower elevation · canal system saltwater intrusion · newer suburban construction' },
              { name: 'Little Havana', note: 'Older housing stock · high proportion Spanish-speaking homeowners · pipe failure and HVAC condensate flooding' },
              { name: 'Surfside / Bal Harbour', note: 'Post-Surfside recertification requirements · oceanfront saltwater exposure · condo association coordination' },
              { name: 'Aventura', note: 'High-rise dense · tidal Intracoastal exposure · multi-unit pipe failure documentation' },
              { name: 'Doral / Hialeah', note: 'Industrial and commercial · flat terrain · summer stormwater flooding · newer suburban slab leaks' },
              { name: 'Pinecrest / Palmetto Bay', note: 'Affluent south corridor · older slab-on-grade · mature tree root intrusion into drain lines' },
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
          <h2 className="section-heading text-white text-center mb-2">Our Miami Restoration Process</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { step: '01', title: '60-Min · Inglés y Español', detail: 'Dispatchers answer in English and Spanish 24/7. 60-minute target to Brickell, Coconut Grove, Coral Gables, Miami Beach, Wynwood, and all Miami-Dade communities.' },
              { step: '02', title: 'Salt vs. Freshwater Protocol', detail: 'King tide vs. pipe failure source confirmed immediately. Saltwater: Category 3 protocol, salt mapping, extended desiccant drying. Freshwater pipe failure: standard Cat 1 approach.' },
              { step: '03', title: 'Recertification Documentation', detail: 'For high-rise and condo events: Miami-Dade 40/50-year recertification water intrusion assessment started on arrival. Separate unit documentation. HOA board briefing.' },
              { step: '04', title: 'Claim Navigation', detail: 'Standard HO, condo master policy, NFIP, or private flood — Miami-Dade claims involve all four. Public adjuster coordination. Xactimate scope. Spanish-language adjuster communication available.' },
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

      {/* Spanish section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-heading mb-4">Restauración por Daños de Agua en Miami — Hablamos Español</h2>
              <div className="orange-rule-left" />
              <p className="text-navy-700 leading-relaxed mb-4">
                Aproximadamente el 70% de los residentes de Miami-Dade son hispanos o latinos. The Florida Restoration Pros ofrece servicio completamente bilingüe — en inglés y español — en todos los aspectos de la restauración: despacho de emergencia, evaluación de daños, comunicación con su aseguradora, y documentación del reclamo.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                La búsqueda de &ldquo;restauración por daños de agua Miami&rdquo; revela que la mayoría de los contratistas en el área no ofrecen servicio en español como capacidad principal. Nuestro equipo habla español con fluidez — no solo un servicio de interpretación — para que usted pueda explicar exactamente lo que ocurrió y entender completamente el proceso de restauración y reclamación de seguro.
              </p>
              <p className="text-navy-700 leading-relaxed italic">
                The Florida Restoration Pros offers fully bilingual water damage restoration service across Miami-Dade in English and Spanish — emergency dispatch, damage assessment, insurance claim communication, and full documentation. Call <a href={`tel:${city.phone}`} className="text-orange-600 hover:underline">{city.phone}</a>.
              </p>
            </div>
            <div className="bg-navy-800 p-8">
              <p className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-4">Daños por agua en Miami · Water damage Miami</p>
              <p className="text-white font-bold text-xl mb-3">¿Agua en su hogar o negocio?</p>
              <p className="text-steel-300 mb-4">Respondemos en 60 minutos, las 24 horas del día, los 7 días de la semana. Hablamos español.</p>
              <a href={`tel:${city.phone}`} className="block bg-orange-500 text-white font-bold text-center py-3 text-lg tracking-wide hover:bg-orange-400 transition-colors mb-3">{city.phone}</a>
              <p className="text-steel-400 text-xs text-center">English &amp; Spanish · 24/7 Emergency</p>
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
          <p className="text-white font-bold text-2xl mb-2">Daños por agua en Miami — llamenos ahora · Water damage Miami — call now</p>
          <p className="text-orange-100 mb-6">Brickell, Coconut Grove, Coral Gables, Miami Beach, Wynwood — 60 minutos · 60-minute response · Hablamos español</p>
          <a href={`tel:${city.phone}`} className="inline-block bg-white text-orange-500 font-bold px-10 py-4 text-lg tracking-wide hover:bg-orange-50 transition-colors">☎ {city.phone} — 24/7</a>
        </div>
      </section>
    </>
  );
}
