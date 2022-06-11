import Image from 'next/image';

const Profile = ({ image }) => {
  return (
    <div>
      <div>
        <Image src={image} alt="Profile" title="Profile" layout="fill" draggable="false" />
      </div>
    </div>
  );
};

export default Profile;
