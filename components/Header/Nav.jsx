import NavLink from '@/UI/NavLink';
import { StyledNav } from './Nav.styled';

import { RiLayoutGridFill, RiFilmFill, RiTvFill, RiBookmarkFill } from 'react-icons/ri';

const Nav = () => {
  return (
    <StyledNav>
      <NavLink href="/" passHref>
        <a>
          <RiLayoutGridFill />
        </a>
      </NavLink>
      <NavLink href="/movies" passHref>
        <a>
          <RiFilmFill />
        </a>
      </NavLink>
      <NavLink href="/tv-series" passHref>
        <a>
          <RiTvFill />
        </a>
      </NavLink>
      <NavLink href="/bookmarks" passHref>
        <a>
          <RiBookmarkFill />
        </a>
      </NavLink>
    </StyledNav>
  );
};

export default Nav;
