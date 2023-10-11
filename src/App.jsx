/* eslint-disable no-unused-vars */
import styles from "./style";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

import {
  Navbar,
  Hero,
  LatestNew,
  AboutUs,
  Galleries,
  Subscribe,
  Footer,
} from "./components";

const App = () => (
  <div className="bg-sky-700 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.navWidth} `}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
        <div />
        <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient" />
        <div />
        <Hero />
      </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <hr style={{ color: "cyan", backgroundColor: "cyan", height: "2px" }} />
      <div className={`${styles.boxWidth}`}>
        <AboutUs />
        <LatestNew />
        <Galleries />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Subscribe />
      </div>
    </div>
    <div className={`bg-sky-700 ${styles.paddingX} ${styles.flexStart}`}>
      <hr style={{ color: "cyan", backgroundColor: "cyan", height: "2px" }} />
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
