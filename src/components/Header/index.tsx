import React from "react";
import styles from "./styles.module.scss";
import backgroundImage from "../../Assets/background.jpg";
import perfil from "../../Assets/perfil.jpeg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div
        className={styles["header-background"]}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.profile_card}>
          <img src={perfil} alt="Perfil" className={styles["profile-image"]} />
        </div>
      </div>
    </header>
  );
};

export default Header;
