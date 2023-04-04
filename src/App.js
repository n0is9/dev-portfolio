import React from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import ScrollToTop from './utils/scrollToTop'

import './styles/main.css'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";



function App() {
    return (
        <div className="App">

            <Router basename='/dev-portfolio'>
                <ScrollToTop/>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/project/:id' element={<Project/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='/*' element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
);
}

export default App;
