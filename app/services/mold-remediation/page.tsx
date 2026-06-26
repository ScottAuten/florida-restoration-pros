import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { SITE, CITIES } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Mold Remediation Florida | AMRT Certified | The Florida Restoration Pros',
  description:
    'AMRT-certified mold remediation across Florida. 24–48 hour mold onset risk in Florida\'s humidity. Full EPA mold protocol, containment, HEPA filtration, clearance testing. 24/7.',
  alternates: { canonical: `${SITE.siteUrl}/services/mold-remediation/` },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How fast does mold grow in Florida after water damage?',
      acceptedAnswer: { '@type': 'Answer', text: 'Per EPA guidelines, mold spores can germinate on wet surfaces within 24–48 hours under conducive conditions — adequate moisture, temperatures above 60°F, and organic material to grow on. In Florida\'s subtropical climate with year-round temperatures above 70°F and baseline humidity of 50–75%, mold colonization can begin in as little as 12–24 hours during summer months. This is faster than the 48-hour window commonly cited for temperate climates. Every water damage event in Florida should be treated as an active mold prevention emergency from the moment it is discovered.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between mold removal and mold remediation?',
      acceptedAnswer: { '@type': 'Answer', text: '"Mold removal" implies physically removing all mold from a property — which is not possible, since mold spores are naturally present everywhere in the environment. "Mold remediation" is the correct industry term: the process of returning mold levels to normal, naturally-occurring levels found outdoors, using containment, HEPA filtration, physical removal of affected materials, and antimicrobial treatment. The goal is not a zero-spore count but rather an indoor spore count that does not exceed outdoor baseline and includes no species not found outdoors.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need mold testing before remediation?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pre-remediation testing (air sampling and surface sampling) is not always required before remediation begins, but it is strongly recommended when the extent or source of mold is unclear, when occupants have health concerns, when a prior remediation was done, or when a landlord-tenant or insurance dispute exists. Post-remediation clearance testing is best practice to confirm remediation was successful — a third-party industrial hygienist (not the remediating contractor) should perform clearance sampling for an independent result.' },
    },
    {
      '@type': 'Question',
      name: 'What Florida mold species are most common after water damage?',
      acceptedAnswer: { '@type': 'Answer', text: 'Florida\'s most common post-water-damage mold species include Cladosporium (ubiquitous, generally less toxic), Aspergillus (various species, some toxic), Penicillium (often blue-green, common on drywall), and Stachybotrys chartarum (so-called "black mold," typically on cellulose materials with prolonged moisture). All mold species require professional containment and removal regardless of species — species identification via air sampling helps determine remediation scope but does not change the fundamental protocol of containment, source removal, and HEPA filtration.' },
    },
  ],
};

export default function MoldRemediationPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />

      <nav className="bg-light-100 border-b border-light-200 px-6 py-2 text-sm text-navy-600">
        <div className="max-w-7xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span>/</span>
          <Link href="/services/" className="hover:text-orange-500">Services</Link>
          <span>/</span>
          <span className="text-navy-800 font-semibold">Mold Remediation</span>
        </div>
      </nav>

      <section className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-4 py-1.5 mb-5">
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">● AMRT Certified — Full EPA Mold Protocol</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Mold Remediation</h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-200 text-lg max-w-2xl mb-8">
            AMRT-certified mold remediation across Florida. Full containment, HEPA filtration, and antimicrobial treatment. Florida&rsquo;s humidity means mold onset in 12–24 hours after water damage — call immediately.
          </p>
          <a href={`tel:${SITE.phone}`} className="btn-primary text-base uppercase tracking-wider">☎ Call Now — {SITE.phone}</a>
        </div>
      </section>

      <section id="aeo-answer" className="max-w-7xl mx-auto px-6 py-10">
        <div className="aeo-block">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Quick Answer</p>
          <p className="text-navy-900 text-lg font-semibold leading-relaxed">
            Mold remediation in Florida returns indoor mold levels to normal outdoor baseline using containment, physical removal of affected materials, HEPA air filtration, and antimicrobial treatment. Florida&rsquo;s subtropical climate makes mold onset faster than anywhere else in the country — every water damage event is a mold emergency. Call <a href={`tel:${SITE.phone}`} className="text-orange-600 hover:underline">{SITE.phone}</a> for AMRT-certified mold response.
          </p>
        </div>
      </section>

      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Florida Mold: The Year-Round Risk</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <p className="text-navy-700 leading-relaxed mb-4">
                Florida&rsquo;s combination of year-round warmth, high humidity, and intense rainfall creates mold risk conditions that never truly subside between seasons. While mold is a naturally-occurring part of any environment, water damage events in Florida create conditions where indoor mold levels can surge to concentrations that far exceed what is typical outdoors — and cause real health consequences for occupants, particularly those with respiratory conditions or compromised immune systems.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                Per EPA guidelines, mold can begin colonizing wet surfaces within 24–48 hours. In Florida&rsquo;s summer conditions (90°F+, 75%+ humidity), that window compresses to 12–24 hours. Water damage events that are not professionally dried within this window will almost certainly involve mold assessment as part of the overall restoration scope.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Florida&rsquo;s mold risk is compounded by the construction methods common in the state — exterior-insulated stucco construction, slab-on-grade foundations, and high window-to-wall ratios that allow humidity intrusion. Mold can grow inside wall assemblies without any visible sign on interior surfaces — thermal imaging and air sampling are often required to establish true remediation scope.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-800 mb-4">Florida Mold Risk Factors</h3>
              <ul className="space-y-3">
                {[
                  { r: '24-Hour Mold Onset', detail: 'Florida\'s summer conditions compress EPA\'s 48-hour mold window to 12–24 hours. Every hour counts after a water event.' },
                  { r: 'Year-Round Warm Temperatures', detail: 'Mold spores require temperatures above 60°F to germinate. Florida never goes below this threshold — there is no "mold dormancy season."' },
                  { r: '70%+ Relative Humidity', detail: 'Mold spores require relative humidity above ~60% to activate on dry surfaces. Florida baseline humidity frequently exceeds this without any water event.' },
                  { r: 'Hurricane & Stormwater Events', detail: 'Category 3 (black water) flood events bring exterior mold spore counts indoors in large volumes, seeding new growth throughout affected areas.' },
                  { r: 'HVAC System Amplification', detail: 'Florida\'s air conditioning systems run nearly year-round. Mold in HVAC ductwork circulates spores to every room — turning a localized water event into a whole-structure problem.' },
                ].map((r) => (
                  <li key={r.r} className="flex gap-3">
                    <span className="text-orange-500 font-bold mt-0.5">→</span>
                    <span className="text-navy-700"><strong className="text-navy-800">{r.r}:</strong> {r.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Mold Remediation Process</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { step: '01', title: 'Assessment & Air Sampling', detail: 'Visual assessment and air sampling to identify mold species and establish pre-remediation spore counts. Thermal imaging identifies hidden growth inside wall assemblies.' },
              { step: '02', title: 'Containment', detail: 'Affected area isolated with poly barriers and negative air pressure maintained with HEPA-filtered air scrubbers. Prevents cross-contamination to non-affected areas during removal.' },
              { step: '03', title: 'Removal & Treatment', detail: 'All mold-affected porous materials (drywall, insulation) physically removed. Structural materials wire-brushed and treated with EPA-registered antimicrobial agents.' },
              { step: '04', title: 'Clearance Testing', detail: 'Third-party industrial hygienist performs post-remediation air sampling. All results must meet clearance criteria before containment is removed. Documentation provided for insurance.' },
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
          <h2 className="section-heading mb-4">Mold Remediation for Florida Property Types</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              { title: 'Residential Single-Family', detail: 'Full-scope residential remediation from assessment through rebuild. HVAC assessment included when mold is found in living areas — duct contamination frequently occurs alongside water damage events.' },
              { title: 'Condominium & HOA Properties', detail: 'Multi-unit mold events require coordination between individual unit owners and building management. We document each affected unit separately and work within HOA access restrictions.' },
              { title: 'Commercial & Office Properties', detail: 'Commercial mold remediation managed around business operations. OSHA air quality standards apply in addition to EPA mold guidelines for commercial properties. Clearance documentation provided.' },
              { title: 'Hurricane & Stormwater Damage', detail: 'Post-hurricane mold remediation begins with Cat 3 (black water) protocol — all affected porous materials removed, not dried in place. Pre-remediation and post-clearance sampling recommended for all storm claims.' },
              { title: 'Legacy & Irma-Damage Properties', detail: 'Properties with incomplete remediation from prior events (including Hurricane Irma 2017) frequently show mold behind finishes. Thermal imaging identifies these legacy contamination zones.' },
              { title: 'Rental Properties & Landlord Compliance', detail: 'Florida landlords have specific mold disclosure and remediation obligations under Florida Statutes. Our documentation package is designed to satisfy Florida landlord-tenant mold compliance requirements.' },
            ].map((f) => (
              <div key={f.title} className="card-light">
                <h3 className="font-bold text-navy-800 mb-2">{f.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{f.detail}</p>
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
          <h2 className="section-heading text-center mb-2">Mold Remediation FAQ</h2>
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
            <a href="https://www.iicrc.org" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">IICRC — Applied Microbial Remediation Technician (AMRT)</a>
            <a href="https://www.epa.gov/mold/mold-cleanup-your-home" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">EPA Mold Cleanup in Your Home</a>
            <a href="https://www.fema.gov/flood-insurance" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">FEMA Flood Insurance</a>
          </div>
          <p className="text-xs text-steel-400 mt-4">This page was researched and produced in support of Brain b32bfc21 — The Florida Restoration Pros content development initiative.</p>
        </div>
      </section>

      <section className="bg-orange-500 py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white font-bold text-2xl mb-2">Mold discovered after water damage?</p>
          <p className="text-orange-100 mb-6">Florida&rsquo;s humidity makes mold onset faster than anywhere in the country. AMRT-certified crews available 24/7.</p>
          <a href={`tel:${SITE.phone}`} className="inline-block bg-white text-orange-500 font-bold px-10 py-4 text-lg tracking-wide hover:bg-orange-50 transition-colors">☎ {SITE.phone} — Available 24/7</a>
        </div>
      </section>
    </>
  );
}
