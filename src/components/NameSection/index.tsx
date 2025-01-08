import React from "react";
import styles from "./styles.module.scss";

interface NamesSectionProps {
  companyName: string;
  nickName: string;
  description: string;
}

const NamesSection = ({ companyName, nickName, description }: NamesSectionProps) => {
  return (
    <div className={styles.names}>
      <h1>{companyName}</h1>
      <h2>{nickName}</h2>
      <p>{description}</p>
    </div>
  );
};

export default NamesSection;
