import React from "react";
import { useTheme } from "next-themes";

const styles = require("./logo.module.scss");

type LogoProps = {};

const Logo: React.FC<LogoProps> = () => {
  const { resolvedTheme } = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 99 45"
      width={110}
      height={80}
      className={
        resolvedTheme === 'dark'
          ? styles.logoContainerDark
          : styles.logoContainer
      }
    >
      <text
        x="10" // Adjust the x and y coordinates to position your text
        y="20"
        className={resolvedTheme === 'dark' ? styles.MarwanDark : styles.Marwan}
        fontSize="24" // Adjust the font size as needed
        fontFamily="Arial, sans-serif" // Adjust the font family as needed
      >
        Marwan
      </text>
      <text
        x="1" // Adjust the x and y coordinates to position your text
        y="40"
        className={resolvedTheme === 'dark' ? styles.fouzDark : styles.fouz}
        fontSize="24" // Adjust the font size as needed
        fontFamily="Arial, sans-serif" // Adjust the font family as needed
      >
        Fouz
      </text>
    </svg>
  );
};

export default Logo;
