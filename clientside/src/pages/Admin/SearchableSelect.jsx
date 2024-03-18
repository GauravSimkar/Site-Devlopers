import React, { useState } from 'react';
const SearchableSelect = ({ options ,setcategory}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const filteredOptions = options.filter(option =>
    option.name.includes(searchTerm.toLowerCase())
  );

  return (
    <div className='search-category'>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <select value={selectedOption} onChange={handleSelectChange}>
        {filteredOptions.map((option) => (
          <option  key={option._id} value={option._id} onChange={()=>{setit(option_id);setcategory(option.name)}}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchableSelect;




