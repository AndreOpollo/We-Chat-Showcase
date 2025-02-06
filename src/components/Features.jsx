import styles from '../styles/Global'
import assets from '../assets'

const FeatureCard = ({ iconUrl, iconText}) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.blackText} ${styles.h1Text}`}>Technologies</h1>
          <p className={`${styles.blackText} ${styles.pText}`}>Developed using Kotlin, JetPack Compose and Firebase</p>
        </div>
        <div className={styles.flexWrap}>
          <FeatureCard
            iconUrl={assets.android}
            iconText='Android'
          />
          <FeatureCard
            iconUrl={assets.kotlin}
            iconText='Kotlin'
          />
           <FeatureCard
            iconUrl={assets.firebase}
            iconText='Firebase'
          />
        </div>
      </div>
    </div>
  )
}

export default Features