import { StyledHeader, StyledNav, StyledNavLink } from './AppBar.styled';

const links = [
    { href: '/', text: 'Home' },
    { href: '/tweets', text: 'Tweets' },
  ];

  export const AppBar = () => {
    return (
        <StyledHeader >
            <StyledNav >
            {links.map(({href, text}) => (<StyledNavLink to={href} key={href}>{text}</StyledNavLink>))}
            </StyledNav>
        </StyledHeader>
    )
  }
  
