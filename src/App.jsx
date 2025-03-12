import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import NewsLetter from "./components/Home/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import AllProducts from "./components/Products/AllProducts/AllProducts";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<AllProducts/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default App;
