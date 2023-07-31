import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../../images/logo.jpg";

import classes from "./Navbar.module.scss";
import Search from "./Search";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navigation}>
        <div className={classes.logoWrapper}>
          <Link href="/" legacyBehavior>
            <Image src={Logo} alt="lethimcook logo" />
          </Link>
        </div>
        <div className={classes.navLinks}>
          <span>
            <Link href="/meals">Meals</Link>
          </span>
          <span>
            <Link href="/savedMeals">Saved Meals</Link>
          </span>
          <span>
            <Link href="signin.js">Login/Logout</Link>
          </span>
          <span>
            <Link href="/reG">Register</Link>
          </span>
        </div>
      </div>
      <Search />
    </nav>
  );
}

export default Navbar;
