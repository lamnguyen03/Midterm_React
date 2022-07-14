import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Input } from "antd";
const Show = () => {
  const [resList, setResList] = useState([]);
//   const [search, setSearch] = useState();
    useEffect(() => {
    getRes();
    console.log(resList);

  }, []);
    const getRes = async () => {
    var res = await axios.get("http://127.0.0.1:8000/api/get-product");

    setResList(res.data);
  };


  // Search
    const handlerSearch = async (e) => {
    var res = await axios.get(`http://127.0.0.1:8000/api/search`);
    setResList(res.data);
  };


    return (
      <div className="container">
        <header>
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarExample01"
                aria-controls="navbarExample01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarExample01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Navbar */}
          {/* Background image */}
          <div
            className="p-5 text-center bg-image"
            style={{
              backgroundImage:
                'url("https://img.pikbest.com/backgrounds/20211102/restaurant-food-black-gourmet-creative-banner_6207789.jpg!c1024wm0")',
              height: "400px",
              marginTop: "58px",
            }}
          >
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100"></div>
            </div>
          </div>
          {/* Background image */}
        </header>
        <br />
        <div className="col-sm-10">
          {/* <input
            type="text"
            name="search"
            className="form-control"
            id=""
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-danger"
            type="button"
            onClick={(e) => handlerSearch(e)}
          >
            Search
          </button> */}
          <Input.Search placeholder="Search by username" enterButton />
        </div>
        <br /> <br />
        <div className="row">
          {resList.map((res, index) => {
            return (
              <div className="col-sm-4" key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={res.img}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{res.title}</h5>
                    <p className="card-text">{res.description}</p>
                    <a href="#" className="btn btn-primary">
                      {res.price} VND
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
export default Show;
