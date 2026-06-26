import type { Metadata } from 'next';
import { SITE } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Flood Damage Restoration Florida | The Florida Restoration Pros',
  description: 'Professional flood damage restoration across Florida. IICRC-certified. All categories handled. Insurance claims documentation.',
};

export default function FloodDamageRestorationPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-navy-800 mb-4">Flood Damage Restoration</h1>
      <div className="w-16 h-1 bg-orange-500 mb-6" />
      <p className="text-steel-600 text-lg mb-6">Full content coming soon. For flood damage restoration, call:</p>
      <a href={`tel:${SITE.phone}`} className="text-2xl font-bold text-orange-500">{SITE.phone}</a>
    </div>
  );
}
