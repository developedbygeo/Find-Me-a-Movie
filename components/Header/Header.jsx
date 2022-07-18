import Image from 'next/image';
import { useReducer } from 'react';

import useWindow from '@/hooks/useWindow';

import Modal from '@/UI/Modal/Modal';
import ComingSoon from '../UI/Modal/ComingSoon';
import Nav from './Nav';

import { StyledHeader, LogoContainer } from './Header.styled';
import Profile from '@/UI/Profile';

const Header = () => {
  const [showProfile, setShowProfile] = useReducer((state) => !state, false);
  const window = useWindow();
  const gradient = window > 1150 ? '22deg' : '262deg';

  const toggleProfileHandler = () => setShowProfile();

  return (
    <StyledHeader gradientAngle={gradient}>
      <LogoContainer>
        <Image
          src={'/assets/logo.svg'}
          alt="logo"
          title="Find Me a Movie"
          layout="responsive"
          draggable="false"
          width={100}
          height={100}
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
