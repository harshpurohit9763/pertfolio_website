// src/components/mobile/ContactMobile.js
import React from 'react';
import styles from './ContactMobile.module.css';
import ContactForm from '../ContactForm';

function ContactMobile() {
  return (
    <div>
      <span className={styles.eyebrow}>Get In Touch</span>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Inherited Will, the Destiny of the Age,{' '}
          <span className={styles.accent}>and the Dreams of its People.</span>
        </h2>
        <p className={styles.quote}>
          "As long as people continue to pursue the meaning of Freedom, these things will never cease to be!"
        </p>
        <span className={styles.attribution}>— Gol D. Roger</span>
      </div>

      <ContactForm
        classes={{
          form: styles.form,
          row: styles.row,
          input: styles.input,
          button: `${styles.submitBtn}`,
        }}
      />
    </div>
  );
}

export default ContactMobile;
