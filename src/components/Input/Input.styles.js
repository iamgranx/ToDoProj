import styled from "styled-components";

export const InputWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  color: ${(props) => (props.error ? "white" : "black")};

  > label {
    margin-bottom: 4px;
  }

  > input {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid ${(props) => (props.error ? "white" : "black")};
  }

  > p {
    margin: 4px 0px 0px;
    font-size: 12px;
  }
`;
