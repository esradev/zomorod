/**
 * Types for the Emerald & Champagne (زمرد و شامپاین) Luxury Islamic Couture Application
 */

export interface CollectionItem {
  id: string;
  title: string;          // English
  titleFa: string;        // Persian
  description: string;
  descriptionFa: string;
  category: 'crystals' | 'pearls' | 'zardosi' | 'flora' | 'all';
  categoryFa: string;
  imageUrl: string;
  hoursOfStitching: number;
  goldFiligreeKarat?: string;
  priceEstimate: number; // in tomans or dollars
  materials: { name: string; nameFa: string }[];
  details: string[];
  detailsFa: string[];
  artisans: string[];
  artisansFa: string[];
}

export interface AccessoryItem {
  id: string;
  name: string;
  nameFa: string;
  price: string;
  priceFa: string;
  imageUrl: string;
}

export interface Commission {
  id: string;
  title: string;
  titleFa: string;
  type: string;
  typeFa: string;
  progress: number; // 0 to 100
  status: 'consultation' | 'production' | 'quality_check' | 'ready' | 'delivered';
  statusFa: string;
  statusColor: string;
  dateStarted: string;
  dateStartedFa: string;
  estimatedDelivery: string;
  estimatedDeliveryFa: string;
  details: { label: string; value: string }[];
  detailsFa: { label: string; value: string }[];
  updates: { date: string; text: string; textFa: string }[];
}

export interface Message {
  id: string;
  sender: 'client' | 'artisan';
  senderName: string;
  senderNameFa: string;
  text: string;
  time: string;
  timeFa: string;
}

export interface BespokeInquiry {
  garmentType: string;
  fabric: string;
  customColor: string;
  paletteOption: string;
  motifStyle: string;
  density: number; // 1-5 scale for bead/crystal density
  measurements: {
    height: string;
    bust: string;
    waist: string;
    hips: string;
    notes: string;
  };
  attachments: string[]; // file names or data-urls
}
