import styled from "styled-components";

export const Loading = () => {
  return (
    <Container>
      <h1>Loading...</h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #444;
`;
