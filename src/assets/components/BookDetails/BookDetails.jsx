import { useParams } from "react-router-dom";
import "./BookDetails.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../pages/Root";

const BookDetails = () => {
  const {theme}= useContext(ThemeContext)
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://example-data.draftbit.com/books/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={`item ${theme === "dark" ? "dark-theme" : ""}`}>
      {isLoading ? (
        <h2 className="wait">Loading...</h2>
      ) : (
        <>
          <div className="image">
            <img src={book.image_url} alt={book.title} />
          </div>
          <div className="info">
            <h1>{book.title}</h1>
            <p className="p1">{book.authors}</p>
            <h3>About Book :</h3>
            <p className="p2">{book.description}</p>
            <div className="btn">
              <button className="first-btn">Add to cart</button>
              <button className="sec-btn">Favorite</button>
            </div>
            <div className="book-details">
              <p><span>Pages Number :</span> {book.num_pages} pages</p>
              <p><span>Rating Count :</span> {book.rating_count}</p>
              <p><span>Reviews:</span> {book.review_count}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookDetails;
