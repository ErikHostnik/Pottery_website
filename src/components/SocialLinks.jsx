import './SocialLinks.css'

// TODO: zamenjaj placeholder povezavi s pravima profiloma
const SOCIALS = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/micastudio_pottery/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/MICAstudio.pottery',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
]

export default function SocialLinks({ showLabels = false }) {
  return (
    <div className={`social-links${showLabels ? ' social-links--labeled' : ''}`}>
      {SOCIALS.map(({ name, url, icon }) => (
        <a
          key={name}
          className="social-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
        >
          {icon}
          {showLabels && <span className="social-link-label">{name}</span>}
        </a>
      ))}
    </div>
  )
}
