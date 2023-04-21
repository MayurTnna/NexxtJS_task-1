import React from "react";
import styles from "../assets/styles/destination.module.scss";
import destination1 from "../assets/images/destination1.svg";
import destination2 from "../assets/images/destination2.svg";
import destination3 from "../assets/images/destination3.svg";
import destination4 from "../assets/images/destination4.svg";
import destination5 from "../assets/images/destination5.svg";
import destination6 from "../assets/images/destination6.svg";
import destination7 from "../assets/images/destination7.svg";
import destination8 from "../assets/images/destination8.svg";
import destination9 from "../assets/images/destination9.svg";
import Image from "next/image";
import dot from "../assets/images/dot.svg";

const Destination = () => {
  return (
    <>
      <div className="container">
        <div className={styles.main_container}>
          <div className={styles.header_section}>
            <div className={styles.left_title}>
              <p className={styles.title1}>Plan your perfect trip</p>
              <p className={styles.title2}>
                Search Flights & Places Hire to our most popular destinations
              </p>
            </div>
            <div className={styles.right_button_main}>
              <p className={`text-center mt-2 ${styles.see_more_text}`}>
                See more places
              </p>
            </div>
          </div>
          <div className={styles.destination_main}>
            <div className="row  gy-4">
              <div className="col  col-lg-4 col-sm-12 col-md-6 col-sm-12">
                <div className={styles.card_container}>
                  <div className={styles.image_text}>
                    <Image
                      className={styles.image_position}
                      src={destination1}
                      alt="destination1"
                    />
                    <div className={styles.text_container}>
                      <p className={styles.destination_city_title}>
                        Istanbul, Turkey
                      </p>
                      <p className={styles.vehicles_option}>
                        {" "}
                        Flights <Image src={dot} /> Hotels <Image src={dot} />{" "}
                        Resorts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4 col-sm-12 col-md-6 col-sm-12">
                <div className={styles.card_container}>
                  <div className={styles.image_text}>
                    <Image
                      className={styles.image_position}
                      src={destination2}
                      alt="destination2"
                    />
                    <div className={styles.text_container}>
                      <p className={styles.destination_city_title}>
                        Sydney, Australia
                      </p>
                      <p className={styles.vehicles_option}>
                        {" "}
                        Flights <Image src={dot} /> Hotels <Image src={dot} />{" "}
                        Resorts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4 col-sm-12 col-md-6 col-sm-12">
                <div className={styles.card_container}>
                  <div className={styles.image_text}>
                    <Image
                      className={styles.image_position}
                      src={destination3}
                      alt="destination3"
                    />
                    <div className={styles.text_container}>
                      <p className={styles.destination_city_title}>
                        Baku, Azerbaijan
                      </p>
                      <p className={styles.vehicles_option}>
                        {" "}
                        Flights <Image src={dot} /> Hotels <Image src={dot} />{" "}
                        Resorts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4 col-sm-12 col-md-6 col-sm-12">
                <div className={styles.card_container}>
                  <div className={styles.image_text}>
                    <Image
                      className={styles.image_position}
                      src={destination4}
                      alt="destination4"
                    />
                    <div className={styles.text_container}>
                      <p className={styles.destination_city_title}>
                        Malé, Maldives
                      </p>
                      <p className={styles.vehicles_option}>
                        {" "}
                        Flights <Image src={dot} /> Hotels <Image src={dot} />{" "}
                        Resorts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4 col-sm-12 col-md-6 col-sm-12">
                <div className={styles.card_container}>
                  <div className={styles.image_text}>
                    <Image
                      className={styles.image_position}
                      src={destination5}
                      alt="destination5"
                    />
                    <div className={styles.text_container}>
                      <p className={styles.destination_city_title}>
                        Paris, France
                      </p>
                      <p className={styles.vehicles_option}>
                        {" "}
                        Flights <Image src={dot} /> Hotels <Image src={dot} />{" "}
                        Resorts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4 col-sm-12 col-md-6 col-sm-12">
                <div className={styles.card_container}>
                  <div className={styles.image_text}>
                    <Image
                      className={styles.image_position}
                      src={destination6}
                      alt="destination6"
                    />
                    <div className={styles.text_container}>
                      <p className={styles.destination_city_title}>
                        New York, US
                      </p>
                      <p className={styles.vehicles_option}>
                        {" "}
                        Flights <Image src={dot} /> Hotels <Image src={dot} />{" "}
                        Resorts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4 col-sm-12 col-md-6 col-sm-12">
                <div className={styles.card_container}>
                  <div className={styles.image_text}>
                    <Image
                      className={styles.image_position}
                      src={destination7}
                      alt="destination7"
                    />
                    <div className={styles.text_container}>
                      <p className={styles.destination_city_title}>
                        London, UK
                      </p>
                      <p className={styles.vehicles_option}>
                        {" "}
                        Flights <Image src={dot} /> Hotels <Image src={dot} />{" "}
                        Resorts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4 col-sm-12 col-md-6 col-sm-12">
                <div className={styles.card_container}>
                  <div className={styles.image_text}>
                    <Image
                      className={styles.image_position}
                      src={destination8}
                      alt="destination8"
                    />
                    <div className={styles.text_container}>
                      <p className={styles.destination_city_title}>
                        Tokyo, Japan
                      </p>
                      <p className={styles.vehicles_option}>
                        {" "}
                        Flights <Image src={dot} /> Hotels <Image src={dot} />{" "}
                        Resorts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4 col-sm-12 col-md-6 ">
                <div className={styles.card_container}>
                  <div className={styles.image_text}>
                    <Image
                      className={styles.image_position}
                      src={destination9}
                      alt="destination9"
                    />
                    <div className={styles.text_container}>
                      <p className={styles.destination_city_title}>
                        Dubai, UAE
                      </p>
                      <p className={styles.vehicles_option}>
                        {" "}
                        Flights <Image src={dot} /> Hotels <Image src={dot} />{" "}
                        Resorts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
