import Image from 'next/image';
import useWindow from '@/hooks/useWindow';

import { StyledImageCont } from './Details.styled';
import { getImage } from '@/utils/data-utils';

const FeaturedImage = ({ backdropURL, poster, title, ...props }) => {
  const imagePath = getImage(backdropURL, 'w1280');
  const posterPath = getImage(poster, 'w500');
  const window = useWindow();
  const imageToUse = window > 1280 ? posterPath : imagePath;

  if (!backdropURL) return <></>;

  return (
    <StyledImageCont {...props}>
      <Image
        src={imageToUse}
        alt={`${title} poster`}
        title={title}
        layout="fill"
        draggable="false"
        priority
      />
    </StyledImageCont>
  );
};

export default FeaturedImage;
