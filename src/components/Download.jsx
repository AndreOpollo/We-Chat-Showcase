import styles from '../styles/Global'
import assets from '../assets'

const Download = () => {
  const handleClick = ()=>{
    window.open = ("https://github.com/AndreOpollo/Movie-App",'_blank')
  }
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.blackText} ${styles.h1Text}`}>Download Source Code</h1>
          <p className={`${styles.blackText} ${styles.pText}`}>Get the full source code for this project on Github.</p>
        </div>
        <a
         className={styles.btnPrimary}
         href="https://github.com/AndreOpollo/We-Chat"
         target="_blank"
         >Source Code</a>

        <div className={styles.flexCenter}>
          <img src={assets.scene} alt="download_png" className="w-[500px]"/>
        </div>
      </div>
    </div>
  )
}

export default Download