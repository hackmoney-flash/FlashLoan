import styled from "styled-components";

export const SwapNavigation = ({ children, className }) => {
  return <SwapContainer className={`${className}`}>{children}</SwapContainer>;
};

const SwapContainer = styled.div`
  border: 2px solid white;
  background-color: white;
  width: 20rem;
  border-radius: 10px;
`;
