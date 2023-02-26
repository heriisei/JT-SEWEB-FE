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