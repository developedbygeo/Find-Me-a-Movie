import HomeSVG from 'public/assets/nav-home.svg';
import MoviesSVG from 'public/assets/nav-movies.svg';
import TvSeriesSVG from 'public/assets/nav-tv-series.svg';
import BookmarkSVG from 'public/assets/nav-bookmark.svg';

import NavLink from '@/UI/NavLink';
import { StyledNav } from './Nav.styled';

const Nav = () => {
  return (
    <StyledNav>
      <NavLink to="/">
        <HomeSVG />
      </NavLink>
      <NavLink to="/movies">
        <MoviesSVG />
      </NavLink>
      <NavLink to="/series">
        <TvSeriesSVG />
      </NavLink>
      <NavLink to="/bookmarks">
        <BookmarkSVG />
      </NavLink>
    </StyledNav>
  );
};

export default Nav;
