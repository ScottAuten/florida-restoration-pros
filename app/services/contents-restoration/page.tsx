import type { Metadata } from 'next';
import { SITE } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Contents Restoration Florida | The Florida Restoration Pros',
  description: 'Professional contents restoration after water damage. Document drying, electronics stabilization, pack-out/pack-back. Insurance documentation included.',
};

export default function ContentsRestorationPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-navy-800 mb-4">Contents Restoration</h1>
      <div className="w-16 h-1 bg-orange-500 mb-6" />
      <p className="text-steel-600 text-lg mb-6">Full content coming soon. For contents restoration services, call:</p>
      <a href={`tel:${SITE.phone}`} className="text-2xl font-bold text-orange-500">{SITE.phone}</a>
    </div>
  );
}
