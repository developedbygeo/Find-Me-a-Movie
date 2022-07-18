import useWindow from '@/hooks/useWindow';

import { LinkWrapper, StyledLinks } from './ExternalLinks.styled';

import { SiFacebook, SiTwitter, SiInstagram, SiImdb } from 'react-icons/si';

const ExternalLinks = ({ links, ...props }) => {
  const { facebook_id, twitter_id, instagram_id, imdb_id } = links;
  const window = useWindow();
  const isDesktop = window > 1280;

  return (
    <LinkWrapper {...props}>
      <h3>External Links</h3>
      <StyledLinks>
        {imdb_id && (
          <a
            className={isDesktop ? 'desktop-link imdb' : 'imdb'}
            href={`https://www.imdb.com/title/${imdb_id}`}
            target="_blank"
            rel="noreferrer"
            title="IMDB"
            aria-label="IMDB"
          >
            <SiImdb />
            {isDesktop && <p>IMDB</p>}
          </a>
        )}
        {facebook_id && (
          <a
            className={isDesktop ? 'desktop-link fb' : 'fb'}
            href={`https://facebook.com/${facebook_id}`}
            target="_blank"
            rel="noreferrer"
            title="Facebook"
            aria-label="Facebook"
          >
            <SiFacebook />
            {isDesktop && <p>Facebook</p>}
          </a>
        )}
        {twitter_id && (
          <a
            className={isDesktop ? 'desktop-link twitter' : 'twitter'}
            href={`https://twitter.com/${twitter_id}`}
            target="_blank"
            rel="noreferrer"
            title="Twitter"
            aria-label="Twitter"
          >
            <SiTwitter />
            {isDesktop && <p>Twitter</p>}
          </a>
        )}
        {instagram_id && (
          <a
            className={isDesktop ? 'desktop-link instagram' : 'instagram'}
            href={`https://instagram.com/${instagram_id}`}
            target="_blank"
            rel="noreferrer"
            title="Instagram"
            aria-label="Instagram"
          >
            <SiInstagram />
            {isDesktop && <p>Instagram</p>}
          </a>
        )}
      </StyledLinks>
    </LinkWrapper>
  );
};

export default ExternalLinks;
