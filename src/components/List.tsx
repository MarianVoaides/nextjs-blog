'use client'
import data_components from '@/app/data_components';
import Link from 'next/link';
import NextImage from 'next/image';
import React, { useEffect, useState } from 'react'

interface List_Items_Props {
    itemsData: {name: string, description: string, imageUrl: string}[];
}

const List_Items: React.FC<List_Items_Props> = ({ itemsData }) => {
    const [components, setComponents] = useState(data_components);
    const [forceUpdate, setForceUpdate] = useState(false);

    useEffect(() => {
        // Trigger a re-render when data_components changes
        setComponents(data_components);
        // Reset the forceUpdate flag
        setForceUpdate(false);
      }, [forceUpdate]);
  return (
    <section className="featured-products">
    <ul className="product-list">
      {itemsData.map((component) => (
        <Link key={component.name} href={`/products/${encodeURIComponent(component.name)}`}>
          <li className="product-item" key={component.name}>
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
  </section>
  )
}

export default List_Items