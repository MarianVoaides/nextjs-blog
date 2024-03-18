'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import data_components from './data_components';
import List from 'postcss/lib/list';
import List_Items from '@/src/components/List';
import HeaderSearch from '@/src/components/HeaderSearch';

require('./page.css');

export default function Home() {

  

  return (
    <main>
      <section className="hero">
        <h2>Welcome to our PC Components Store</h2>
        <p>Find the best deals on CPUs, GPUs, motherboards, RAM, and more!</p>
      </section>
      <HeaderSearch></HeaderSearch>
    </main>
  );
}
