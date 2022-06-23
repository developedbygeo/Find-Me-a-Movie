import { LinkWrapper, StyledLinks } from './Shows/ExternalLinks.styled';

import { SiFacebook, SiTwitter, SiInstagram, SiImdb } from 'react-icons/si';

const ExternalLinks = ({ links }) => {
  const { facebook_id, twitter_id, instagram_id, imdb_id } = links;

  return (
    <LinkWrapper>
      <h3>External Links</h3>
      <StyledLinks>
        {imdb_id && (
          <a
            className="imdb"
            href={`https://www.imdb.com/title/${imdb_id}`}
            target="_blank"
            rel="noreferrer"
            title="IMDB"
            aria-label="IMDB"
          >
            <SiImdb />
          </a>
        )}
        {facebook_id && (
          <a
            className="fb"
            href={`https://facebook.com/${facebook_id}`}
            target="_blank"
            rel="noreferrer"
            title="Facebook"
            aria-label="Facebook"
          >
            <SiFacebook />
          </a>
        )}
        {twitter_id && (
          <a
            className="twitter"
            href={`https://twitter.com/${twitter_id}`}
            target="_blank"
            rel="noreferrer"
            title="Twitter"
            aria-label="Twitter"
          >
            <SiTwitter />
          </a>
        )}
        {instagram_id && (
          <a
            className="instagram"
            href={`https://instagram.com/${instagram_id}`}
            target="_blank"
            rel="noreferrer"
            title="Instagram"
            aria-label="Instagram"
          >
            <SiInstagram />
          </a>
        )}
      </StyledLinks>
    </LinkWrapper>
  );
};

export default ExternalLinks;
