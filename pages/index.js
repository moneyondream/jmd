import { Button, IconButton } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dummyImage from "/public/image.png";
import { Fade, Zoom } from "react-reveal";
import useWindowSize from "../hooks/window";
import { BsArrowDown, BsFillCloudDownloadFill } from "react-icons/bs";
import { useRef } from "react";
import target from "/public/icons/target.png";
import story from "/public/icons/story.png";
import company from "/public/icons/company.png";
import finance from "/public/icons/finance.png";
import customer from "/public/icons/customer.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

export default function Home() {
  const windowSize = useWindowSize();

  const myRef = useRef(null);
  const contentRef = useRef(null);

  const handleScroll = (data) => {
    if (data == "contentRef") {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    } else if (data == "myRef") {
      myRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  const slides = [];

  for (let i = 1; i < 30; i++) {
    slides.push({ img: `/slider/1 (${i}).png` });
  }

  return (
    <>
      <div className="homeContainer">
        <div className="home">
          <div className="container">
            <Fade down>
              <div>
                <div className="heading">
                  <p>Become A Finance Advisor</p>
                  <p>Earn &#8377;50,000 to &#8377;1,00,000 Every Month </p>
                </div>
                <div className="detail">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus mattis ligula eget nulla euismod maximus.
                    Vestibulum ac accumsan tortor, nec lobortis arcu. Quisque
                    ultrices tincidunt lorem sed volutpat. Aliquam erat
                    volutpat. Fusce vulputate nulla vitae sollicitudin
                    consectetur. Cras aliquam augue a ante luctus tempus.
                    Vestibulum placerat dapibus nibh, id mattis erat mattis vel.
                    Nam sit amet finibus nisi.
                  </p>

                  <div className="playContainer">
                    <Image
                      src="/icons/play.png"
                      width={40}
                      height={40}
                      alt="play store"
                    />
                    <Button>Download Now</Button>
                  </div>
                </div>

                {windowSize.width <= 768 && (
                  <div className="button">
                    <IconButton onClick={() => handleScroll("myRef")}>
                      <BsArrowDown size="30" />
                    </IconButton>
                  </div>
                )}
              </div>
            </Fade>
          </div>

          <div className="imgContainer" ref={myRef}>
            <Fade left>
              <Image
                src={dummyImage}
                alt="dummyImage"
                width={400}
                height={400}
                loader={({ src, width }) => `${src}/?w=${width}`}
              />
            </Fade>
          </div>
        </div>

        {windowSize.width >= 768 && (
          <div className="button">
            <IconButton onClick={() => handleScroll("contentRef")}>
              <BsArrowDown size="25" />
            </IconButton>
          </div>
        )}

        <div ref={contentRef} className="detailContainer">
          <div className="detailBox">
            <ul className="box1">
              <li>
                <Image
                  src={target}
                  alt="target"
                  width={50}
                  height={50}
                  loader={({ src, width }) => `${src}?w=${width}`}
                />
                <h2>Our Mission</h2>
                <div className="details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis ligula eget nulla euismod maximus. Vestibulum
                  ac accumsan tortor, nec lobortis arcu. Quisque ultrices
                  tincidunt lorem sed volutpat. Aliquam erat volutpat. Fusce
                  vulputate nulla vitae sollicitudin consectetur. Cras aliquam
                  augue a ante luctus tempus. Vestibulum placerat dapibus nibh,
                  id mattis erat mattis vel. Nam sit amet finibus nisi.
                </div>
              </li>
              <li>
                <Image
                  src={story}
                  alt="story"
                  width={50}
                  height={50}
                  loader={({ src, width }) => `${src}?w=${width}`}
                />
                <h2>Our Story</h2>
                <div className="details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis ligula eget nulla euismod maximus. Vestibulum
                  ac accumsan tortor, nec lobortis arcu. Quisque ultrices
                  tincidunt lorem sed volutpat. Aliquam erat volutpat. Fusce
                  vulputate nulla vitae sollicitudin consectetur. Cras aliquam
                  augue a ante luctus tempus. Vestibulum placerat dapibus nibh,
                  id mattis erat mattis vel. Nam sit amet finibus nisi.
                </div>
              </li>
              <li>
                <Image
                  src={company}
                  alt="story"
                  width={50}
                  height={50}
                  loader={({ src, width }) => `${src}?w=${width}`}
                />
                <h2>Our Company</h2>
                <div className="details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis ligula eget nulla euismod maximus. Vestibulum
                  ac accumsan tortor, nec lobortis arcu. Quisque ultrices
                  tincidunt lorem sed volutpat. Aliquam erat volutpat. Fusce
                  vulputate nulla vitae sollicitudin consectetur. Cras aliquam
                  augue a ante luctus tempus. Vestibulum placerat dapibus nibh,
                  id mattis erat mattis vel. Nam sit amet finibus nisi.
                </div>
              </li>
            </ul>

            <ul className="box2">
              <li>
                <div className="boxDetailsHeading">50,000+</div>
                <div className="box2Details">
                  <BsFillCloudDownloadFill size={20} className="icon" />{" "}
                  Downloads
                </div>
              </li>
              <li>
                <div className="boxDetailsHeading">50,000+</div>
                <div className="box2Details">
                  <Image
                    src={finance}
                    alt="finance"
                    height={25}
                    width={25}
                    objectFit="contain"
                  />
                  <span style={{ marginLeft: 5 }}>Financial Products</span>
                </div>
              </li>
              <li>
                <div className="boxDetailsHeading">50,000+</div>
                <div className="box2Details">
                  <Image
                    src={customer}
                    alt="customer"
                    height={25}
                    width={25}
                    objectFit="contain"
                  />
                  <span style={{ marginLeft: 5 }}>Customer Served</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="headingContainer">
        <h2>Brands Who Trust Us</h2>
        <Swiper
          modules={[FreeMode, Pagination]}
          spaceBetween={0}
          freeMode={true}
          slidesPerView="auto"
          className="brandsBox"
        >
          {slides.map((item, i) => {
            return (
              <SwiperSlide key={i} className="brandsItem">
                <Image src={item.img} alt="image" width={100} height={100} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="headingContainer">
        <h2>Customer Review</h2>
        <Swiper
          modules={[FreeMode, Pagination]}
          spaceBetween={50}
          freeMode={true}
          slidesPerView="auto"
          className="customerBox"
        >
          {slides.map((item, i) => {
            return (
              <SwiperSlide key={i} className="customerItem">
                <Image src={item.img} alt="image" width={100} height={100} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="headingContainer">
        <h2>Our best Points</h2>
        <div className="pointsBox">
          <div className="pointInnerBox">
            <div className="pointItem">Best Incentives</div>
            <div className="pointItem">Shortest Payout Cycle</div>
          </div>
          <div className="pointInnerBox">
            <div className="pointItem">Own your Customers</div>
            <div className="pointItem">Absolute data Security</div>
          </div>
        </div>
      </div>
    </>
  );
}
