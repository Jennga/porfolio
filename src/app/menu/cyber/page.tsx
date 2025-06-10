"use client";
import Menu from './Menu';
import Logros from './Logros';
import Analisis from './Analisis';
import Hacking from './Hacking';
import Normativa from './Normativa';
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