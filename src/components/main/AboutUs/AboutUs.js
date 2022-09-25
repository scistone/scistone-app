import React from "react";
import logo from "../../../images/scistone_logo.png";

export default function AboutUs() {
  return (
    <div className="scistone-about_us">
      <div className="scistone-logo-body">
        <img src={logo} />
        <h1>Scistone</h1>
      </div>
      <div className="scistone-about_us-body">
        <h1>WHO ARE WE?</h1>
        <p>
          Scistone is a non-profit online organization that provides open-source
          projects to the software community. It is found by Ahmet Deger and
          Berk Cohadar in 2020.
        </p>
      </div>
    </div>
  );
}
