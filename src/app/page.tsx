import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel/SectionLabel'
import BackgroundPaths from '@/components/BackgroundPaths/BackgroundPaths'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import WhyUs from '@/components/WhyUs/WhyUs'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import CtaBand from '@/components/CtaBand/CtaBand'
import styles from './page.module.css'

/* ─── Inline SVG icons ──────────────────────────────── */
function InvestmentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
    </svg>
  )
}

function EnvironmentalIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

function CivilIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="1" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

/* ─── Static data ───────────────────────────────────── */
const stats = [
  { value: '15+', label: 'Years of experience' },
  { value: '100+', label: 'Projects coordinated' },
  { value: '3', label: 'Core service disciplines' },
  { value: '25+', label: 'Years combined experience' },
]

const services = [
  {
    number: '01',
    title: 'Investment Process Consultancy & Project Management',
    description:
      'End-to-end guidance through Sri Lanka\'s investment landscape - from feasibility and regulatory navigation to project coordination and approval management.',
    href: '/services#investment',
    icon: <InvestmentIcon />,
  },
  {
    number: '02',
    title: 'Environmental Engineering Consultancy',
    description:
      'Expert assessment and solutions for solid waste disposal, wastewater treatment, and environmental compliance - aligned with Sri Lankan regulatory standards.',
    href: '/services#environmental',
    icon: <EnvironmentalIcon />,
  },
  {
    number: '03',
    title: 'Civil Engineering Project Consultancy',
    description:
      'Technical consultancy for civil infrastructure - supporting manufacturing facilities, commercial developments, and industrial projects from design to delivery.',
    href: '/services#civil',
    icon: <CivilIcon />,
  },
]

const pillars = [
  {
    title: 'Regulatory expertise',
    description:
      'Deep knowledge of Sri Lanka\'s investment and regulatory processes, built through years of active engagement with government agencies.',
  },
  {
    title: 'Technical and environmental know-how',
    description:
      'Civil and environmental engineering expertise that goes beyond advice - we understand the technical realities on the ground.',
  },
  {
    title: 'End-to-end coordination',
    description:
      'Active management across all stakeholders and agencies, so nothing falls through the cracks and timelines are met.',
  },
  {
    title: 'Driven by integrity',
    description:
      'Honest counsel, transparent process, lasting partnerships. We tell you what you need to hear, not what you want to hear.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Initial consultation',
    description:
      'We understand your investment goals, site requirements, and regulatory context.',
  },
  {
    number: '02',
    title: 'Feasibility and planning',
    description:
      'Detailed assessments, technical reports, and clear regulatory roadmaps.',
  },
  {
    number: '03',
    title: 'Coordination and management',
    description:
      'Active project coordination across all stakeholders, agencies, and approvals.',
  },
  {
    number: '04',
    title: 'Approval and beyond',
    description:
      'We see it through to final approval and support post-approval compliance.',
  },
]

/* Placeholder client logo slots - replace with real logos */
const clientSlots = [1, 2, 3, 4, 5, 6]

/* ─── Page ──────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* 1 ─ Hero */}
      <section className={styles.hero} aria-label="Hero">
        <BackgroundPaths />
        <div className={styles.heroContent}>
          <SectionLabel text="Investment Consultancy" />
          <h1 className={styles.heroHeading}>
            Sri Lanka&rsquo;s trusted{' '}
            <em className={styles.heroAccent}>investment</em>{' '}
            process partner
          </h1>
          <p className={styles.heroSub}>
            End-to-end consultancy for investors navigating Sri Lanka&rsquo;s
            regulatory, environmental, and civil landscape - from feasibility
            to final approval.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/services" className={styles.btnPrimary}>
              Explore our services
            </Link>
            <Link href="/contact" className={styles.btnGhost}>
              Get in touch
            </Link>
          </div>
        </div>

        <div className={styles.statsRow} aria-label="Company highlights">
          {stats.map((stat) => (
            <div key={stat.value} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2 ─ Intro band */}
      <section className={styles.introBand} aria-label="Our commitment">
        <p className={styles.introText}>
          We coordinate your investment journey from feasibility to final
          approval - across regulatory, environmental, and civil disciplines.
        </p>
        <p className={styles.introSub}>
          Trusted by manufacturers, developers, and investors across Sri Lanka
          since our founding in Kurunegala.
        </p>
      </section>

      {/* 3 ─ Services */}
      <section className={styles.services} aria-label="Our services">
        <div className={styles.servicesHeader}>
          <div>
            <SectionLabel text="What we do" />
            <h2 className={styles.servicesHeading}>
              Three disciplines,<br />one trusted partner
            </h2>
          </div>
          <p className={styles.servicesSub}>
            Lawraman brings together investment process expertise, environmental
            engineering, and civil consultancy under one roof - so your project
            moves forward without gaps.
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </section>

      {/* 4 ─ Why Choose Us */}
      <WhyUs
        heading="Why investors choose Lawraman"
        pillars={pillars}
        quoteText="We don't simply advise - we coordinate, manage and see your investment through from first consultation to final approval."
      />

      {/* 5 ─ How We Work */}
      <ProcessSteps steps={processSteps} />

      {/* 6 ─ Clientele */}
      <section className={styles.clientele} id="clientele" aria-label="Our clientele">
        <div className={styles.clienteleHeader}>
          <SectionLabel text="Our clients" />
          <h2 className={styles.clienteleHeading}>
            Trusted by investors across Sri Lanka
          </h2>
        </div>
        {/* Logo strip - replace placeholders with <Image> when assets are ready */}
        <div className={styles.logoStrip} aria-label="Client logos">
          {clientSlots.map((n) => (
            <div key={n} className={styles.logoPlaceholder} aria-hidden="true" />
          ))}
        </div>
      </section>

      {/* 7 ─ CTA band */}
      <CtaBand
        title="Ready to move your investment forward?"
        subtitle="Speak with our team and get a clear path through Sri Lanka's investment process."
        buttonText="Get in touch"
        buttonHref="/contact"
      />
    </>
  )
}
