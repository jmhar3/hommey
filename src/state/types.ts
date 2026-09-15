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
  Other: "other",
} as const;

export interface ShoppingListItem {
  id: string;
  label: string;
  type?:
    "deli" | "butcher" | "greengrocer" | "supermarket" | "fishmonger" | "other";
}
