import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from './styles/Global'

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your number one place for movies and tv shows"
        description="Browse for popular and trending movies with just a single click of the button"
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface and Experience"
        description="Experience combined seamless and fluent UI as you browse through your favorite TV shows."
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
        title="Huge Database of Popular Movies"
        description="This app contains a single home screen that leads to the details screen that contains movie details such as genre, cast members, similar movies, ratings and so much more. You can also such for a movie of your choice by clicking on the search icon."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary text-center banner04">
        <p className={`${styles.whiteText} ${styles.pText}`}>
          Made by {' '}
          <span className="bold">Andrew Opollo</span>
        </p>
      </div>
    </>
  );
}

export default App;
