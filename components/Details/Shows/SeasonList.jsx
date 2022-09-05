import SeasonItem from './SeasonItem';
import useSlider from '@/hooks/useSlider';

import { useState, useEffect } from 'react';

import Controls from '@/components/UI/SliderControls/Controls';
import { GalleryWrapper } from '@/styles/landing.styled';
import { ListWrapper } from './SeasonList.styled';

const SeasonList = ({ title, showId, seasons, shouldHaveButtons, ...props }) => {
  const [options, setOptions] = useState({});
  const [currentSeasons, setCurrentSeasons] = useState([]);
  const { ref, slider, currentSlide, load } = useSlider(options);
  const isSliderReady = load && slider.current;

  useEffect(() => {
    if (seasons) {
      setCurrentSeasons(seasons);
      setOptions({
        loop: true,
        mode: 'free-snap',
        centered: true,
        slides: {
          perView: 2,
          spacing: 10,
        },
        breakpoints: {
          '(min-width: 768px)': {
            slides: {
              perView: 2.5,
              spacing: 15,
            },
          },
          '(min-width: 1150px)': {
            slides: {
              perView: 3,
              spacing: 15,
            },
          },
          '(min-width: 319px) and (orientation: landscape) and (max-height: 450px)': {
            slides: {
              perView: 4,
              spacing: 10,
            },
          },
        },
        slideChanged(s) {
          setCurrentSlide(s.details().relativeSlide);
        },
      });
    }
  }, [seasons, slider]);

  return (
    <ListWrapper {...props}>
      <h3>Available Seasons</h3>
      <GalleryWrapper as="div" className="slider-wrapper">
        <ul
          className="keen-slider"
          ref={ref}
          role="region"
          alt={`${title} seasons`}
          aria-label={`${title} seasons`}
        >
          {currentSeasons &&
            currentSeasons.map((season, idx) => {
              const isPriority = idx > 2;
              return (
                <SeasonItem
                  className="keen-slider__slide"
                  key={season.id}
                  showId={showId}
                  details={season}
                  priority={isPriority}
                  aria-label={`slide ${idx + 1} of ${seasons.length}`}
                  aria-current={idx === currentSlide}
                  tabIndex={0}
                  role="group"
                />
              );
            })}
        </ul>
      </GalleryWrapper>
      {shouldHaveButtons && isSliderReady && (
        <Controls
          slidesLength={seasons.length}
          slider={slider}
          currentSlide={currentSlide}
          disableDots={window > 1150}
        />
      )}
    </ListWrapper>
  );
};

export default SeasonList;
