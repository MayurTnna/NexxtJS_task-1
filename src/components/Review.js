import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styles from "../assets/styles/review.module.scss";
import star from "../assets/images/star.svg";
import Image from "next/image";
import google from "../assets/images/google.svg";
import review1 from "../assets/images/review1.svg";
import review2 from "../assets/images/review2.svg";
import review3 from "../assets/images/review3.svg";

const Review = () => {
  return (
    <>
      <div className="container">
        <div className={styles.review_main}>
          <div className={styles.header_section}>
            <div className={styles.left_title}>
              <p className={styles.title1}>Review</p>
              <p className={styles.title2}>
                What people says about Golobe facilities
              </p>
            </div>
            <div className={styles.right_button_main}>
              <p className={`text-center mt-2 ${styles.see_more_text}`}>
                See all
              </p>
            </div>
          </div>
          <Swiper
            
            spaceBetween={50}
            slidesPerView={2}
            autoplay={{
              delay: 5000,
            }}
            pagination={{
              clickable: true,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Pagination]}
             className="mySwiper" 
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1920: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide className={styles.slider_main}>
              <div className={styles.card_container}>
                <p className={styles.card_title}>
                  “A real sense of community, nurtured”
                </p>
                <p className={styles.second_card_title}>
                  Really appreciate the help and support from the staff during
                  these tough times. Shoutout to Katie for helping me always,
                  even when I was out of the country. And always available when
                  needed.
                </p>
                <p className={styles.view_more}>View more</p>
                <div className={styles.star_container}>
                  <Image className={styles.star_space} src={star} />
                  <Image className={styles.star_space} src={star} />
                  <Image className={styles.star_space} src={star} />
                  <Image className={styles.star_space} src={star} />
                  <Image className={styles.star_space} src={star} />
                </div>
                <p className={styles.olga}>Olga</p>
                <p className={styles.weave}>Weave Studios – Kai Tak</p>
                <div className={styles.google_container}>
                  <Image className={styles.image} src={google} />
                  <p className={styles.google_text}>Google</p>
                </div>
                <div className={styles.review_image}>
                  <Image src={review1} />
                </div>
              </div>
            </SwiperSlide  >
            <SwiperSlide className={styles.slider_main}>
              <div className={styles.card_container}>
                <p className={styles.card_title}>
                  “The facilities are superb. Clean, slick, bright.”
                </p>
                <p className={styles.second_card_title}>
                  “A real sense of community, nurtured”Really appreciate the
                  help and support from the staff during these tough times.
                  Shoutout to Katie for helping me always, even when I was out
                  of the country. And always available when needed.View
                  moreOlgaWeave Studios – Kai TakGoogle
                </p>
                <p className={styles.view_more}>View more</p>
                <div className={styles.star_container}>
                  <Image className={styles.star_space} src={star} />
                  <Image className={styles.star_space} src={star} />
                  <Image className={styles.star_space} src={star} />
                  <Image className={styles.star_space} src={star} />
                  <Image className={styles.star_space} src={star} />
                </div>
                <p className={styles.olga}>Thomas</p>
                <p className={styles.weave}>Weave Studios – Olympic</p>
                <div className={styles.google_container}>
                  <Image className={styles.image} src={google} />
                  <p className={styles.google_text}>Google</p>
                </div>
                <div className={styles.review_image}>
                  <Image src={review2} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slider_main}>
              <div className={styles.card_container}>
                <p className={styles.card_title}>
                  “A real sense of community, nurtured”
                </p>
                <p className={styles.second_card_title}>
                  Really appreciate the help and support from the staff during
                  these tough times. Shoutout to Katie for helping me always,
                  even when I was out of the country. And always available when
                  needed.
                </p>
                <p className={styles.view_more}>View more</p>
                <div className={styles.star_container}>
                  <Image className={styles.star_space} src={star} />
                  <Image className={styles.star_space} src={star} />
                  <Image className={styles.star_space} src={star} />
                  <Image className={styles.star_space} src={star} />
                  <Image className={styles.star_space} src={star} />
                </div>
                <p className={styles.olga}>Elliot</p>
                <p className={styles.weave}>Weave Studios – Kai Tak</p>
                <div className={styles.google_container}>
                  <Image className={styles.image} src={google} />
                  <p className={styles.google_text}>Google</p>
                </div>
                <div className={styles.review_image}>
                  <Image src={review3} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Review;
