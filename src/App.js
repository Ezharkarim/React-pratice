import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Items from "./pages/Items";
import Practice from "./pages/Practice";
import Preactquery from "./pages/Reactquery";
import Form from './pages/Form';
import { Provider } from "react-redux";
import store from "./store/store";

import Navbar from "./component/Navbar";

export default function App() {

const client =new QueryClient();
  return (
    <div className="App">
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Card" element={<Card />}></Route>
              <Route path="/Items" element={<Items />}></Route>
              <Route path="/Practice" element={<Practice />}></Route>
              <Route path="/Reactquery" element={<Preactquery/>}></Route>
              <Route path="/Form" element={<Form/>}></Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}
