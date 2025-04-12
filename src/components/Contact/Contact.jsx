"use client";

import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <span className={styles.name}>{name}: </span>
        <span className={styles.number}>{number}</span>
      </div>
      <button className={styles.deleteBtn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
