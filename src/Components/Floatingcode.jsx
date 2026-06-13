import { useEffect, useRef } from 'react'
import styles from "../Styles/Floatingcode.module.css"

const SYMBOLS = ['</>', '{}', '//', '=>', '&&', '||', '??', '...', '()', '[]', '!=', '++']

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

export default function FloatingCode() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particles = []

    for (let i = 0; i < 18; i++) {
      const span = document.createElement('span')
      span.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
      span.className = styles.particle

      const size = randomBetween(11, 18)
      const x = randomBetween(0, 100)
      const y = randomBetween(0, 100)
      const duration = randomBetween(18, 35)
      const delay = randomBetween(0, 15)
      const opacity = randomBetween(0.04, 0.13)

      span.style.cssText = `
        left: ${x}%;
        top: ${y}%;
        font-size: ${size}px;
        opacity: ${opacity};
        animation-duration: ${duration}s;
        animation-delay: -${delay}s;
      `
      container.appendChild(span)
      particles.push(span)
    }

    return () => particles.forEach((p) => p.remove())
  }, [])

  return <div ref={containerRef} className={styles.container} aria-hidden="true" />
}