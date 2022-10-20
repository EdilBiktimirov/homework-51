import React from "react";

interface ballProps extends React.PropsWithChildren{
  ballNumber: number;
}

const LotteryBall: React.FC<ballProps> = props => {
  return (
    <div className="ballsDiv">
      <div className="lotteryBall">{props.ballNumber}</div>
    </div>
  );
};

export default LotteryBall;