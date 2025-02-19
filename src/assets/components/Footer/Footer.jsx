import { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../../pages/Root";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`footer ${theme === "dark" ? "dark-theme" : ""}`}>
      <p className="copyright">
        &copy; <span> All copyrights are reserved.</span> &nbsp; B-World 2022.
      </p>
    </div>
  );
};

export default Footer;
