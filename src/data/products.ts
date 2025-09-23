import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    rating: 4.5,
    reviews: 128,
    inStock: true
  },
  {
    id: 2,
    name: "Premium Cotton T-Shirt",
    price: 24.99,
    image: "https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Clothing",
    description: "Comfortable 100% cotton t-shirt available in multiple colors and sizes.",
    rating: 4.2,
    reviews: 89,
    inStock: true
  },
  {
    id: 3,
    name: "Leather Crossbody Bag",
    price: 89.99,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Accessories",
    description: "Stylish genuine leather crossbody bag perfect for everyday use.",
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Electronics",
    description: "Advanced fitness tracker with heart rate monitoring and GPS functionality.",
    rating: 4.4,
    reviews: 203,
    inStock: true
  },
  {
    id: 5,
    name: "Denim Jacket",
    price: 69.99,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Clothing",
    description: "Classic denim jacket with a modern fit, perfect for layering.",
    rating: 4.3,
    reviews: 74,
    inStock: true
  },
  {
    id: 6,
    name: "Wireless Phone Charger",
    price: 34.99,
    image: "https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Electronics",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    rating: 4.1,
    reviews: 92,
    inStock: true
  },
  {
    id: 7,
    name: "Sunglasses",
    price: 49.99,
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Accessories",
    description: "UV protection sunglasses with polarized lenses and lightweight frame.",
    rating: 4.6,
    reviews: 167,
    inStock: true
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 119.99,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Footwear",
    description: "Comfortable running shoes with advanced cushioning and breathable mesh.",
    rating: 4.8,
    reviews: 234,
    inStock: true
  }
];

export const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Accessories",
  "Footwear"
];