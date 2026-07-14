import React from 'react'
import { FiAlertCircle } from 'react-icons/fi'

export default function ErrorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6 py-12">
      <section className="max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-sm">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-rose-500/15 text-4xl text-rose-400 shadow-lg shadow-rose-500/10">
          <FiAlertCircle className="h-12 w-12" />
        </div>
        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">404</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          The page you are looking for cannot be found. It may have been moved, renamed, or does not exist.
        </p>

        <div className="mt-10 rounded-3xl bg-slate-950/80 p-6 ring-1 ring-slate-700/60">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">What to do next</p>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Check the URL for typos.</li>
            <li>• Return to the homepage.</li>
            <li>• If you need help, contact support.</li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Go to homepage
          </a>
          <a
            href="mailto:support@example.com"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500"
          >
            Contact support
          </a>
        </div>
      </section>
    </main>
  )
}
