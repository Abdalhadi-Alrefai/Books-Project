import React from "react";
import Hero from "../assets/components/Hero/Hero";
import Card from "../assets/components/Card/Card";
import KnowUs from "../assets/components/KnowUs/KnowUs";

const Home = () => {
  return (
    <div>
      <Hero
        btn1="Author of august"
        title="Eric-Emanuel Schmitt "
        description="Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages."
        btn2="View his boooks"
        image="/assets/img/book.png"
      />
      <Card title="Selected for you " />
      <KnowUs />
    </div>
  );
};

export default Home;
