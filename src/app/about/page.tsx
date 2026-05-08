import HeroSection from '@/components/HeroSection/HeroSection'
import SectionLabel from '@/components/SectionLabel/SectionLabel'
import Leadership from '@/components/Leadership/Leadership'
import WhyUs from '@/components/WhyUs/WhyUs'
import CtaBand from '@/components/CtaBand/CtaBand'
import styles from './page.module.css'

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

const values = [
  {
    number: '01',
    title: 'Our mission',
    description:
      'To coordinate Sri Lanka\'s investment process with expertise, integrity, and end-to-end accountability - turning complex regulatory landscapes into clear paths forward.',
  },
  {
    number: '02',
    title: 'Our vision',
    description:
      'To be Sri Lanka\'s most trusted investment process partner - known for transparent counsel, technical depth, and measurable outcomes for every client.',
  },
  {
    number: '03',
    title: 'Our values',
    description:
      'Integrity, expertise, transparency, and partnership. These aren\'t aspirations - they\'re the standards every member of our team is held to on every engagement.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* 1 ─ Page hero */}
      <HeroSection
        label="About us"
        title="Driven by expertise. Guided by integrity."
        subtitle="Lawraman Pvt Ltd is Sri Lanka's investment process consultancy - coordinating regulatory, environmental, and civil expertise under one roof."
        subtle
      />

      {/* 2 ─ Company story */}
      <section className={styles.story} aria-label="Our story">
        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <SectionLabel text="Our story" />
            <h2 className={styles.storyHeading}>
              Coordinating investment from the ground up
            </h2>
            <p className={styles.storyBody}>
              Lawraman Pvt Ltd was established to bridge a critical gap in Sri Lanka&rsquo;s
              investment landscape - the coordination gap. Too many promising investments
              stall not because of a lack of capital or intent, but because of the
              complexity of navigating regulatory processes, environmental requirements,
              and civil approvals simultaneously.
            </p>
            <p className={styles.storyBody}>
              Based in Kurunegala, we work with investors across Sri Lanka&rsquo;s key growth
              sectors: manufacturing, commercial development, and industrial projects.
              Our team brings together investment process expertise, environmental
              engineering, and civil consultancy - so your investment moves forward
              without being held back by process.
            </p>
            <p className={styles.storyBody}>
              What distinguishes us is not just what we know, but how we work. We
              don&rsquo;t hand over a report and step back. We coordinate, manage, and stay
              accountable through every stage - from the first feasibility assessment
              to the final approval.
            </p>
          </div>

          {/* Image placeholder - replace with <Image> when asset is ready */}
          <div className={styles.storyImage} aria-hidden="true">
            <span className={styles.placeholderLabel}>
              Company / team photo
            </span>
          </div>
        </div>
      </section>

      {/* 3 ─ Leadership */}
      <Leadership />

      {/* 5 ─ Mission and values */}
      <section className={styles.values} aria-label="Mission and values">
        <div className={styles.valuesHeader}>
          <SectionLabel text="Mission &amp; values" />
          <h2 className={styles.valuesHeading}>
            What we stand for
          </h2>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((v) => (
            <div key={v.number} className={styles.valueCard}>
              <span className={styles.valueNumber}>{v.number}</span>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6 ─ Why Lawraman */}
      <WhyUs
        label="Why Lawraman"
        heading="What makes us different"
        pillars={pillars}
        background="white"
      />

      {/* 7 ─ CTA band */}
      <CtaBand
        title="Ready to start your investment journey?"
        subtitle="Speak with our team and get a clear path through Sri Lanka's investment process."
        buttonText="Get in touch"
        buttonHref="/contact"
      />
    </>
  )
}
