import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import useSlider from '@/hooks/useSlider';
import { getImage } from '@/utils/data-utils';
import { getDetailTitle } from '@/utils/data-utils';

import { StyledTitle } from './List.styled';
import { CastWrapper, StyledCastList, CastImageCont, StyledAnchor } from './Cast.styled';

const Cast = ({ cast, titleAs }) => {
  const [options, setOptions] = useState({});
  const [currentCast, setCurrentCast] = useState([]);
  const { ref, slider, currentSlide, load } = useSlider(options);
  const isSliderReady = load && slider.current;

  useEffect(() => {
    if (cast) {
      setCurrentCast(cast);
      setOptions({
        loop: true,
        slides: {
          perView: Math.min(cast.length / 3, 6),
        },
        breakpoints: {
          '(min-width: 1150px)': {
            slides: {
              perView: 10,
            },
          },
        },
        slideChanged(s) {
          setCurrentSlide(s.details().relativeSlide);
        },
      });
    }
  }, [cast, slider]);

  return (
    <CastWrapper className="cast-list-cont">
      <StyledTitle as={titleAs || 'h1'}>Cast</StyledTitle>
      <StyledCastList as="div" className="cast-list">
        <ul
          className="keen-slider"
          ref={ref}
          role="region"
          alt={`View all ${cast.length} cast members`}
          aria-label={`View all ${cast.length} cast members`}
        >
          {currentCast &&
            currentCast.map((person, idx) => {
              let imagePath;
              const name = getDetailTitle(person, 'name', 'original_name');

              if (person.profile_path) {
                imagePath = getImage(person.profile_path, 'w500');
              }
              return (
                <li
                  key={person.id || `cast-${idx}`}
                  title={`View more details about ${name}`}
                  className="keen-slider__slide"
                  role="group"
                  tabIndex={0}
                >
                  <Link href={`/people/${person.id}`} passHref>
                    <StyledAnchor>
                      <CastImageCont>
                        <Image
                          priority={idx < slider.current.slides.perView}
                          src={imagePath || '/content/avatar-placeholder.png'}
                          alt={name}
                          placeholder="blur"
                          blurDataURL={imagePath || '/content/avatar-placeholder.png'}
                          layout="fill"
                        />
                      </CastImageCont>
                    </StyledAnchor>
                  </Link>
                </li>
              );
            })}
        </ul>
      </StyledCastList>
    </CastWrapper>
  );
};

export default Cast;
