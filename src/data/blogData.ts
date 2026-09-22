import { BlogPostItem } from '../types';

export const blogPostsList: BlogPostItem[] = [
  {
    id: 'post-1',
    slug: 'blog-post-1',
    title: 'Ceramic Coating vs. Traditional Wax: What Truly Protects Your Paint?',
    subtitle: 'An objective breakdown of durability, chemical resistance, cost-per-year, and real-world Scottish weather performance.',
    category: 'Paint Protection',
    readTime: '6 min read',
    publishedDate: 'October 12, 2025',
    author: {
      name: 'Hamish Moar',
      role: 'Master Detailer (30+ Years Experience)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    summary: 'Discover why traditional carnauba waxes break down within 6 to 8 weeks under road salt and sun, and why 9H SiO2 ceramic coatings provide multi-year hydrophobic resilience.',
    content: [
      {
        heading: 'The Chemistry Behind Modern Paint Protection',
        paragraphs: [
          'For decades, natural carnauba paste wax was the gold standard for adding deep gloss and water beading to vehicle bodywork. Extracted from Brazilian palm leaves, carnauba produces a warm, organic sheen that enthusiasts cherish.',
          'However, natural waxes suffer from one major flaw: heat and chemical vulnerability. In modern driving conditions—where engines produce intense bonnet heat and roads are coated with alkaline salt sprays and acidic rain—carnauba wax begins degrading at approximately 45°C. Within 6 to 8 weeks, the protective layer is essentially gone.',
          'In contrast, ceramic coatings utilize silicon dioxide (SiO2) or silicon carbide (SiC) nanotechnology. When applied to clean clear coats, these liquid polymers cross-link with the microscopic pores of your factory paint, curing into an ultra-thin, glass-hard sacrificial barrier.'
        ],
        bulletPoints: [
          'Hardness Rating: Carnauba wax offers ~2H hardness; professional ceramic coatings achieve 9H pencil hardness.',
          'Heat Tolerance: Ceramic coatings withstand temperatures up to 400°C, ideal for bonnets and alloy wheels.',
          'Chemical Resilience: Withstands pH ranges from pH 2 (acid rain/bird lime) to pH 13 (harsh traffic film removers).'
        ]
      },
      {
        heading: 'Hydrophobic Properties & The Self-Cleaning Effect',
        paragraphs: [
          'The most noticeable daily benefit of a true ceramic coating is extreme hydrophobicity. The contact angle of water droplets exceeds 110 degrees, creating tight, spherical beads that roll off panels under aerodynamic pressure.',
          'As these beads roll across the surface, they encapsulate loose dirt, grit, and industrial dust, carrying them away. This self-cleaning property means your vehicle stays visibly cleaner for weeks and washes in less than half the time.'
        ],
        proTip: 'Never apply a ceramic coating directly over existing wax or uncorrected paint. Any surface swirls, tar spots, or oxidation will become locked underneath the glass coating.'
      },
      {
        heading: 'Cost Comparison Over 3 Years',
        paragraphs: [
          'While a professional ceramic coating requires a higher initial investment due to the mandatory paint decontamination and machine polishing preparation, it consistently proves more economical over a 3-to-5 year ownership period.',
          'To maintain equivalent protection using traditional wax, an owner would need to pay for 18 to 24 separate wax applications and clay bar treatments, costing far more in total labour and time.'
        ]
      }
    ],
    keyTakeaways: [
      'Wax sits temporarily on top of clear coats; ceramic coatings chemically cross-link into paint pores.',
      'Ceramic coatings withstand acidic bird droppings, road salt, and harsh winter chemicals that strip wax.',
      'Surface prep (clay bar and machine polishing) accounts for 80% of ceramic coating longevity.',
      'Saves hours of maintenance washing with effortless water-sheeting properties.'
    ]
  },
  {
    id: 'post-2',
    slug: 'blog-post-2',
    title: 'The Safe Two-Bucket Wash Method: How to Wash Without Swirl Marks',
    subtitle: 'Why traditional sponge washing scratches your clear coat and how professional grit guards protect your paint.',
    category: 'Wash Techniques',
    readTime: '5 min read',
    publishedDate: 'November 4, 2025',
    author: {
      name: 'Hamish Moar',
      role: 'Master Detailer (30+ Years Experience)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80',
    summary: 'Over 90% of spider-web swirls and paint marring are caused by incorrect hand washing. Learn how the two-bucket system prevents grit re-circulation.',
    content: [
      {
        heading: 'The Anatomy of a Wash Scratch',
        paragraphs: [
          'If you look at your car under direct sunlight or streetlamps and see a spiderweb network of circular scratches, those are swirl marks. They are almost never created by rocks or high speeds; they are created during washing.',
          'When you use a yellow sponge or a single wash bucket, grit lifted from the lower sill stays trapped against the flat surface. As you move that sponge in circular motions across the doors or bonnet, you are grinding sharp micro-grit particles across your clear coat.'
        ]
      },
      {
        heading: 'The Two-Bucket System Step-by-Step',
        paragraphs: [
          'The two-bucket method is universally adopted by elite automotive detailers to eliminate grit transfer entirely.',
          'Bucket 1 contains pure warm water with a heavy-duty grit guard baffle seated at the bottom (the "Rinse" bucket). Bucket 2 contains pH-balanced car shampoo and water, also with a grit guard (the "Wash" bucket).'
        ],
        bulletPoints: [
          'Step 1 (Pre-Wash): Never touch dry paint. Coat the vehicle in snow foam and let it dwell for 5 minutes to dissolve loose road film.',
          'Step 2 (Dip & Wash): Soak a plush microfibre or lambswool mitt in the soapy Wash bucket. Clean ONE panel using straight, linear strokes—never circles.',
          'Step 3 (Rinse): Plunge the dirty wash mitt into the Rinse bucket and agitate it against the grit guard to dislodge all dirt into the bucket bottom.',
          'Step 4 (Wring & Reload): Squeeze out dirty rinse water, then dip back into the clean Wash bucket for the next panel.'
        ],
        proTip: 'Always wash top to bottom. Roof and bonnet first, glass second, doors third, and greasy lower sills last of all.'
      },
      {
        heading: 'Safe Drying: The Twisted Loop Microfibre Rule',
        paragraphs: [
          'Traditional leather chamois cloths have zero pile depth, meaning any stray dust particle will be dragged across the paint. Instead, use an ultra-plush 1200 GSM twisted-loop drying towel combined with a spray quick-detailer as a drying aid for maximum surface lubrication.'
        ]
      }
    ],
    keyTakeaways: [
      'Sponges trap grit against clear coats; plush microfibre absorbs grit deep within its fibres.',
      'Grit guards trap heavy sediment beneath an isolated plastic grid so mitts stay clean.',
      'Wash in straight, overlapping lines rather than aggressive circular motions.',
      'Always pre-rinse with snow foam or citrus degreaser before touching the car.'
    ]
  },
  {
    id: 'post-3',
    slug: 'blog-post-3',
    title: 'Leather Restoration & Deep Cleanse: Preventing Cracks and Wear',
    subtitle: 'From shiny steering wheels to hard bolster creases, understand how modern coated automotive leather actually works.',
    category: 'Interior Care',
    readTime: '7 min read',
    publishedDate: 'December 2, 2025',
    author: {
      name: 'Hamish Moar',
      role: 'Master Detailer (30+ Years Experience)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    summary: 'A shiny steering wheel is not clean—it is choked with human body oils and sweat salts. Discover the true science of modern leather care.',
    content: [
      {
        heading: 'The Myth of "Bare Leather" in Modern Cars',
        paragraphs: [
          'Most car owners believe their luxury leather seats behave like an old saddle that requires heavy oily creams and neat’s-foot oil. In reality, almost all modern automotive leather (BMW, Audi, Mercedes, Porsche, Range Rover) is top-coated with a thin polyurethane lacquer at the factory.',
          'You are not conditioning raw skin; you are maintaining a flexible clear coating. Heavy petroleum conditioners cannot penetrate this lacquer—they simply sit on the surface, attracting dust, degrading stitching, and leaving a greasy gloss.'
        ]
      },
      {
        heading: 'Why Steering Wheels and Bolsters Go Shiny',
        paragraphs: [
          'Factory leather leaves the assembly line with an elegant, velvety matte finish. When steering wheels or seat bolsters become shiny, sticky, or slippery, that shine is composed of body sebum oils, sweat salts, sunblock lotions, and microscopic dust acting as an abrasive.',
          'As you slide into the seat, this grit grinds against the polyurethane top-coat, eventually breaking the barrier and causing unsightly cracked creases and premature dye transfer.'
        ],
        bulletPoints: [
          'High pH cleaners strip the protective top-coat lacquer.',
          'Horsehair brushes safely agitate pores without micro-scratching leather dye.',
          'Dry vapor steam lifts embedded grease out of seat perforations without soaking foam padding.'
        ]
      },
      {
        heading: 'The Professional 3-Step Leather Rescue Process',
        paragraphs: [
          'Our interior detailing team uses dedicated pH-balanced foaming cleansers with natural horsehair brushes. Foam gently suspends dirt away from stitching and seams without oversaturating the seat cushion foam underneath.',
          'Once cleaned and dried, we apply a matte breathable nanocoating (fluoropolymer or ceramic leather shield). This locks out blue jean dye transfer, repels coffee spills, and provides essential UV blockers against cracking.'
        ],
        proTip: 'If your steering wheel feels slippery or looks glossier than your dashboard, it is overdue for a deep enzymatic cleanse.'
      }
    ],
    keyTakeaways: [
      'Factory automotive leather is sealed with a lacquer finish—matte is clean, glossy is soiled.',
      'Greasy silicone wipes attract dust and cause stitching thread to rot prematurely.',
      'Foaming cleaners and soft horsehair brushes lift dirt safely from grain crevices.',
      'Ceramic leather coatings shield against blue dye transfer from denim jeans.'
    ]
  },
  {
    id: 'post-4',
    slug: 'blog-post-4',
    title: 'Paint Correction Explained: 1-Stage vs 2-Stage Machine Polishing',
    subtitle: 'Understanding cutting compounds, paint depth gauges, and how clear coat thickness dictates restoration potential.',
    category: 'Paint Correction',
    readTime: '8 min read',
    publishedDate: 'January 15, 2026',
    author: {
      name: 'Hamish Moar',
      role: 'Master Detailer (30+ Years Experience)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80',
    summary: 'Clear coat is thinner than a Post-it note. Learn how professional dual-action polishers safely level microscopic valleys to reveal mirror-like reflections.',
    content: [
      {
        heading: 'How Reflection Actually Works',
        paragraphs: [
          'A car’s paintwork appears glossy when incident light bounces off the surface at a uniform angle directly into the observer’s eye. When a panel is covered in swirl marks, light scatters in thousands of chaotic directions, making the paint look milky, grey, and faded.',
          'Machine polishing does not "fill" scratches. True paint correction physically levels the microscopic clear coat around the scratch until the valleys and peaks are flat and uniform once again.'
        ]
      },
      {
        heading: 'Single-Stage vs Multi-Stage Polishing',
        paragraphs: [
          'Clients often ask whether they need a 1-Stage Enhancement or a Full 2-Stage Paint Correction. The difference lies in the balance between defect removal and finish clarity.'
        ],
        bulletPoints: [
          '1-Stage Machine Polish (Gloss Enhancement): Uses a balanced medium foam pad and diminishing micro-abrasives. Removes 60% to 75% of light haze and wash marring, delivering intense gloss in a single day.',
          '2-Stage Correction (Precision Restoration): Stage 1 uses a heavy cutting compound with microfibre or wool pads to eliminate 85% to 95% of deep scratches and buffer trails. Stage 2 uses ultra-fine finishing polish to jewel the surface to a wet-look mirror finish.',
          '3-Stage Wet Sanding (Concours): Reserved for classic cars or removing factory "orange peel" texture for show-level perfection.'
        ]
      },
      {
        heading: 'Ultrasonic Paint Depth Gauges: Safety First',
        paragraphs: [
          'Modern vehicle factory clear coat is astonishingly thin—typically between 35 and 50 microns (a human hair is roughly 70 microns). An amateur with a rotary buffer can burn through this clear coat in under 10 seconds.',
          'Before touching any machine to paintwork, we take dozens of ultrasonic paint depth readings across every panel, identifying previous resprays, thin edge zones, and safe compound limits.'
        ],
        proTip: 'Plastic bumpers and composite wings dissipate heat differently than metal bonnets. Machine speed and pad pressure must be dialed down to avoid heat blistering.'
      }
    ],
    keyTakeaways: [
      'Paint correction permanently removes defects rather than temporarily masking them with fillers.',
      '1-Stage enhancement is ideal for daily drivers seeking major gloss improvements at reasonable cost.',
      '2-Stage correction restores deeper clear coat defects and delivers showroom perfection.',
      'Professional digital paint depth gauges ensure safe, non-destructive polishing.'
    ]
  },
  {
    id: 'post-5',
    slug: 'blog-post-5',
    title: 'Winter Road Salt Defense: Protecting Car Paint and Undercarriage',
    subtitle: 'How rock salt, calcium chloride, and freeze-thaw cycles accelerate vehicle corrosion and what you can do about it.',
    category: 'Seasonal Maintenance',
    readTime: '6 min read',
    publishedDate: 'February 10, 2026',
    author: {
      name: 'Hamish Moar',
      role: 'Master Detailer (30+ Years Experience)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80',
    summary: 'Highway gritting trucks keep roads safe, but road salt reacts with water and iron to accelerate rust. Discover key steps to winterize your car.',
    content: [
      {
        heading: 'The Chemical Trap of De-icing Chemicals',
        paragraphs: [
          'Modern highway agencies no longer just spread coarse rock salt (sodium chloride). They frequently use pre-wetted calcium chloride or magnesium chloride brine solutions that adhere tenaciously to wet tarmac.',
          'While excellent at melting ice below -10°C, these liquid salts are significantly more corrosive. They atomize in traffic spray, coating your vehicle’s subframes, brake lines, wheel arches, and lower body panels in an invisible corrosive crust.'
        ]
      },
      {
        heading: 'The Dangers of Leaving Salt on Paintwork',
        paragraphs: [
          'Salt acts as an electrolyte. When water, oxygen, and metal are present, salt dramatically accelerates galvanic oxidation. Even on galvanized body panels, salt crystallizes inside stone chips and hairline scratches, prying open the clear coat edge.',
          'Furthermore, never attempt to wipe off dried salt film with a detailer spray or dry cloth. Dry salt crystals are harder than vehicle clear coat and will produce severe scratches.'
        ],
        bulletPoints: [
          'Wheel Arches: Trap damp salt cakes against inner metal lips, festering rust out of sight.',
          'Brake Calipers: Salt crusting causes caliper slide pins to seize, resulting in uneven pad wear.',
          'Door Shuts: Salt mist infiltrates sill rubbers and dries inside door bottoms where drain holes can plug.'
        ]
      },
      {
        heading: 'Essential Winter Protection Routine',
        paragraphs: [
          'A pre-winter chemical decontamination and application of either a synthetic fluoropolymer sealant or SiO2 ceramic layer provides an impervious barrier. During winter, bi-weekly contactless citrus pre-washes rinse away salt before it has time to react with bodywork.'
        ],
        proTip: 'When cleaning your car in freezing winter weather, never use boiling water on frozen windscreens or cold paint panels—thermal shock can instantly crack glass and craze clear coats.'
      }
    ],
    keyTakeaways: [
      'Liquid brine spray penetrates suspension crevices and inner wheel arch lips.',
      'Never wipe salt-encrusted paintwork dry—always pre-soak with citrus foam before touching.',
      'Ceramic coatings and fluoropolymer sealants prevent salt crystals from chemically bonding.',
      'Flush wheel arches and undercarriage regularly during frosty, gritted months.'
    ]
  },
  {
    id: 'post-6',
    slug: 'blog-post-6',
    title: 'Mobile Detailing Preparation Checklist: Getting the Best Results at Home',
    subtitle: 'Everything you need to know before our fully equipped mobile detailing van arrives on your driveway.',
    category: 'Customer Guide',
    readTime: '4 min read',
    publishedDate: 'March 1, 2026',
    author: {
      name: 'Hamish Moar',
      role: 'Master Detailer (30+ Years Experience)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
    summary: 'Our mobile van carries its own pure deionised water and quiet electricity generator, but a few quick steps from you ensure the fastest, highest-quality service.',
    content: [
      {
        heading: 'What Our Mobile Unit Supplies',
        paragraphs: [
          'One of the greatest conveniences of Moar Details is our complete self-sufficiency. Unlike amateur valeters who need to borrow your garden hose or drag extension cords through your front door, our custom mobile detailing van is an independent workshop on wheels.'
        ],
        bulletPoints: [
          '500-Litre Onboard Tank: Filled with 0-TDS (total dissolved solids) filtered deionised pure water.',
          'Ultra-Quiet Inverter Generator: Supplies smooth electricity for our steam cleaners, hot-water extractors, and dual-action polishers without tripping household fuses.',
          'Mobile Pop-Up Awning: Deploys over the vehicle in light rain or direct hot sun to ensure optimal working conditions.'
        ]
      },
      {
        heading: 'Simple Steps to Prepare Before We Arrive',
        paragraphs: [
          'To help our detailers dedicate 100% of their booking time to polishing, extraction, and sanitisation, we kindly ask customers to take three minutes for quick preparations.'
        ],
        bulletPoints: [
          '1. Clear Personal Belongings: Remove sunglasses, gym bags, coins, children toys, and items from door pockets and boot areas.',
          '2. Child Car Seats: If you want carpets beneath child seats cleaned, please unclip them prior to arrival due to manufacturer liability rules.',
          '3. Parking Clearance: Provide roughly 1 to 1.5 metres of clearance around all vehicle sides so our technicians can safely position work carts and ladders.',
          '4. Vehicle Keys: Have keys available so we can unlock doors, fold mirrors, and move seats forward and backward for full carpet access.'
        ]
      },
      {
        heading: 'Inspect & Enjoy Your Showroom Results',
        paragraphs: [
          'Upon completion, our technician will walk you around the vehicle with high-CRI inspection lights, pointing out the restored clarity, treated leather, and protected wheels, followed by tailored advice on keeping it pristine.'
        ],
        proTip: 'If your car is parked on a steep slope or narrow public street, let us know beforehand so we can arrange the safest positioning for our mobile work zone.'
      }
    ],
    keyTakeaways: [
      'Zero utility requirements: We bring our own pure filtered water and quiet electricity.',
      'Clearing out loose personal items allows our team to focus directly on deep cleaning.',
      'Unclip child car seats if you desire deep wet-extraction beneath them.',
      'A post-detail handover ensures you understand all warranty and aftercare steps.'
    ]
  }
];
