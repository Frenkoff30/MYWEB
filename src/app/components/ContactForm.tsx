"use client";
import { useState } from "react";

type ToastState = "hidden" | "visible" | "leaving";

export default function ContactForm() {
  const [toast, setToast] = useState<ToastState>("hidden");
  const [sending, setSending] = useState(false);

  const showToast = () => {
    setToast("visible");
    setTimeout(() => setToast("leaving"), 4000);
    setTimeout(() => setToast("hidden"), 4500);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    // Simulate send — swap for real API call later
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      showToast();
    }, 900);
  };

  return (
    <>
      {/* ── Toast ── */}
      <div
        aria-live="polite"
        className={`fixed bottom-24 right-6 z-[60] flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900/90 px-5 py-4 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-500 ${
          toast === "visible"
            ? "opacity-100 translate-y-0"
            : toast === "leaving"
            ? "opacity-0 translate-y-3"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        {/* green checkmark */}
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
        </span>
        <div>
          <p className="text-sm font-semibold text-white">Zpráva odeslána!</p>
          <p className="text-xs text-neutral-400">Ozvu se vám do&nbsp;24&nbsp;hodin.</p>
        </div>
        {/* progress bar */}
        <span
          className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-none ${
            toast === "visible" ? "w-0 animate-toast-bar" : "w-full"
          }`}
          style={toast === "visible" ? { animationDuration: "4s", animationFillMode: "forwards" } : undefined}
        />
      </div>

      {/* ── Form ── */}
      <form
        onSubmit={handleSubmit}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10 sm:p-8"
      >
        <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-white to-red-500" />
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Jméno a příjmení *</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Jan Novák"
              className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Telefon *</span>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+420 777 000 000"
              className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">E-mail</span>
            <input
              type="email"
              name="email"
              placeholder="vas@email.cz"
              className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Typ projektu</span>
            <select
              name="type"
              defaultValue=""
              className="mt-2 w-full appearance-none rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-neutral-400 outline-none transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10"
            >
              <option value="" disabled>Vyberte…</option>
              <option value="novy-web">Nový web na míru</option>
              <option value="redesign">Redesign stávajícího webu</option>
              <option value="udrzba">Údržba a úpravy</option>
              <option value="jine">Jiné / nevím přesně</option>
            </select>
          </label>
          <label className="block sm:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Popište, co přesně potřebujete</span>
            <textarea
              name="message"
              placeholder="Pár vět o vašem podnikání a o tom, co byste od webu očekávali…"
              rows={5}
              className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10 resize-none"
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={sending}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-widest text-neutral-950 transition hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {sending ? (
            <>
              <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Odesílám…
            </>
          ) : (
            <>Nezávazně odeslat <span aria-hidden>→</span></>
          )}
        </button>
      </form>
    </>
  );
}
