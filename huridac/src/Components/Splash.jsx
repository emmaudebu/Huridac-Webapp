import React from "react";
import Options from "./Options";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const Splash = () => {
  return (
    <main className="  w-screen h-[100vh] bg-[url('./images/Rectangle.png')] bg-cover bg-no-repeat flex items-center justify-end flex-col">
      <a href="https://huridac.org/">
        <Link to="/Options">
          <button className=" bg-black  text-white w-[127px] h-[50px] mb-10 rounded-full">
            GO{" "}
          </button>
        </Link>
      </a>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/Options" element={<Options />} />
      </Routes>
    </main>
  );
};

export default Splash;
