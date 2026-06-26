import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Fort Lauderdale FL | The Florida Restoration Pros',
  description: 'IICRC-certified water damage restoration in Fort Lauderdale, FL. 24/7 emergency response. (954) 636-6057.',
};

export default function FortLauderdalePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-navy-800 mb-4">Fort Lauderdale Water Damage Restoration</h1>
      <div className="w-16 h-1 bg-orange-500 mb-6" />
      <p className="text-steel-600 text-lg mb-6">Full content coming soon. For emergency water damage restoration in Fort Lauderdale, FL, call us 24/7:</p>
      <a href="tel:9546366057" className="text-2xl font-bold text-orange-500">(954) 636-6057</a>
      <address className="not-italic text-steel-500 text-sm mt-4">200 E Las Olas Blvd, Ste 1000, Fort Lauderdale, FL 33301</address>
    </div>
  );
}
