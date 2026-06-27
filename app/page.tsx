import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { SITE, CITIES, SERVICES, LOCAL_BUSINESS_SCHEMA } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Florida — Fast, Certified, Local | The Florida Restoration Pros',
  description:
    'IICRC-certified water damage restoration across Florida. 24/7 emergency response in Tampa, Orlando, Jacksonville, Fort Lauderdale, and Miami. Structural drying, mold remediation, insurance claims handled.',
  alternates: {
    canonical: SITE.siteUrl + '/',
  },
};

const SPEAKABLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Water Damage Restoration Florida | The Florida Restoration Pros',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#aeo-answer', '#trust-signals'],
  },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is water damage restoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Water damage restoration is the process of drying, cleaning, and repairing a property after water intrusion from flooding, pipe bursts, roof leaks, or storm surge. The ANSI/IICRC S500 standard defines four moisture classes and three contamination categories that govern professional restoration procedures. A certified technician extracts standing water, applies industrial drying equipment, monitors moisture levels until structural materials reach acceptable thresholds, and documents the process for insurance claims.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly do you respond to water damage emergencies in Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Florida Restoration Pros targets a 60-minute response window across our five primary service markets: Tampa, Orlando, Jacksonville, Fort Lauderdale, and Miami. Our dispatchers answer every call 24 hours a day, 7 days a week — including weekends, holidays, and overnight emergencies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work directly with insurance companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our technicians document all damage with moisture readings, thermal imaging, and written reports formatted for standard insurance claims. We work with all major carriers and can communicate directly with your adjuster throughout the process.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does water damage drying take in Florida\'s climate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most residential structural drying projects in Florida reach IICRC S500 dry standards in 3 to 5 days under controlled conditions. Florida\'s high ambient humidity — averaging 74% year-round — means drying without professional equipment takes significantly longer and allows mold to establish. We use industrial desiccant dehumidifiers and air movers calibrated for Florida\'s subtropical environment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can water damage cause mold in Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and faster than in most U.S. states. Florida\'s subtropical humidity means mold spores can germinate on wet materials within 24 to 48 hours of a water event, per EPA guidelines. Our AMRT-certified technicians assess for mold risk immediately during water damage response and can perform remediation if needed.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={LOCAL_BUSINESS_SCHEMA} />
      <JsonLd data={SPEAKABLE_SCHEMA} />
      <JsonLd data={FAQ_SCHEMA} />

      {/* ── Hero ── */}
      <section className="relative bg-navy-950 overflow-hidden">
        <Image
          src="/images/hero-bg.webp"
          alt="Water damage restoration Florida"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Semi-transparent overlay — keeps image visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/70 via-navy-900/50 to-navy-900/30" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
          {/* Hero text */}
          <div className="flex-1 max-w-2xl" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-4 py-1.5 mb-6">
              <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">
                ● Available Now — 24/7 Emergency Response
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Water Damage Restoration Florida —{' '}
              <span className="text-orange-400">Fast, Certified, Local</span>
            </h1>

            <p className="text-white font-semibold text-lg leading-relaxed mb-8">
              IICRC-certified restoration crews serving Tampa, Orlando, Jacksonville, Fort Lauderdale, and Miami.
              We respond in 60 minutes, dry to ANSI/IICRC S500 standard, and handle your insurance claim from first call to final sign-off.
            </p>

            {/* Trust bar */}
            <div id="trust-signals" className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {[
                { icon: '🕐', label: '24/7 Emergency' },
                { icon: '✓', label: 'IICRC Certified' },
                { icon: '📋', label: 'Insurance Claims' },
                { icon: '🔍', label: 'Free Inspection' },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2 bg-navy-800/60 border border-navy-700 px-3 py-2">
                  <span className="text-lg">{t.icon}</span>
                  <span className="text-white text-xs font-semibold">{t.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${SITE.phone}`}
                className="btn-primary text-base uppercase tracking-wider text-center"
              >
                ☎ Call {SITE.phone}
              </a>
              <Link href="/contact/" className="btn-ghost text-sm uppercase tracking-wider text-center">
                Schedule Free Inspection
              </Link>
            </div>
          </div>

          {/* Hero card */}
          <div
            className="flex-shrink-0 w-full lg:w-80 border border-orange-500/50 p-6"
            style={{ backgroundColor: 'rgba(27, 58, 92, 0.92)', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
          >
            <p className="text-orange-400 font-bold text-sm uppercase tracking-wider mb-4">
              Why Call Us First?
            </p>
            <ul className="space-y-3">
              {[
                '60-minute response in 5 FL metro areas',
                'WRT · ASD · AMRT certified technicians',
                'Truck-mounted extraction units',
                'Industrial desiccant dehumidifiers',
                'Thermal imaging moisture verification',
                'All insurance carriers accepted',
                'Direct adjuster communication',
                'ANSI/IICRC S500-2021 compliant process',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white font-semibold">
                  <span className="text-orange-400 mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`tel:${SITE.phone}`}
              className="mt-6 block bg-orange-500 hover:bg-orange-400 text-white font-bold text-center py-3 tracking-wide transition-colors"
            >
              Call Now — It&apos;s Free
            </a>
          </div>
        </div>
      </section>

      {/* ── AEO Answer Block ── */}
      <section className="bg-light-100 py-14" id="aeo-answer">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">Quick Answer</p>
          <h2 className="text-2xl font-bold text-navy-800 mb-4">What is water damage restoration?</h2>
          <div className="aeo-block">
            <p className="text-navy-700 leading-relaxed">
              Water damage restoration is the certified process of extracting water, drying structural materials, and
              restoring a property after flooding, pipe bursts, appliance leaks, storm surge, or roof intrusion.
              Per the <strong>ANSI/IICRC S500-2021 Standard for Professional Water Damage Restoration</strong>, technicians
              assess moisture class (1–4) and contamination category (1–3), then apply industrial extraction,
              desiccant drying, and antimicrobial treatment until affected materials return to acceptable
              equilibrium moisture content. In Florida&apos;s subtropical climate, professional drying is critical —
              ambient humidity averaging 74% year-round makes DIY drying ineffective and accelerates mold
              colonization within 24–48 hours of a water event.
            </p>
          </div>
          <p className="text-steel-600 text-sm mt-4">
            Source: <a href="https://www.iicrc.org" target="_blank" rel="noopener noreferrer" className="text-steel-600 hover:text-navy-800 underline">IICRC.org</a> ·
            <a href="https://www.epa.gov/mold" target="_blank" rel="noopener noreferrer" className="text-steel-600 hover:text-navy-800 underline ml-1">EPA Mold Guidelines</a> ·
            <a href="https://www.fema.gov/flood-maps" target="_blank" rel="noopener noreferrer" className="text-steel-600 hover:text-navy-800 underline ml-1">FEMA Flood Resources</a>
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="section-heading mb-3">Complete Water Damage Services</h2>
            <div className="orange-rule" />
            <p className="text-steel-600 max-w-2xl mx-auto text-base">
              From the moment water enters your property to final clearance documentation — our IICRC-certified crews handle every phase of restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="group bg-white border border-light-200 hover:border-orange-400 p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-navy-800 mb-3 group-hover:text-orange-500 transition-colors">
                  {s.name}
                </h3>
                <p className="text-steel-600 text-sm leading-relaxed mb-4">
                  {s.description}
                </p>
                <span className="text-orange-500 text-sm font-semibold tracking-wide">
                  Learn More →
                </span>
              </Link>
            ))}

            {/* CTA card */}
            <div className="bg-navy-800 p-6 flex flex-col justify-between">
              <div>
                <p className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">Emergency?</p>
                <h3 className="text-xl font-bold text-white mb-3">We&apos;re On Call Right Now</h3>
                <p className="text-steel-300 text-sm leading-relaxed mb-6">
                  Don&apos;t let water damage sit. Every hour increases drying time, structural damage, and the
                  risk of mold. Our Florida crews are ready to deploy immediately.
                </p>
              </div>
              <a
                href={`tel:${SITE.phone}`}
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold text-center py-3 text-sm tracking-wide transition-colors"
              >
                ☎ {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Florida Context Section ── */}
      <section className="bg-light-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">Florida-Specific Expertise</p>
            <h2 className="section-heading mb-5">
              Why Florida Water Damage Is Different
            </h2>
            <div className="orange-rule-left" />

            <div className="space-y-5 text-steel-700 leading-relaxed">
              <p>
                Florida&apos;s combination of hurricane exposure, subtropical humidity, aging infrastructure, and rising
                sea levels creates water damage conditions found nowhere else in the United States. Restoration
                companies that deploy standard protocols from drier climates routinely fail here — leaving hidden
                moisture in wall cavities and subfloor assemblies that triggers mold outbreaks weeks after the
                apparent drying is complete.
              </p>
              <p>
                Our technicians are trained specifically for Florida conditions. We account for ambient dew point
                when setting dehumidifier targets, recognize karst-driven intrusion patterns common in Central
                Florida, understand the canal seepage mechanics that follow king tide events in South Florida,
                and know which hurricane-era building assemblies in Jacksonville and Tampa conceal moisture the
                longest.
              </p>
              <p>
                Every job we close includes a final psychrometric report showing structure-specific moisture
                readings at or below IICRC S500 dry standard — the documentation your insurance adjuster
                needs to close your claim.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { stat: '74%', label: 'FL avg. annual humidity' },
                { stat: '24–48h', label: 'Mold onset window (EPA)' },
                { stat: '60 min', label: 'Target response time' },
                { stat: 'S500', label: 'IICRC dry standard' },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-light-200 p-4 text-center">
                  <p className="text-2xl font-bold text-navy-800 mb-1">{s.stat}</p>
                  <p className="text-steel-500 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-navy-800 mb-6">Florida Water Damage: City-by-City Risks</h3>
            {[
              {
                city: 'Tampa',
                risk: 'Highest surge vulnerability of any major U.S. metro per NOAA analysis. South Tampa sits at or below sea level across large swaths. Hurricanes Idalia (2023) and Milton (2024) produced widespread structural flooding throughout Hillsborough County.',
              },
              {
                city: 'Orlando',
                risk: 'Karst limestone geology creates sinkhole-linked foundation flooding invisible on surface inspection. Orlando\'s 50+ million annual visitors mean vacation rental and hotel properties face accelerated wear on plumbing and HVAC drain systems.',
              },
              {
                city: 'Jacksonville',
                risk: 'The St. Johns River\'s northward flow and tidal reach make northeast Jacksonville neighborhoods repeat flooding victims. Hurricane Irma (2017) set flood records across Duval County. Riverside and Avondale\'s historic bungalow stock holds moisture in balloon-frame walls that modern drying protocols underestimate.',
              },
              {
                city: 'Fort Lauderdale',
                risk: 'On April 25–26, 2023, Fort Lauderdale recorded 25.91 inches of rain in under 24 hours — the highest single-day total in recorded South Florida history. King tide events push canal water into residential slabs 15–20 times per year along the Intracoastal corridor.',
              },
              {
                city: 'Miami',
                risk: 'Sea-level rise in Miami is accelerating at roughly 1 inch per decade — the fastest rate of any major U.S. city per NOAA. Brickell and Wynwood high-rises face compounding intrusion from both rooftop leaks and rising groundwater. Florida\'s Spanish-dominant demographics in Miami mean bilingual adjuster communication is often essential.',
              },
            ].map((item) => (
              <div key={item.city} className="bg-white border border-light-200 p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-navy-800">{item.city}</h4>
                  <Link
                    href={`/water-damage-restoration/${item.city.toLowerCase().replace(' ', '-')}/`}
                    className="text-orange-500 text-xs font-semibold hover:text-orange-400 transition-colors"
                  >
                    View Page →
                  </Link>
                </div>
                <p className="text-steel-600 text-sm leading-relaxed">{item.risk}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hub Cities Grid ── */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-3">Service Markets</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Water Damage Restoration Across Florida
            </h2>
            <div className="orange-rule" />
            <p className="text-steel-300 max-w-2xl mx-auto">
              Local crews in every market — not a national dispatch center routing calls to whoever is available.
              When you call, you reach a technician who knows your city.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/water-damage-restoration/${c.slug}/`}
                className="group bg-navy-800 border border-navy-700 hover:border-orange-500 p-6 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                  Water Damage {c.city}
                </h3>
                <p className="text-orange-400 text-sm font-semibold mb-3">{c.phone}</p>
                <address className="not-italic text-steel-400 text-xs leading-relaxed mb-3">
                  {c.streetAddress}<br />
                  {c.addressLocality}, {c.addressRegion} {c.postalCode}
                </address>
                <p className="text-steel-400 text-xs italic leading-relaxed">
                  {c.localAngle}
                </p>
                <span className="mt-4 block text-orange-400 text-xs font-semibold tracking-wider uppercase group-hover:text-orange-300">
                  View {c.city} Page →
                </span>
              </Link>
            ))}

            {/* CTA card */}
            <div className="bg-orange-500 p-6 flex flex-col justify-center items-center text-center">
              <p className="text-white font-bold text-xl mb-2">Your city not listed?</p>
              <p className="text-orange-100 text-sm mb-5 leading-relaxed">
                We respond throughout Florida. Call us — if we can reach you in 60 minutes, we will.
              </p>
              <a
                href={`tel:${SITE.phone}`}
                className="bg-white text-orange-600 font-bold px-6 py-3 text-sm hover:bg-orange-50 transition-colors"
              >
                ☎ {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Restoration Process ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">How It Works</p>
            <h2 className="section-heading mb-3">Our IICRC-Certified Restoration Process</h2>
            <div className="orange-rule" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
            {[
              {
                step: '01',
                title: 'Emergency Call & Dispatch',
                body: 'Call us 24/7. A dispatcher answers immediately and a certified crew deploys to your property. We target 60 minutes or less across all five Florida markets.',
              },
              {
                step: '02',
                title: 'Assessment & Documentation',
                body: 'Moisture meters, thermal imaging cameras, and psychrometric readings establish baseline conditions. We document everything your insurance adjuster needs before extraction begins.',
              },
              {
                step: '03',
                title: 'Extraction & Structural Drying',
                body: 'Truck-mounted extractors remove standing water. Industrial desiccant dehumidifiers and high-velocity air movers dry structural assemblies to ANSI/IICRC S500 standards, monitored daily.',
              },
              {
                step: '04',
                title: 'Clearance & Insurance Close-Out',
                body: 'A final psychrometric report documents that all affected materials have returned to acceptable moisture content. We submit directly to your carrier and walk you through the claims process.',
              },
            ].map((p, i) => (
              <div key={p.step} className={`p-7 border border-light-200 relative ${i % 2 === 0 ? 'bg-light-50' : 'bg-white'}`}>
                <div className="text-4xl font-bold text-orange-500/20 mb-3">{p.step}</div>
                <h3 className="font-bold text-navy-800 text-base mb-3">{p.title}</h3>
                <p className="text-steel-600 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us / Trust Signals ── */}
      <section className="bg-light-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">Our Credentials</p>
            <h2 className="section-heading mb-3">Why Property Owners Choose The Florida Restoration Pros</h2>
            <div className="orange-rule" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                {
                  title: 'IICRC Certified Firm — WRT, ASD, AMRT',
                  body: 'The Institute of Inspection, Cleaning and Restoration Certification sets the industry standard. Our technicians hold Water Damage Restoration Technician (WRT), Applied Structural Drying (ASD), and Applied Microbial Remediation Technician (AMRT) credentials — not just IICRC firm membership. When your adjuster asks for certified documentation, we provide it.',
                },
                {
                  title: 'Direct Insurance Claim Handling',
                  body: 'We have worked with every major carrier operating in Florida — State Farm, Citizens, Universal, Heritage, Slide, and others. Our scope-of-loss documentation is formatted to insurance industry standards, reducing adjuster back-and-forth and accelerating your settlement timeline.',
                },
                {
                  title: 'Florida-Calibrated Equipment',
                  body: 'Standard dehumidifiers sized for dry-climate restoration under-perform in Florida. We deploy desiccant dehumidifiers capable of effective moisture removal at dew points above 65°F — the reality on a typical Florida summer day after a flooding event.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1 flex-shrink-0 bg-orange-500 mt-1 self-stretch" />
                  <div>
                    <h3 className="font-bold text-navy-800 mb-2">{item.title}</h3>
                    <p className="text-steel-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                {
                  title: '60-Minute Response Target — Every Market, Every Hour',
                  body: 'National restoration franchises route Florida calls through centralized dispatch. We maintain locally-stationed crews in Tampa Bay, Greater Orlando, Jacksonville metro, Broward County, and Miami-Dade — which is why we can commit to a 60-minute target rather than a 2–4 hour ETA.',
                },
                {
                  title: 'Mold Prevention as Standard Practice',
                  body: 'Florida\'s EPA mold guidelines note that mold can begin colonizing wet materials within 24–48 hours. We apply antimicrobial agents during every water damage job as a preventive measure — not an upsell. Our AMRT-certified technicians assess mold risk on every visit.',
                },
                {
                  title: 'Complete Contents and Structural Documentation',
                  body: 'Many property owners underestimate the value of damaged contents. Our team documents affected belongings with itemized reports, photographs, and replacement-cost estimates that support maximum insurance recovery — not just the structure, but everything inside it.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1 flex-shrink-0 bg-orange-500 mt-1 self-stretch" />
                  <div>
                    <h3 className="font-bold text-navy-800 mb-2">{item.title}</h3>
                    <p className="text-steel-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">Common Questions</p>
            <h2 className="section-heading mb-3">Water Damage Restoration FAQ</h2>
            <div className="orange-rule" />
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How quickly does mold grow after water damage in Florida?',
                a: 'Per EPA guidelines, mold spores can germinate on wet materials in as little as 24–48 hours under Florida\'s ambient humidity conditions. Our AMRT-certified crews treat every water damage job as a mold prevention event — applying antimicrobial agents as standard practice, not an optional add-on.',
              },
              {
                q: 'What water damage categories does the IICRC recognize?',
                a: 'The IICRC S500 standard defines three contamination categories: Category 1 (clean water from supply lines or rain), Category 2 (gray water from appliances, toilets without feces, or sump pump failures), and Category 3 (black water from sewage, flooding, or Category 1/2 water that has aged beyond 24–72 hours). Each category requires different protocols and personal protective equipment.',
              },
              {
                q: 'Will my homeowner\'s insurance cover water damage restoration in Florida?',
                a: 'Most standard HO-3 policies in Florida cover sudden and accidental water damage — pipe bursts, appliance leaks, and roof damage from storms. Flooding from overland water flow, storm surge, or rising groundwater typically requires separate NFIP or private flood insurance. Our team provides documentation that clearly distinguishes covered events from excluded causes.',
              },
              {
                q: 'How do I know when my property is fully dry?',
                a: 'Dryness is confirmed scientifically, not by appearance or touch. Our technicians take daily moisture meter readings and psychrometric measurements. A job is closed only when affected materials reach equilibrium moisture content at or below IICRC S500 dry standard — documented in a written psychrometric log you receive at job completion.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group border border-light-200 bg-light-50"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-navy-800 text-sm group-open:text-orange-500 transition-colors">
                  <span>{faq.q}</span>
                  <span className="text-orange-500 group-open:rotate-45 transition-transform text-xl leading-none flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-steel-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-navy-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-4">Ready to Respond</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Water damage doesn&apos;t wait. Neither do we.
          </h2>
          <p className="text-steel-300 text-lg mb-8 max-w-2xl mx-auto">
            Call now for immediate dispatch. Free damage assessment and insurance claim consultation included on every call — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE.phone}`}
              className="btn-primary text-lg px-10 py-4 uppercase tracking-wider"
            >
              ☎ Call {SITE.phone}
            </a>
            <Link href="/contact/" className="btn-ghost text-sm uppercase tracking-wider px-8 py-4">
              Schedule Free Inspection
            </Link>
          </div>
          <p className="text-steel-500 text-xs mt-6">
            Serving Tampa · Orlando · Jacksonville · Fort Lauderdale · Miami — and surrounding communities
          </p>
        </div>
      </section>

      {/* Attribution — Brain b32bfc21 */}
      {/* Content developed with AI assistance. All factual claims reference IICRC S500-2021, EPA, FEMA, and NOAA primary sources. */}
    </>
  );
}
