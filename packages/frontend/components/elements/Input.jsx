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
  padding: 10px 100px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #444;
`;
