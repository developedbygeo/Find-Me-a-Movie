import { StyledPeopleLinks } from './PeopleLinks.styled';
import { SiImdb } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

const PeopleLinks = ({ homepage, imdbId }) => {
  return (
    <StyledPeopleLinks>
      <h3>External Links</h3>
      {!homepage && !imdbId && <p>No links found!</p>}
      <div>
        {homepage && (
          <a
            href={homepage}
            target="_blank"
            rel="noopener noreferrer"
            title="Homepage"
            aria-label="Link to artist's website"
          >
            <BsGlobe />
          </a>
        )}
        {imdbId && (
          <a
            href={`https://www.imdb.com/name/${imdbId}/`}
            target="_blank"
            rel="noopener noreferrer"
            title="IMDB Profile"
            aria-label="Link to IMDB"
          >
            <SiImdb />
          </a>
        )}
      </div>
    </StyledPeopleLinks>
  );
};

export default PeopleLinks;
