import React from 'react'

export default function ProductCard({ category, title, description, price, image, rating, reviews, badge }) {
  return (
    <article className="bg-white rounded-3xl shadow-xl ring-1 ring-slate-200 overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="h-80 w-full object-cover" />
        {badge ? (
          <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
          <span>{category}</span>
          <span className="font-semibold text-slate-900">${price}</span>
        </div>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700">
            {rating} ★
          </span>
          <span>{reviews} reviews</span>
        </div>

        <div className="mt-8 grid gap-3">
          <button className="w-full rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Add to cart
          </button>
          <button className="w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            View details
          </button>
        </div>
      </div>
    </article>
  )
}
