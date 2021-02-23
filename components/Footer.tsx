import * as React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoSunnyOutline, IoMoonSharp } from "react-icons/io5";
import * as config from "@utils/config";

import styles from "./styles.module.css";

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Footer: React.FC<{
  isDarkMode?: boolean;
  toggleDarkMode?: () => void;
}> = ({ isDarkMode = false, toggleDarkMode = () => undefined }) => {
  const toggleDarkModeCb = React.useCallback(
    e => {
      e.preventDefault();
      toggleDarkMode();
    },
    [toggleDarkMode]
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2021 {config.author}</div>

      <div className={styles.settings}>
        <button
          className={`text-left inline ${styles.toggleDarkMode}`}
          onClick={toggleDarkModeCb}
          title='Tottle dark mode'
        >
          {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
        </button>
      </div>

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}
      </div>
    </footer>
  );
};
