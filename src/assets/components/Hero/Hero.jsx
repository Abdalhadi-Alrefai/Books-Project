import { useContext } from "react";
import "./Hero.css";
import { ThemeContext } from "../../../pages/Root";

const Hero = ({ btn1, title, description, btn2, image }) => {

  const {theme} = useContext(ThemeContext)

  return (
      <div className={`hero ${theme === "dark" ? "dark-theme" : ""}`}>
        <div className="title">
          <button className="btn1">{btn1}</button>
          <h1>{title}</h1>
          <p>{description}</p>
          <button className="btn2">{btn2}</button>
        </div>
        <div className="img">
          <img src={image} alt="" />
        </div>
      </div>
  );
};

export default Hero;
