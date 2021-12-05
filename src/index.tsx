import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/Login/Login';
import Schedule from './pages/Schedule/Schedule';
import Header from './pages/Header/header';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="info/*" element={<Schedule />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

