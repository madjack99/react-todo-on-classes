import React from 'react';

const SearchPanel = () => {
  const searchStyle = {
    fontSize: '25px',
  };

  return <input style={searchStyle} type="text" placeholder="search" />;
};

export default SearchPanel;
