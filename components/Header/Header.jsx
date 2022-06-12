import Image from 'next/image';

import Nav from './Nav';
import { StyledHeader, LogoContainer } from './Header.styled';
import Profile from '@/UI/Profile';

const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer>
        <Image src={'/assets/logo.svg'} alt="logo" title="Find Me a Movie" layout="fill" draggable="false" />
      </LogoContainer>
      <Nav />
      <Profile />
    </StyledHeader>
  );
};

export default Header;
