import styled from 'styled-components'
export const TodoContent = styled.form`
  background-color: rgba(17, 24, 39, 0.9);
  padding: 3rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TodoContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: white;
`;

export const TodoContentBotton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
`;

export const TodoModalBody = styled.div``;

export const TodoTextArea = styled.input`
  width: 100%;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-bottom: 10px;
  resize: vertical;
`;

export const TodoBottonCreate = styled.button`
  background-color: #105f50;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  

  &:hover {
    background-color: #45a049;
  }
`;