/// <reference types="vite/client" />

interface Regions {
  id: string | null;
  name: string | null;
  type: number | null;
  latitude: string | null;
  longitude: string | null;
  country_id: string | null;
  country_name: string | null;
  country_name_uppercase: string | null;
  province_id: string | null;
  province_name: string | null;
  regency_id: string | null;
  regency_name: string | null;
  district_id: string | null;
  district_name: string | null;
  village_id: string | null;
  village_name: string | null;
  full_name: string | null;
  name_translated: string | null;
  country_name_translated: string | null;
  country_name_translated_uppercase: string | null;
}

interface RegionListApi {
  data?: Regions[];
  links?: Record<string, any>;
  meta?: Record<string, any>;
}

interface Coordinate {
  lat: number;
  lng: number;
}

interface MapMarkerData {
  priceLabel: number;
}

interface MapMarker {
  id: number;
  name: string;
  data: MapMarkerData;
  coordinate: Coordinate;
}

interface PriceTrend {
  id: number;
  title: string; // region.province_name
  weekly_price: Record<string, any>[]; // push({date: xxx, data: shrimp_price_per_week_region_id})
}

interface PriceList {
  id: number;
  date: string;
  location: string; // region.province_name & region.name
  supplier: string; // creator.name
  verified: boolean; // creator.consultation_tour_completed
  price: number; // size_{{ size number }}
}

interface ShrimpPricesRaw {
  id: number
  species_id: number
  date: string
  size_20: number
  size_30: number
  size_40: number
  size_50: number
  size_60: number
  size_70: number
  size_80: number
  size_90: number
  size_100: number
  size_110: number
  size_120: number
  size_130: number
  size_140: number
  size_150: number
  size_160: number
  size_170: number
  size_180: number
  size_190: number
  size_200: number
  remark: any
  created_by: number
  updated_by: number
  created_at: string
  updated_at: string
  region_id: string
  contact: string
  country_id: string
  currency_id: string
  week: number
  date_region_full_name: string
  province_id: string
  regency_id: string
  district_id: any
  village_id: any
  slug: string
  shrimp_price_per_week_region_id: ShrimpPricePerWeekRegionId
  country: Country
  region: Region
  currency: Currency
  creator: Creator
}

interface ShrimpPricePerWeekRegionId {
  date: string
  week_species_id_currency_id_country_id: string
  week: number
  species_id: number
  currency_id: string
  country_id: string
  min_size_20: number
  min_size_30: number
  min_size_40: number
  min_size_50: number
  min_size_60: number
  min_size_70: number
  min_size_80: number
  min_size_90: number
  min_size_100: number
  min_size_110: number
  min_size_120: number
  min_size_130: number
  min_size_140: number
  min_size_150: number
  min_size_160: number
  min_size_170: number
  min_size_180: number
  min_size_190: number
  min_size_200: number
  max_size_20: number
  max_size_30: number
  max_size_40: number
  max_size_50: number
  max_size_60: number
  max_size_70: number
  max_size_80: number
  max_size_90: number
  max_size_100: number
  max_size_110: number
  max_size_120: number
  max_size_130: number
  max_size_140: number
  max_size_150: number
  max_size_160: number
  max_size_170: number
  max_size_180: number
  max_size_190: number
  max_size_200: number
  avg_size_20: number
  avg_size_30: number
  avg_size_40: number
  avg_size_50: number
  avg_size_60: number
  avg_size_70: number
  avg_size_80: number
  avg_size_90: number
  avg_size_100: number
  avg_size_110: number
  avg_size_120: number
  avg_size_130: number
  avg_size_140: number
  avg_size_150: number
  avg_size_160: number
  avg_size_170: number
  avg_size_180: number
  avg_size_190: number
  avg_size_200: number
  diff_min_size_20: number
  diff_min_size_30: number
  diff_min_size_40: number
  diff_min_size_50: number
  diff_min_size_60: number
  diff_min_size_70: number
  diff_min_size_80: number
  diff_min_size_90: number
  diff_min_size_100: number
  diff_min_size_110: number
  diff_min_size_120: number
  diff_min_size_130: number
  diff_min_size_140: number
  diff_min_size_150: number
  diff_min_size_160: number
  diff_min_size_170: number
  diff_min_size_180: number
  diff_min_size_190: number
  diff_min_size_200: number
  diff_max_size_20: number
  diff_max_size_30: number
  diff_max_size_40: number
  diff_max_size_50: number
  diff_max_size_60: number
  diff_max_size_70: number
  diff_max_size_80: number
  diff_max_size_90: number
  diff_max_size_100: number
  diff_max_size_110: number
  diff_max_size_120: number
  diff_max_size_130: number
  diff_max_size_140: number
  diff_max_size_150: number
  diff_max_size_160: number
  diff_max_size_170: number
  diff_max_size_180: number
  diff_max_size_190: number
  diff_max_size_200: number
  diff_avg_size_20: number
  diff_avg_size_30: number
  diff_avg_size_40: number
  diff_avg_size_50: number
  diff_avg_size_60: number
  diff_avg_size_70: number
  diff_avg_size_80: number
  diff_avg_size_90: number
  diff_avg_size_100: number
  diff_avg_size_110: number
  diff_avg_size_120: number
  diff_avg_size_130: number
  diff_avg_size_140: number
  diff_avg_size_150: number
  diff_avg_size_160: number
  diff_avg_size_170: number
  diff_avg_size_180: number
  diff_avg_size_190: number
  diff_avg_size_200: number
}

interface Country {
  id: string
  name: string
  translate_id: number
  created_at: string
  updated_at: string
  name_translated: string
  name_uppercase: string
  name_translated_uppercase: string
}

interface Region {
  id: string
  name: string
  type: any
  latitude: string
  longitude: string
  country_id: string
  country_name: string
  country_name_uppercase: string
  province_id: string
  province_name: string
  regency_id: string
  regency_name: string
  district_id: any
  district_name: any
  village_id: any
  village_name: any
  full_name: string
  name_translated: string
  country_name_translated: string
  country_name_translated_uppercase: string
}

interface Currency {
  id: string
  numeric_code: string
  name: string
  symbol: string
  fraction_digits: number
  name_translated: string
}

interface Creator {
  id: number
  role_id: number
  name: string
  email: string
  avatar: string
  email_verified: boolean
  subscription_type_id: number
  settings: Settings
  created_at: string
  updated_at: string
  region_id: string
  address: any
  last_login_at: string
  deactivated: boolean
  expired_at: any
  phone: string
  phone_verified: boolean
  gender: number
  occupation: any
  id_number: any
  id_scan: any
  tin_number: any
  tin_scan: any
  birthdate: any
  company: any
  company_address: any
  position: any
  monthly_income: any
  income_source: any
  buyer: boolean
  phone_country: string
  country: string
  interest: string
  unsubscribe_email_at: any
  freshchat_restore_id: any
  allow_create_client: boolean
  allow_create_token: boolean
  interests: string[]
  state: any
  family_card_number: any
  family_card_scan: any
  telegram_id: any
  gender_name: string
  expired_date: any
  expired_time: any
  upcoming_birthdate: any
}

interface Settings {
  locale: string
}
