import React from "react";
import { GoArrowRight } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin, FaGithub, FaTwitter, FaTiktok, FaPinterest } from "react-icons/fa"; // Importando todos os ícones que podem ser usados
import config from "../data/pageConfig.json";
import styles from "./styles.module.scss";
import backgroundImage from "../../Assets/background.jpg";
import perfil from '../../Assets/perfil.jpeg';

const LinksPage = () => {
  const {
    companyName,
    nickName,
    description,
    styles: inlineStyles,
    links,
    socialIcons,
  } = config;

  const getIcon = (iconName) => {
    switch (iconName) {
      case "FaFacebookF":
        return <FaFacebookF />; // Nenhuma alteração deve ser feita aqui
      case "FaInstagram":
        return <FaInstagram />; // Nenhuma alteração deve ser feita aqui
      case "FaYoutube":
        return <FaYoutube />; // Nenhuma alteração deve ser feita aqui
      case "FaLinkedin":
        return <FaLinkedin />; // Nenhuma alteração deve ser feita aqui
      case "FaTwitter":
        return <FaTwitter />; // Nenhuma alteração deve ser feita aqui
      case "FaPinterest":
        return <FaPinterest />; // Nenhuma alteração deve ser feita aqui
      case "FaTiktok":
        return <FaTiktok />; // Nenhuma alteração deve ser feita aqui
      case "FaGithub":
        return <FaGithub />; // Nenhuma alteração deve ser feita aqui
      case "FaWhatsapp":
        return <FaWhatsapp />; // Nenhuma alteração deve ser feita aqui
      default:
        return null; // Nenhuma alteração deve ser feita aqui
    }
  };

  return (
    <div
      className={styles.links_page}
      style={{
        backgroundColor: inlineStyles.backgroundColor, // Nenhuma alteração deve ser feita aqui
        color: inlineStyles.textColor, // Nenhuma alteração deve ser feita aqui
      }}
    >
      <header className={styles.header}>
        <div
          className={styles["header-background"]}
          style={{ backgroundImage: `url(${backgroundImage})` }} // Nenhuma alteração deve ser feita aqui
        >
          <div className={styles.profile_card}>
            <img src={perfil} alt="Perfil" className={styles["profile-image"]} /> {/* Nenhuma alteração deve ser feita aqui */}
          </div>
        </div>
      </header>
      <div className={styles.names}>
        <h1>{companyName}</h1> {/* Nenhuma alteração deve ser feita aqui */}
        <h2>{nickName}</h2> {/* Nenhuma alteração deve ser feita aqui */}
        <p>{description}</p> {/* Nenhuma alteração deve ser feita aqui */}
      </div>
      <div className={styles.social_media}>
        <ul>
          {socialIcons.map(
            (icon) =>
              icon.active && ( // Verifica se o ícone está ativo (true)
                <li key={icon.id} className={styles["social-item"]}>
                  {getIcon(icon.icon)}  {/* Nenhuma alteração deve ser feita aqui */}
                  <div>{icon.description}</div> {/* Nenhuma alteração deve ser feita aqui */}
                  <a
                    href={icon.url} // Nenhuma alteração deve ser feita aqui
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: inlineStyles.linkColor, // Nenhuma alteração deve ser feita aqui
                      transition: "color 0.3s ease", // Nenhuma alteração deve ser feita aqui
                    }}
                    onMouseEnter={(e) => (e.target.style.color = inlineStyles.linkHoverColor)} // Nenhuma alteração deve ser feita aqui
                    onMouseLeave={(e) => (e.target.style.color = inlineStyles.linkColor)} // Nenhuma alteração deve ser feita aqui
                  >
                    <GoArrowRight /> {/* Nenhuma alteração deve ser feita aqui */}
                  </a>
                </li>
              )
          )}
        </ul>
      </div>
      <footer>
        <button
          className={styles["contact-button"]}
          style={{
            backgroundColor: inlineStyles.buttonColor, // Nenhuma alteração deve ser feita aqui
            color: inlineStyles.buttonTextColor, // Nenhuma alteração deve ser feita aqui
            transition: "background-color 0.3s, color 0.3s", // Nenhuma alteração deve ser feita aqui
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = inlineStyles.buttonHoverColor; // Nenhuma alteração deve ser feita aqui
            e.target.style.color = inlineStyles.buttonHoverTextColor; // Nenhuma alteração deve ser feita aqui
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = inlineStyles.buttonColor; // Nenhuma alteração deve ser feita aqui
            e.target.style.color = inlineStyles.buttonTextColor; // Nenhuma alteração deve ser feita aqui
          }}
        >
          Contato {/* Nenhuma alteração deve ser feita aqui */}
        </button>
      </footer>
    </div>
  );
};

export default LinksPage;
