import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Select from 'react-select';

import { StyledWrapper, StyledInput } from './Search.styled';
import { UnstyledButton } from '../Buttons.styled';
import { BiSearchAlt } from 'react-icons/bi';
import { customStyles } from './Select.styled';

const selectOptions = [
  { label: 'Movie', value: 'movie', slug: 'movies', placeholder: 'Search for more movies' },
  { label: 'TV Show', value: 'tv', slug: 'tv-series', placeholder: 'Search for more TV shows' },
];

const platformLookup = {
  searchMovies: selectOptions[0],
  searchTv: selectOptions[1],
};

const Search = ({ showCategories, defaultPlatformQuery, defaultPlaceholder, ...props }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { route } = router;
  const defaultValue = platformLookup[defaultPlatformQuery];
  const [selectVal, setSelectVal] = useState(defaultValue || selectOptions[0]);
  const inputPlaceholder = defaultPlaceholder || selectVal.placeholder;

  useEffect(() => {
    if (defaultPlatformQuery && route) {
      setSelectVal(platformLookup[defaultPlatformQuery]);
    }
  }, [defaultPlatformQuery, route]);

  const formSubmitHandler = ({ searchQuery }) =>
    router.push(`/search?title=${searchQuery}&platform=${selectVal.value}`);

  const selectGenreHandler = () =>
    setSelectVal((prevState) => (prevState === selectOptions[0] ? selectOptions[1] : selectOptions[0]));

  return (
    <StyledWrapper {...props}>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <UnstyledButton type="submit" title="Search now" aria-label="Search now">
          <BiSearchAlt />
        </UnstyledButton>
        <StyledInput
          {...register('searchQuery', { required: true, minLength: 3 })}
          placeholder={errors.searchQuery ? 'Field required' : inputPlaceholder}
          hasError={errors.searchQuery}
        />
        {showCategories && (
          <Select
            onChange={selectGenreHandler}
            styles={customStyles}
            value={selectVal}
            options={selectOptions}
            isSearchable={false}
            id="movie-finder-app-select"
            instanceId="movie-finder-app-select"
          />
        )}
      </form>
    </StyledWrapper>
  );
};

export default Search;
