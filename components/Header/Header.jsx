import Image from 'next/image';
import { LogoContainer } from './Header.styled';

const Header = () => {
  return (
    <LogoContainer>
      <Image src={'/assets/logo.svg'} alt="logo" title="Find Me a Movie" layout="fill" draggable="false" />
    </LogoContainer>
  );
};

export default Header;
