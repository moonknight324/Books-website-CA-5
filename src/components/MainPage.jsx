import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [searchBook, setsearchBook] = useState("");

  // Using the useEffect hook for fetching the data using axios
  useEffect(() => {
    axios
      .get(`https://reactnd-books-api.udacity.com/books`, {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((out) => {
        setData(out.data.books);
        // console.log(out.data);
      });
  }, []);

  // Logic for the search functionality
  const searchedBook = data.filter((book) =>
    book.title.toLowerCase().includes(searchBook.toLowerCase())
  );

  return (
    <>
      <div className="header">
        <div className="logo">
          <div className="img">
            <img
              className="logo-img"
              src="https://kalvium.com/wp-content/uploads/2022/07/fav.png"
              alt=""
              width={50}
              height={50}
            />
          </div>
          <h1 className="kalvium">Kalvium Books</h1>
        </div>
        <div className="search">
          <div className="search-img">
            <img
              src="https://imgs.search.brave.com/eAkBP1NL6penAfZFCrl2Dg_56vb2TkjnNE8eCcKhGnE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMTQ5LzE0OTg1/Mi5wbmc"
              alt=""
            />
          </div>
          <div className="search- ">
            <input
              className="search-box"
              type="text"
              placeholder="Search Books"
              value={searchBook}
              onChange={(e) => setsearchBook(e.target.value)}
            />
          </div>
        </div>
        <Link to={"/form"}>
          <button className="register-btn">Register</button>
        </Link>
      </div>
      <div className="main-page">
        <div className="books">
          {searchedBook.map((book) => {
            return (
              <div key={book.id}>
                <div className="content">
                  <img
                    className="book-img"
                    src={book.imageLinks.smallThumbnail}
                    alt=""
                  ></img>
                  <div className="book-box">
                    <h4 className="title">{book.title}</h4>
                    <div className="rating">
                      <p className="free">
                        {book.averageRating ? book.averageRating : "4.3"}⭐ Free
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
