import React from "react";
import bgMainDesktop from "../assets/images/bg-main-desktop.png";
import bgCardFront from "../assets/images/bg-card-front.png";
import cardLogo from "../assets/images/card-logo.svg";
import bgCardBack from "../assets/images/bg-card-back.png";

const CardPreview = ({ cardData }) => {
  const {
    cardname = "Jane Appleseed",
    cardnumber = "0000 0000 0000 0000",
    expmonth = "00",
    expyear = "00",
    cvc = "000",
  } = cardData || {}; //prevent crash on null

  return (
    <section className=" w-full h-[280px] lg:w-[35%] lg:h-full relative ">
      <img src={bgMainDesktop} alt="" className="h-full w-full object-cover" />
      <div className="absolute top:[15%] left:[50%] translate-x-[5%] translate-y-[-70%] lg:top-[15%] lg:left-[40%] lg:translate-y-0 lg:translate-x-0 rounded-md  z-20">
        <div className="w-[300px] h-[180px] lg:w-[400px] lg:h-[250px]">
          <img
            src={bgCardFront}
            alt="Credit Card Front"
            className="h-full w-full object-fit"
          />
          <div className="absolute top-0 left-0 w-full h-full text-gray-200">
            <img src={cardLogo} alt="" className=" p-2.5 " />
            <span className=" text-lg lg:text-2xl tracking-widest flex justify-center mt-[1rem] lg:mt-[4rem]">
              {cardnumber}
            </span>
            <div className="flex justify-between w-full  py-3 px-5 text-xs mt-[1rem] lg:m-[2rem] lg:w-[330px] lg:p-2 lg:text-sm">
              <p>{cardname.toUpperCase()}</p>
              <span>{`${expmonth}/${expyear}`}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Front card ends here */}

      {/* Card Back */}
      <div className="w-[300px] h-[180px] absolute top:0 left:[50%] translate-x-[20%] translate-y-[-130%] lg:w-[400px] lg:h-[250px] lg:top-[54%] lg:left-[60%] lg:translate-y-0 lg:translate-x-0  rounded-md z-10">
        <img
          src={bgCardBack}
          alt="Credit Card Back"
          className="h-full w-full object-fit"
        />
        <span className="absolute top-1/2 right-[12%] -translate-y-1/2 text-gray-200 text-lg tracking-widest">
          <p>{cvc}</p>
        </span>
      </div>
    </section>
  );
};

export default CardPreview;
