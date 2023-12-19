import React, { useEffect } from "react";

const CircularProgressBar = ({ savedTimeLeft, timerLeft }) => {
  const [radius, setRadius] = React.useState(250);
  const stroke = 8; // Thickness of the progress bar
  const normalizedRadius = radius - stroke * 0.8;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progressPercentage = timerLeft / savedTimeLeft;

  const updateRadius = () => {
    // Set radius as a percentage of the viewport height
    // For example, 10% of the viewport height
    const newRadius = window.innerHeight * 0.2;
    setRadius(newRadius);
  };

  useEffect(() => {
    // Update the radius when the component mounts
    updateRadius();

    // Add event listener for window resize
    window.addEventListener("resize", updateRadius);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", updateRadius);
    };
  }, []);

  // Calculate the stroke dash offset
  const strokeDashoffset = circumference - progressPercentage * circumference;

  // Calculate the position of the progress circle
  const progressCircleRadius = 10; // Radius of the progress circle
  const angle = 2 * Math.PI * progressPercentage + Math.PI / 2;
  const progressCircleX =
    radius + normalizedRadius * Math.cos(angle - Math.PI / 2);
  const progressCircleY =
    radius + normalizedRadius * Math.sin(angle - Math.PI / 2);

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };

  return (
    <div style={{ width: "100%", height: "100%", display:"flex", alignContent:"center", justifyContent:"center"}}>
      <svg viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
        <circle
          stroke="blue"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={stroke+0.5}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          fill="#161A30"
          r={progressCircleRadius}
          cx={progressCircleX}
          cy={progressCircleY}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize={radius / 2.3}
        >
          {`${formatTime(timerLeft)}`}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
