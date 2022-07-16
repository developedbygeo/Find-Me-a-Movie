import Image from 'next/image';
import Link from 'next/link';

import useWindow from '@/hooks/useWindow';
import useSlider from '@/hooks/useSlider';
import { getImage } from '@/utils/data-utils';
import { getDetailTitle } from '@/utils/data-utils';

import { StyledRecommended } from '@/styles/landing.styled';
import { StyledTitle } from './List.styled';
import { StyledCastList, CastImageCont } from './Cast.styled';

const mobileSlider = {
  loop: true,
  mode: 'free-snap',
  slides: {
    perView: 4,
    spacing: 10,
  },
};

const desktopSlider = {
  ...mobileSlider,
  slides: {
    perView: 7,
    spacing: 15,
  },
};

// TODO add controls

const Cast = ({ cast, titleAs }) => {
  const window = useWindow();
  const settings = window > 1150 ? desktopSlider : mobileSlider;
  const { ref, slider, currentSlide, load } = useSlider(settings);
  const isSliderReady = load && slider.current;

  return (
    <StyledRecommended>
      <StyledTitle as={titleAs || 'h1'}>Cast</StyledTitle>
      <StyledCastList as="div">
        <ul
          className="keen-slider"
          ref={ref}
          role="region"
          alt={`View all ${cast.length} cast members`}
          aria-label={`View all ${cast.length} cast members`}
        >
          {cast.map((person, idx) => {
            let imagePath;
            const name = getDetailTitle(person, 'name', 'original_name');

            if (person.profile_path) {
              imagePath = getImage(person.profile_path, 'w185');
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
                  <a>
                    <CastImageCont>
                      <Image
                        priority={idx < settings.slides.perView}
                        src={imagePath}
                        alt={name}
                        placeholder="blur"
                        blurDataURL={imagePath}
                        layout="fill"
                      />
                    </CastImageCont>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </StyledCastList>
    </StyledRecommended>
  );
};

export default Cast;
