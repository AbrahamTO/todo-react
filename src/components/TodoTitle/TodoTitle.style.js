import styled from "styled-components";
export const Todotitle =styled.div`
font-size: 60px;
color: aliceblue;
display: flex;
justify-content: center;

`;
export const TodoButtonAdd =styled.button`
  background-color: rgba(0, 90, 90, 0.9);
  position: absolute;
  right: 38%;
  top: 3%;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;