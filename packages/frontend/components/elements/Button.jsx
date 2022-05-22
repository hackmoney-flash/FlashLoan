import styled from "styled-components";

export const Button = ({ children, onClick }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  background-color: #fff;
  border-color: rgba(93, 95, 239, 0.2);
  border-radius: 20px;
  box-shadow: 0 0.5rem 0.5rem 0 rgba(93, 95, 239, 0.1),
    0 2rem 2rem 0 rgba(93, 95, 239, 0.06);
  display: flex;
  padding: 10px 125px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #444;
  text-transform: uppercase;

  margin: 1rem auto;

  &:hover {
    color: #111;
    background: rgba(93, 95, 239, 0.1);
    box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.1),
      0 1px 5px 0 rgba(0, 0, 0, 0.06);

    cursor: pointer;
  }
`;
