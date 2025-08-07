import React from "react";
import "./App.css";
import CardPreview from "./components/CardPreview";
import CardDetails from "./components/CardDetails";
import { useState } from "react";
import completeIcon from "./assets/images/icon-complete.svg";

const App = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [message, setMessage] = useState(false);

  const handleCardSubmit = (data) => {
    setSubmittedData(data); // only update preview here
    setMessage(true);
  };

  return (
    <>
      <section className="w-full max-h-[760px] lg:h-full flex flex-col gap-10 lg:gap-0 lg:flex-row font-medium">
        <CardPreview cardData={submittedData} />
        {message ? (
          <div className="w-full h-[350px] lg:w-[70%] border lg:h-[750px] flex items-center flex-col justify-center gap-4">
            <img src={completeIcon} alt="completeIcon" />
            <p className="text-2xl">Thank You</p>
            <span>We added Your Card Details</span>
            <button
              type="submit"
              className="w-[350px] rounded-md bg-[var(--brand-purple)] p-3 text-gray-200 tracking-widest text-lg"
            >
              Continue
            </button>
          </div>
        ) : (
          <CardDetails onConfirm={handleCardSubmit} />
        )}
      </section>
    </>
  );
};

export default App;
