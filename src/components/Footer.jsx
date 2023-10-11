import { vpv_logo } from "../assets";
import styles from "../style";
import { organizations, socialMedia } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-row md:flex-col justify-start mr-10 items-center">
        <img
          src={vpv_logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px] `}>
          VOLUNTEERS FOR PEACE VIETNAM
        </p>
      </div>
      <div className="flex-[1.5] w-full md:mt-0 mt-10">
        <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            Office Address
          </h4>
          <a className="text-white font-poppins leading-[27px]">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#ffffff" }}
            />{" "}
            No. 72, Pham Than Duat Street, <br />
            Cau Giay District, Ha Noi, Vietnam.
          </a>
          <a
            className="text-white font-poppins leading-[27px]"
            href="tel:+84
            24 3765 2719"
          >
            <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} /> +84
            24 3765 2719
          </a>
          <a
            className="text-white font-poppins leading-[27px]"
            href={"mailto:vpv@vpv.vn"}
          >
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />{" "}
            vpv@vpv.vn
          </a>
        </div>
      </div>
      <div className="flex-row grid lg:grid-cols-2 gap-5 ">
        {organizations.map((organization) => (
          <a key={organization.id} href={organization.url}>
            <img
              src={organization.img}
              alt=""
              className="w-full h-30 sm:h-20 object-cover"
            />
          </a>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-[18px] leading-[27px] text-white text-center">
        2023 VPV. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
