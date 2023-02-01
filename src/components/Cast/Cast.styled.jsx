import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  margin-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  margin-bottom: 20px;
  margin-right: 10px;
`;
export const TextWrapper = styled.div`
  margin-left: 10px;
  margin-top: 20px;
`;

export const Name = styled.p`
  font-weight: 700;
`;

export const Character = styled.p``;
