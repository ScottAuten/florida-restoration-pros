import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { SITE, CITIES } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Emergency Water Removal Florida | 60-Min Response | The Florida Restoration Pros',
  description:
    '24/7 emergency water removal across Tampa, Orlando, Jacksonville, Fort Lauderdale, and Miami. IICRC-certified crews respond in 60 minutes with truck-mounted extractors. Call (813) 212-5279.',
  alternates: { canonical: `${SITE.siteUrl}/services/emergency-water-removal/` },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is emergency water removal?',
      acceptedAnswer: { '@type': 'Answer', text: 'Emergency water removal is the first phase of water damage restoration — the rapid extraction of standing water from a property before it wicks into walls, subfloors, insulation, and structural cavities. Professional extraction uses truck-mounted units capable of removing hundreds of gallons per hour, followed by portable extractors for confined spaces. The goal is to remove all free-standing water within the first hours of a water event, because every additional hour of standing water exponentially increases structural damage and mold risk.' },
    },
    {
      '@type': 'Question',
      name: 'How much water can professional extractors remove?',
      acceptedAnswer: { '@type': 'Answer', text: 'Truck-mounted water extraction units used by professional restoration companies like The Florida Restoration Pros can remove 100–200 gallons per minute under optimal conditions. Portable submersible pumps handle deep standing water first, followed by wet-vac style extractors that remove water from carpet, pad, and hard surfaces. The complete extraction of a typical flooded residential room (250 sq ft with 2 inches of water) can be accomplished in under an hour with professional equipment.' },
    },
    {
      '@type': 'Question',
      name: 'Why can\'t I just use my shop vac or fans to dry water damage?',
      acceptedAnswer: { '@type': 'Answer', text: 'Household equipment cannot achieve the water removal speed, airflow volume, or dehumidification capacity required to prevent structural damage and mold in Florida\'s humidity. A standard shop vac holds 5–15 gallons and requires frequent emptying. Household fans move room air but cannot direct airflow into wall cavities, under flooring, or into structural assemblies where moisture wicks within hours. In Florida\'s subtropical climate, inadequate drying equipment allows mold colonization to begin within 24–48 hours per EPA guidelines — before you can visually detect a problem.' },
    },
    {
      '@type': 'Question',
      name: 'What happens if water isn\'t removed quickly enough?',
      acceptedAnswer: { '@type': 'Answer', text: 'Water damage follows a predictable progression based on IICRC S500 documentation: within minutes, water wicks into porous materials. Within hours, it saturates drywall, flooring, and insulation. Within 24–48 hours in Florida\'s humidity, mold can begin colonizing wet surfaces per EPA guidelines. Within days, structural materials swell, warp, and lose load capacity. Within weeks, secondary damage from mold, wood rot, and corrosion compounds original water damage costs significantly. Insurance claims are also affected: delayed professional response can be cited by carriers as failure to mitigate.' },
    },
  ],
};

export default function EmergencyWaterRemovalPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />

      <nav className="bg-light-100 border-b border-light-200 px-6 py-2 text-sm text-navy-600">
        <div className="max-w-7xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span>/</span>
          <Link href="/services/" className="hover:text-orange-500">Services</Link>
          <span>/</span>
          <span className="text-navy-800 font-semibold">Emergency Water Removal</span>
        </div>
      </nav>

      <section className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-4 py-1.5 mb-5">
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">● Available Now — 24/7 Emergency Service</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Emergency Water Removal</h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-200 text-lg max-w-2xl mb-8">
            Rapid extraction of standing water from Florida properties — 24 hours a day, 7 days a week. Truck-mounted units, 60-minute response target across Tampa, Orlando, Jacksonville, Fort Lauderdale, and Miami.
          </p>
          <a href={`tel:${SITE.phone}`} className="btn-primary text-base uppercase tracking-wider">☎ Call Now — {SITE.phone}</a>
        </div>
      </section>

      <section id="aeo-answer" className="max-w-7xl mx-auto px-6 py-10">
        <div className="aeo-block">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Quick Answer</p>
          <p className="text-navy-900 text-lg font-semibold leading-relaxed">
            Emergency water removal is the first and most time-critical phase of water damage restoration. The Florida Restoration Pros deploys truck-mounted extraction units to remove standing water within 60 minutes of your call, anywhere in Florida&rsquo;s five major metros. Every hour of standing water increases structural damage and mold risk. Call <a href={`tel:${SITE.phone}`} className="text-orange-600 hover:underline">{SITE.phone}</a> immediately.
          </p>
        </div>
      </section>

      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Why Speed Is Everything in Water Removal</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <p className="text-navy-700 leading-relaxed mb-4">
                Water damage is not a static event — it is an active process that accelerates every hour extraction is delayed. The ANSI/IICRC S500 standard documents this progression precisely: within minutes of a water event, free water begins wicking into porous materials. Within hours, drywall absorbs water up to 12 inches vertically from the floor. Within one to two days in Florida&rsquo;s subtropical climate, mold spores germinate on saturated surfaces per EPA guidelines.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                What makes Florida uniquely dangerous is the combination of warm temperatures and high humidity that accelerates every stage of this progression. In Tampa, Orlando, Jacksonville, Fort Lauderdale, and Miami, the ambient conditions that allow mold to colonize in 48 hours in a northern climate can produce visible mold growth in 24 hours or less during summer months.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Insurance carriers are aware of this timeline. Florida policies typically include a &ldquo;duty to mitigate&rdquo; clause that requires property owners to take reasonable steps to prevent damage from spreading after a water event. Failing to call a professional extraction company within a reasonable time can give a carrier grounds to reduce or deny a claim based on failure to mitigate. Calling The Florida Restoration Pros immediately creates the documentation record that demonstrates mitigation was taken.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-800 mb-4">The Water Damage Timeline</h3>
              <div className="space-y-3">
                {[
                  { time: 'Minutes', event: 'Free water wicks into carpet, pad, and drywall base. Contents on wet surfaces begin absorbing moisture.' },
                  { time: '1–4 Hours', event: 'Drywall absorbs water vertically. Furniture legs stain. Swelling begins in laminate flooring and wood materials.' },
                  { time: '24–48 Hours', event: 'Mold spores germinate per EPA guidelines. Drywall may require demolition rather than drying. Metal begins corroding.' },
                  { time: '1 Week', event: 'Structural materials warp and lose load capacity. Mold colonies visible. Secondary damage compounds original restoration cost.' },
                  { time: 'After 2 Weeks', event: 'Category 1 clean water may now be Category 2 or 3 due to microbial growth. Total loss potential on porous materials.' },
                ].map((t) => (
                  <div key={t.time} className="flex gap-4 border-l-4 border-orange-500 pl-4">
                    <div>
                      <p className="font-bold text-navy-800 text-sm">{t.time}</p>
                      <p className="text-navy-600 text-sm">{t.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Our Emergency Water Removal Process</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { step: '01', title: 'Dispatch Within Minutes', detail: 'Call received. Crew dispatched immediately. 60-minute target response across all 5 Florida metro areas. Truck-mounted extractor en route.' },
              { step: '02', title: 'Rapid Assessment', detail: 'On arrival: moisture map established. IICRC water category (Cat 1–3) and moisture class (1–4) determined. Electrical hazards confirmed safe.' },
              { step: '03', title: 'Extraction', detail: 'Submersible pumps for deep water. Truck-mounted wet-vac for residual water in carpet, pad, and hard floors. Portable units for confined spaces.' },
              { step: '04', title: 'Transition to Drying', detail: 'Standing water removed. Industrial dehumidifiers and air movers positioned. Daily monitoring schedule established. Insurance documentation begun.' },
            ].map((p) => (
              <div key={p.step} className="bg-navy-800 p-6">
                <div className="text-3xl font-bold text-orange-400 mb-3">{p.step}</div>
                <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                <p className="text-steel-300 text-sm leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Professional Extraction Equipment</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { title: 'Truck-Mounted Extractors', detail: 'High-capacity truck-mounted units deliver extraction power far beyond what portable equipment can achieve. Capable of removing hundreds of gallons per hour from large-area flood events.' },
              { title: 'Submersible Pumps', detail: 'For basement and ground-floor flooding with deep standing water, submersible pumps rapidly lower water levels before secondary extraction equipment moves in.' },
              { title: 'Portable Wet-Vac Extractors', detail: 'For carpet, pad, and confined spaces where truck-mounted units cannot reach. Thorough residual extraction before drying equipment is positioned.' },
            ].map((e) => (
              <div key={e.title} className="card-light">
                <h3 className="font-bold text-navy-800 mb-2">{e.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{e.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Service Areas</h2>
          <div className="orange-rule" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {CITIES.map((c) => (
              <Link key={c.slug} href={`/water-damage-restoration/${c.slug}/`} className="card-light text-center hover:border-orange-300 transition-colors">
                <p className="font-bold text-navy-800">{c.city}</p>
                <p className="text-orange-500 text-sm mt-1">{c.phone}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Emergency Water Removal FAQ</h2>
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
          <p className="text-xs text-steel-400 mt-4">This page was researched and produced in support of Brain b32bfc21 — The Florida Restoration Pros content development initiative.</p>
        </div>
      </section>

      <section className="bg-orange-500 py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white font-bold text-2xl mb-2">Standing water right now? Call immediately.</p>
          <p className="text-orange-100 mb-6">Every minute increases structural damage and mold risk in Florida&rsquo;s climate. Our crews are dispatched 24/7.</p>
          <a href={`tel:${SITE.phone}`} className="inline-block bg-white text-orange-500 font-bold px-10 py-4 text-lg tracking-wide hover:bg-orange-50 transition-colors">☎ {SITE.phone} — Available 24/7</a>
        </div>
      </section>
    </>
  );
}
