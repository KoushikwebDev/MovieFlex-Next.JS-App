import React from "react";
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
          </h2>

          <ContactForm />
        </section>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.899519287619!2d88.54057747516796!3d22.357422579645664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0213cc868be49b%3A0xed5034ea799c5140!2sGhutiari%20Sharif%20-%20Hwy%203%2C%20West%20Bengal%20743363!5e0!3m2!1sen!2sin!4v1688107425518!5m2!1sen!2sin"
        width={"100%"}
        height={"450"}
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        className={styles.mapping}
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
