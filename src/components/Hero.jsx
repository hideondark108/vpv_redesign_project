import styles from "../style";
import { vpv_intro } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      {/* Big Text */}
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[40px] text-gray-700 ss:leading-[85px] leading-[60px]">
          Welcome to <br /> Volunteers for
          <span className="text-sky-600"> Peace </span>{" "}
          <br className="sm:block hidden" /> Vietnam
        </h1>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[20px] text-[18px] text-gray-600 ss:leading-[50px] leading-[35px] w-full">
        Together make a better world
      </h1>
      {/* Big Text */}
    </div>
    <div className="xl:px-0 sm:px-3 px-3">
      <img
        src={vpv_intro}
        alt="vpv_intro"
        className="w-[100%] h-[100%] relative z-[5]"
      />
    </div>
  </section>
);

export default Hero;
