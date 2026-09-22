export interface InternalServiceLink {
  slug: string;
  title: string;
  shortTitle: string;
  url: string;
  price: string;
  duration: string;
  shortDesc: string;
  badge: string;
  image: string;
}

export interface InternalLocationLink {
  id: string;
  name: string;
  slug: string;
  url: string;
  postcode: string;
  region: string;
  tagline: string;
  dispatchTime: string;
  image: string;
}

export const INTERNAL_SERVICES: InternalServiceLink[] = [
  {
    slug: 'mobile-car-detailing-service-in-aberdeenshire',
    title: 'Mobile Car Detailing Aberdeenshire',
    shortTitle: 'Mobile Detailing Aberdeenshire',
    url: '/services/mobile-car-detailing-service-in-aberdeenshire/',
    price: 'From £65',
    duration: '2 - 3.5 Hours',
    shortDesc: 'Full exterior snow foam hand wash, wheels decontaminated, and comprehensive cabin vacuum and dashboard refresh.',
    badge: 'Flagship Mobile Service',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'interior-detailing',
    title: 'Interior Deep Cleanse & Steam Sanitisation',
    shortTitle: 'Interior Detailing',
    url: '/services/interior-detailing/',
    price: 'From £85',
    duration: '2.5 - 4 Hours',
    shortDesc: 'Hot-water extraction for seats and carpets, high-pressure steam disinfection, pet hair removal, and leather feeding.',
    badge: 'Deep Cabin Revival',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'exterior-detailing',
    title: 'Exterior Decontamination & Wax Protection',
    shortTitle: 'Exterior Detailing',
    url: '/services/exterior-detailing/',
    price: 'From £110',
    duration: '3 - 4 Hours',
    shortDesc: 'Industrial iron fallout dissolution, lower sill tar removal, fine clay bar glide, and hand-applied Collinite carnauba wax.',
    badge: 'Salt & Tar Shield',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'paint-correction',
    title: 'Paint Correction & Machine Polishing',
    shortTitle: 'Paint Correction',
    url: '/services/paint-correction/',
    price: 'From £195',
    duration: '1 - 2 Days',
    shortDesc: 'Multi-stage dual-action machine polishing safely eliminating 85-95% of swirl marks, buffer trails, and wash scratches.',
    badge: 'Showroom Mirror Gloss',
    image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'ceramic-coating',
    title: 'Ceramic Coating & 9H Quartz Protection',
    shortTitle: 'Ceramic Coating',
    url: '/services/ceramic-coating/',
    price: 'From £320',
    duration: '1 - 2 Days',
    shortDesc: 'Glass-hard SiO2 ceramic quartz bonded to paintwork offering 2 to 5 years of extreme hydrophobic water beading.',
    badge: 'Permanent Protection',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80'
  }
];

export const INTERNAL_LOCATIONS: InternalLocationLink[] = [
  {
    id: 'peterhead',
    name: 'Peterhead',
    slug: 'peterhead-car-detailing',
    url: '/locations/peterhead-car-detailing/',
    postcode: 'AB42',
    region: 'Peterhead & Buchan',
    tagline: 'North Sea coastal salt protection & doorstep detailing',
    dispatchTime: 'Daily route (0-15 mins dispatch)',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'inverurie',
    name: 'Inverurie',
    slug: 'inverurie-car-detailing',
    url: '/locations/inverurie-car-detailing/',
    postcode: 'AB51',
    region: 'Inverurie & The Garioch',
    tagline: 'Rural estate mud removal & precision machine polishing',
    dispatchTime: 'Regular weekly route (approx. 20 mins)',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'stonehaven',
    name: 'Stonehaven',
    slug: 'stonehaven-car-detailing',
    url: '/locations/stonehaven-car-detailing/',
    postcode: 'AB39',
    region: 'Stonehaven & Mearns',
    tagline: 'Coastal quartz ceramic shields & interior steam sanitisation',
    dispatchTime: 'Regular weekly route (approx. 20 mins south)',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fraserburgh',
    name: 'Fraserburgh',
    slug: 'fraserburgh-car-detailing',
    url: '/locations/fraserburgh-car-detailing/',
    postcode: 'AB43',
    region: 'Fraserburgh & The Broch',
    tagline: 'Marine-grade salt decontamination & all-weather detailing',
    dispatchTime: 'Regular weekly route (approx. 25 mins)',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'westhill',
    name: 'Westhill',
    slug: 'westhill-car-detailing',
    url: '/locations/westhill-car-detailing/',
    postcode: 'AB32',
    region: 'Westhill & Kingswells',
    tagline: 'Corporate business park & residential driveway detailing',
    dispatchTime: 'Priority zone (10-15 mins dispatch)',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80'
  }
];
