import SectionLabel from '@/components/SectionLabel/SectionLabel'
import styles from './WhyUs.module.css'

interface Pillar {
  title: string
  description: string
}

interface WhyUsProps {
  label?: string
  heading: string
  pillars: Pillar[]
  quoteText?: string
  background?: 'off-white' | 'white'
}

export default function WhyUs({
  label = 'Why choose us',
  heading,
  pillars,
  quoteText,
  background = 'off-white',
}: WhyUsProps) {
  return (
    <section
      className={`${styles.section} ${background === 'white' ? styles.bgWhite : styles.bgOffWhite}`}
      aria-label={label}
    >
      <div className={`${styles.grid} ${!quoteText ? styles.gridSingle : ''}`}>
        <div className={styles.left}>
          <SectionLabel text={label} />
          <h2 className={styles.heading}>{heading}</h2>
          <ul className={styles.pillars}>
            {pillars.map((pillar) => (
              <li key={pillar.title} className={styles.pillar}>
                <span className={styles.dot} aria-hidden="true" />
                <div>
                  <h4 className={styles.pillarTitle}>{pillar.title}</h4>
                  <p className={styles.pillarDesc}>{pillar.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {quoteText && (
          <div className={styles.right}>
            <div className={styles.quoteBlock}>
              <span className={styles.quoteSymbol} aria-hidden="true">&ldquo;</span>
              <p className={styles.quoteText}>{quoteText}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
