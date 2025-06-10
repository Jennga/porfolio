"use client";
import Menu from './Menu';
import Logros from './Logros';
import Analisis from './Analisis';
import Hacking from './Hacking';
import Normativa from './Normativa';
import React, { useState, useEffect } from 'react';
export default function CyberPage() {
    return (
        <main>            
            <Menu/>
            <Logros/>
            <Analisis/>
            <Hacking/>
            <Normativa/>
        </main>
    );
    }