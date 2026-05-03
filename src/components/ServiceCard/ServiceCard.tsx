import Link from 'next/link'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  number: string
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

export default function ServiceCard({
  number,
  title,
  description,
  href,
  icon,
}: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.number}>{number}</span>
      <div className={styles.iconWrap}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link href={href} className={styles.link}>
        Learn more
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </article>
  )
}
