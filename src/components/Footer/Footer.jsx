import React from "react";
import styles from "./Footer.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Navbar() {
  return (
    <div>
      <div className={styles.footer}>
        <h6 className={styles.sapne}>
          <a href="http://sapne.org.in/"> SAPNE NGO</a>
        </h6>
        <p className={styles.name}>
          <a href="https://nivedin.github.io/MyPortfolio/">Nivedin(2020)</a>
        </p>
        <div className={styles.icons}>
          <a href="https://www.facebook.com/Sapnethedreams/"><FacebookIcon /></a>
          <a href="https://instagram.com/sapnethedreams?igshid=itt3vkizw5p4"><InstagramIcon /></a>
          <a href="https://www.youtube.com/channel/UCZUECOx6Z66xnUjVEi57fSw"><YouTubeIcon /></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
