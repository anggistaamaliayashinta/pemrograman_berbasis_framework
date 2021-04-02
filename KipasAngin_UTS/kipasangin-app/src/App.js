import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Kipasangin from "./container/Kipasangin/Kipasangin";
import Keranjang from "./container/Kipasangin/Keranjang";

function App() {
  return (
    <Router>
      <div>

        <ul className="menu">
          <li>
            <Link to="/"><span>Home</span></Link>
          </li>
          <li>
            <Link to="/list-product"><span>List Produk</span></Link>
          </li>
          <li>
            <Link to="/keranjang"><span>Keranjang</span></Link>
          </li>
          <li>
            <Link to="/about"><span>About</span></Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list-product">
            <Products />
          </Route>
          <Route path="/keranjang">
            <Keranjangs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <center><h2>Selamat Datang di Hyebins Shop! <p></p><p>Disini menjual berbagai macam elektronik khususnya Kipas Angin</p>
      </h2></center>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <center><h2>Biodata Mahasiswa</h2></center>
      <section class="home_banner_area">
        <div class="container box_1620">
          <div class="banner_inner d-flex align-items-center">
            <div class="banner_content">
              <div class="media">
                <div class="d-flex">
                <img src={require('./shinta.jpg')} width="300" alt="10px"></img>
                </div>
                <div class="media-body">
                  <div class="personal_text">
                  <h6>Assalamualaikum Wr. wb Saya</h6>
                    <h3>Anggista Amalia Yashinta</h3>
                    <h4>Mahasiswa Politeknik Negeri Malang</h4>
                    <h4>Jurusan Teknologi Informasi</h4>
                    <h4>Program Studi Teknik Informatika</h4>
                    <p></p>
                    <ul class="list basic_info">
                      <li><a href="#"><i class="lnr lnr-calendar-full"></i> 14 Agustus 2000</a></li>
                      <li><a href="#"><i class="lnr lnr-phone-handset"></i> +6281 2348 7403</a></li>
                      <li><a href="#"><i class="lnr lnr-envelope"></i> anggistaamalia@gmail.com</a></li>
                      <li><a href="#"><i class="lnr lnr-home"></i> Perum Bangkalan Indah Blok MG.23</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


function Products() {
  return (
    <div>
      <Kipasangin />
    </div>
  )
}

function Keranjangs() {
  return (
    <div>
      <Keranjang />
    </div>
  )
}

export default App;
