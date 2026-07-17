// Vrednosti se berejo iz okoljskih spremenljivk (lokalno: .env.local, na Vercelu:
// Project Settings -> Environment Variables). Vse morajo imeti predpono VITE_.
export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  console.error(
    'EmailJS ni konfiguriran: manjkajo VITE_EMAILJS_* okoljske spremenljivke. Kontaktni obrazec ne bo deloval.',
  )
}
