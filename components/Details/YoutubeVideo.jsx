import { useEffect, useState } from 'react';
import { StyledVideo } from './YoutubeVideo.styled';

const YoutubeVideo = ({ videoId, videoTitle }) => {
  let [currLocation, setCurrLocation] = useState(null);

  useEffect(() => {
    if (window) {
      setCurrLocation(window.location.href);
    }
  }, []);

  return (
    <StyledVideo>
      <iframe
        type="text/html"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=${currLocation}`}
        frameBorder="0"
        allowFullScreen
        modestbranding="1"
        title={videoTitle}
      ></iframe>
    </StyledVideo>
  );
};

export default YoutubeVideo;
