import React from "react";
import { GoArrowRight } from "react-icons/go";
import IconRenderer from "../IconRenderer/index.tsx";
import styles from "./styles.module.scss";

interface SocialMediaListProps {
  socialIcons: Array<{
    id: string;
    icon: string;
    description: string;
    url: string;
    active: boolean;
  }>;
  inlineStyles: {
    linkColor: string;
    linkHoverColor: string;
  };
}

const SocialMediaList = ({ socialIcons, inlineStyles }: SocialMediaListProps) => {
  return (
    <div className={styles.social_media}>
      <ul>
        {socialIcons.map(
          (icon) =>
            icon.active && (
              <li key={icon.id} className={styles["social-item"]}>
                <IconRenderer iconName={icon.icon} />
                <div>{icon.description}</div>
                <a
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: inlineStyles.linkColor,
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = inlineStyles.linkHoverColor)}
                  onMouseLeave={(e) => (e.target.style.color = inlineStyles.linkColor)}
                >
                  <GoArrowRight />
                </a>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default SocialMediaList;
