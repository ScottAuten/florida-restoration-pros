import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { SITE, CITIES } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Contents Restoration Florida | Document & Electronics Recovery | The Florida Restoration Pros',
  description:
    'Professional contents restoration after water damage in Florida. Document drying, electronics stabilization, pack-out/pack-back, inventory documentation. Insurance-ready. 24/7.',
  alternates: { canonical: `${SITE.siteUrl}/services/contents-restoration/` },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is contents restoration?',
      acceptedAnswer: { '@type': 'Answer', text: 'Contents restoration is the professional recovery of personal property and business contents after a water damage event — furniture, clothing, documents, electronics, artwork, and other items that were affected by water, humidity, or contamination. The process involves inventory, pack-out to a controlled environment, treatment (drying, cleaning, deodorizing), and pack-back once the structure is restored. Contents restoration is typically covered under personal property sections of homeowner and commercial property insurance policies.' },
    },
    {
      '@type': 'Question',
      name: 'Can water-damaged documents and photos be recovered?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, though time is critical. Wet paper documents begin to deteriorate within hours — inks bleed, pages stick together, and mold begins within 24–48 hours in Florida\'s humidity. Professional document drying uses air-drying, vacuum freeze-drying (for important or archival documents), and dehumidified drying chambers. Photos are more vulnerable than paper documents because photo emulsions become sticky when wet and permanently bond to adjacent surfaces if allowed to dry in contact. Critical documents and photos should be inventoried and moved to professional drying as quickly as possible.' },
    },
    {
      '@type': 'Question',
      name: 'Can water-damaged electronics be restored?',
      acceptedAnswer: { '@type': 'Answer', text: 'Electronics that were submerged or heavily wetted by fresh water (Category 1) can sometimes be restored if treated quickly — powered down immediately, professionally dried, and inspected by electronics technicians before power is restored. However, electronics exposed to Category 2 or 3 water (contaminated water, gray water, sewage, stormwater) typically cannot be safely or economically restored and must be documented for replacement. All water-damaged electronics should be assumed non-functional and should never be powered on before professional inspection — electrical shorts from wet components can cause fires.' },
    },
    {
      '@type': 'Question',
      name: 'What is a pack-out in water damage restoration?',
      acceptedAnswer: { '@type': 'Answer', text: 'A pack-out is the removal of contents from a water-damaged property to an off-site restoration facility where they can be properly treated, dried, and stored while the structure undergoes restoration. A complete pack-out inventory is created before removal, documenting every item and its condition. Contents are transported to a climate-controlled warehouse for treatment. At project completion, items are returned and placed according to the original inventory — this is called pack-back. Pack-outs are standard practice when a property requires extensive structural restoration and can no longer safely house contents.' },
    },
  ],
};

export default function ContentsRestorationPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />

      <nav className="bg-light-100 border-b border-light-200 px-6 py-2 text-sm text-navy-600">
        <div className="max-w-7xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span>/</span>
          <Link href="/services/" className="hover:text-orange-500">Services</Link>
          <span>/</span>
          <span className="text-navy-800 font-semibold">Contents Restoration</span>
        </div>
      </nav>

      <section className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-4 py-1.5 mb-5">
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">● Document & Electronics Recovery — Full Pack-Out</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Contents Restoration</h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-200 text-lg max-w-2xl mb-8">
            Professional recovery of personal property and business contents after water damage. Complete pack-out inventory, off-site treatment, insurance documentation, and pack-back. Serving Tampa, Orlando, Jacksonville, Fort Lauderdale, and Miami.
          </p>
          <a href={`tel:${SITE.phone}`} className="btn-primary text-base uppercase tracking-wider">☎ Call Now — {SITE.phone}</a>
        </div>
      </section>

      <section id="aeo-answer" className="max-w-7xl mx-auto px-6 py-10">
        <div className="aeo-block">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Quick Answer</p>
          <p className="text-navy-900 text-lg font-semibold leading-relaxed">
            Contents restoration recovers furniture, documents, electronics, art, and personal property from water damage events through professional drying, cleaning, and deodorizing — either in-place or via pack-out to a controlled off-site facility. In Florida&rsquo;s climate, documents and electronics deteriorate rapidly after water contact. Call <a href={`tel:${SITE.phone}`} className="text-orange-600 hover:underline">{SITE.phone}</a> immediately to protect your belongings.
          </p>
        </div>
      </section>

      <section className="bg-light-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading mb-4">Contents We Restore</h2>
          <div className="orange-rule-left" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              { title: 'Documents & Records', detail: 'Business records, legal documents, financial files, and personal documents. Air-drying for minor exposure. Vacuum freeze-drying for severely damaged or archival materials. Time-critical — call immediately.' },
              { title: 'Photographs & Art', detail: 'Photo emulsions bond permanently when wet and dried in contact. Immediate separation and professional drying essential. Art: canvas, paper, and frame assessment by specialists.' },
              { title: 'Electronics & Computers', detail: 'Category 1 (clean water) electronics: power down, dry, inspect before restoration. Category 2–3 (contaminated water): document for replacement. Never power on wet electronics.' },
              { title: 'Furniture & Upholstery', detail: 'Wood furniture assessed for structural damage, veneer separation, and finish damage. Upholstered furniture dried, cleaned, and deodorized when structurally salvageable and Category 1–2 water.' },
              { title: 'Clothing & Textiles', detail: 'Contents-grade cleaning and drying for clothing, linens, and textiles. Category 3-exposed textiles typically require replacement. Inventory documentation for insurance claim.' },
              { title: 'High-Value & Collectibles', detail: 'Jewelry, collectibles, instruments, and high-value items inventoried under chain of custody. Specialist vendors engaged for restoration beyond standard scope.' },
            ].map((c) => (
              <div key={c.title} className="card-light">
                <h3 className="font-bold text-navy-800 mb-2">{c.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-center mb-2">Pack-Out Process</h2>
          <div className="orange-rule" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { step: '01', title: 'Inventory & Assessment', detail: 'Every item documented with photos, description, and condition notes before removal. Inventory list forms the basis of contents insurance claim.' },
              { step: '02', title: 'Pack & Transport', detail: 'Contents packed by category and transported to climate-controlled off-site facility. Chain of custody maintained throughout. Contaminated items handled separately.' },
              { step: '03', title: 'Treatment', detail: 'Items dried, cleaned, and deodorized using appropriate protocols for each material type. Electronics and high-value items assessed by specialists.' },
              { step: '04', title: 'Storage & Pack-Back', detail: 'Items stored in climate-controlled warehouse during structural restoration. Returned and placed per original inventory once restoration is complete.' },
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
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="section-heading mb-4">Contents Insurance Claims</h2>
              <div className="orange-rule-left" />
              <p className="text-navy-700 leading-relaxed mb-4">
                Contents coverage (personal property) under Florida homeowner and renter policies typically covers water damage to belongings from sudden and accidental water events. Business interruption and commercial property policies extend similar coverage to business contents and records.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                Our contents inventory documentation provides the itemized list with pre-damage condition notes and photos that insurance adjusters require to process contents claims. We document replacement cost value (RCV) where possible and actual cash value (ACV) for older items, supporting maximum claim recovery.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Items that cannot be restored are documented for replacement. Items that are restored are documented as restored, with the cost of restoration typically lower than replacement — which helps avoid disputes with carriers over depreciation on replaceable items.
              </p>
            </div>
            <div className="space-y-4">
              <div className="card-light">
                <h3 className="font-bold text-navy-800 mb-2">Contents Documentation Package</h3>
                <ul className="space-y-2 text-sm text-navy-700">
                  {['Pre-removal photo inventory of every item','Condition assessment at time of removal','Category determination (salvageable vs. replace)','Treatment records for restored items','Chain of custody documentation','Post-treatment condition photos','Insurance-formatted final contents report'].map((d) => (
                    <li key={d} className="flex gap-2"><span className="text-orange-500 font-bold flex-shrink-0">✓</span>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy-800 p-5">
                <p className="text-white font-bold mb-1">Need contents protected immediately?</p>
                <p className="text-steel-300 text-sm mb-3">Florida&rsquo;s humidity damages contents within hours. Call now.</p>
                <a href={`tel:${SITE.phone}`} className="block bg-orange-500 text-white font-bold text-center py-2.5 text-sm tracking-wide hover:bg-orange-400 transition-colors">{SITE.phone}</a>
              </div>
            </div>
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
          <h2 className="section-heading text-center mb-2">Contents Restoration FAQ</h2>
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
            <a href="https://www.iicrc.org" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">IICRC — Contents Cleaning Standards</a>
            <a href="https://www.epa.gov/mold/mold-cleanup-your-home" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">EPA Mold Guidelines</a>
            <a href="https://www.fema.gov/flood-insurance" target="_blank" rel="noopener" className="text-steel-600 hover:text-orange-500 underline">FEMA Flood Insurance</a>
          </div>
          <p className="text-xs text-steel-400 mt-4">This page was researched and produced in support of Brain b32bfc21 — The Florida Restoration Pros content development initiative.</p>
        </div>
      </section>

      <section className="bg-orange-500 py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white font-bold text-2xl mb-2">Contents at risk from water damage?</p>
          <p className="text-orange-100 mb-6">Documents, photos, and electronics deteriorate in hours. Professional pack-out protects what matters most.</p>
          <a href={`tel:${SITE.phone}`} className="inline-block bg-white text-orange-500 font-bold px-10 py-4 text-lg tracking-wide hover:bg-orange-50 transition-colors">☎ {SITE.phone} — Available 24/7</a>
        </div>
      </section>
    </>
  );
}
