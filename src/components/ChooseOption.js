import React from "react";
import styles from "../assets/styles/ChooseOption.module.scss";
import Image from "next/image";
import blackPlane from "../assets/images/blackPlane.svg";
import blackCar from "../assets/images/blackCar.svg";
import refresh from "../assets/images/refresh.svg";
import trip from "../assets/images/trip.svg";
import telegram from "../assets/images/telegram.svg";
import plus from "../assets/images/plus.svg";

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
          <div className={styles.booking_section}>
            <div className={styles.from_to_container}>
              <div className={styles.from_to}>
                <p className={styles.fieldset_text}>From - To</p>
                <div className={`mt-3  ${styles.lahore_karachi}`}>
                  <p>Lahore-Karachi</p>
                  <Image src={refresh} />
                </div>
              </div>
            </div>
            <div className={styles.trip_container}>
              <div className={styles.trip}>
                <p className={`${styles.fieldset_trip}`}>Trip</p>
                <div className={`mt-3  ${styles.trip_button}`}>
                  <p>Return</p>
                  <Image className="mt-2" src={trip} />
                </div>
              </div>
            </div>
            <div className={styles.depart_return_container}>
              <div className={styles.depart_return}>
                <p className={styles.fieldset_depart_return}>Depart-Return</p>
                <p className={`mx-3 my-3 ${styles.date}`}>
                  07 Nov 22 - 13 Nov 22
                </p>
              </div>
            </div>
            <div className={styles.passenger_class_container}>
              <div className={styles.passenger_class}>
                <p className={styles.fieldset_passenger_class}>
                  Passenger - Class
                </p>
                <p className={`mx-3 my-3 ${styles.return}`}>
                  1 Passenger, Economy
                </p>
              </div>
            </div>
          </div>
          <div className={styles.promo_flight}>
            <div className={styles.promo_plus}>
              <Image src={plus}/>
              <p className={styles.promo_text}>Add Promo Code</p>
            </div>
            <div className={styles.show_flight}>
              <div className={` ${styles.button_tele}`}>
                <Image className="mt-3" src={telegram}/>
                <p className={` mt-3 ${styles.show_flight_text}`}>Show Flights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseOption;
