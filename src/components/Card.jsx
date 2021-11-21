import React from "react";
import imgEquilibrium from "../Images/image-equilibrium.jpg";
import userAvatar from "../Images/image-avatar.png";
import styles from "./Card.module.css";
import iconClock from "../Images/icon-clock.svg";
import iconEthereum from "../Images/icon-ethereum.svg";

const Card = () => {
  return (
    <div className={styles.card_container}>
      <img
        className={styles.card_image}
        src={imgEquilibrium}
        alt="equilibrium"
      />

      <section className={styles.card_content}>
        <h3>Equilibrium #3495</h3>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className={styles.item_info}>
          <div>
            <img src={iconEthereum} alt="icon-ethereum" />
            <h6>something</h6>
          </div>

          <div>
            <img src={iconClock} alt="icon-clock" />
            <h6>something</h6>
          </div>
        </div>
      </section>

      <div className={styles.card_footer}>
        <img src={userAvatar} alt="user-avatar" />
        <p>
          creation of <strong>Akanksha Ghildiyal</strong>
        </p>
      </div>
    </div>
  );
};
export default Card;
