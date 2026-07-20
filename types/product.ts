export interface Product {
  name: string;
  brand: string;
  model: string;
  slug: string;
  price: {
    msrp: number;
    current: number;
    currency: string;
  };
  rating: {
    overall: number;
    powerSpeed: number;
    range: number;
    buildQuality: number;
    valueForMoney: number;
  };
  specifications: {
    motor: string;
    battery: string;
    topSpeed: {
      claimed: string;
      tested: string;
    };
    range: {
      claimed: string;
      realWorld: string;
    };
    charger: string;
    tires: string;
    suspension: string;
    brakes: string;
    controller: string;
    frame: string;
    seatHeight: string;
    riderHeight: string;
    waterproofing: string;
    payload: string;
  };
  features: {
    title: string;
    description: string;
  }[];
  pros: string[];
  cons: string[];
  amazonUrl: string;
  images: {
    hero: string;
    gallery: string[];
  };
  competitors: Competitor[];
}

export interface Competitor {
  name: string;
  motor: string;
  torque: string;
  topSpeed: string;
  range: string;
  price: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
