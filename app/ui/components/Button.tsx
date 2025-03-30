import React, { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  size?: "medium" | "large" | "xlarge";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({
  type = "button",
  variant = "primary",
  size = "xlarge",
  disabled = false,
  fullWidth = false,
  className = "",
  children,
  onClick,
}: ButtonProps) => {
  // filter(Boolean): filter out any empty strings, undefined values, or other falsy values before joining the class names.
  const combinedClassNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={combinedClassNames}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
