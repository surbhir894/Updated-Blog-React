import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Regsiter } from "./pages/login/Register";
import { DetailsPages } from "./pages/details/DetailsPages";
import { Account } from "./pages/account/Account";
import { Create } from "./components/create/Create";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/Home/Home";
import "./index.css"



const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regsiter/>} />
        <Route path="/details/:id" element={< DetailsPages/>} />
        <Route path="/account" element={<Account />} />
        <Route path="/create" element={< Create/>} />
      </Routes>
    
      <Footer />
    </>
  );
};

export default App;
