export interface Product {
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
}