import { StyledErrLoad } from './ErrorLoad.styled';
import { StyledPage } from '@/styles/content.styled';

import LoadingSpinner from './LoadingSpinner';
import { HiOutlineEmojiSad } from 'react-icons/hi';

const ErrorLoad = ({ error, data, children, isSubComponent, ogComponent }) => {
  if (error && isSubComponent) {
    return (
      <StyledErrLoad className="err">
        <p>{`Error loading ${ogComponent}`}</p>
      </StyledErrLoad>
    );
  }

  if (!error && !data && isSubComponent) {
    return (
      <StyledErrLoad className="sub">
        <LoadingSpinner />
      </StyledErrLoad>
    );
  }

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
