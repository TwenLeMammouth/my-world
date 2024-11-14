"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Link from 'next/link';

function App() {
  return (
    <div>
      <Link href={"/mammoth-show"} >Mammoth</Link>
      <Link href={"/portal-island"} >Portal</Link>
      <Link href={"/kart-race"} >Karting</Link>
      <Link href={"/hexa-map"} >HexaMap</Link>
    </div>
  )
}

export default App;