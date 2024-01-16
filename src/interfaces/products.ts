export type ModifierOption = {
  id: number;
  group_id: number;
  name: string;
  position: number;
  active: boolean;
  value: string;
  max_options: number | null;
  min_options: number | null;
}

export type ModifierGroup = {
  id: number;
  name: string;
  active: boolean;
  form_type: "radio" | "checkbox" | "number";
  position: number;
  max_options: number;
  min_options: number;
  caption: string;
  options: ModifierOption[];
}

export type RelatedProductOption = {
  id: number;
  name: string;
  price: number;
  display_price: string;
}

export type RelatedProductsGroup = Omit<ModifierGroup, 'options'> & {
  options: RelatedProductOption[];
}

export type Product = {
  id: number;
  name: string;
  description: string;
  external_id: string;
  slug: string;
  image_url: string;
  meta_title: string;
  meta_description: string;
  price: number;
  display_price: string;
  available_by_schedule: boolean;
  belongs_to_coupon: boolean;
  modifier_groups: ModifierGroup[];
  related_products: RelatedProductsGroup[];
}