import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.
  useState('');

  return (
    <input 
      className="TodoSearch" 
      placeholder="Cortar Cebolla"
      value={searchValue}
      onChange={(event) =>
        setSearchValue(event.target.value)
      }
      />
  );
}

export { TodoSearch };
