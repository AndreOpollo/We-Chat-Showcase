import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from './styles/Global'

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Welcome To WeChat"
        description="A modern chat application built with Kotlin and Jetpack Compose, enabling seamless real-time communication."
        mockupImg={assets.homeHero}
        banner="banner"
      />
         <SectionWrapper
        title="User Authentication"
        description="Securely register and log in to connect with your friends. WeChat ensures a safe and private messaging experience."
        mockupImg={assets.section}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Real-Time Messaging"
        description="Send and receive messages instantly. WeChat uses Firebase to provide a fast and efficient chat experience."
        mockupImg={assets.feature}
        reverse
      />
        <SectionWrapper
        title="Built with Jetpack Compose"
        description="WeChat is designed using Jetpack Compose, providing a smooth and modern UI for the best user experience."
        mockupImg={assets.scene}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary text-center banner04">
        <p className={`${styles.blackText} ${styles.pText}`}>
          Made by {' '}
          <span className="bold">Andrew Opollo</span>
        </p>
      </div>
    </>
  );
}

export default App;
