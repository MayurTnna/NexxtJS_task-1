import React from "react";
import styles from "../assets/styles/ChooseOption.module.scss";
import Image from "next/image";
import blackPlane from "../assets/images/blackPlane.svg";
import blackCar from "../assets/images/blackCar.svg";
import refresh from "../assets/images/refresh.svg";

const ChooseOption = () => {
  return (
    <>
      <div className="container">
        <div className={styles.flight_stay_container}>
          <div className={styles.flight_stay}>
            <div className={styles.flight}>
              <Image src={blackPlane} />
              <p className={styles.flight_text}>Flights</p>
            </div>
            <div className={`mb-3 ${styles.flight_stay_border}`}></div>
            <div className={styles.stays}>
              <Image src={blackCar} />
              <p className={styles.stays_text}>Stays</p>
            </div>
          </div>
          <div className={styles.from_to_container}>
            <div className={styles.from_to}>
              <p className={styles.fieldset_text}>From - To</p>
              <div className={styles.lahore_karachi}>
                <p>Lahore-Karachi</p>
                <Image src={refresh} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseOption;
