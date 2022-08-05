//import axios from "axios";
import React, { Component } from 'react'
import { Link } from "react-router-dom";
const myalert = function myFunction() {
    return alert("Form Gönderildi!");
  };
  

export default class HomePage extends Component {
  render() {
   
    return (
      <div>  
       <h2>
      ||||<Link to="/">HomePage</Link> |||| {''}
      <Link to="/candidates">Candidates</Link> |||| {''}
      <Link to="/about">About</Link> |||| {''}
             
      </h2>

      <div id="carouselExampleDark" className="carousel carousel-dark slide w-75 h-50" data-bs-ride="carousel"  >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://www.akinsoft.com.tr/bulut-cozumler/resim/online-ik/mobil.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-danger">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://www.isfikirleri-girisimcilik.com/wp-content/uploads/2019/07/insan-kaynaklari.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-danger">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/01/13/18/12/hiring-1977914_960_720.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-danger">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



<div className="card p-1">
        <div className="card-header p-1">
          <h3>İş Başvuru Formu</h3>
        </div>

        <form>
          <div className="card-body p-1">
            <label className="mb-2 p-0.5" htmlFor="name"> Bilgileriniz </label>
            <input
              type="text"
              name="name"
              id="id"
              placeholder="Adınız/Soyadınız"
              className="form-control"
            />
            <input
              type="text"
              name="phone"
              id="tel"
              placeholder="Telefon Numaranız"
              className="form-control"
            />
            <input
              type="text"
              name="adress"
              id="adress"
              placeholder="Başvuruda Bulunduğunuz Departman"
              className="form-control"
            />
            <div className="mb-2">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                İstek ve Önerileriniz
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
              ></textarea>
            </div>
            <div className="col-auto">
              <button
                onClick={myalert}
                type="submit"
                className="btn btn-primary mb-1"
              >
                Gönder
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
    )
  }
}
