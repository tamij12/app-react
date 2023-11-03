import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
    return (
        <div className="mainLayout">
            <Navbar/>
            <div className="mainContent">
                <Outlet />
            </div>
            <h1>Footer</h1>
            <Footer/>
        </div>
    );
}