import NavLink from '@/UI/NavLink';
import { StyledNav } from './Nav.styled';

import { RiLayoutGridFill, RiFilmFill, RiTvFill, RiBookmarkFill } from 'react-icons/ri';

const Nav = () => {
  return (
    <StyledNav>
      <NavLink href="/">
        <RiLayoutGridFill />
      </NavLink>
      <NavLink href="/movies">
        <RiFilmFill />
      </NavLink>
      <NavLink href="/tv-series">
        <RiTvFill />
      </NavLink>
      <NavLink href="/bookmarks">
        <RiBookmarkFill />
      </NavLink>
    </StyledNav>
  );
};

export default Nav;
