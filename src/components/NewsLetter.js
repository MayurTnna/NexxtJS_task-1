import React from "react";
import styles from "../assets/styles/newsLetter.module.scss";
import emoji from "../assets/images/emoji_letter.svg";
import Image from "next/image";
const NewsLetter = () => {
  return (
    <>
      <div className="container">
        <div className={styles.newsletter_main_container}>
          <div className={styles.newsletter_container}>
            <div>
              <div className={styles.main_title}>
                <p className={styles.subscribe}>Subscribe</p>
                <p className={styles.newsletter}>NewsLetter</p>
              </div>
              <div className={styles.travel_title_main}>
                <p className={styles.travel}>Travel</p>
                <p className={styles.travel_description}>
                  Get inspired! Receive travel discounts, tips and behind the
                  scenes stories.
                </p>
              </div>
              <div className={styles.input_main_container}>
                <input
                  type="text"
                  placeholder="your email address"
                  className={styles.input_container}
                />
                <div className={styles.button_container}>
                  <button className={`${styles.input_button}`}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className={`mx-auto px-auto ${styles.emoji_container}`}>
              <Image className="img-fluid mx-auto" src={emoji} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
  s;
};

export default NewsLetter;
