import styled from 'styled-components';

const HelpButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #268ccb;
  font-size: 1.2em;
  font-weight: bold;
  justify-self: flex-end;
  cursor: pointer;
  user-select: none;
  zoom: 100%;
  transition: transform .5s ease;
  &:hover {
    color: #6cc0e5;
    transform: scale(1.1);
  }
`;

export default HelpButton;
