import useWindow from '@/hooks/useWindow';

import { StyledFooter } from './Footer.styled';
import { BsFillHeartFill } from 'react-icons/bs';

const Footer = () => {
  const window = useWindow();
  const gradient = window > 1150 ? '32deg' : '94deg';

  return (
    <StyledFooter gradientAngle={gradient}>
      <div>
        <p className="powered">
          Powered with <BsFillHeartFill />
        </p>
      </div>
      <div>
        <p>
          by{' '}
          <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer" title="The Movie DB">
            <span>TMDB</span>
          </a>
        </p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
