import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from './styles/Global'

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your Favorite Recipe Collection"
        description="Get all your favorite recipes in one place and so much more because food is always right"
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface and Experience"
        description="Experience combined seamless and fluent UI as you comb through your favorite meals' recipes"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="Built using Expo, this app is ready to be deployed to the App Store and Play Store."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Huge Collection of Recipes"
        description="This app contains a single home screen that leads to a details screen. You can browse through various recipe options on the home screen. Click on any recipe image to get both written and video instructions on how to prepare your favorite meal"
        mockupImg={assets.mockup}
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
