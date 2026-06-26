import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Jacksonville FL | The Florida Restoration Pros',
  description: 'IICRC-certified water damage restoration in Jacksonville, FL. 24/7 emergency response. (904) 371-7252.',
};

export default function JacksonvillePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-navy-800 mb-4">Jacksonville Water Damage Restoration</h1>
      <div className="w-16 h-1 bg-orange-500 mb-6" />
      <p className="text-steel-600 text-lg mb-6">Full content coming soon. For emergency water damage restoration in Jacksonville, FL, call us 24/7:</p>
      <a href="tel:9043717252" className="text-2xl font-bold text-orange-500">(904) 371-7252</a>
      <address className="not-italic text-steel-500 text-sm mt-4">1 Independent Dr, Ste 1100, Jacksonville, FL 32202</address>
    </div>
  );
}
