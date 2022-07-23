import { StyledPeopleLinks, HomepageLink, ImdbLink } from './PeopleLinks.styled';
import { SiImdb } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

const PeopleLinks = ({ homepage, imdbId, ...props }) => {
  return (
    <StyledPeopleLinks {...props}>
      <h3>External Links</h3>
      {!homepage && !imdbId && <p>No links found!</p>}
      <div>
        {homepage && (
          <HomepageLink
            href={homepage}
            target="_blank"
            rel="noopener noreferrer"
            title="Homepage"
            aria-label="Link to artist's website"
          >
            <BsGlobe />
          </HomepageLink>
        )}
        {imdbId && (
          <ImdbLink
            href={`https://www.imdb.com/name/${imdbId}/`}
            target="_blank"
            rel="noopener noreferrer"
            title="IMDB Profile"
            aria-label="Link to IMDB"
          >
            <SiImdb />
          </ImdbLink>
        )}
      </div>
    </StyledPeopleLinks>
  );
};

export default PeopleLinks;
