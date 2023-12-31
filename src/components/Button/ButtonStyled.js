import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  text-shadow: rgb(255, 255, 255) 0px 1px 1px;
  background-color: #567c9c;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  transform: scale(1);

  &:hover,
  &:focus {
    background-color: #f2cb68;
  }
`;
