export interface CityConfig {
  id: string;
  cityName: string;
  regionName: string;
  postcode: string;
  slug: string;
  heroTagline: string;
  heroDescription: string;
  weatherChallenge: string;
  heroImage: string;
  coverageDescription: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const CITIES_CONFIG: Record<string, CityConfig> = {
  peterhead: {
    id: 'peterhead',
    cityName: 'Peterhead',
    regionName: 'Peterhead & Buchan',
    postcode: 'AB42',
    slug: 'peterhead-car-detailing',
    heroTagline: 'PETERHEAD & BUCHAN AUTOMOTIVE CARE (AB42)',
    heroDescription: 'Experience showroom-grade mobile car valeting, paint correction, and ceramic quartz protection delivered straight to your home driveway or workplace in Peterhead. Master detailer Hamish Moar brings over 30 years of Scottish detailing heritage with a fully self-sufficient mobile workshop unit.',
    weatherChallenge: 'Tailored detailing treatments designed specifically to protect Peterhead vehicles against harsh North Sea coastal winds, road salt, and daily grime.',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    coverageDescription: [
      "Based in Aberdeenshire, we bring our fully equipped mobile valeting and detailing service directly to you in Peterhead and the surrounding areas. Whether you need a regular valet, interior deep clean, exterior detailing, paint correction or paint protection, we provide professional vehicle care at your home, workplace or another suitable location.",
      "Customers choose MOAR DETAIL for consistent, high-quality results, honest service and careful attention to detail. Our mobile approach means you can have your vehicle professionally detailed without the need to travel to a detailing centre or spend time waiting for your car to be finished."
    ],
    faqs: [
      {
        q: 'Do You Offer Mobile Car Detailing in Peterhead?',
        a: 'Yes! We operate our dedicated mobile detailing van across Peterhead and the surrounding Buchan area (postcodes AB42, AB41) on a regular schedule. We travel directly to your home driveway or workplace.'
      },
      {
        q: 'Can You Detail My Car at My Home or Workplace in Peterhead?',
        a: 'Absolutely. We regularly detail vehicles on residential driveways, private courtyard parking, and corporate car parks across Peterhead. All we need is safe permission to park our mobile van next to your car.'
      },
      {
        q: 'What Mobile Car Detailing Services Do You Offer in Peterhead?',
        a: 'We provide a complete suite of services in Peterhead: mobile valeting maintenance, deep interior antibacterial extraction, exterior decontamination washes, multi-stage machine paint correction, and certified 9H ceramic quartz paint protection.'
      },
      {
        q: 'How Much Does Car Detailing Cost in Peterhead?',
        a: 'Pricing in Peterhead starts at £50 for regular mobile valets, £95 for interior deep extraction, £195 for machine paint correction, and £320 for multi-year ceramic quartz coatings. Exact prices depend on vehicle size and paint condition.'
      },
      {
        q: 'How Long Does Mobile Car Detailing Take?',
        a: 'Standard valets take approximately 1.5 to 2.5 hours. Deep interior cleans take 2.5 to 4 hours. Machine paint correction and multi-year ceramic coatings take between 5 hours and 2 days depending on defect severity.'
      },
      {
        q: 'Do You Bring Your Own Water and Equipment in Peterhead?',
        a: 'Yes, 100%. Our mobile detailing van is fully self-sufficient. We carry over 500 litres of ultra-pure deionised water (zero TDS for spot-free rinsing) and an onboard quiet generator. You do not need to provide outdoor taps or electrical cables.'
      },
      {
        q: 'Can You Detail Cars, SUVs and 4x4s in Peterhead?',
        a: 'Yes, we detail all vehicle types in Peterhead—including compact city cars, executive saloons, sports cars, large family SUVs, 4x4s, and commercial fleet vehicles.'
      }
    ]
  },
  inverurie: {
    id: 'inverurie',
    cityName: 'Inverurie',
    regionName: 'Inverurie & the Garioch',
    postcode: 'AB51',
    slug: 'inverurie-car-detailing',
    heroTagline: 'INVERURIE & GARIOCH AUTOMOTIVE CARE (AB51)',
    heroDescription: 'Experience showroom-grade mobile car valeting, paint correction, and ceramic quartz protection delivered straight to your home driveway or workplace in Inverurie. Master detailer Hamish Moar brings over 30 years of Scottish detailing heritage with a fully self-sufficient mobile workshop unit.',
    weatherChallenge: 'Tailored detailing treatments designed specifically to protect Inverurie vehicles against agricultural road film, muddy country lanes, and winter road salt.',
    heroImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
    coverageDescription: [
      "Based in Aberdeenshire, we bring our fully equipped mobile valeting and detailing service directly to you in Inverurie and the surrounding areas. Whether you need a regular valet, interior deep clean, exterior detailing, paint correction or paint protection, we provide professional vehicle care at your home, workplace or another suitable location.",
      "Customers choose MOAR DETAIL for consistent, high-quality results, honest service and careful attention to detail. Our mobile approach means you can have your vehicle professionally detailed without the need to travel to a detailing centre or spend time waiting for your car to be finished."
    ],
    faqs: [
      {
        q: 'Do You Offer Mobile Car Detailing in Inverurie?',
        a: 'Yes! We operate our dedicated mobile detailing van across Inverurie, Kintore, Kemnay, Oldmeldrum, and the wider Garioch area (postcode AB51) on a regular schedule. We travel directly to your home driveway or workplace.'
      },
      {
        q: 'Can You Detail My Car at My Home or Workplace in Inverurie?',
        a: 'Absolutely. We regularly detail vehicles on residential driveways, country properties, and business car parks across Inverurie. All we need is safe permission to park our mobile van alongside your vehicle.'
      },
      {
        q: 'What Mobile Car Detailing Services Do You Offer in Inverurie?',
        a: 'We provide a complete suite of services in Inverurie: mobile valeting maintenance, agricultural mud extraction, exterior decontamination washes, multi-stage machine paint correction, and certified 9H ceramic quartz paint protection.'
      },
      {
        q: 'How Much Does Car Detailing Cost in Inverurie?',
        a: 'Pricing in Inverurie starts at £50 for regular mobile valets, £95 for interior deep extraction, £195 for machine paint correction, and £320 for multi-year ceramic quartz coatings. Exact prices depend on vehicle size and paint condition.'
      },
      {
        q: 'How Long Does Mobile Car Detailing Take?',
        a: 'Standard valets take approximately 1.5 to 2.5 hours. Deep interior cleans take 2.5 to 4 hours. Machine paint correction and multi-year ceramic coatings take between 5 hours and 2 days depending on defect severity.'
      },
      {
        q: 'Do You Bring Your Own Water and Equipment in Inverurie?',
        a: 'Yes, 100%. Our mobile detailing van is fully self-sufficient. We carry over 500 litres of ultra-pure deionised water (zero TDS for spot-free rinsing) and an onboard quiet generator. You do not need to provide outdoor taps or electrical cables.'
      },
      {
        q: 'Can You Detail Cars, SUVs and 4x4s in Inverurie?',
        a: 'Yes, we detail all vehicle types in Inverurie—including everyday hatchbacks, rural estate cars, large 4x4s, luxury saloons, and commercial fleets.'
      }
    ]
  },
  stonehaven: {
    id: 'stonehaven',
    cityName: 'Stonehaven',
    regionName: 'Stonehaven & Mearns',
    postcode: 'AB39',
    slug: 'stonehaven-car-detailing',
    heroTagline: 'STONEHAVEN & MEARNS AUTOMOTIVE CARE (AB39)',
    heroDescription: 'Experience showroom-grade mobile car valeting, paint correction, and ceramic quartz protection delivered straight to your home driveway or workplace in Stonehaven. Master detailer Hamish Moar brings over 30 years of Scottish detailing heritage with a fully self-sufficient mobile workshop unit.',
    weatherChallenge: 'Tailored detailing treatments designed specifically to protect Stonehaven vehicles against corrosive coastal salt mist, harsh sea breezes, and winter road grit.',
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80',
    coverageDescription: [
      "Based in Aberdeenshire, we bring our fully equipped mobile valeting and detailing service directly to you in Stonehaven and the surrounding areas. Whether you need a regular valet, interior deep clean, exterior detailing, paint correction or paint protection, we provide professional vehicle care at your home, workplace or another suitable location.",
      "Customers choose MOAR DETAIL for consistent, high-quality results, honest service and careful attention to detail. Our mobile approach means you can have your vehicle professionally detailed without the need to travel to a detailing centre or spend time waiting for your car to be finished."
    ],
    faqs: [
      {
        q: 'Do You Offer Mobile Car Detailing in Stonehaven?',
        a: 'Yes! We operate our dedicated mobile detailing van across Stonehaven, Newtonhill, Muchalls, and the coastal Mearns district (postcode AB39) on a regular schedule. We travel directly to your home driveway or workplace.'
      },
      {
        q: 'Can You Detail My Car at My Home or Workplace in Stonehaven?',
        a: 'Absolutely. We regularly detail vehicles on residential driveways, private parking bays, and workplace car parks across Stonehaven. All we need is safe space to park our mobile van next to your car.'
      },
      {
        q: 'What Mobile Car Detailing Services Do You Offer in Stonehaven?',
        a: 'We provide a complete suite of services in Stonehaven: marine salt decontamination, mobile valeting maintenance, deep interior extraction, multi-stage machine paint correction, and durable SiO2 ceramic coatings.'
      },
      {
        q: 'How Much Does Car Detailing Cost in Stonehaven?',
        a: 'Pricing in Stonehaven starts at £50 for regular mobile valets, £95 for interior deep extraction, £195 for machine paint correction, and £320 for multi-year ceramic quartz coatings. Exact prices depend on vehicle size and paint condition.'
      },
      {
        q: 'How Long Does Mobile Car Detailing Take?',
        a: 'Standard valets take approximately 1.5 to 2.5 hours. Deep interior cleans take 2.5 to 4 hours. Machine paint correction and multi-year ceramic coatings take between 5 hours and 2 days depending on defect severity.'
      },
      {
        q: 'Do You Bring Your Own Water and Equipment in Stonehaven?',
        a: 'Yes, 100%. Our mobile detailing van is fully self-sufficient. We carry over 500 litres of ultra-pure deionised water (zero TDS for spot-free rinsing) and an onboard quiet generator. You do not need to provide outdoor taps or electrical cables.'
      },
      {
        q: 'Can You Detail Cars, SUVs and 4x4s in Stonehaven?',
        a: 'Yes, we detail all vehicle types in Stonehaven—including convertibles, family estates, prestige sports cars, 4x4s, and commercial vans.'
      }
    ]
  },
  fraserburgh: {
    id: 'fraserburgh',
    cityName: 'Fraserburgh',
    regionName: 'Fraserburgh & The Broch',
    postcode: 'AB43',
    slug: 'fraserburgh-car-detailing',
    heroTagline: 'FRASERBURGH & NORTH COAST AUTOMOTIVE CARE (AB43)',
    heroDescription: 'Experience showroom-grade mobile car valeting, paint correction, and ceramic quartz protection delivered straight to your home driveway or workplace in Fraserburgh. Master detailer Hamish Moar brings over 30 years of Scottish detailing heritage with a fully self-sufficient mobile workshop unit.',
    weatherChallenge: 'Tailored detailing treatments designed specifically to protect Fraserburgh vehicles against relentless North Coast sea salt spray, high humidity, and highway grime.',
    heroImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
    coverageDescription: [
      "Based in Aberdeenshire, we bring our fully equipped mobile valeting and detailing service directly to you in Fraserburgh and the surrounding areas. Whether you need a regular valet, interior deep clean, exterior detailing, paint correction or paint protection, we provide professional vehicle care at your home, workplace or another suitable location.",
      "Customers choose MOAR DETAIL for consistent, high-quality results, honest service and careful attention to detail. Our mobile approach means you can have your vehicle professionally detailed without the need to travel to a detailing centre or spend time waiting for your car to be finished."
    ],
    faqs: [
      {
        q: 'Do You Offer Mobile Car Detailing in Fraserburgh?',
        a: 'Yes! We operate our dedicated mobile detailing van across Fraserburgh, Rosehearty, St Combs, Cairnbulg, and the surrounding North Coast communities (postcode AB43). We travel directly to your home driveway or workplace.'
      },
      {
        q: 'Can You Detail My Car at My Home or Workplace in Fraserburgh?',
        a: 'Absolutely. We regularly detail vehicles on residential driveways, harbour-side properties, and commercial premises across Fraserburgh. All we need is safe space to park our van next to your vehicle.'
      },
      {
        q: 'What Mobile Car Detailing Services Do You Offer in Fraserburgh?',
        a: 'We provide a complete suite of services in Fraserburgh: salt decontamination washes, mobile valeting maintenance, deep interior antibacterial cleaning, machine swirl removal, and certified 9H ceramic paint coatings.'
      },
      {
        q: 'How Much Does Car Detailing Cost in Fraserburgh?',
        a: 'Pricing in Fraserburgh starts at £50 for regular mobile valets, £95 for interior deep extraction, £195 for machine paint correction, and £320 for multi-year ceramic quartz coatings. Exact prices depend on vehicle size and paint condition.'
      },
      {
        q: 'How Long Does Mobile Car Detailing Take?',
        a: 'Standard valets take approximately 1.5 to 2.5 hours. Deep interior cleans take 2.5 to 4 hours. Machine paint correction and multi-year ceramic coatings take between 5 hours and 2 days depending on defect severity.'
      },
      {
        q: 'Do You Bring Your Own Water and Equipment in Fraserburgh?',
        a: 'Yes, 100%. Our mobile detailing van is fully self-sufficient. We carry over 500 litres of ultra-pure deionised water (zero TDS for spot-free rinsing) and an onboard quiet generator. You do not need to provide outdoor taps or electrical cables.'
      },
      {
        q: 'Can You Detail Cars, SUVs and 4x4s in Fraserburgh?',
        a: 'Yes, we detail all vehicle types in Fraserburgh—including family cars, coastal 4x4s, commercial fleet vans, and weekend performance vehicles.'
      }
    ]
  },
  westhill: {
    id: 'westhill',
    cityName: 'Westhill',
    regionName: 'Westhill & Kingswells',
    postcode: 'AB32',
    slug: 'westhill-car-detailing',
    heroTagline: 'WESTHILL & KINGSWELLS AUTOMOTIVE CARE (AB32)',
    heroDescription: 'Experience showroom-grade mobile car valeting, paint correction, and ceramic quartz protection delivered straight to your home driveway or business park workplace in Westhill. Master detailer Hamish Moar brings over 30 years of Scottish detailing heritage with a fully self-sufficient mobile workshop unit.',
    weatherChallenge: 'Tailored detailing treatments designed specifically to protect Westhill vehicles against AWPR motorway commute grit, industrial fallout, and unpredictable Scottish weather.',
    heroImage: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1600&q=80',
    coverageDescription: [
      "Based in Aberdeenshire, we bring our fully equipped mobile valeting and detailing service directly to you in Westhill and the surrounding areas. Whether you need a regular valet, interior deep clean, exterior detailing, paint correction or paint protection, we provide professional vehicle care at your home, workplace or another suitable location.",
      "Customers choose MOAR DETAIL for consistent, high-quality results, honest service and careful attention to detail. Our mobile approach means you can have your vehicle professionally detailed without the need to travel to a detailing centre or spend time waiting for your car to be finished."
    ],
    faqs: [
      {
        q: 'Do You Offer Mobile Car Detailing in Westhill?',
        a: 'Yes! We operate our dedicated mobile detailing van across Westhill, Elrick, Kingswells, Kirkton of Skene, and Dunecht (postcode AB32) on a regular schedule. We travel directly to your home driveway or office car park.'
      },
      {
        q: 'Can You Detail My Car at My Workplace in Westhill Business Parks?',
        a: 'Absolutely. We frequently detail executive and employee cars while owners are at work in Westhill business parks (such as Subsea 7, TotalEnergies, and Arnhall Business Park). We bring self-contained power and water, requiring zero utilities from the facility.'
      },
      {
        q: 'What Mobile Car Detailing Services Do You Offer in Westhill?',
        a: 'We provide a complete suite of services in Westhill: executive valeting, deep interior steam sanitisation, commuter motorway bug/tar decontamination, multi-stage machine paint correction, and certified 9H ceramic coatings.'
      },
      {
        q: 'How Much Does Car Detailing Cost in Westhill?',
        a: 'Pricing in Westhill starts at £50 for regular mobile valets, £95 for interior deep extraction, £195 for machine paint correction, and £320 for multi-year ceramic quartz coatings. Exact prices depend on vehicle size and paint condition.'
      },
      {
        q: 'How Long Does Mobile Car Detailing Take?',
        a: 'Standard valets take approximately 1.5 to 2.5 hours. Deep interior cleans take 2.5 to 4 hours. Machine paint correction and multi-year ceramic coatings take between 5 hours and 2 days depending on defect severity.'
      },
      {
        q: 'Do You Bring Your Own Water and Equipment in Westhill?',
        a: 'Yes, 100%. Our mobile detailing van is fully self-sufficient. We carry over 500 litres of ultra-pure deionised water (zero TDS for spot-free rinsing) and an onboard quiet generator. You do not need to provide outdoor taps or electrical cables.'
      },
      {
        q: 'Can You Detail Cars, SUVs and 4x4s in Westhill?',
        a: 'Yes, we detail all vehicle types in Westhill—including luxury executive saloons, electric vehicles, family SUVs, 4x4s, and corporate company cars.'
      }
    ]
  }
};
