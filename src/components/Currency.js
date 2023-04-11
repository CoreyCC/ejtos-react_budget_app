import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [showResults, setShowResults] = useState(false)

  const handleCurrencyChange = (event) => {
    let newCurrency = event.target.value;
    setShowResults(false);

    dispatch({
      type: 'CHG_CURRENCY',
      payload: newCurrency,
  });


    //  button
    // state: dropped, setDropped
    // 
  };

  let currencyString = ""
  if (currency == "$") {
    currencyString = "$ Dollar"
  } else if (currency == "£") {
    currencyString = "£ Pound"
  } else if (currency == "€") {
    currencyString = "€ Euro"
  } else {
    currencyString = "₹ Rupee"
  }


  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" id="currencySelect" onClick={() => setShowResults(!showResults)}>Currency ({currencyString})</button>
        {showResults? <div className="dropdown-container">
          <button className="drop-item" defaultValue value="$" onClick={handleCurrencyChange}>$ Dollar</button>
          <button className="drop-item" value="£" name="Reduce" onClick={handleCurrencyChange}>£ Pound</button>
          <button className="drop-item" value="€" name="Reduce" onClick={handleCurrencyChange}>€ Euro</button>
          <button className="drop-item" value="₹" name="Reduce" onClick={handleCurrencyChange}>₹ Rupee</button>
        </div> : ""}
      
    </div>
  )
}
export default Currency;
