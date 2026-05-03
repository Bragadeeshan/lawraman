import Link from 'next/link'
import styles from './CtaBand.module.css'

interface CtaBandProps {
  title: string
  subtitle?: string
  buttonText: string
  buttonHref: string
}

export default function CtaBand({
  title,
  subtitle,
  buttonText,
  buttonHref,
}: CtaBandProps) {
  return (
    <section className={styles.band} aria-label="Call to action">
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <Link href={buttonHref} className={styles.button}>
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
