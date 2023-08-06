import Image from "next/image";
import React from "react";

import ButtonWithLink, {Button} from "../../components/button/Button";
import Logo from "../../images/logo.jpg";

import classes from "./meals.module.scss";

// import Text from '../../componet/text/Text';

function recipe() {
  return (
    <div className={classes.pageWrapper}>
      <div className={classes.topContainer}>
        <div
  className = {classes.meals__title} style =
      {{ fontSize: "24px", }} >
      {" "} Chicken{" "}<
          /div>
        <div className={classes.meals__name} style={{ fontSize: "24px" }}>
          {" "}
          Chicken Sandwich{" "}
        </div>

      <div className = {classes.img}>
      <Image src = {Logo} alt =
           "logo" height = {600} width = { 800 } />
        </div>

      < div
  className = {classes.meals__description} style = {
    { fontSize: "15px", lineHeight: "1.5", }
  } > {" "} Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla
  pariatur.Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}<
          /div>
        <Button variant="primary" className={classes.viewButton}>
          View recipe here
        </Button>{
          /* Consider using ButtonWithLink */}<
          Button variant = "primary" className = {classes.saveButton}>Add to
                  favorite</Button>
      </div><
          /div>
  );
}

export default recipe;
