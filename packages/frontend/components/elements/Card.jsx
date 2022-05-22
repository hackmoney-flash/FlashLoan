import styled from "styled-components";

export const Card = ({ children, className }) => {
  return <CardContainer className={`${className}`}>{children}</CardContainer>;
};

const CardContainer = styled.div`
  background-color: #fff;
  border: #e6e6e6 1px solid;
  border-radius: 20px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  min-height: 300px;
  padding: 1rem;
  margin: 2rem 10rem;
`;
