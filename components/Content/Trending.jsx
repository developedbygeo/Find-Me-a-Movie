import useWindow from '@/hooks/useWindow';
import useSlider from '@/hooks/useSlider';
import { useState, useEffect } from 'react';

import { StyledTrending, GalleryWrapper } from '@/styles/landing.styled';
import TrendingItem from './TrendingItem';

const Trending = ({ trendingData }) => {
  const [data, setData] = useState(null);
  const [options, setOptions] = useState(null);
  const { ref, slider, currentSlide, load } = useSlider(options);

  useEffect(() => {
    if (trendingData) {
      setData(trendingData);
      setOptions({
        loop: true,
        mode: 'free-snap',
        centered: true,
        slides: {
          perView: 2,
        },
        breakpoints: {
          '(min-width: 768px)': {
            slides: {
              perView: 6,
              spacing: 30,
            },
          },
          '(min-width: 1150px)': {
            slides: {
              perView: 9,
            },
          },
          '(min-width: 319px) and (orientation: landscape) and (max-height: 450px)': {
            slides: {
              perView: 5,
              spacing: 10,
            },
          },
        },
        slideChanged(s) {
          setCurrentSlide(s.details().relativeSlide);
        },
      });
    }
  }, [trendingData, slider]);

  return (
    <StyledTrending>
      <h1>Trending</h1>
      <GalleryWrapper>
        <ul
          className="keen-slider"
          ref={ref}
          role="region"
          alt="Trending movie gallery"
          aria-label="Trending movie gallery"
        >
          {data &&
            data.map((movie, idx) => {
              const priority = idx < 2;
              return (
                <TrendingItem
                  className="keen-slider__slide"
                  key={movie.id}
                  movie={movie}
                  priority={priority}
                  aria-label={`slide ${idx + 1} of ${trendingData.length}`}
                  aria-current={idx === currentSlide}
                  tabIndex={0}
                  role="group"
                />
              );
            })}
        </ul>
      </GalleryWrapper>
    </StyledTrending>
  );
};

export default Trending;
