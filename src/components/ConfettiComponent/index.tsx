// src/components/ConfettiComponent.tsx
import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

interface ConfettiComponentProps {
  onComplete: () => void;
}

const ConfettiComponent: React.FC<ConfettiComponentProps> = ({ onComplete }) => {
  const { width, height } = useWindowSize();

  // You can adjust the duration of the confetti effect here
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // Call the onComplete function after 3 seconds
    }, 3000); // Adjust this duration as needed

    return () => clearTimeout(timer);
  }, [onComplete]);

  return <Confetti width={width} height={height} />;
};

export default ConfettiComponent;
