import React from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { Button as Inner } from "react-bootstrap";

interface ButtonParams {
  className?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  outline?: boolean,
  type?: "button" | "reset" | "submit",
  text?: string
}

const Button = (props: Readonly<ButtonParams>) => {
  const darkMode = useDarkMode();
  return <Inner className={props.className} onClick={props.onClick} variant={`${props.outline ? "outline-" : ""}custom-${darkMode ? "dark" : "light"}`} type={props.type}>{props.text}</Inner>;
};

export default Button;