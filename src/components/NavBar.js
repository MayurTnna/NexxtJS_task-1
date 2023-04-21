import React from "react";
import styles from "../assets/styles/Navbar.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import logo from "../assets/images/Vector.svg";
import logo2 from "../assets/images/Vector2.svg";
import main_logo from "../assets/images/main-logo.svg";


const NavBar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="  my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className={styles.flight_icon}>
                <Image src={logo} alt="logo" />
                <Nav.Link href="#action1" className={styles.flight_text}>
                  Find Flight
                </Nav.Link>
              </div>
              <div className={styles.car_icon}>
                <Image src={logo2} alt="logo" />
                <Nav.Link href="#action2" className={styles.car_text}>
                  Find Stays
                </Nav.Link>
              </div>
            </Nav>
            <Nav.Link href="#" className={`mx-auto ${styles.golobe_logo}`}>
              <Image src={main_logo} alt="main-logo" />
            </Nav.Link>
            <div className={styles.main_buttons}>
              <Nav.Link href="#" className={styles.login}>
                Login
              </Nav.Link>
              <button className={styles.signup_button}>signup</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
