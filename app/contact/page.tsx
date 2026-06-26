import type { Metadata } from 'next';
import { SITE } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Contact — Free Water Damage Inspection',
  description: 'Contact The Florida Restoration Pros for a free water damage inspection. Available 24/7 in Tampa, Orlando, Jacksonville, Fort Lauderdale, and Miami.',
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-navy-800 mb-4">Contact Us — Free Inspection</h1>
      <div className="w-16 h-1 bg-orange-500 mb-8" />
      <p className="text-steel-600 text-lg mb-8">
        Available 24/7 for emergency water damage response. Call now for immediate dispatch — or use the form below to schedule a free inspection.
      </p>
      <div className="bg-light-100 border border-light-200 p-8 mb-8">
        <p className="text-xl font-bold text-navy-800 mb-2">Emergency Line</p>
        <a href={`tel:${SITE.phone}`} className="text-3xl font-bold text-orange-500 hover:text-orange-400 transition-colors">
          {SITE.phone}
        </a>
        <p className="text-steel-500 text-sm mt-1">Available 24 hours a day, 7 days a week</p>
      </div>
      <p className="text-steel-400 text-sm">Contact form coming soon. In the meantime, please call the number above for immediate assistance.</p>
    </div>
  );
}
