import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid rgba(0,0,0,.2);
  width: 300px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  filter: grayscale(100%);
  user-select: none;
  &:hover {
    filter: none;
  }
`;

export default Container;
