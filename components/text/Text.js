import clsx from "clsx";
import React from "react";

import classes from "./Test.module.scss";

function Text({ children, className }) {
  return <p className={clsx(classes.text, className)}>{children}</p>;
}

export default Text;
