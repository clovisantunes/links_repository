import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaPinterest,
  FaTiktok,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

interface IconRendererProps {
  iconName: string;
}

const IconRenderer = ({ iconName }: IconRendererProps) => {
  switch (iconName) {
    case "FaFacebookF":
      return <FaFacebookF />;
    case "FaInstagram":
      return <FaInstagram />;
    case "FaYoutube":
      return <FaYoutube />;
    case "FaLinkedin":
      return <FaLinkedin />;
    case "FaTwitter":
      return <FaTwitter />;
    case "FaPinterest":
      return <FaPinterest />;
    case "FaTiktok":
      return <FaTiktok />;
    case "FaGithub":
      return <FaGithub />;
    case "FaWhatsapp":
      return <FaWhatsapp />;
    default:
      return null;
  }
};

export default IconRenderer;
