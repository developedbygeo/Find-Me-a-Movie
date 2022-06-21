import { useMemo } from 'react';
import { StyledDescription, StyledTitleCont, StyledRating, StyledText } from './Details.styled';

import { getDetailClassname } from '@/utils/data-utils';

const Description = ({ title, tagline, overview, rating, genres }) => {
  const ratingClassName = useMemo(() => getDetailClassname(+rating), [rating]);

  return (
    <StyledDescription>
      <StyledTitleCont>
        <h1>{title}</h1>
        <h2>{tagline}</h2>
        <StyledRating>
          <p>
            <span className={ratingClassName}>{rating}</span> / 10
          </p>
        </StyledRating>
      </StyledTitleCont>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <StyledText>
        <p>{overview}</p>
      </StyledText>
    </StyledDescription>
  );
};

export default Description;
