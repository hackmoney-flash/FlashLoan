import styled from "styled-components";

export const Input = ({ children, className, type, placeholder, onChange }) => {
  return (
    <InputContainer
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`${className}`}
    >
      {children}
    </InputContainer>
  );
};

const InputContainer = styled.input`
  border: 0px;
  outline: 0px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: #444;
  background-color: transparent;
  width: 100%;

  padding: 0.5rem 0.5rem;
  font-size: 1rem;

  @media only screen and (min-width: 640px) {
    padding: 1rem 0.5rem;
    font-size: 1.25rem;
  }
  @media only screen and (min-width: 768px) {
    padding: 1rem 1rem;
    font-size: 1.5rem;
  }
`;
