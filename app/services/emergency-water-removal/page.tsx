import type { Metadata } from 'next';
import { SITE } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Emergency Water Removal Florida | The Florida Restoration Pros',
  description: '24/7 emergency water removal in Tampa, Orlando, Jacksonville, Fort Lauderdale, and Miami. IICRC-certified crews respond in 60 minutes.',
};

export default function EmergencyWaterRemovalPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-navy-800 mb-4">Emergency Water Removal</h1>
      <div className="w-16 h-1 bg-orange-500 mb-6" />
      <p className="text-steel-600 text-lg mb-6">Full content coming soon. For 24/7 emergency water removal, call:</p>
      <a href={`tel:${SITE.phone}`} className="text-2xl font-bold text-orange-500">{SITE.phone}</a>
    </div>
  );
}
