import React from "react";
import { SelectInputProps } from "../interfaces";

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  options,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="select-container">
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
