import Image from 'next/image';

import { ProfileContainer, ImageWrapper } from './Profile.styled';
import { MdPersonOutline } from 'react-icons/md';

const Profile = ({ image }) => {
  return (
    <ProfileContainer>
      <ImageWrapper>
        {image ? (
          <Image src={image} alt="Profile" title="Profile" layout="fill" draggable="false" />
        ) : (
          <MdPersonOutline />
        )}
      </ImageWrapper>
    </ProfileContainer>
  );
};

export default Profile;
