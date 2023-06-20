import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`

  background-color:rgb(93, 63, 211);
  box-shadow: 0px 9px 8px 0px rgba(34, 60, 80, 0.2);
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;  
  margin-bottom: 28px;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.17;
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  transition: all 0.4s ease;
  display: inline-block;
  font-family: inherit;
  padding: 12px;
  text-decoration: none;
  color: #212121;
  cursor: pointer;

  ::after {
    content: '';
    position: absolute;
    height: 2px;
    background-color: #EBD8FF;;
    width: 0;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) all;
  }

  &.active {
    color: #EBD8FF;
  }
  :hover:not(.active) {
    color: #EBD8FF;

    ::after {
      width: 100%;
    }
  }
`;