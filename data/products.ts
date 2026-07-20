import { Product, FAQ } from "@/types/product";

export const heybikeVillain: Product = {
  name: "Heybike Villain",
  brand: "Heybike",
  model: "Villain",
  slug: "heybike-villain",
  price: {
    msrp: 1499,
    current: 1299,
    currency: "USD",
  },
  rating: {
    overall: 8.9,
    powerSpeed: 9.2,
    range: 7.0,
    buildQuality: 8.8,
    valueForMoney: 9.0,
  },
  specifications: {
    motor: "4,160W peak mid-drive motor, 190 N·m peak torque",
    battery: "52V 26Ah (~1,352 Wh)",
    topSpeed: {
      claimed: "45 mph",
      tested: "~44.3 mph",
    },
    range: {
      claimed: "Up to 50 miles",
      realWorld: "15-25 miles (mixed terrain)",
    },
    charger: "58.8V 5A, ~4-6 hours to full charge",
    tires: '14" front / 12" rear fat tires',
    suspension:
      "Front hydraulic fork (150mm travel) + rear nitrogen/air shock",
    brakes: "Hydraulic disc brakes",
    controller: "FarDriver smart controller, app-tunable",
    frame: "Carbon steel, up to 265 lb payload",
    seatHeight: '29.5"',
    riderHeight: "3.9-6.1 ft (120-185 cm)",
    waterproofing: "IPX6",
    payload: "265 lb",
  },
  features: [
    {
      title: "Mid-drive motor, not a hub motor",
      description:
        "Most competitors at this price use a 2,000-3,000W hub motor; the Villain's 4,160W mid-drive + 190 N·m torque is unusually high-spec for the price tier.",
    },
    {
      title: "Reverse function",
      description:
        "Uncommon among direct competitors, genuinely useful for tight maneuvering.",
    },
    {
      title: "App-tunable controller",
      description:
        "Appeals to riders who like to fine-tune their ride via the FarDriver app.",
    },
    {
      title: "Full off-road suspension",
      description:
        "Front and rear independent damping vs. rigid-frame entry-level competitors.",
    },
    {
      title: "Safety design",
      description:
        "Magnetic kill switch + hydraulic disc brakes — a credibility point for parents buying for teens.",
    },
  ],
  pros: [
    "Motor power and torque well ahead of competitors at this price",
    "Full hydraulic suspension + disc brakes rare under $1,500",
    "Reverse function adds real-world practicality",
    "Manufacturer sells replacement parts directly",
  ],
  cons: [
    "Real-world range falls notably short of the advertised figure",
    "Noticeably louder than some competitors",
    "Some accessories (speaker, etc.) are optional add-ons, not included",
  ],
  amazonUrl: "https://amzn.to/4fmopvo",
  images: {
    hero: "/images/products/heybike-villain-side.png",
    gallery: [
      "/images/products/heybike-villain-front.png",
      "/images/products/heybike-villain-motor.png",
      "/images/products/heybike-villain-display.png",
      "/images/products/heybike-villain-detail.png",
      "/images/products/vilian-detail-1.png",
      "/images/products/vilian-detail-2.png",
      "/images/products/vilian-detail-3.png",
      "/images/products/vilian-feature-1.png",
      "/images/products/vilian-feature-2.png",
    ],
  },
  competitors: [
    {
      name: "Windone RS5",
      motor: "2,200W",
      torque: "—",
      topSpeed: "37 mph",
      range: "45 mi",
      price: "TBD",
    },
    {
      name: "Yozma IN10 Pro",
      motor: "5,500W",
      torque: "—",
      topSpeed: "50 mph",
      range: "60 mi",
      price: "Higher tier",
    },
    {
      name: "Tasaca V58",
      motor: "5,500W",
      torque: "276 N·m",
      topSpeed: "55 mph",
      range: "—",
      price: "Higher tier",
    },
  ],
};

export const faqData: FAQ[] = [
  {
    question: "Is the Heybike Villain street legal?",
    answer:
      "The Heybike Villain is classified as an electric dirt bike and is primarily designed for off-road use. Street legality varies by state and local jurisdiction. Check your local regulations before riding on public roads.",
  },
  {
    question: "What is the real-world range of the Heybike Villain?",
    answer:
      "While Heybike advertises up to 50 miles of range, real-world mixed-terrain testing typically yields 15-25 miles depending on rider weight, terrain, speed, and riding style. The high torque output inherently trades off against range — this is a category-wide pattern.",
  },
  {
    question: "How fast does the Heybike Villain actually go?",
    answer:
      "The Heybike Villain has a claimed top speed of 45 mph. Independent speed testing has verified approximately 44.3 mph, which is very close to the manufacturer's claim.",
  },
  {
    question: "Is the Heybike Villain good for beginners?",
    answer:
      "The Villain can be suitable for beginners thanks to its app-tunable controller that allows power adjustment, and features like throttle reset protection. However, the 4,160W motor is powerful — new riders should start in lower power modes and always wear proper safety gear.",
  },
  {
    question:
      "What's the difference between the Heybike Villain and the Windone RS5?",
    answer:
      "The Villain has a significantly more powerful 4,160W motor vs. the RS5's 2,200W, higher top speed (45 vs. 37 mph), and mid-drive vs. hub motor design. The RS5 may offer longer range. See our detailed comparison article for more.",
  },
  {
    question: "Does the Heybike Villain require a license?",
    answer:
      "Licensing requirements depend on your local laws and how the bike is classified in your area. For off-road private property use, typically no license is needed. For road use, requirements vary by jurisdiction.",
  },
  {
    question: "How long does the battery take to charge?",
    answer:
      "Using the included 58.8V 5A charger, a full charge takes approximately 4-6 hours from empty. Charging times may vary based on ambient temperature and battery condition.",
  },
  {
    question: "Where can I buy the Heybike Villain at the best price?",
    answer:
      "The Heybike Villain is available on Amazon. The MSRP is $1,499, but the street price is commonly around $1,299-$1,399. Check our Deals page for current pricing.",
  },
];
