import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h3`
  color: white;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;

  :hover {
    background-color: grey;
    color: white;
  }
`;
