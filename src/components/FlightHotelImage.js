import React from "react";
import styles from "../assets/styles/flightHotel.module.scss";
import telegram from "../assets/images/telegram.svg";
import Image from "next/image";

const FlightHotelImage = () => {
  return (
    <div className={styles.flight_hotel_main}>
      <div className="row gy-5 gx-3 ">
        <div
          className={` col-xl-6 col-lg-12 mx-auto  ${styles.flight_container}`}
        >
          <div className={styles.flight_main_text}>
            <p className={styles.flight_text}>Flights</p>
            <p className={styles.flight_description}>
              Search Flights & Places Hire to our most popular destinations
            </p>
            <div className={styles.show_flight}>
              <div className={` ${styles.button_tele}`}>
                <Image className="mt-3" src={telegram} />
                <p className={` mt-3 ${styles.show_flight_text}`}>
                  Show Flights
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` col-xl-6 col-lg-12 mx-auto ${styles.hotel_container}`}
        >
          <div className={styles.flight_main_text}>
            <p className={styles.flight_text}>Hotels</p>
            <p className={styles.flight_description}>
              Search hotels & Places Hire to our most popular destinations
            </p>
            <div className={styles.show_flight}>
              <div className={` ${styles.button_tele}`}>
                <Image className="mt-3" src={telegram} />
                <p className={` mt-3 ${styles.show_flight_text}`}>
                  Show Flights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightHotelImage;
