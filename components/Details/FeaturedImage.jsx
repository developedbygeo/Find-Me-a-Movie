import Image from 'next/image';
import { StyledImageCont } from './Details.styled';
import { getImage } from '@/utils/data-utils';

const FeaturedImage = ({ backdropURL, title }) => {
  const imagePath = getImage(backdropURL, 'w1280');

  if (!backdropURL) return <></>;

  return (
    <StyledImageCont>
      <Image src={imagePath} alt={`${title} poster`} title={title} layout="fill" draggable="false" priority />
    </StyledImageCont>
  );
};

export default FeaturedImage;
