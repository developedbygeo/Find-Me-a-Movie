import { useState } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';

import useSWR from 'swr';
import { fetcher } from '@/utils/api-utils';

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

  // TODO redirect to search page with a list of results and then generate dynamic paths
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/getSearchResults', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: encodeURIComponent(searchTerm),
        platform: selectVal.value,
      }),
    });
    if (!res.ok) return;
    const data = await res.json();
    console.log(data);
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
          />
        )}
      </form>
    </StyledWrapper>
  );
};

export default Search;
