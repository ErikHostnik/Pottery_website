import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { collections } from '../data/products'
import './CollectionGrid.css'

// Sections in order of first appearance; `index` keeps the reveal stagger global
const groupedCollections = collections.reduce((groups, collection, index) => {
  let section = groups.find((g) => g.group === collection.group)
  if (!section) {
    section = { group: collection.group, items: [] }
    groups.push(section)
  }
  section.items.push({ collection, index })
  return groups
}, [])

export default function CollectionGrid() {
  const [revealed, setRevealed] = useState(false)
  const gridRef = useRef(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!revealed) return
    const maxDelay = (collections.length - 1) * 150 + 700
    const timer = setTimeout(() => {
      const cards = gridRef.current?.querySelectorAll('.collection-card')
      cards?.forEach(card => { card.style.transitionDelay = '' })
    }, maxDelay)
    return () => clearTimeout(timer)
  }, [revealed])

  return (
    <section className="collection-grid-section">
      <h2 className="collection-grid-title">
        {'Kolekcije'.split('').map((char, i, arr) => (
          <span
            key={i}
            className="collection-title-char"
            style={{ animationDelay: `${(arr.length - 1 - i) * 0.04}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h2>
      <div ref={gridRef}>
        {groupedCollections.map(({ group, items }) => (
          <div key={group} className="collection-group">
            <h3 className="collection-group-title">{group}</h3>
            <div className="collection-grid">
              {items.map(({ collection, index }) => (
                <Link
                  key={collection.id}
                  to={`/collection/${collection.id}`}
                  className={`collection-card ${revealed ? '' : 'card-hidden'}`}
                  style={{ transitionDelay: revealed ? `${index * 0.15}s` : '0s' }}
                >
                  <div className="collection-image-container">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="collection-image"
                    />
                  </div>
                  <div className="collection-info">
                    <h3 className="collection-name">{collection.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
