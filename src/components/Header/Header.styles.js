import styled from "styled-components";

export const Head = styled("header")`
  >div {
  color: ${(props) => props.color || "#00dffc"};
  font-size: ${({ fontSize }) => fontSize || "20px"};

  }

`;

