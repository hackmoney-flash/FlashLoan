import styled from "styled-components";

export const SwapNavigation = ({ children, className }) => {
  return <SwapContainer className={`${className}`}>{children}</SwapContainer>;
};

const SwapContainer = styled.div`
  display: flex;
  background-color: #fff;
  border: #e6e6e6 1px solid;
  border-radius: 20px;
  box-shadow: 0 0.25rem 0.25rem 0 rgba(93, 95, 239, 0.2),
    0 1rem 1rem 0 rgba(93, 95, 239, 0.1);
`;
