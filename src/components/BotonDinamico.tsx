import React from "react";
import styled from "styled-components";

// Define los tipos de las propiedades que vas a pasar a StyledWrapper
interface StyledWrapperProps {
  backgroundColor: string;
  hoverColor: string;
  beforeHoverColor: string;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .btn {
    font-size: 17px;
    background: transparent;
    border: none;
    padding: 1em 1.5em;
    color: ${(props) => props.beforeHoverColor};
    text-transform: uppercase;
    position: relative;
    transition: 0.5s ease;
    cursor: pointer;
    width: 300px;
    border-radius: 10px;
  }

  .btn::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: ${(props) => props.backgroundColor};
    transition: 0.5s ease;
  }

  .btn:hover {
    color: ${(props) => props.hoverColor};
    transition-delay: 0.5s;
  }

  .btn:hover::before {
    width: 100%;
  }

  .btn::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    background-color: ${(props) => props.backgroundColor};
    transition: 0.4s ease;
    z-index: -1;
  }

  .btn:hover::after {
    height: 100%;
    transition-delay: 0.4s;
    color: aliceblue;
  }
`;

const BotonDinamico: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  hoverColor?: string;
  backgroundColor?: string;
  beforeHoverColor?: string;
}> = ({
  children,
  onClick,
  hoverColor = "#1e1e2b",
  backgroundColor = "#E7AE40",
  beforeHoverColor = "#1e1e2b"
}) => {
  return (
    <StyledWrapper beforeHoverColor={beforeHoverColor} hoverColor={hoverColor} backgroundColor={backgroundColor}>
      <button className="btn" onClick={onClick}>
        {children}
      </button>
    </StyledWrapper>
  );
};

export default BotonDinamico;
