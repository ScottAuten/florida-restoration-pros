import type { Metadata } from 'next';
import { SITE } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Orlando FL | The Florida Restoration Pros',
  description: 'IICRC-certified water damage restoration in Orlando, FL. 24/7 emergency response, structural drying, mold remediation, insurance claims. (321) 388-0733.',
};

export default function OrlandoPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-navy-800 mb-4">Orlando Water Damage Restoration</h1>
      <div className="w-16 h-1 bg-orange-500 mb-6" />
      <p className="text-steel-600 text-lg mb-6">Full content coming soon. For emergency water damage restoration in Orlando, FL, call us 24/7:</p>
      <a href="tel:3213880733" className="text-2xl font-bold text-orange-500">(321) 388-0733</a>
      <address className="not-italic text-steel-500 text-sm mt-4">200 S Orange Ave, Ste 2000, Orlando, FL 32801</address>
    </div>
  );
}
