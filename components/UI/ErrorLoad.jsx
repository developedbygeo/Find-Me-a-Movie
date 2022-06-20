import { StyledErrLoad } from './ErrorLoad.styled';
import { StyledPage } from '@/styles/content.styled';

import LoadingSpinner from './LoadingSpinner';
import { HiOutlineEmojiSad } from 'react-icons/hi';

const ErrorLoad = ({ error, data, children }) => {
  if (error) {
    return (
      <StyledErrLoad className="err">
        <HiOutlineEmojiSad />
        <p>{error.info.errorUser || 'Something has gone wrong! Please try again.'}</p>
      </StyledErrLoad>
    );
  }

  if (!error && !data) {
    return (
      <StyledErrLoad>
        <LoadingSpinner />
      </StyledErrLoad>
    );
  }

  return <StyledPage>{children}</StyledPage>;
};

export default ErrorLoad;
