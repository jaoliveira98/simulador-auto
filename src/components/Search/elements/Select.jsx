import React from "react";

const Select = ({ value, onChange, disabled, placeholder, map }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="w-44 border py-2 px-4 text-gray-900 rounded-md shadow"
    >
      <option>{placeholder}</option>
      {map.map((a) => (
        <option key={a} value={a}>
          {a}
        </option>
      ))}
    </select>
  );
};

export default Select;
