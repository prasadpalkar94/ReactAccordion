import React from 'react'

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6 py-12">
      <section className="w-full max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-sm">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-400">Contact us</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">Get in touch</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Have a question, feedback, or a project request? Send us a message and we&apos;ll get back to you shortly.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-950/80 p-6 ring-1 ring-slate-700/60">
            <h2 className="text-xl font-semibold text-white">Office</h2>
            <p className="mt-4 text-slate-300">123 Example Street<br/>Cityville, CA 90210</p>
            <p className="mt-4 text-slate-300">Phone: <a className="text-emerald-400 hover:text-emerald-300" href="tel:+18001234567">+1 (800) 123-4567</a></p>
            <p className="mt-2 text-slate-300">Email: <a className="text-emerald-400 hover:text-emerald-300" href="mailto:hello@example.com">hello@example.com</a></p>
          </div>

          <form className="rounded-3xl bg-slate-950/80 p-6 ring-1 ring-slate-700/60 space-y-4">
            <label className="block text-sm font-medium text-slate-300">
              Name
              <input type="text" placeholder="Your name" className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400" />
            </label>
            <label className="block text-sm font-medium text-slate-300">
              Email
              <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400" />
            </label>
            <label className="block text-sm font-medium text-slate-300">
              Message
              <textarea rows="5" placeholder="Tell us how we can help" className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400"></textarea>
            </label>
            <button type="button" className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
