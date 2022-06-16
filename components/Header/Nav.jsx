import NavLink from '@/UI/NavLink';
import { StyledNav } from './Nav.styled';

import { RiLayoutGridFill, RiFilmFill, RiTvFill, RiBookmarkFill } from 'react-icons/ri';

const Nav = () => {
  return (
    <StyledNav>
      <NavLink href="/" passHref>
        <a>
          <RiLayoutGridFill title="Home" />
        </a>
      </NavLink>
      <NavLink href="/movies" passHref>
        <a>
          <RiFilmFill title="Movies" />
        </a>
      </NavLink>
      <NavLink href="/tv-series" passHref>
        <a>
          <RiTvFill title="TV Shows" />
        </a>
      </NavLink>
      <NavLink href="/bookmarks" passHref>
        <a>
          <RiBookmarkFill title="Bookmarks" />
        </a>
      </NavLink>
    </StyledNav>
  );
};

export default Nav;
