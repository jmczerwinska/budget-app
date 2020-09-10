import React, {useEffect, useState} from 'react';

const BalanceChart = ({ percent, balance }) => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    setTimeout(()=> {
      if (offset < percent) {
        setOffset(offset + 1)
      }
    }, 50)

  }, [percent, offset]);

  return (
    <div>
      <svg width="38" height="38">
        <circle
          className="balance-track"
          cx="19"
          cy="19"
          r="15.91549430918954"
          fill="transparent"
          strokeWidth="2"
          stroke="grey" />

        <circle
          className="balance-progress"
          cx="19"
          cy="19"
          r="15.91549430918954"
          fill="transparent"
          strokeWidth="2"
          stroke="red"
          strokeLinecap= "round"
          strokeDasharray={`${offset} ${100 - offset}`} />
        <text x="50%" y="50%">
            Your Balance
          </text>
        <text x="50%" y="50%">
          {balance}
          </text>

      </svg>
    </div>
  )
}

export default BalanceChart;
