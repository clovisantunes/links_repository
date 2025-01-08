import React from "react";
import Header from "../Header/index.tsx";
import NamesSection from "../NameSection/index.tsx";
import SocialMediaList from "../SocialMediaList/index.tsx";
import ContactButton from "../ContactButton/index.tsx";
import config from "../data/pageConfig.json";
import styles from "./styles.module.scss";

const LinksPage = () => {
  const { companyName, nickName, description, styles: inlineStyles, socialIcons } = config;

  return (
    <div
      className={styles.links_page}
      style={{
        backgroundColor: inlineStyles.backgroundColor,
        color: inlineStyles.textColor,
      }}
    >
      <Header />
      <NamesSection companyName={companyName} nickName={nickName} description={description} />
      <SocialMediaList socialIcons={socialIcons} inlineStyles={inlineStyles} />
      <footer>
        <ContactButton inlineStyles={inlineStyles} />
      </footer>
    </div>
  );
};

export default LinksPage;
