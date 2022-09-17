import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [currentBill, setCurrentBill] = useState(100);
  const [currentTip, setCurrentTip] = useState(0);

  const [tipPrice, setTipPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [currentSplit, setCurrentSplit] = useState(0);
  const [totalSplit, setTotalSplit] = useState(0);

  const inputTipHandler = (ev) => {
    setTipPrice(ev.target.value);
    setTotalPrice(
      (parseFloat(currentBill) + parseFloat(currentTip)).toFixed(2)
    );
  };
  const inputBillHandler = (ev) => {
    if (isNaN(ev.target.value) || ev.target.value > 1000000) {
      alert("Please enter correct bill value...");
      setCurrentBill(0);
      return;
    } else {
      setCurrentBill(ev.target.value);
    }
  };
  const inputSplitHandler = (ev) => {
    setCurrentSplit(ev.target.value);
  };
  const roundValueUp = () => {
    setTotalSplit(Math.ceil(totalSplit));
    setTotalPrice(Math.ceil(totalPrice));
  };
  const roundValueDown = () => {
    setTotalSplit(Math.floor(totalSplit));
    setTotalPrice(Math.floor(totalPrice));
  };

  useEffect(() => {
    setTotalPrice(currentBill);
  }, [currentBill]);
  useEffect(() => {
    const curTip = ((tipPrice * currentBill) / 100).toFixed(2);
    setCurrentTip(curTip);
  }, [tipPrice, currentBill]);
  useEffect(() => {
    const curSplit = (tipPrice / currentSplit).toFixed(2);
    if (isFinite(curSplit)) {
      setTotalSplit(curSplit);
    } else {
      setTotalSplit(0);
    }
  }, [currentSplit, tipPrice]);

  return (
    <div className="App">
      <h1>Tipper</h1>
      <div className="card">
        <div className="line">
          <span>Bill</span>
          <input
            type="number"
            min="1"
            placeholder="Enter your bill value"
            className="input-bill"
            onChange={inputBillHandler}
            value={currentBill}
          />
          <span className="line-price">R{currentBill}</span>
        </div>
        <div className="line">
          <span>Tip</span>
          <span className="line-price">R{currentTip}</span>
        </div>
        <hr />
        <div className="total-line">
          <span>Total</span>
          <span className="total-price">R{totalPrice}</span>
        </div>
      </div>
      <div className="card">
        <div className="line">
          <span>Tip</span>
          <span className="line-price">{tipPrice}%</span>
        </div>
        <div className="input-line">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={tipPrice}
            onChange={inputTipHandler}
          />
        </div>
        <div className="line">
          <span>Split</span>
          <span className="line-price">{currentSplit}</span>
        </div>
        <div className="input-line">
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={currentSplit}
            onChange={inputSplitHandler}
          />
        </div>
        <hr />
        <div className="line">
          <span>Split Total</span>
          <span className="total-price">R{totalSplit}</span>
        </div>
      </div>
      <div className="card">
        <span>Rounding amount</span>
        <div className="card-buttons">
          <button onClick={roundValueUp}>Up</button>
          <button onClick={roundValueDown}>Down</button>
        </div>
      </div>
    </div>
  );
};

export default App;
