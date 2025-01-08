import React from "react";
import styles from "./styles.module.scss";

interface ContactButtonProps {
  inlineStyles: {
    buttonColor: string;
    buttonTextColor: string;
    buttonHoverColor: string;
    buttonHoverTextColor: string;
  };
}

const ContactButton = ({ inlineStyles }: ContactButtonProps) => {
  return (
    <button
      className={styles["contact-button"]}
      style={{
        backgroundColor: inlineStyles.buttonColor,
        color: inlineStyles.buttonTextColor,
        transition: "background-color 0.3s, color 0.3s",
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = inlineStyles.buttonHoverColor;
        e.target.style.color = inlineStyles.buttonHoverTextColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = inlineStyles.buttonColor;
        e.target.style.color = inlineStyles.buttonTextColor;
      }}
    >
      Contato
    </button>
  );
};

export default ContactButton;
