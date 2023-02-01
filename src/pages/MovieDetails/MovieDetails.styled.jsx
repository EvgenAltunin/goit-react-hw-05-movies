import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 20px 20px 20px;
`;

export const ImgWrapper = styled.div`
  width: 300px;
  height: 450px;
  margin-right: 10px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 300px;
  height: 450px;
`;
export const MainTitle = styled.h3`
  font-weight: 900;
  margin-bottom: 10px;
`;
export const Title = styled.h4`
  margin-top: 6px;
  margin-bottom: 6px;
`;

export const Genres = styled.ul`
display: flex;
gap: 6px;
`;


export const LinkStyled = styled(NavLink)`
  display: block;
  color: black;
  text-decoration: none;
  padding-top: 6px;
  padding-bottom: 6px;

  cursor: pointer;
  :hover,
  :focus {
    color: #858585;
  }
`;
