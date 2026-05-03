import SectionLabel from '@/components/SectionLabel/SectionLabel'
import styles from './ProcessSteps.module.css'

interface Step {
  number: string
  title: string
  description: string
}

interface ProcessStepsProps {
  label?: string
  heading?: string
  steps: Step[]
}

export default function ProcessSteps({
  label = 'How we work',
  heading = 'Our process, step by step',
  steps,
}: ProcessStepsProps) {
  return (
    <section className={styles.section} aria-label={label}>
      <div className={styles.header}>
        <SectionLabel text={label} />
        <h2 className={styles.heading}>{heading}</h2>
      </div>

      <div className={styles.stepsGrid}>
        {steps.map((step, i) => (
          <div key={step.number} className={styles.step}>
            <span className={styles.number}>{step.number}</span>
            <div className={styles.connector}>
              <span className={styles.dot} />
              {i < steps.length - 1 && (
                <span className={styles.line} aria-hidden="true" />
              )}
            </div>
            <h4 className={styles.title}>{step.title}</h4>
            <p className={styles.description}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
