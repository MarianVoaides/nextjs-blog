'use client'
import React, { useState } from 'react';
import data_components, { add } from '../data_components';
import './add_component.css';

interface Component {
  name: string;
  description: string;
  imageUrl: string;
}

const AddComponentForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newComponent: Component = { name, description, imageUrl };
    add(newComponent);
    console.log('Component added:', newComponent);
    console.log('Updated data_components:', data_components);
    setName('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-component-form">
      <h2>Add Component</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} required></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl">Image URL:</label>
        <input type="text" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddComponentForm;

