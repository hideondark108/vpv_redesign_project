import { news } from "../constants";
import styles from "../style";
import { TERipple } from "tw-elements-react";
import { useState, useEffect } from "react";

const LatestNew = () => {
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
    <section id="features">
      <div
        className={`${
          isVisible && !isMobile ? "fade-in-top-to-bottom" : ""
        } mb-3`}
      >
        <h1 className={`${styles.heading2_black} ${styles.flexCenter}`}>
          Latest News
        </h1>
      </div>

      <div id="myDiv" className={`${styles.flexCenter} flex-wrap w-full`}>
        {news.map((stat) => (
          <div
            key={stat.id}
            className={`${
              isVisible && !isMobile ? "fade-in-bottom-to-top" : ""
            } block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] 
            w-[80%] sm:w-[20%] sm:mx-3 mb-6 sm:mb-0`}
          >
            <TERipple>
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-t-lg object-contain"
                  src={stat.img}
                  alt={stat.id}
                />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
            </TERipple>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-black">
                {stat.title}
              </h5>
              <p className="mb-4 text-base text-black">{stat.content}</p>
              <TERipple>
                <button
                  type="button"
                  className="inline-block rounded bg-blue-gradient px-6 pb-2 pt-2.5 text-[14px] font-poppins font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Read More
                </button>
              </TERipple>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6" />
      <hr style={{ color: "cyan", backgroundColor: "cyan", height: "2px" }} />
      <div className="mb-3" />
    </section>
  );
};

export default LatestNew;
