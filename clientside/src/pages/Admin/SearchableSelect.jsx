import React, { useState } from 'react';
const SearchableSelect = ({ options ,setcategory,category}) => {
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
          <option selected key={option._id} value={option._id} onChange={(e)=>{console.log(e);setcategory(e.target.value)}}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchableSelect;




