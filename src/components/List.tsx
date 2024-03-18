import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';

interface ListItemsProps {
  itemsData: { name: string; description: string; imageUrl: string }[];
}

const ListItems: React.FC<ListItemsProps> = ({ itemsData }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [displayedItems, setDisplayedItems] = useState<
    { name: string; description: string; imageUrl: string }[]
  >([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = itemsData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTotalPages(Math.ceil(filteredData.length / itemsPerPage));
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    setDisplayedItems(filteredData.slice(startIdx, endIdx));
  }, [currentPage, itemsData, searchTerm]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when search term changes
  };

  return (
    <section className="featured-products">
      <div className="search-container">
        <input
          value={searchTerm}
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <ul className="product-list">
        {displayedItems.map((component, index) => (
          <Link key={index} href={`/products/${encodeURIComponent(component.name)}`}>
            <li className="product-item">
              <div className="product-image">
                <NextImage alt={component.name} width={200} height={200} src={component.imageUrl} />
              </div>
              <div className="product-info">
                <div className="product-name">{component.name}</div>
                <div className="product-description">{component.description}</div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ListItems;
