import styled from "styled-components";

export const CardHeader = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

const HeaderContainer = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #444;
  text-align: left;
  margin: 1rem 0;
`;
