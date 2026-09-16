export interface SubTask {
  id: string;
  label: string;
  is_complete: boolean;
}

export interface Quest {
  id: string;
  created_at: string;
  last_completed_at: string;
  label: string;
  frequency: number;
  type: "attack" | "power_up" | "heal";
  value: number;
  mana_cost: number;
  subtasks: SubTask[];
}

export interface Hydrangea {
  id: string;
  created_at: string;
  type: "lil_drink" | "big_drink" | "refill";
  value: number;
}

export interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
  steps: string[];
  notes?: string[];
  source?: string;
  favourite: boolean;
  tags?: string[];
}

export const ShoppingListCategory = {
  Deli: "deli",
  Butcher: "butcher",
  GreenGrocer: "greengrocer",
  SuperMarket: "supermarket",
  FishMonger: "fishmonger",
  Bakery: "bakery",
  Chemist: "chemist",
  Other: "other",
} as const;

export interface ShoppingListItem {
  id: string;
  label: string;
  type?:
    | "deli"
    | "butcher"
    | "greengrocer"
    | "supermarket"
    | "fishmonger"
    | "bakery"
    | "chemist"
    | "other";
}

interface HourlyWeather {
  time?: Date[];
  dew_point_2m?: Float32Array<ArrayBufferLike> | null;
  precipitation?: Float32Array<ArrayBufferLike> | null;
  weather_code?: Float32Array<ArrayBufferLike> | null;
  wind_gusts_10m?: Float32Array<ArrayBufferLike> | null;
  temperature_2m?: Float32Array<ArrayBufferLike> | null;
  relative_humidity_2m?: Float32Array<ArrayBufferLike> | null;
  apparent_temperature?: Float32Array<ArrayBufferLike> | null;
}

interface DailyWeather {
  time?: Date[];
  sunrise?: Date[];
  sunset?: Date[];
  weather_code?: Float32Array<ArrayBufferLike> | null;
  uv_index_max?: Float32Array<ArrayBufferLike> | null;
  wind_speed_10m_max?: Float32Array<ArrayBufferLike> | null;
  wind_gusts_10m_max?: Float32Array<ArrayBufferLike> | null;
  precipitation_sum?: Float32Array<ArrayBufferLike> | null;
  precipitation_hours?: Float32Array<ArrayBufferLike> | null;
  temperature_2m_max?: Float32Array<ArrayBufferLike> | null;
  temperature_2m_min?: Float32Array<ArrayBufferLike> | null;
  apparent_temperature_max?: Float32Array<ArrayBufferLike> | null;
  apparent_temperature_min?: Float32Array<ArrayBufferLike> | null;
}

export interface Weather {
  hourly: HourlyWeather;
  daily: DailyWeather;
}
