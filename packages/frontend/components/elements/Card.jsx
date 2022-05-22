import styled from "styled-components";

export const Card = ({ children, className }) => {
  return <CardContainer className={`${className}`}>{children}</CardContainer>;
};

const CardContainer = styled.div`
  background-color: #fff;
  border: #e6e6e6 1px solid;
  border-radius: 20px;
  box-shadow: 0 0.75rem 0.75rem 0 rgba(93, 95, 239, 0.2),
    0 2rem 2rem 0 rgba(93, 95, 239, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 300px;
  padding: 1rem;
  margin: 2rem 0;
`;
