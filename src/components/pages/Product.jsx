import React from 'react'
import ProductCard from '../common/ProductCard'

const products = [
  {
    id: 1,
    category: 'Electronics',
    title: 'Noise-Cancelling Headphones',
    description: 'Premium over-ear headphones with immersive sound and long battery life.',
    price: '199',
    image: 'src/assets/noise cancelling headphones.jpg',
    rating: 4.8,
    reviews: 254,
    badge: 'New',
  },
  {
    id: 2,
    category: 'Home',
    title: 'Ceramic Mug Set',
    description: 'Handcrafted matte mugs with a smooth finish for daily coffee and tea.',
    price: '34',
    image: 'src/assets/Ceramic Mug Set.jpg',
    rating: 4.5,
    reviews: 82,
    badge: 'Best Seller',
  },
  {
    id: 3,
    category: 'Fashion',
    title: 'Classic Leather Bag',
    description: 'Timeless leather bag with premium stitching and durable hardware.',
    price: '129',
    image: 'src/assets/Classic Leather Bag.jpg',
    rating: 4.7,
    reviews: 193,
    badge: 'Limited',
  },
  {
    id: 4,
    category: 'Accessories',
    title: 'Minimal Watch',
    description: 'Slim-profile watch with stainless steel case and genuine leather strap.',
    price: '89',
    image: 'src/assets/Minimal Watch.jpg',
    rating: 4.6,
    reviews: 120,
    badge: 'Trending',
  },
]

export default function Product() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-blue-600">Products</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Dynamic product cards with visible images
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Browse our product collection with responsive card styling and clear imagery. Each card displays pricing, rating, and calls to action.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
