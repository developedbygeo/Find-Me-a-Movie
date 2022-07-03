import { StyledSelect } from './CustomSelect.styled';

const CustomSelect = ({ options, selectId, ...props }) => {
  return (
    <StyledSelect>
      <select {...props}>
        {options.map((op, idx) => (
          <option key={`${op.label}-${idx}`} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </StyledSelect>
  );
};

export default CustomSelect;
