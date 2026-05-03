import HeroSection from '@/components/HeroSection/HeroSection'
import SectionLabel from '@/components/SectionLabel/SectionLabel'
import ContactForm from '@/components/ContactForm/ContactForm'
import styles from './page.module.css'

const contactDetails = [
  {
    label: 'Phone',
    value: '0777 915 787',
    href: 'tel:0777915787',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.4a16 16 0 0 0 5.69 5.69l.98-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'lawramanpvtltd@gmail.com',
    href: 'mailto:lawramanpvtltd@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Kurunegala, Sri Lanka',
    href: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/18MDA2JyuZ/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@Lawramanpvtltd',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      {/* 1 ─ Page hero */}
      <HeroSection
        label="Contact us"
        title="Get in touch."
        subtitle="Have a project in mind? Reach out and we'll help you understand your next steps."
        subtle
      />

      {/* 2 ─ Contact section */}
      <section className={styles.contact} aria-label="Contact information and form">
        <div className={styles.contactGrid}>

          {/* Left — form */}
          <div className={styles.formCol}>
            <SectionLabel text="Send us a message" />
            <h2 className={styles.formHeading}>Let&rsquo;s talk about your project</h2>
            <p className={styles.formIntro}>
              Fill in the form below and a member of our team will respond
              within one business day.
            </p>
            <ContactForm />
          </div>

          {/* Right — contact details */}
          <div className={styles.detailsCol}>
            <SectionLabel text="Contact details" />
            <h2 className={styles.detailsHeading}>Reach us directly</h2>

            <ul className={styles.detailsList}>
              {contactDetails.map((item) => (
                <li key={item.label} className={styles.detailItem}>
                  <span className={styles.detailIcon}>{item.icon}</span>
                  <div>
                    <p className={styles.detailLabel}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className={styles.detailValue}>
                        {item.value}
                      </a>
                    ) : (
                      <p className={styles.detailValue}>{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.socialBlock}>
              <p className={styles.socialLabel}>Follow us</p>
              <div className={styles.socialLinks}>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={`Lawraman on ${link.label}`}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ─ Google Maps embed */}
      <section className={styles.mapSection} aria-label="Our location">
        {/*
          Replace the placeholder below with the Google Maps iframe:
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lawraman Pvt Ltd — Kurunegala, Sri Lanka"
          />
        */}
        <div className={styles.mapPlaceholder} aria-hidden="true">
          <span className={styles.mapPlaceholderLabel}>
            Google Maps — Kurunegala, Sri Lanka
          </span>
        </div>
      </section>
    </>
  )
}
