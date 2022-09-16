import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tipper</h1>
      <div className='card'>
        <div className='line'>
          <span>Bill</span>
          <span className='line-price'>R394.55</span>
        </div>
        <div className='line'>
          <span>Tip</span>
          <span className='line-price'>R59.45</span>
        </div>
        <hr />
        <div className='total-line'>
          <span>Total</span>
          <span className='total-price'>R454.00</span>
        </div>
      </div>
      <div className='card'>
        <div className='line'>
          <span>Tip</span>
          <span className='line-price'>15%</span>
        </div>
        <div className='input-line'>
          <input type="range" min="1" max="100" step="1"/>
        </div>
        <div className='line'>
          <span>Split</span>
          <span className='line-price'>2</span>
        </div>
        <div className='input-line'>
          <input type="range" min="1" max="10" step="1"/>
        </div>
        <hr />
        <div className='line'>
          <span>Split Total</span>
          <span className='total-price'>R227.00</span>
        </div>
      </div>
      <div className='card'>
        <span>Rounding amount</span>
        <div className='card-buttons'>
          <button>Up</button>
          <button>Down</button>
        </div>
      </div>
    </div>
  );
}

export default App;
