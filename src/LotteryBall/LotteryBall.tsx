import React from "react";

interface ballProps extends React.PropsWithChildren{
  ballNumber: number;
}

const LotteryBall: React.FC<ballProps> = props => {
  return (
    <div className="ballsDiv">
      <span className="lotteryBall">{props.ballNumber}</span>
    </div>
  );
};

export default LotteryBall;