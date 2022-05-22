import styled from "styled-components";

export const TokenSelect = () => {
  return <Container>USDC</Container>;
};

const Container = styled.button`
  display: flex;
  border: 1px solid rgba(93, 95, 239, 0.1);
  box-shadow: 0 0.5rem 0.5rem 0 rgba(93, 95, 239, 0.1),
    0 2rem 2rem 0 rgba(93, 95, 239, 0.06);
  border-radius: 2rem;
  cursor: pointer;
  font-weight: bold;
  color: #444;

  margin: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  @media only screen and (min-width: 640px) {
    margin: 0rem 1rem;
    padding: 0.5rem 1.5rem;
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 768px) {
    margin: 0rem 1rem;
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
  }
`;
