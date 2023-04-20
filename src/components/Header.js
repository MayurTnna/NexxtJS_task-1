import React from "react";
import styles from "../assets/styles/Header.module.scss";
import NavBar from "../components/Navbar";

const Header = () => {
  return (
    <>
      <div className={` ${styles.globe_main}`}>
        <div className={`${styles.globe_container}`}>
          <NavBar />
          <div className={styles.main_help}>
            <p className={styles.help_other}>Helping Others</p>
            <p className={styles.live}>LIVE & TRAVEL</p>
            <p className={styles.special_text}>
              Special offers to suit your plan
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
