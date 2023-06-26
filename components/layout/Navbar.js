import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './Navbar.module.scss';
import Logo from '../../images/logo.jpg';

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <Link href="/" legacyBehavior>
        <a className={classes.logo}>
          <Image src={Logo} />
        </a>
      </Link>
      <ul className={classes.navLinks}>
        <li>
          <Link href="/meals">Meals</Link>
        </li>
        <li>
          <Link href="/savedMeals">Saved Meals</Link>
        </li>
        <li>
          <Link href="/logInOut">Login/Logout</Link>
        </li>
        <li>
          <Link href="/reG">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
