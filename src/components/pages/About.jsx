import React from 'react'

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] items-start">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              About Us
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              We build beautiful experiences for modern brands.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our team crafts premium digital products that are easy to use, visually striking, and built to grow.
              We blend strategy, design, and engineering to create websites and apps that feel effortless.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Our Mission</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  To empower businesses with thoughtful digital solutions that connect with customers and drive impact.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Our Values</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Clarity, creativity, and collaboration guide every decision from concept to launch.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-600">Our Story</p>
            <h3 className="mt-5 text-2xl font-semibold text-slate-900">From idea to polished product.</h3>
            <p className="mt-4 text-slate-600 leading-7">
              Since our founding, we've helped startups and established companies modernize their digital presence.
              Every project begins with listening and ends with a product customers love.
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                <p className="text-sm text-slate-600">Strategy sessions to align goals and audience needs.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                <p className="text-sm text-slate-600">Design systems that scale and delight every user.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
                <p className="text-sm text-slate-600">Launch-ready products with easy maintenance and growth in mind.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-4xl font-semibold text-slate-900">10+</p>
            <p className="mt-2 text-sm text-slate-500">Years building digital products</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-4xl font-semibold text-slate-900">250+</p>
            <p className="mt-2 text-sm text-slate-500">Projects completed for global clients</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-4xl font-semibold text-slate-900">4.9/5</p>
            <p className="mt-2 text-sm text-slate-500">Average customer satisfaction rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}
