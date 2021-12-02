import styled from "styled-components";

export const Head = styled("header")`

`;

export const P = styled("p")`
  color: ${(props) => props.color || "#00dffc"};
  font-size: ${({ fontSize }) => fontSize || "20px"};
`;
