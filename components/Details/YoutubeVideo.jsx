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
        width="853"
        height="480"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?origin=${currLocation}&widget_referrer=${currLocation}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write"
        allowFullScreen
        title={videoTitle}
      />
    </StyledVideo>
  );
};

export default YoutubeVideo;
