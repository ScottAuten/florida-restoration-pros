export const SITE = {
  businessName: 'The Florida Restoration Pros',
  tagline: 'Water Damage Restoration Florida — Fast, Certified, Local',
  siteUrl: 'https://thefloridarestorationpros.com',
  phone: '(813) 212-5279',
  email: 'info@thefloridarestorationpros.com',
  certifications: ['IICRC Certified', 'WRT', 'ASD', 'AMRT'],
  availabilityLine: '24/7 Emergency Response — We Pick Up Every Call',
};

export interface CityNAP {
  slug: string;
  city: string;
  phone: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  localAngle: string;
  geo: { lat: number; lng: number };
}

export const CITIES: CityNAP[] = [
  {
    slug: 'tampa',
    city: 'Tampa',
    phone: '(813) 212-5279',
    streetAddress: '100 S Ashley Dr, Ste 1750',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    postalCode: '33602',
    localAngle: 'Hurricane surge vulnerability, South Tampa flooding, Idalia & Milton damage',
    geo: { lat: 27.9477, lng: -82.4584 },
  },
  {
    slug: 'orlando',
    city: 'Orlando',
    phone: '(321) 388-0733',
    streetAddress: '200 S Orange Ave, Ste 2000',
    addressLocality: 'Orlando',
    addressRegion: 'FL',
    postalCode: '32801',
    localAngle: 'Karst/sinkhole risk, vacation rental & theme park property damage',
    geo: { lat: 28.5383, lng: -81.3792 },
  },
  {
    slug: 'jacksonville',
    city: 'Jacksonville',
    phone: '(904) 371-7252',
    streetAddress: '1 Independent Dr, Ste 1100',
    addressLocality: 'Jacksonville',
    addressRegion: 'FL',
    postalCode: '32202',
    localAngle: 'St. Johns River flooding, Hurricane Irma legacy, historic district stock',
    geo: { lat: 30.3322, lng: -81.6557 },
  },
  {
    slug: 'fort-lauderdale',
    city: 'Fort Lauderdale',
    phone: '(954) 636-6057',
    streetAddress: '200 E Las Olas Blvd, Ste 1000',
    addressLocality: 'Fort Lauderdale',
    addressRegion: 'FL',
    postalCode: '33301',
    localAngle: 'April 2023 25.91" flood event, king tide canal seepage, coastal intrusion',
    geo: { lat: 26.1224, lng: -80.1373 },
  },
  {
    slug: 'miami',
    city: 'Miami',
    phone: '(786) 347-3624',
    streetAddress: '701 Brickell Ave, Ste 1550',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    postalCode: '33131',
    localAngle: 'Sea-level rise, high-rise HOA intrusion events, Brickell & Wynwood humidity',
    geo: { lat: 25.7617, lng: -80.1918 },
  },
];

export const SERVICES = [
  {
    slug: 'emergency-water-removal',
    name: 'Emergency Water Removal',
    description: 'Rapid extraction of standing water using truck-mounted and portable units. We arrive within 60 minutes of your call — 24 hours a day, 7 days a week.',
    icon: '💧',
  },
  {
    slug: 'flood-damage-restoration',
    name: 'Flood Damage Restoration',
    description: 'Full-scope flood recovery from Category 1 clean water to Category 3 contaminated water. Structural assessment, debris removal, and full documentation for insurance.',
    icon: '🌊',
  },
  {
    slug: 'structural-drying',
    name: 'Structural Drying',
    description: 'Industrial desiccant dehumidifiers and air movers dry walls, subfloors, and cavities to ANSI/IICRC S500 moisture standards. Thermal imaging confirms completion.',
    icon: '🌬️',
  },
  {
    slug: 'mold-remediation',
    name: 'Mold Remediation',
    description: 'AMRT-certified mold assessment and remediation. Florida humidity means mold can colonize within 24–48 hours of a water event. We stop it before it spreads.',
    icon: '🔬',
  },
  {
    slug: 'contents-restoration',
    name: 'Contents Restoration',
    description: 'Document drying, electronics stabilization, textile cleaning, and pack-out/pack-back services. Maximize insurance recovery by restoring rather than replacing.',
    icon: '📦',
  },
];

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.siteUrl}/#organization`,
  name: SITE.businessName,
  url: SITE.siteUrl,
  telephone: SITE.phone,
  description: 'IICRC-certified water damage restoration serving Tampa, Orlando, Jacksonville, Fort Lauderdale, and Miami. 24/7 emergency response, insurance claims handled.',
  areaServed: [
    { '@type': 'City', name: 'Tampa', containedIn: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Orlando', containedIn: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Jacksonville', containedIn: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Fort Lauderdale', containedIn: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Miami', containedIn: { '@type': 'State', name: 'Florida' } },
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'IICRC Certified Firm' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'WRT — Water Damage Restoration Technician' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'ASD — Applied Structural Drying Technician' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'AMRT — Applied Microbial Remediation Technician' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  sameAs: [],
};
