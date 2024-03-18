import React from 'react';
import NextImage from 'next/image';
import { find_item } from '@/app/data_components';
import './itemPreview.css'; // Assuming you have a CSS file for item preview styling

const Page = ({ params }: { params: { name: string } }) => {
  const decodedName = params.name ? decodeURIComponent(params.name.replace(/\+/g, ' ')) : '';
  const item = find_item(decodedName);

  if (item) {
    return (
      <div className="item-container">
        <div className="item-details">
          <h2 className="item-name">{item.name}</h2>
          <p className="item-description">{item.description}</p>
        </div>
        <div className="item-image">
          <NextImage alt={item.name} width={400} height={400} src={item.imageUrl} />
        </div>
      </div>
    );
  } else {
    return <div className="not-found">Item not found</div>;
  }
};

export default Page;
