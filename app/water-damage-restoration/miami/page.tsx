import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Miami FL | The Florida Restoration Pros',
  description: 'IICRC-certified water damage restoration in Miami, FL. 24/7 emergency response. (786) 347-3624.',
};

export default function MiamiPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-navy-800 mb-4">Miami Water Damage Restoration</h1>
      <div className="w-16 h-1 bg-orange-500 mb-6" />
      <p className="text-steel-600 text-lg mb-6">Full content coming soon. For emergency water damage restoration in Miami, FL, call us 24/7:</p>
      <a href="tel:7863473624" className="text-2xl font-bold text-orange-500">(786) 347-3624</a>
      <address className="not-italic text-steel-500 text-sm mt-4">701 Brickell Ave, Ste 1550, Miami, FL 33131</address>
    </div>
  );
}
