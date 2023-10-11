import Button from "./Button";
import styles, { layout } from "../style";
import { useState, useEffect } from "react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = window.innerWidth <= 768;
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const divOffsetTop = document.getElementById("myDiv").offsetTop;
      const windowHeight = window.innerHeight;

      if (
        scrollTop + windowHeight > divOffsetTop &&
        scrollTop < divOffsetTop + windowHeight
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section id="product">
      <div
        className={`${isVisible && !isMobile ? "fade-in-top-to-bottom" : ""}`}
      >
        <h1 className={`${styles.heading2_black} ${styles.flexCenter}`}>
          About Us
        </h1>
      </div>
      <div id="myDiv" className={`${layout.section1} justify-center `}>
        <div className={`${isVisible && !isMobile ? "fade-in-left" : ""} my-1`}>
          <div className="border-b-2 border-sky-500 mb-2 w-[50%]">
            <h2 className={styles.paragraph1}>Intro video</h2>
          </div>
          <div className={layout.sectionImgReverse}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/fGN9k23vbhs?si=BDtLpFuYsD_YzdBx"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div
          className={`${isVisible && !isMobile ? "fade-in-right" : ""} my-1`}
        >
          <div className="border-b-2 border-sky-500 mb-2  w-[50%] ">
            <h2 className={styles.paragraph1}>Our About !</h2>
          </div>
          <div className={layout.sectionInfo}>
            <p className={`${styles.paragraph_sm} max-w-[470px] mt-1`}>
              Volunteers for Peace Vietnam (VPV) is a non-profit, voluntary
              organization founded in 2005 with the aim to promote voluntary
              service as a means of cultural and educational exchange among
              people to generate peace and friendship, and as an approach to
              address social issues. VPV’s vision is a world of peace, where all
              people live together with mutual respect, have equal opportunities
              to develop to their full potential and have respect for the
              environment.
            </p>

            <Button styles="mt-10" />
          </div>
        </div>
      </div>
      <div className="mt-3" />
      <hr style={{ color: "cyan", backgroundColor: "cyan", height: "2px" }} />
      <div className="mb-3" />
    </section>
  );
};

export default AboutUs;
