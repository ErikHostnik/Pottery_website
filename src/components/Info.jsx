import ScrollReveal from './ScrollReveal'
import './Info.css'

const title = 'Ročna keramika'

export default function Info() {
  return (
    <ScrollReveal as="section" className="info-section">
      <h2 className="info-title">
        {title.split('').map((char, i) => (
          <span
            key={i}
            className="info-title-char"
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h2>
      <p className="info-description">
        <strong>V delavnici MICA studia nastaja ročno izdelana keramika.</strong>{' '}
        Ročno, počasi in z veseljem do gline. Pri ustvarjanju me navdihujejo narava, njene oblike, barve in nepopolnosti. Vsak kos je nekoliko drugačen in nosi svojo zgodbo.
      </p>
      <p className="info-tagline">
        Odkrijte kolekcije MICA studia
      </p>
    </ScrollReveal>
  )
}
