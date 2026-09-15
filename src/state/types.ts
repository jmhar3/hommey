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
