import Link from 'next/link'
import ClientImage from '@/components/ClientImage/ClientImage'
import styles from './Footer.module.css'

const serviceLinks = [
  { label: 'Investment Process Consultancy', href: '/services#investment' },
  { label: 'Environmental Engineering', href: '/services#environmental' },
  { label: 'Civil Engineering', href: '/services#civil' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Clientele', href: '/#clientele' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.grid}>
        {/* Col 1 - Brand */}
        <div className={styles.brand}>
          <Link href="/" className={styles.footerLogo}>
            <ClientImage
              src="/images/logos/White.png"
              alt="Lawraman Pvt Ltd"
              width={1800}
              height={550}
            />
          </Link>
          <p className={styles.tagline}>Investment Process Consultancy &amp; Coordination</p>
          <ul className={styles.contactList}>
            <li>
              <a href="tel:0777915787" className={styles.contactItem}>
                0777 915 787
              </a>
            </li>
            <li>
              <a href="mailto:lawramanpvtltd@gmail.com" className={styles.contactItem}>
                lawramanpvtltd@gmail.com
              </a>
            </li>
            <li className={styles.contactItem}>Kurunegala, Sri Lanka</li>
          </ul>
        </div>

        {/* Col 2 - Services */}
        <div className={styles.col}>
          <p className={styles.colLabel}>Services</p>
          <ul className={styles.colLinks}>
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.colLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 - Company */}
        <div className={styles.col}>
          <p className={styles.colLabel}>Company</p>
          <ul className={styles.colLinks}>
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.colLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Lawraman Pvt Ltd. All rights reserved.
        </p>
        <div className={styles.socials}>
          <a
            href="https://www.facebook.com/share/18MDA2JyuZ/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Lawraman on Facebook"
          >
            {/* Facebook icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@Lawramanpvtltd"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Lawraman on YouTube"
          >
            {/* YouTube icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--black)" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
