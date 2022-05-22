import styled from "styled-components";

export const TokenSelect = () => {
  return <Container>USDC</Container>;
};

const Container = styled.button`
  display: flex;
  border: 1px solid #ccc;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  color: #444;
  margin: 0rem 1rem;
`;
