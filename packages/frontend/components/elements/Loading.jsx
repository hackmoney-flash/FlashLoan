import styled from "styled-components";

export const Loading = () => {
  return (
    <Container>
      <span>Processing Transaction...</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 1rem 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: #444;
  justify-content: center;
`;
