import ClientImage from '@/components/ClientImage/ClientImage'
import SectionLabel from '@/components/SectionLabel/SectionLabel'
import styles from './Leadership.module.css'

interface LeaderProps {
  name: string
  title: string
  bio: string
  imageSrc: string
  imageAlt: string
}

const leaders: LeaderProps[] = [
  {
    name: 'Lawrance Madapatha',
    title: 'Founder & Chairman',
    bio: "Chartered Civil Engineer with over 25 years of experience at the Board of Investment of Sri Lanka, where he served as Executive Director (Zones). He holds an M.Eng. in Environmental Water Resource Engineering & Management from the University of Moratuwa and a Master's in Business Management from the University of Wayamba, along with an advanced certificate in Contract and Procurement Management from the Construction Industry Development Authority. His extensive expertise spans infrastructure development, investment promotion, and sustainable project management.",
    imageSrc: '/images/team/lawrance-madapatha.png',
    imageAlt: 'Lawrance Madapatha — Founder & Chairman',
  },
  {
    name: 'Kavindu Madapatha',
    title: 'Director',
    bio: 'A Civil Engineer from the University of Peradeniya with expertise in environmental engineering, sustainability, water and wastewater treatment, solid and hazardous waste management, and circular economy projects. He is pursuing a Master\'s in Environmental Engineering and Pollution Control in Australia. While at MAS Fabric Park, he was part of the team that earned the "Best Private Institute that Contributes to the Environment" award at the Presidential Environmental Awards 2024.',
    imageSrc: '/images/team/kavindu-madapatha.png',
    imageAlt: 'Kavindu Madapatha — Director',
  },
  {
    name: 'Madusha Madapatha',
    title: 'Director',
    bio: 'A graduate in Transportation Management and Logistics with professional experience in supply chain and operations. He currently serves as a Supply Planning Executive at Unilever Sri Lanka and has previously worked as a sourcing and supply chain intern at MAS. He brings practical expertise in logistics, supply planning, and operational efficiency, supporting strategic and sustainable business operations.',
    imageSrc: '/images/team/madusha-madapatha.png',
    imageAlt: 'Madusha Madapatha — Director',
  },
]

export default function Leadership() {
  return (
    <section className={styles.section} aria-label="Our leadership">
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="Our Leadership" />
          <h2 className={styles.heading}>The people behind Lawraman</h2>
        </div>
        <div className={styles.grid}>
          {leaders.map((leader) => (
            <article key={leader.name} className={styles.card}>
              <div className={styles.photoWrap}>
                <ClientImage
                  src={leader.imageSrc}
                  alt={leader.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.photo}
                />
              </div>
              <div className={styles.body}>
                <p className={styles.title}>{leader.title}</p>
                <h3 className={styles.name}>{leader.name}</h3>
                <p className={styles.bio}>{leader.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
