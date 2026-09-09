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

export interface ShoppingListItem {
  id: string;
  label: string;
  bought: boolean;
  category?: "deli" | "butcher" | "greengrocer" | "supermarket" | "fishmonger";
}
