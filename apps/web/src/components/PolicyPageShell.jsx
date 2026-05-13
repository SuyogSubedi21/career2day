import React from 'react';

export default function PolicyPageShell({
  eyebrow = 'Career2Day policy',
  title,
  description,
  lastUpdated,
  highlights = [],
  sections = [],
  contactEmail = 'support@career2day.com',
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/50 px-4 pb-24 pt-32 text-slate-950 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-900/80">
          <div className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_32%),linear-gradient(135deg,#ffffff,#f8fbff)] px-6 py-10 dark:border-white/10 dark:bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.2),transparent_34%),linear-gradient(135deg,#0f172a,#111827)] sm:px-10 lg:px-12">
            <div className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-200">
              {eyebrow}
            </div>
            <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-end">
              <div>
                <h1 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-5xl">
                  {title}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  {description}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Last updated</p>
                <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{lastUpdated}</p>
                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Written in plain English so learners can understand what applies before using the platform.
                </p>
              </div>
            </div>
          </div>

          {highlights.length > 0 && (
            <div className="grid gap-4 border-b border-slate-200 bg-slate-50/80 px-6 py-6 dark:border-white/10 dark:bg-white/[0.03] sm:px-10 md:grid-cols-3 lg:px-12">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
                  <p className="text-sm font-bold text-slate-950 dark:text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p>
                </div>
              ))}
            </div>
          )}

          <div className="grid gap-5 px-6 py-8 sm:px-10 lg:px-12">
            {sections.map((section, index) => (
              <section key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70">
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="text-xl font-black tracking-tight text-slate-950 dark:text-white">{section.title}</h2>
                    {section.body && (
                      <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{section.body}</p>
                    )}
                    {section.items?.length > 0 && (
                      <ul className="mt-4 grid gap-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </section>
            ))}

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-400/20 dark:bg-blue-400/10">
              <h2 className="text-xl font-black tracking-tight text-slate-950 dark:text-white">Questions or requests</h2>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                Email <a className="font-bold text-blue-700 underline-offset-4 hover:underline dark:text-blue-200" href={`mailto:${contactEmail}`}>{contactEmail}</a> with your account email and a short description of what you need. We aim to respond within 3 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
