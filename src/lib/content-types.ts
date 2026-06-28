export type RichTextLeaf = {
  type: "text";
  text: string;
};

export type RichTextBlock = {
  type: "p";
  children: RichTextLeaf[];
};

export type RichTextRoot = {
  type: "root";
  children: RichTextBlock[];
};

export type RichTextValue = RichTextRoot | null | undefined;

export interface HomepageHero {
  [key: string]: unknown;
  name: string;
  surname: string;
  title: string;
  subtitle: string;
  description?: RichTextValue;
  ctaPrimary: string;
  ctaSecondary: string;
  heroIcon?: string;
}

export interface HomepageFeature {
  [key: string]: unknown;
  title: string;
  description: string;
  icon?: string;
}

export interface HomepageChiSono {
  [key: string]: unknown;
  title: string;
  description?: RichTextValue;
  image?: string | null;
  features?: HomepageFeature[];
}

export interface HomepageService {
  [key: string]: unknown;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
}

export interface HomepageServizi {
  [key: string]: unknown;
  title: string;
  subtitle?: string;
  description?: RichTextValue;
  services?: HomepageService[];
}

export interface HomepageContatti {
  [key: string]: unknown;
  title: string;
  description: string;
  address: string;
  phone?: string;
  email?: string;
  workingHours?: string;
  mapUrl?: string;
  zonesTitle?: string;
  zonesDescription?: string;
  zonesList?: Array<{ name: string }>;
  appointmentTitle?: string;
  appointmentDescription?: string;
  callButtonText?: string;
  emailButtonText?: string;
}

export interface HomepageContent {
  [key: string]: unknown;
  hero?: HomepageHero;
  chiSono?: HomepageChiSono;
  servizi?: HomepageServizi;
  contatti?: HomepageContatti;
}

export interface BlogPost {
  [key: string]: unknown;
  slug: string;
  title: string;
  tags: string[];
  date?: string;
  excerpt?: string;
  coverImage?: string;
  body: string;
}
