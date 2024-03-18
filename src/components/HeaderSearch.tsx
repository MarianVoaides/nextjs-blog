'use client'
import React, { useState } from 'react';
import List_Items from './List';
import data_components from '@/app/data_components';

require('./HeaderSearch.css');

const HeaderSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(data_components);

  const handleSearch = () => {
    const filteredData = data_components.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filteredData);
  };

  return (
    <div>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <ul className="product-list">
          <List_Items itemsData={filteredItems}></List_Items>
        </ul>
      </div>
    </div>
  );
};

export default HeaderSearch;
