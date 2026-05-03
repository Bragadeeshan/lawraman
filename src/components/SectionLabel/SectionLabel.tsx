import styles from './SectionLabel.module.css'

interface SectionLabelProps {
  text: string
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return <p className={styles.label}>{text}</p>
}
