import Navbar from "../../shared/Navbar";
import React from "react";

export default function Navigation() {
  return (
    <Navbar>
      <Navbar.Items>
        <Navbar.Item url={"/about"} title={"WHO WE ARE?"} />
        <Navbar.Item url={"/job"} title={"WHAT WE DO?"} />
        <Navbar.Item url={"/projects"} title={"WHAT WE DID?"} />
      </Navbar.Items>
    </Navbar>
  );
}
