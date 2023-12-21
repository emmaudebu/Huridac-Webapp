import React from "react";
import logo from "../images/hl 1.png";

const Options = () => {
  return (
    <div className=" flex flex-col items-center  gap-0">
      <img src={logo} className=" w-[50px] h-[50px] mt-[20px]" alt="" />
      <section className=" bg-[url('./images/oko.png')] bg-contain bg-no-repeat w-[350px] h-[303px] mt-[20px] relative rounded-xl">
        <p className=" bg-[#a8e02fd3] font-bold text-[20px]  py-2 w-[350px]  h-[60px] text-center rounded-b-md absolute bottom-14">
          ELECTION
        </p>
      </section>
      <section className=" bg-[url('./images/olu.png')] bg-contain bg-no-repeat w-[350px] h-[303px] mt-[2px] relative rounded-xl">
        <p className=" bg-[#a8e02fd3] font-bold text-[20px]  py-2 w-[350px]  h-[60px] text-center rounded-b-md absolute bottom-14">
          ELECTION
        </p>
      </section>
      <section className=" bg-[url('./images/hr.png')] bg-contain bg-no-repeat w-[350px] h-[303px] mt-[2px] relative rounded-xl">
        <p className=" bg-[#a8e02fd3] font-bold text-[20px]  py-2 w-[350px]  h-[60px] text-center rounded-b-md absolute bottom-12">
          ELECTION
        </p>
      </section>
      <section className=" bg-[url('./images/huridac.png')] bg-contain bg-no-repeat w-[350px] h-[303px] mt-[2px] relative rounded-xl">
        <p className=" bg-[#a8e02fd3] font-bold text-[20px]  py-2 w-[350px]  h-[60px] text-center rounded-b-md absolute bottom-12">
          ELECTION
        </p>
      </section>
    </div>
  );
};

export default Options;
