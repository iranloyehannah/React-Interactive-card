import React, { useState, useEffect } from "react";

const CardDetails = ({ onConfirm }) => {
  const [cardHolder, setCardHolder] = useState({
    cardname: "",
    cardnumber: "",
    expmonth: "",
    expyear: "",
    cvc: "",
  });
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const trimInput = (value) => value.replace(/\s+/g, "").trim(); //remove whitespaces
  const onlyNumbers = (value) => value.replace(/\D/g, ""); // remove non-digit characters
 
  const formatCardNumber = (value) =>
    value
      .replace(/\D/g, "") // remove non-digit characters
      .replace(/(\d{4})(?=\d)/g, "$1 ") // insert space after every 4 digits
      .trim()
      .slice(0, 24);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const formattedNum =
      name === "cardnumber" ? formatCardNumber(value) : value;
    // setCardHolder({ ...cardHolder, [name]: formattedNum });
    setCardHolder((prev) => ({
      ...prev,
      [name]: formattedNum
    }))

    // Clear Error while typing
    if (formError[name]) {
      setFormError((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validateForm(cardHolder));
    setIsSubmit(true);
  };

  useEffect(() => {
    // console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      onConfirm(cardHolder);
      // console.log(cardHolder);
    }
  }, [cardHolder, formError, isSubmit, onConfirm]);

  const validateForm = (values) => {
    const newErrors = {};
  
    const cardName = trimInput(values.cardname);
    const cardNumber = formatCardNumber(values.cardnumber);
    const cardExpMonth = onlyNumbers(values.expmonth);
    const cardExpYear = onlyNumbers(values.expyear);
    const cardCvc = onlyNumbers(values.cvc);
  
    // Card Name
    if (!cardName) {
      newErrors.cardname = "Card name is required";
    }
  
    // Card Number
    if (!cardNumber) {
      newErrors.cardnumber = "Card number is required";
    }
  
    // Expiration Month (MM format)
    if (!cardExpMonth) {
      newErrors.expmonth = "Month is required";
    } else if (!/^\d{2}$/.test(cardExpMonth)) {
      newErrors.expmonth = "Enter 2-digit month";
    } else {
      const month = parseInt(cardExpMonth, 10);
      if (month < 1 || month > 12) {
        newErrors.expmonth = "Month must be between 01 and 12";
      }
    }
  
    // Expiration Year
    if (!cardExpYear) {
      newErrors.expyear = "Year is required";
    } else if (!/^\d{2}$/.test(cardExpYear)) {          
      newErrors.expyear = "Enter valid year digits only";
    }
  
    // CVC (strictly 3 digits)
    if (!cardCvc) {
      newErrors.cvc = "CVC is required";
    } else if (!/^\d{3}$/.test(cardCvc)) {
      newErrors.cvc = "CVC must be exactly 3 digits";
    }
  
    return newErrors;
  };

  return (
    <section className=" w-full h-screen min-h-[410px] lg:w-[65%] flex items-center justify-center">
      {/* card info input */}
      <form
        onSubmit={handleSubmit}
        className="lg:w-[40%] lg:h-[20rem] flex flex-col justify-evenly w-[350px] h-[22rem]"
      >
        <div className="flex flex-col text-[18px]">
          <label
            htmlFor="cardname"
            className="text-[var(--brand-purple)] tracking-widest text-lg"
          >
            CARDHOLDER NAME
          </label>
          <div className="input-wrapper rounded-md bg-gray-200 p-[2px] 
          transition-all focus-within:bg-gradient-to-r focus-within:from-[var(--gradient-start)] focus-within:to-[var(--gradient-end)]
          "
          >
            <input
              type="text"
              id="cardname"
              name="cardname"
              value={cardHolder.cardname}
              onChange={handleChange}
              placeholder="e.g. Jane Appleseed "
              className="w-full  rounded-md border-0 bg-white p-2 focus:outline-none text-[var(--brand-purple)] placeholder:text-[var(--gray-400)]"
            />
          </div>
          <span className="text-red-600 text-sm  mt-1 ">
            {formError.cardname}
          </span>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="cardnumber"
            className="text-[var(--brand-purple)] tracking-widest text-lg"
          >
            CARD NUMBER
          </label>
          <div className="input-wrapper rounded-md bg-gray-200 p-[2px] tracking-widest text-sm transition-all focus-within:bg-gradient-to-r focus-within:from-[var(--gradient-start)] focus-within:to-[var(--gradient-end)]">
            <input
              type="phone"
              id="cardnumber"
              name="cardnumber"
              value={cardHolder.cardnumber}
              onChange={handleChange}
              placeholder="e.g. 1234 5678 9123 0000"
              className="w-full rounded-md border-0 bg-white p-2 focus:outline-none text-[var(--brand-purple)] placeholder:text-[var(--gray-400)]"
            />
          </div>
          <span className="text-red-600 text-sm  mt-1 ">
            {formError.cardnumber}
          </span>
        </div>
        {/* exp date */}
        <div className="flex">
          <div className="flex gap-4">
            <div>
              <label
                htmlFor="expdate"
                className="text-[var(--brand-purple)] tracking-widest text-lg"
              >
                EXP.DATE [MM/YY]
              </label>
              <div className="flex gap-2">
                <div className="input-wrapper rounded-md bg-gray-200 p-[2px] transition-all focus-within:bg-gradient-to-r focus-within:from-[var(--gradient-start)] focus-within:to-[var(--gradient-end)]">
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    value={cardHolder.expmonth}
                    onChange={handleChange}
                    placeholder="MM"
                    className="w-[100px] rounded-md border-0 bg-white p-2 focus:outline-none text-[var(--brand-purple)] placeholder:text-[var(--gray-400)]"
                  />
                  <span className="text-red-600 text-sm  mt-1 ">
                    {formError.expmonth}
                  </span>
                </div>
                <div className="input-wrapper rounded-md bg-gray-200 p-[2px] transition-all focus-within:bg-gradient-to-r focus-within:from-[var(--gradient-start)] focus-within:to-[var(--gradient-end)]">
                  <input
                    type="text"
                    id="expyear"
                    name="expyear"
                    value={cardHolder.expyear}
                    onChange={handleChange}
                    placeholder="YY"
                    className="w-[100px] rounded-md border-0 bg-white p-2 focus:outline-none text-[var(--brand-purple)] placeholder:text-[var(--gray-400)]"
                  />
                  <span className="text-red-600 text-sm  mt-1 ">
                    {formError.expyear}
                  </span>
                </div>
              </div>
            </div>

            {/* cvc */}
            <div>
              <label
                htmlFor="cvc"
                className="text-[var(--brand-purple)] tracking-widest text-lg"
              >
                CVC
              </label>

              <div className="input-wrapper rounded-md bg-gray-200 p-[2px] transition-all focus-within:bg-gradient-to-r focus-within:from-[var(--gradient-start)] focus-within:to-[var(--gradient-end)]">
                <input
                  type="text"
                  id="cvc"
                  name="cvc"
                  value={cardHolder.cvc}
                  onChange={handleChange}
                  placeholder="e.g 123"
                  className="w-[100px] lg:w-[130px]  rounded-md border-0 bg-white p-2 focus:outline-none text-[var(--brand-purple)] placeholder:text-[var(--gray-400)]"
                />
                <span className="text-red-600 text-sm  mt-1 ">
                  {formError.cvc}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Info ends here */}
        {/* Submit button */}
        <button
          type="submit"
          className="w-full rounded-md bg-[var(--brand-purple)] p-3 text-gray-200 tracking-widest text-lg"
        >
          Confirm
        </button>
      </form>
    </section>
  );
};

export default CardDetails;
