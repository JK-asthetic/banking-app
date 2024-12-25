"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <span>
      <CountUp prefix="$" end={amount} />
    </span>
  );
};

export default AnimatedCounter;
