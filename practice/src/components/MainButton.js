import styled from "styled-components";

export const MainButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px 30px;
  background-color: orange;
  border-radius: 50px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
