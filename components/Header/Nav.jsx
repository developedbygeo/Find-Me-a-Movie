import NavLink from '@/UI/NavLink';
import { StyledNav } from './Nav.styled';

const Nav = () => {
  return (
    <StyledNav>
      <NavLink href="/">
        <a>Home</a>
      </NavLink>
      <NavLink href="/movies">
        <a>Movies</a>
      </NavLink>
      <NavLink href="/series">
        <a>TV Shows</a>
      </NavLink>
      <NavLink href="/bookmarks">
        <a>Saved</a>
      </NavLink>
    </StyledNav>
  );
};

export default Nav;
