import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/Login/Login';
import Schedule from './pages/Schedule/Schedule';
import Header from './pages/Header/header';
import Map from './pages/Map/Map';
import Signin from './pages/Signin/Signin';
import Footer from './pages/Footer/footer';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signin/*" element={<Signin />} />
        <Route path="info/*" element={<Schedule />} />
        <Route path="map" element={<Map />} />
      </Routes>
      <Footer />
    </HashRouter>,
  document.getElementById('root')
);

