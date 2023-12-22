import React from "react";
import logo from "../images/hl 1.jpg";

const Options = () => {
  return (
    <div className=" flex flex-col items-center  gap-0">
      <img src={logo} className="  mt-[20px]" alt="" />
      <a href="http://huridac.org/eyep/">
        {" "}
        <section className=" bg-[url('./images/oko.png')] bg-contain bg-no-repeat w-[350px] h-[303px] mt-[20px] relative rounded-xl">
          <p className=" bg-[#a8e02fd3] font-bold text-[20px]  py-2 w-[350px]  h-[60px] text-center rounded-b-md absolute bottom-14">
            ELECTION
          </p>
        </section>
      </a>
      <a href="http://huridac.org/anti-corruption/">
        {" "}
        <section className=" bg-[url('./images/olu.png')] bg-contain bg-no-repeat w-[350px] h-[303px] mt-[2px] relative rounded-xl">
          <p className=" bg-[#a8e02fd3] font-bold text-[20px]  py-2 w-[350px]  h-[60px] text-center rounded-b-md absolute bottom-14">
            ANTI-CORRUPTION
          </p>
        </section>
      </a>
      <a href="http://huridac.org/wahr/">
        <section className=" bg-[url('./images/hr.png')] bg-contain bg-no-repeat w-[350px] h-[303px] mt-[2px] relative rounded-xl">
          <p className=" bg-[#a8e02fd3] font-bold text-[20px]  py-2 w-[350px]  h-[60px] text-center rounded-b-md absolute bottom-12">
            HUMAN RIGHTS
          </p>
        </section>
        <section className=" bg-[url('./images/huridac.png')] bg-contain bg-no-repeat w-[350px] h-[303px] mt-[2px] relative rounded-xl">
          <p className=" bg-[#a8e02fd3] font-bold text-[20px]  py-2 w-[350px]  h-[60px] text-center rounded-b-md absolute bottom-12">
            HURIDAC
          </p>
        </section>
      </a>
    </div>
  );
};

export default Options;
