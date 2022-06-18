import { StyledDescription, StyledTitleCont, StyledText } from './Details.styled';

const Description = ({ title, tagline, overview, genres }) => {
  return (
    <StyledDescription>
      <StyledTitleCont>
        <h1>{title}</h1>
        <h2>{tagline}</h2>
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
