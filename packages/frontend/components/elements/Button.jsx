import styled from "styled-components";

export const Button = ({ children, onClick }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  background-color: #fff;
  border-color: #e6e6e6;
  border-radius: 20px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  padding: 10px 100px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #444;
  &:hover {
    background-color: #f5f5f5;
    border-color: #d6d6d6;
    cursor: pointer;
  }
`;
