import React from "react";
import logo from "../assets/earth.svg";

export default function Header() {
    return (
        <header>
            <img src={logo}/>
            <h1>my travel journal</h1>
        </header>
    )
}