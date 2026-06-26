import type { Metadata } from 'next';
import { SITE } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Structural Drying Florida | The Florida Restoration Pros',
  description: 'ANSI/IICRC S500 structural drying across Florida. ASD-certified technicians, industrial equipment, moisture documentation.',
};

export default function StructuralDryingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-navy-800 mb-4">Structural Drying</h1>
      <div className="w-16 h-1 bg-orange-500 mb-6" />
      <p className="text-steel-600 text-lg mb-6">Full content coming soon. For structural drying services, call:</p>
      <a href={`tel:${SITE.phone}`} className="text-2xl font-bold text-orange-500">{SITE.phone}</a>
    </div>
  );
}
