import Image from 'next/image';

import { UnstyledButton } from './Buttons.styled';
import { ProfileContainer, ImageWrapper } from './Profile.styled';
import { MdPersonOutline } from 'react-icons/md';

const Profile = ({ image, onProfileClick }) => {
  return (
    <UnstyledButton onClick={onProfileClick} title="Your profile">
      <ImageWrapper>
        {image ? (
          <Image src={image} alt="Profile" title="Profile" layout="fill" draggable="false" />
        ) : (
          <MdPersonOutline />
        )}
      </ImageWrapper>
    </UnstyledButton>
  );
};

export default Profile;
