import { Outlet } from "react-router-dom";
import Footer from "../assets/components/Footer/Footer";
import NavBar from "../assets/components/NavBar/NavBar";
import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext(null)

const Root = () => {


const [theme,setTheme] = useState(localStorage.getItem("theme")||"light")


  useEffect(()=> {
    localStorage.setItem("theme",theme)
  } , [theme])

  const navItems = [
    {
      href: "",
      content: "Home",
    },
    {
      href: "",
      content: "News",
    },
    {
      href: "",
      content: "Promotion of the mount ",
    },
    {
      href: "",
      content: "Plublishs",
    },
    {
      href: "",
      content: "Subscribe to the newsletter",
    },
  ];
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <NavBar 
        logo="/assets/img/book world.svg"
        navitem={navItems}
      />
      <Outlet/>
      <Footer/>
    </ThemeContext.Provider>
  );
};

export default Root;