import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledNavLink = styled(NavLink)`
    display: inline-block;
    padding: 8px;
    width: 120px;
    background: #EBD8FF;
    box-shadow: 0px 3.44px 3.44px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    
    font-family: inherit;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.22;
    text-align: center;
    text-decoration: none;
    color: #212121;
    cursor: pointer;
    transition: all 0.4s ease;

  &.active, :hover:not(.active) {
    color: #EBD8FF;
    background-color:rgb(93, 63, 211);
  }
`
export const Box = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
`

export const StyledButton = styled.button`
    margin-bottom: 40px;
    padding: 14px 28px;
    min-width: 120px;
    background: #EBD8FF;
    box-shadow: 0px 3.44px 3.44px rgba(0, 0, 0, 0.25);
    border-color: transparent;
    border-radius: 12px;
    
    font-family: inherit;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.22;
    text-align: center;
    text-decoration: none;
    color: #212121;
    cursor: pointer;
    transition: all 0.4s ease;
`