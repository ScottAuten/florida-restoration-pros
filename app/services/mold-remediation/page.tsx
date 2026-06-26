import type { Metadata } from 'next';
import { SITE } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Mold Remediation Florida | The Florida Restoration Pros',
  description: 'AMRT-certified mold remediation across Florida. Florida\'s humidity makes mold onset a 24–48 hour risk after any water event.',
};

export default function MoldRemediationPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-navy-800 mb-4">Mold Remediation</h1>
      <div className="w-16 h-1 bg-orange-500 mb-6" />
      <p className="text-steel-600 text-lg mb-6">Full content coming soon. For mold remediation, call:</p>
      <a href={`tel:${SITE.phone}`} className="text-2xl font-bold text-orange-500">{SITE.phone}</a>
    </div>
  );
}
