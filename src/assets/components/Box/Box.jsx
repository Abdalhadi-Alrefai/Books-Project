import React, { useEffect, useState } from "react";
import "./Box.css";
import { Link } from "react-router-dom";

const Box = ({ icon1, icon2 }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://example-data.draftbit.com/books?_limit=8", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="box">
      {items.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.image_url} alt="" />
            <h3>{item.authors}</h3>
            <div className="page">
              <p>
                <i>{icon1}</i>
                {item.num_pages} pages
              </p>
              <p>
                <i>{icon2}</i>
                {item.rating}
              </p>
            </div>
            <button>
              <Link to={`/BookItem/${item.id}`}>Show Details</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Box;
