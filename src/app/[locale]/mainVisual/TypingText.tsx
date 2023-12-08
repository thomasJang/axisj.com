import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const TypingAnimation = (props: any) => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setCurrentText((prevText) => {
        if (currentIndex > props.text.length + 1) {
          clearInterval(intervalId);
          return prevText;
        }
        currentIndex++;
        return props.text.slice(0, currentIndex);
      });
    }, props.speed);

    return () => {
      clearInterval(intervalId);
    };
  }, [props.text, props.speed]);

  return (
    <Span className={props.className}>
      {currentText}
      <span className="blinker"></span>
    </Span>
  );
};

export default TypingAnimation;

const Span = styled.span`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  .blinker {
    animation-name: blinker;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(1, 0, 0, 1);
    animation-duration: 0.7s;
    display: inline-block;
    width: 0.25rem;
    height: 2rem;
    margin-left: 0.5rem;
    background: var(--ax_supernova_red);
  }

  @keyframes blinker {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
