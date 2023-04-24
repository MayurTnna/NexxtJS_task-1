<Navbar expand="lg">
<Container fluid>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav ">
    <Nav
      className="  my-2 my-lg-0 nav-flex"
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
    <Navbar.Brand href="#" className={` ${styles.golobe_logo}`}>
      <Image src={main_logo} alt="main-logo" />
    </Navbar.Brand>
    <div className={styles.main_buttons}>
      <Nav.Link href="#" className={styles.login}>
        Login
      </Nav.Link>
      <button className={styles.signup_button}>signup</button>
    </div>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> 