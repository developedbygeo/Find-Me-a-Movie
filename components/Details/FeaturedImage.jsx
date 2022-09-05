import Image from 'next/image';
import useWindow from '@/hooks/useWindow';
import { getResponsiveImage } from '@/utils/data-utils';

import { StyledImageCont } from './Details.styled';
import { getImage } from '@/utils/data-utils';

const FeaturedImage = ({ backdropURL, poster, title, ...props }) => {
  const imagePath = getImage(backdropURL, 'w1280');
  const posterPath = getImage(poster, 'w500');
  const [width, height] = useWindow();
  const imageToUse = getResponsiveImage(width, height, { poster: posterPath, landscape: imagePath });

  if (!backdropURL) return <></>;

  return (
    <StyledImageCont {...props}>
      <Image
        src={imageToUse}
        blurDataURL={imageToUse}
        alt={`${title} poster`}
        title={title}
        layout="fill"
        objectFit="contain"
        draggable="false"
        priority
      />
    </StyledImageCont>
  );
};

export default FeaturedImage;
