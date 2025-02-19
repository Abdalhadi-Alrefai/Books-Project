import { useContext } from "react";
import "./KnowUs.css";
import { ThemeContext } from "../../../pages/Root";

const KnowUs = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`knowus ${theme === "dark" ? "dark-theme" : ""}`}>
      <div className="form">
        <h1>Did you know us? </h1>
        <p>
          We are about books and our purpose is to show you the book who can
          chage your life or distract you from the real world în a better one.
          BWorld works with the must popular publishs just for your delight. If
          you are about books, you must to subscribe to our newsletter.{" "}
        </p>
        <form>
          <input type="text" placeholder="Your name " />
          <input type="email" placeholder="Your e-mail" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106452.50310074142!2d36.31648935652535!3d33.510723464020906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2z2K_Zhdi02YLYjCDYs9mI2LHZitin!5e0!3m2!1sar!2s!4v1739520723321!5m2!1sar!2s"
          width="600"
          height="450"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default KnowUs;
