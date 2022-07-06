import { useState } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';

import { StyledWrapper } from './Search.styled';
import { UnstyledButton } from '../Buttons.styled';
import { BiSearchAlt } from 'react-icons/bi';
import { customStyles } from './Select.styled';

const selectOptions = [
  { label: 'Movie', value: 'movie', slug: 'movies' },
  { label: 'TV Show', value: 'tv', slug: 'tv-series' },
];

const Search = ({ showCategories }) => {
  const [selectVal, setSelectVal] = useState(selectOptions[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    router.push(`/search?search=${searchTerm}&platform=${selectVal.value}`);
  };

  const selectGenreHandler = () =>
    setSelectVal((prevState) => (prevState === selectOptions[0] ? selectOptions[1] : selectOptions[0]));

  const searchTermHandler = (e) => setSearchTerm(e.target.value);

  return (
    <StyledWrapper>
      <form onSubmit={formSubmitHandler}>
        <UnstyledButton type="submit" title="Search now" aria-label="Search now">
          <BiSearchAlt />
        </UnstyledButton>
        <input
          value={searchTerm}
          onChange={searchTermHandler}
          type="text"
          placeholder="Search for movies or TV series"
          aria-label="Search for movies or TV series"
          name="searchQuery"
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
