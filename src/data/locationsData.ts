import { LocationItem } from '../types';

export const locationsList: LocationItem[] = [
  {
    id: 'peterhead',
    slug: 'peterhead-car-detailing',
    cityNumber: 'Peterhead',
    cityName: 'Peterhead',
    shortTitle: 'Peterhead',
    tagline: 'Professional Mobile Car Detailing & Paint Protection in Peterhead & Buchan',
    postcodes: ['AB42'],
    description: 'Our fully equipped mobile detailing van operates daily across Peterhead, providing high-end paint enhancement, swirl removal, interior steam sanitisation, and ceramic coating directly at your driveway or corporate car park.',
    travelTime: 'Daily regular route (0-15 mins dispatch)',
    popularServices: [
      'Mobile Car Valeting & Detailing',
      'Interior Car Detailing',
      'Exterior Car Detailing',
      'Paint Correction & Machine Polishing',
      'Paint Decontamination & Wax Protection',
      'Ceramic Coating & Paint Protection'
    ],
    features: [
      '100% self-sufficient mobile van (onboard spot-free water & electricity)',
      'Direct service at homes in Buchanhaven, Roanheads, Boddam, Longside, Mintlaw',
      'Safe all-weather pop-up canopy when requested',
      'Over 30 years of trusted local Scottish detailing heritage'
    ],
    localWeatherChallenge: 'Peterhead coastal air brings dense North Sea salt spray, moisture, and road grit. Our multi-stage decontamination removes abrasive salt deposits before any wash mitt contacts the paintwork.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    localReview: {
      quote: 'Hamish transformed my Range Rover right on my Peterhead driveway. The swirl marks from previous automatic car washes were completely eradicated and the ceramic gloss is breathtaking.',
      author: 'David M.',
      vehicle: 'Range Rover Sport',
      rating: 5
    }
  },
  {
    id: 'inverurie',
    slug: 'inverurie-car-detailing',
    cityNumber: 'Inverurie',
    cityName: 'Inverurie',
    shortTitle: 'Inverurie',
    tagline: 'Expert Mobile Car Detailing & Paint Protection in Inverurie & the Garioch',
    postcodes: ['AB51'],
    description: 'Serving Inverurie, Kintore, Kemnay, Oldmeldrum and the surrounding Garioch countryside with doorstep detailing. Whether you have a rural estate car fighting mud or a weekend sports car, our mobile detailing van brings factory-fresh gloss.',
    travelTime: 'Scheduled weekly route (approx. 20 mins)',
    popularServices: [
      'Decontamination Wash & Deep Wax',
      'Interior Deep Cleanse (Mud & Pet Hair)',
      'Multi-Stage Machine Polishing',
      'Ceramic Coating Protection'
    ],
    features: [
      'Rural & estate driveway access capability',
      'Commercial hot water extraction for deep mud & farm dust',
      'Pure deionised zero-TDS water rinse (leaves zero water spots)',
      'Fully insured mobile workshop up to £5,000,000'
    ],
    localWeatherChallenge: 'Agricultural roads in Inverurie deposit heavy road film, tractor grit, and sticky bitumen. Our citrus pre-wash safely breaks these down without harsh scrubbing.',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=900&q=80',
    localReview: {
      quote: 'Living in Inverurie, finding a high-end detailer who comes directly to the house was incredible. The interior looked better than the day I collected it from the showroom.',
      author: 'Callum R.',
      vehicle: 'Range Rover Sport',
      rating: 5
    }
  },
  {
    id: 'stonehaven',
    slug: 'stonehaven-car-detailing',
    cityNumber: 'Stonehaven',
    cityName: 'Stonehaven',
    shortTitle: 'Stonehaven',
    tagline: 'Coastal Vehicle Protection & Precision Detailing in Stonehaven & Mearns',
    postcodes: ['AB39'],
    description: 'Stonehaven coastal air is notorious for speeding up paint oxidation and corroding untreated alloys. Our mobile team delivers comprehensive ceramic barriers and thorough wheel arch descaling right outside your home.',
    travelTime: 'Scheduled weekly route (approx. 20 mins south)',
    popularServices: [
      'Ceramic Coating 3-Year & 5-Year Protection',
      'Exterior Marine-Grade Salt Decontamination',
      'Full Valet & Interior Deep Sanitisation',
      'Multi-Stage Machine Polishing'
    ],
    features: [
      'Anti-salt chemical decontamination wash',
      'Wheel barrel & brake caliper iron fallout removal',
      'Zero mains water or domestic power required from you',
      'Flexible weekend and early morning appointment slots'
    ],
    localWeatherChallenge: 'Severe salt-spray from the North Sea and windy grit. Our SiO2 ceramic quartz forms a glass-hard sacrificial shield preventing salt etching into clear coats.',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=80',
    localReview: {
      quote: 'The ceramic coating applied to my Porsche 911 has made washing off the Stonehaven sea spray effortless. Water just sheets straight off.',
      author: 'Alistair K.',
      vehicle: 'Porsche 911 Carrera 4S',
      rating: 5
    }
  },
  {
    id: 'fraserburgh',
    slug: 'fraserburgh-car-detailing',
    cityNumber: 'Fraserburgh',
    cityName: 'Fraserburgh',
    shortTitle: 'Fraserburgh',
    tagline: 'North Coast Mobile Car Detailing & Paint Protection in Fraserburgh & The Broch',
    postcodes: ['AB43'],
    description: 'Operating regular mobile routes across Fraserburgh, Rosehearty, St Combs, and Cairnbulg. We bring industrial-grade salt decontamination, machine swirl correction, and ceramic protection directly to your home or harbour workplace.',
    travelTime: 'Scheduled weekly route (approx. 25 mins)',
    popularServices: [
      'Heavy Coastal Salt Decontamination',
      'Full Interior Wet Extraction',
      'Swirl & Scratch Machine Polishing',
      '9H Ceramic Quartz Coating'
    ],
    features: [
      'Marine-grade salt dissolution chemistry',
      'Onboard pure 500L deionised water supply',
      'Doorstep service for cars, SUVs, and commercial fleets',
      'Over 30 years Scottish detailing experience'
    ],
    localWeatherChallenge: 'North Coast winds carry heavy abrasive salt mist and humidity. We apply hydrophobic sealants that shield panels and make future cleaning effortless.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80',
    localReview: {
      quote: 'Hamish detailed both my family car and work pickup here in Fraserburgh. The depth of shine and slickness after the polish was unbelievable.',
      author: 'Gordon S.',
      vehicle: 'Ford Ranger Wildtrak',
      rating: 5
    }
  },
  {
    id: 'westhill',
    slug: 'westhill-car-detailing',
    cityNumber: 'Westhill',
    cityName: 'Westhill',
    shortTitle: 'Westhill',
    tagline: 'Corporate Fleet & Residential Mobile Detailing in Westhill & Kingswells',
    postcodes: ['AB32'],
    description: 'We frequently valet and detail vehicles at both private residences in Westhill and business park executive car parks (Subsea 7, TotalEnergies, Arnhall). Book while you work and return to a flawlessly detailed, fresh vehicle.',
    travelTime: 'Daily priority zone (10-15 mins dispatch)',
    popularServices: [
      'Executive Express Valet & Polish',
      'Full Machine Paint Swirl Correction',
      'Ozone Odour Removal & Steam Sanitize',
      'Ceramic Quartz Paint Protection'
    ],
    features: [
      'Workplace car park valeting service with quiet Honda generators',
      'Motorway bug & tar fallout decontamination',
      'Discreet, professional service for luxury vehicles',
      'Same-day digital receipt & VAT invoice'
    ],
    localWeatherChallenge: 'High motorway commute mileage along the AWPR creates bug splatter etchings and stone grit fallout. We perform chemical insect dissolution and protective coatings.',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=900&q=80',
    localReview: {
      quote: 'Done right in our company car park in Westhill while I was in meetings. Truly pristine finish, zero fuss, and smelling like a new showroom car.',
      author: 'Fiona S.',
      vehicle: 'Audi Q7 S-Line',
      rating: 5
    }
  },
  {
    id: 'ellon',
    slug: 'ellon-car-detailing',
    cityNumber: 'Ellon',
    cityName: 'Ellon',
    shortTitle: 'Ellon',
    tagline: 'Complete Mobile Valeting & Paint Revival in Ellon & Formartine',
    postcodes: ['AB41'],
    description: 'Providing Ellon motorists with top-tier detailing services at home. From restoring dulled paintwork to restoring neglected family car interiors with hot water extraction, we handle it all.',
    travelTime: 'Regular route (approx. 20 mins north)',
    popularServices: [
      'Interior Deep Cleanse & Stain Removal',
      'Single-Stage Gloss Enhancement Polish',
      'Headlight UV Oxidation Restoration',
      'Winter Salt Protection Detail'
    ],
    features: [
      'High-pressure hot water steam equipment',
      'Family vehicle sanitation safe for babies and pets',
      'Free visual clear coat health appraisal',
      'Friendly, honest Scottish master craftsman advice'
    ],
    localWeatherChallenge: 'Frost, ice scraping scratches, and road gritter gravel. Our 1-stage machine enhancement lifts micro-scratches and seals clear coats against winter corrosion.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80',
    localReview: {
      quote: 'My kids had made a total disaster of the rear seats and carpets with juice stains and chocolate. Moar Detail made it look literally brand new. Superb service!',
      author: 'Graeme B.',
      vehicle: 'Volvo XC90',
      rating: 5
    }
  }
];
