import { Category } from '@/interfaces/categories';
import { Product } from '@/interfaces/products';

interface SpreeFetchOptions {
  endpoint: string;
  body?: any;
  method?: string;
  headers?: HeadersInit;
}

export async function spreeFetch<T>({ endpoint, body, method = 'GET', headers }: SpreeFetchOptions) {
  try {
    const response = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    })
    
    const data = await response.json();
    
    return {
      status: response.status,
      body: data,
    };
    
  } catch (e) {
    
    throw {
      error: e,
      body,
    };
  }
}

export async function createCart() {
  const response = await spreeFetch({
    endpoint: 'http://localhost:8000/api/v2/storefront/cart',
    method: 'POST',
  });
  
  return response;
}

export async function getCart(token: string) {
  const response = await spreeFetch({
    endpoint: 'http://localhost:8000/api/v2/storefront/cart',
    method: 'GET',
    headers: {
      'X-Spree-Order-Token': token,
    },
  });
  
  return response;
}

export async function addToCart(token: string, variantId: string, quantity: number) {
  const response = await spreeFetch({
    endpoint: 'http://localhost:8000/api/v2/storefront/cart/add_item',
    method: 'POST',
    headers: {
      'X-Spree-Order-Token': token,
    },
    body: {
      variant_id: variantId,
      quantity,
    },
  });
  
  return response;
}

export async function getAllCategories(): Promise<Category[]> {
  const response = await spreeFetch({
    endpoint: 'http://localhost:8000/api/v2/storefront/categories',
  });
  
  return response.body;
}

export async function getProductsByCategory(categoryId: number): Promise<Product[]> {
  const response = await spreeFetch({
    endpoint: `http://localhost:8000/shop/products`,
    method: 'POST',
    body: {
      taxon_id: categoryId,
    }
  });
  
  return response.body.products;
}

export async function getProduct(slug: string): Promise<Product> {
  const response = await spreeFetch({
    endpoint: `http://localhost:8000/api/v2/storefront/products/${slug}`,
  });
  
  return response.body;
} 