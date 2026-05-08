import HeroSection from '@/components/HeroSection/HeroSection'
import SectionLabel from '@/components/SectionLabel/SectionLabel'
import CtaBand from '@/components/CtaBand/CtaBand'
import styles from './page.module.css'

const services = [
  {
    id: 'investment',
    number: '01',
    label: 'Investment Process Consultancy',
    title: 'Investment Process Consultancy & Project Management',
    description:
      'End-to-end guidance through Sri Lanka\'s investment landscape - from feasibility and regulatory navigation to project coordination and approval management. We act as your dedicated process partner, bridging the gap between your investment goals and the regulatory reality on the ground.',
    inclusions: [
      'Investment feasibility assessments and site evaluations',
      'Regulatory pathway mapping and approvals management',
      'BOI and government agency coordination',
      'Environmental clearance facilitation',
      'Project timeline and stakeholder management',
      'Post-approval compliance support and advisory',
    ],
    imageAlt: 'Investment process consultancy - placeholder',
    bg: 'white' as const,
    imageRight: true,
  },
  {
    id: 'environmental',
    number: '02',
    label: 'Environmental Engineering',
    title: 'Environmental Engineering Consultancy',
    description:
      'Expert assessment and solutions for solid waste disposal, wastewater treatment, and environmental compliance - aligned with Sri Lankan regulatory standards. We combine technical engineering knowledge with regulatory expertise to keep your project on the right side of Sri Lanka\'s environmental requirements.',
    inclusions: [
      'Environmental Impact Assessments (EIA)',
      'Solid waste disposal design and management',
      'Wastewater treatment assessments and solutions',
      'Environmental compliance reporting and documentation',
      'Ongoing environmental monitoring and advisory',
      'Regulatory liaison with environmental authorities',
    ],
    imageAlt: 'Environmental engineering consultancy - placeholder',
    bg: 'off-white' as const,
    imageRight: false,
  },
  {
    id: 'civil',
    number: '03',
    label: 'Civil Engineering Consultancy',
    title: 'Civil Engineering Project Consultancy',
    description:
      'Technical consultancy for civil infrastructure - supporting manufacturing facilities, commercial developments, and industrial projects from design to delivery. We provide the engineering expertise and coordination needed to move civil projects forward through Sri Lanka\'s approval and construction ecosystem.',
    inclusions: [
      'Manufacturing facility design consultancy',
      'Commercial and industrial site assessments',
      'Civil infrastructure planning and coordination',
      'Technical reporting for regulatory submissions',
      'Construction oversight and quality advisory',
      'Project delivery coordination and management',
    ],
    imageAlt: 'Civil engineering project consultancy - placeholder',
    bg: 'green-light' as const,
    imageRight: true,
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* 1 ─ Page hero */}
      <HeroSection
        label="Our services"
        title="Three disciplines, one trusted partner."
        subtitle="Investment process consultancy, environmental engineering, and civil project consultancy - coordinated under one roof."
        subtle
      />

      {/* 2–4 ─ Service sections */}
      {services.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className={`${styles.serviceSection} ${styles[`bg${capitalize(service.bg)}`]}`}
          aria-label={service.title}
        >
          <div className={`${styles.serviceGrid} ${!service.imageRight ? styles.serviceGridAlt : ''}`}>
            {/* Text column */}
            <div className={styles.serviceContent}>
              <SectionLabel text={`${service.number} - ${service.label}`} />
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDesc}>{service.description}</p>

              <ul className={styles.inclusionsList}>
                {service.inclusions.map((item) => (
                  <li key={item} className={styles.inclusionsItem}>
                    <span className={styles.inclusionDot} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image placeholder - replace with <Image> when asset is ready */}
            <div className={styles.serviceImage} aria-hidden="true">
              <span className={styles.placeholderLabel}>{service.imageAlt}</span>
            </div>
          </div>
        </section>
      ))}

      {/* 5 ─ CTA band */}
      <CtaBand
        title="Ready to discuss your project?"
        subtitle="Tell us about your investment and we'll map a clear path forward."
        buttonText="Get in touch"
        buttonHref="/contact"
      />
    </>
  )
}

function capitalize(str: string) {
  return str
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('')
}
