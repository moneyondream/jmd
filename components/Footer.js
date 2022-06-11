import React from "react";
import styles from "../styles/Home.module.css";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* <div className={styles.logo}>Logo</div> */}
      <div className={styles.footerMenu}>
        <div className={styles.footerDetail}>
          <h2 className={styles.heading}>MoneyOn Dream</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            mattis ligula eget nulla euismod maximus. Vestibulum ac accumsan
            tortor, nec lobortis arcu. Quisque ultrices tincidunt lorem sed
            volutpat. Aliquam erat volutpat. Fusce vulputate nulla vitae
            sollicitudin consectetur. Cras aliquam augue a ante luctus tempus.
            Vestibulum placerat dapibus nibh, id mattis erat mattis vel. Nam sit
            amet finibus nisi.
          </div>
        </div>
        <div className={styles.footerList}>
          <h2 className={styles.heading}>General</h2>
          <ul className={styles.list}>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <div className={styles.footerList}>
          <h2 className={styles.heading}>About Us</h2>
          <ul className={styles.list}>
            <li>
              <Link href="/About#who_we_are">
                <a>Who we are</a>
              </Link>
            </li>
            <li>
              <Link href="/About#our_team">
                <a>Our Team</a>
              </Link>
            </li>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
          </ul>
        </div>
        <ul className={styles.footerList}>
          <h2 className={styles.heading}>Services</h2>
          <div className={styles.list}>
            <li>Finance</li>
            <li>Business</li>
          </div>
        </ul>
      </div>
      <div className={styles.social}>
        <h2>Social</h2>
        <ul>
          <li>
            <Link href="/">
              <a>
                <BsFacebook size={30} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <BsYoutube size={30} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <BsInstagram size={30} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
