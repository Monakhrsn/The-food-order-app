import React, { useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = props => {
    const [showOrderedList, setShowOrderedList] = useState(false);

    const showOrderedMealsHandler = () => {
        setShowOrderedList(true);
    }
  return (
    <button onClick={showOrderedMealsHandler} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
