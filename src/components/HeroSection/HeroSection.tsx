import SectionLabel from '@/components/SectionLabel/SectionLabel'
import BackgroundPaths from '@/components/BackgroundPaths/BackgroundPaths'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  label: string
  title: string
  subtitle?: string
  subtle?: boolean
  // imageSrc?: string - reserved for later media phase
}

const infoPoints = [
  'Strategic location in South Asia',
  'BOI facilitated investment incentives',
  'Skilled and cost-effective workforce',
  'Growing infrastructure and free trade zones',
]

export default function HeroSection({ label, title, subtitle }: HeroSectionProps) {
  return (
    <section className={styles.hero} aria-label={label}>
      <BackgroundPaths />
      <div className={styles.heroGrid}>
        <div className={styles.content}>
          <SectionLabel text={label} />
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        <div className={styles.infoCard} aria-label="Why investors choose Sri Lanka">
          <h3 className={styles.infoCardHeading}>Why investors choose Sri Lanka</h3>
          <ul className={styles.infoCardList}>
            {infoPoints.map((point) => (
              <li key={point} className={styles.infoCardItem}>{point}</li>
            ))}
          </ul>
          <div className={styles.infoCardDivider} aria-hidden="true" />
          <p className={styles.infoCardTag}>Lawraman guides you through every step</p>
        </div>
      </div>
    </section>
  )
}
