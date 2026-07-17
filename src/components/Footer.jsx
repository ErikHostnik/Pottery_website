import ScrollReveal from './ScrollReveal'
import SocialLinks from './SocialLinks'
import './Footer.css'

export default function Footer() {
  return (
    <ScrollReveal as="footer" className="footer">
      <div className="footer-social">
        <SocialLinks />
      </div>
      <p className="footer-copyright">
        © {new Date().getFullYear()} Mica Studio. All rights reserved.
      </p>
      <p className="footer-tagline">
        Handcrafted with love
      </p>
    </ScrollReveal>
  )
}
