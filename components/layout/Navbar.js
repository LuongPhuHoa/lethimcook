import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './Navbar.module.scss';
import Logo from '../../images/logo.jpg';
import Search from './Search';

function Navbar() {
  return (
    <nav className="flex align-middle items-center justify-between p-10">
      <Link href="/" legacyBehavior>
        <a className={classes.logo}>
          <Image src={Logo} />
        </a>
      </Link>
      <div className="flex justify-between items-center align-middle self-center">
        <ul className={classes.navLinks}>
          <li>
            <Link className=" text-decoration-none text-gray-900 font-medium" href="/meals">Meals</Link>
          </li>
          <li>
            <Link className=" text-decoration-none text-gray-900 font-medium" href="/savedMeals">Saved Meals</Link>
          </li>
          <li>
            <Link className=" text-decoration-none text-gray-900 font-medium" href="/logInOut">Login/Logout</Link>
          </li>
          <li>
            <Link className=" text-decoration-none text-gray-900 font-medium" href="/reG">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
