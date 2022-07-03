import { useState } from 'react';

import Select from 'react-select';

import CustomSelect from './CustomSelect';
import { StyledWrapper } from './Search.styled';
import { UnstyledButton } from '../Buttons.styled';
import { BiSearchAlt } from 'react-icons/bi';

const customStyling = {
  options: (provided, state) => ({
    ...provided,
  }),
};

const selectOptions = [
  { label: 'Movie', value: 'movie' },
  { label: 'TV Show', value: 'tv' },
];

const Search = ({ showCategories }) => {
  const [selectVal, setSelectVal] = useState(selectOptions[0]);
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <StyledWrapper>
      <UnstyledButton type="submit" title="Search now" aria-label="Search now">
        <BiSearchAlt />
      </UnstyledButton>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Search for movies or TV series"
          aria-label="Search for movies or TV series"
          name="searchQuery"
        />
        {/* {showCategories && <CustomSelect options={selectOptions} name="searchType" />} */}
        {showCategories && <Select value={selectVal} options={selectOptions} isSearchable={false} />}
      </form>
    </StyledWrapper>
  );
};

export default Search;
