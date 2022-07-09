import { useMemo } from 'react';
import {
  SimpleDescription,
  StyledDescription,
  StyledTitleCont,
  StyledRating,
  StyledText,
} from './Details.styled';

import { getDetailClassname } from '@/utils/data-utils';

const Description = ({
  title,
  tagline,
  overview,
  rating,
  votes,
  genres,
  isSeasonDetails,
  runtime,
  ...props
}) => {
  const ratingClassName = useMemo(() => getDetailClassname(+rating), [rating]);

  if (isSeasonDetails) {
    return (
      <SimpleDescription {...props}>
        <h1>{title}</h1>
        <StyledText>
          <p>{overview}</p>
        </StyledText>
      </SimpleDescription>
    );
  }

  return (
    <StyledDescription {...props}>
      <StyledTitleCont>
        <h1>{title}</h1>
        <h2>{tagline}</h2>
        {runtime && (
          <p className="runtime">
            <span>{runtime}</span> minutes
          </p>
        )}
        <StyledRating title={`Out of ${votes} votes`}>
          <p>
            <span className={ratingClassName}>{rating}</span> / 10
          </p>
        </StyledRating>
      </StyledTitleCont>
      {genres && (
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      )}
      <StyledText>
        <p>{overview}</p>
      </StyledText>
    </StyledDescription>
  );
};

export default Description;
