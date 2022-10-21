import React, {useState} from 'react';
import './App.css';
import LotteryBall from "./LotteryBall/LotteryBall";

function App() {
  const numbers: number[] = [];

  const getRandomInt = (max: number, min: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    while (numbers.length < 5) {
      let result: number = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(result)) {
        numbers.push(result);
      }
    }

    numbers.sort((a: number, b: number) => a - b);
  };

  const [lotteryNumber, setLotteryNumber] = useState([
    {ballNumber: numbers[0]},
    {ballNumber: numbers[1]},
    {ballNumber: numbers[2]},
    {ballNumber: numbers[3]},
    {ballNumber: numbers[4]}
  ]);

  const changeNumbers = () => {
    getRandomInt(36, 5);
    setLotteryNumber([
      {ballNumber: numbers[0]},
      {ballNumber: numbers[1]},
      {ballNumber: numbers[2]},
      {ballNumber: numbers[3]},
      {ballNumber: numbers[4]}
    ])
  };

  return (
    <div className="App">
      <div>
        <h2 className="mailTitle">Lucky lottery!</h2>
        <button onClick={changeNumbers} className="mainBtn">New numbers!</button>
      </div>
      <LotteryBall ballNumber={lotteryNumber[0].ballNumber}/>
      <LotteryBall ballNumber={lotteryNumber[1].ballNumber}/>
      <LotteryBall ballNumber={lotteryNumber[2].ballNumber}/>
      <LotteryBall ballNumber={lotteryNumber[3].ballNumber}/>
      <LotteryBall ballNumber={lotteryNumber[4].ballNumber}/>
    </div>
  );
}

export default App;
