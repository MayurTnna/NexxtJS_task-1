import React from "react";
import styles from "../assets/styles/footer.module.scss";
import Image from "next/image";
import golobe_footer from "../assets/images/footer_golobe.svg";
import footer_facebook from "../assets/images/footer_facebook.svg";
import footer_instagram from "../assets/images/footer_instagram.svg";
import footer_twitter from "../assets/images/footer_twitter.svg";
import footer_youtube from "../assets/images/footer_youtube.svg";
const Footer = () => {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={`container-fluid ${styles.footer_color_container}`}>
          <div className={styles.footer_item_container}>
            <div className="row mx-auto text-center">
              <div className=" my-4 col-lg-3 col-md-6">
                <Image src={golobe_footer} />
                <div className={styles.icons_container}>
                  <Image src={footer_facebook} />
                  &nbsp; &nbsp;
                  <Image src={footer_twitter} />
                  &nbsp; &nbsp;
                  <Image src={footer_youtube} />
                  &nbsp; &nbsp;
                  <Image src={footer_instagram} />
                </div>
              </div>

              <div className=" my-4 col-lg-3 col-md-6">
                <div className={styles.destination}>
                  <p className={styles.footer_header}>Our Destinations</p>
                  <p className={styles.footer_header_description}>Canada</p>
                  <p className={styles.footer_header_description}>Alaksa</p>
                  <p className={styles.footer_header_description}>France</p>
                  <p className={styles.footer_header_description}>Iceland</p>
                </div>
              </div>
              <div className=" my-4 col-lg-2 col-md-6">
                <div className={styles.destination}>
                  <p className={styles.footer_header}>Our Destinations</p>
                  <p className={styles.footer_header_description}>Canada</p>
                  <p className={styles.footer_header_description}>Alaksa</p>
                  <p className={styles.footer_header_description}>France</p>
                  <p className={styles.footer_header_description}>Iceland</p>
                </div>
              </div>
              <div className=" my-4 col-lg-2 col-md-6">
                <div className={styles.destination}>
                  <p className={styles.footer_header}>Our Destinations</p>
                  <p className={styles.footer_header_description}>Canada</p>
                  <p className={styles.footer_header_description}>Alaksa</p>
                  <p className={styles.footer_header_description}>France</p>
                  <p className={styles.footer_header_description}>Iceland</p>
                </div>
              </div>
              <div className=" my-4 col-lg-2 col-md-6">
                <div className={styles.destination}>
                  <p className={styles.footer_header}>Our Destinations</p>
                  <p className={styles.footer_header_description}>Canada</p>
                  <p className={styles.footer_header_description}>Alaksa</p>
                  <p className={styles.footer_header_description}>France</p>
                  <p className={styles.footer_header_description}>Iceland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
