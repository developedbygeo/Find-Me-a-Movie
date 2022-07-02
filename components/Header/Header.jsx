import Image from 'next/image';
import { useReducer } from 'react';

import Modal from '@/UI/Modal/Modal';
import ComingSoon from '../UI/Modal/ComingSoon';
import Nav from './Nav';

import { StyledHeader, LogoContainer } from './Header.styled';
import Profile from '@/UI/Profile';

const Header = () => {
  const [showProfile, setShowProfile] = useReducer((state) => !state, false);

  const toggleProfileHandler = () => setShowProfile();

  return (
    <StyledHeader>
      <LogoContainer>
        <Image
          src={'/assets/logo.svg'}
          alt="logo"
          title="Find Me a Movie"
          layout="fill"
          draggable="false"
          priority
        />
      </LogoContainer>
      <Nav />
      <Profile onProfileClick={toggleProfileHandler} />
      {showProfile && (
        <Modal onDisable={toggleProfileHandler}>
          <ComingSoon onDisable={toggleProfileHandler} />
        </Modal>
      )}
    </StyledHeader>
  );
};

export default Header;
