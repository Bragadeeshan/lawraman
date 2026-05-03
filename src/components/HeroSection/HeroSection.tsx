import SectionLabel from '@/components/SectionLabel/SectionLabel'
import BackgroundPaths from '@/components/BackgroundPaths/BackgroundPaths'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  label: string
  title: string
  subtitle?: string
  subtle?: boolean
  // imageSrc?: string — reserved for later media phase
}

export default function HeroSection({ label, title, subtitle }: HeroSectionProps) {
  return (
    <section className={styles.hero} aria-label={label}>
      <BackgroundPaths />
      <div className={styles.content}>
        <SectionLabel text={label} />
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  )
}
