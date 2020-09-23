import React, {useEffect, useState} from 'react';

const BalanceChart = ({ percent }) => {
  
  const [offset, setOffset] = useState(0);
  useEffect(() => setOffset(percent), [percent]);

  return (
    <div>
      <svg viewBox="0 0 38 38">
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
          // strokeDasharray={`${offset} ${100 - offset}`}
          strokeDasharray ="100"
          strokeDashoffset={`${100 - offset}`}
          transform="rotate(-90 19 19)" 
          style = {{transition: "stroke-dashoffset 1s ease"}}
          />

      </svg>
    </div>
  )
}

export default BalanceChart;
