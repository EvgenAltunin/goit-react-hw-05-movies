import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    height: 30px;
    padding: 10px ;
    border-bottom: 1px solid black;
`

export const LinkStyled = styled(NavLink)`
  color: black;

  padding-right: 20px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: orange;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: #858585;
  }
`;