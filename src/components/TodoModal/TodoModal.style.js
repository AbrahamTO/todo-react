import styled from 'styled-components'
export const TodoModalStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,5);
    display: flex;
    place-items: center;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;