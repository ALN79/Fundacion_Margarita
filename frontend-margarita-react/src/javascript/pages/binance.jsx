import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function Binance() {
  return (
    <>
      <Header />
      <div className="bg-custom-bg-2 bg-cover h-screen flex flex-col"></div>
      <Footer />
    </>
  );
}

export { Binance };

